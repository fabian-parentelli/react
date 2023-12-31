import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "../components/LoginScreen/LoginScreen.js";

const PublicRouters = () => {

    return (
        <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="*" element={<Navigate to='/login' />} />
        </Routes>
    );
};

export default PublicRouters;