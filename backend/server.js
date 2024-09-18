import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import appointmentRouter from "./routes/appointmentRouter.js";
import messageRouter from "./routes/messageRouter.js";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import { sendMessage, getAllMessages }from "./controllers/messageController.js";
// Konfiguration der Umgebungsvariablen
config({ path: "./config/config.env" });

const app = express();

app.use(
    cors({
        origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

app.use("/message", messageRouter);
app.use("/appointment", appointmentRouter);

dbConnection();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(errorMiddleware);
export default app;
