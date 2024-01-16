import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "../components/LoginScreen/LoginScreen.js";
import RegisterScreen from "../components/Register/RegisterScreen.js";

const PublicRouters = () => {

    return (
        <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />}/>
            <Route path="*" element={<Navigate to='/login' />} />
        </Routes>
    );
};

export default PublicRouters;