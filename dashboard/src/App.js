import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login.jsx";
import AddDoctor from './components/AddDoctor.jsx';
import Messages from "./components/Messages";
import Doctors from "./components/Doctors";
import Patients from "./components/Patients"; // Richtig importiert
import Receptionists from "./components/Receptionists";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import AddNewAdmin from "./components/AddNewAdmin";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor/addnew" element={<AddDoctor />} />
        <Route path="/admin/addnew" element={<AddNewAdmin />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/patients" element={<Patients />} /> {/* Verwende Patients.jsx */}
        <Route path="/receptionists" element={<Receptionists />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
