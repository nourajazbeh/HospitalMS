import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "MHS",
        useNewUrlParser: true,  
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.error("Error occurred while connecting to database:", error.message);
    });
};
