import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Autentication from "../components/Autenticate";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { AuthProvider } from "../contexts/AuthProvider";
import { Rockets } from "../pages/Rockets";
import { RocketSelect } from "../pages/RocketSelect";
import { RocketsList } from "../pages/RocketsList";
export const AppRouter = () => {
  
  return (
    <AuthProvider>
        <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/rocketselect" element={<RocketSelect />} />
          <Route path="/rocketslist" element={<RocketsList />} />
          {/* <Route path="/autenticate" element={<Autenticate />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
      
   
  );
};
