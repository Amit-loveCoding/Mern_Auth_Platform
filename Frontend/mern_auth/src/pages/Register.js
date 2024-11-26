import React from "react";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";
import { register } from "../services/api";  

const Register = () => {
    const navigate = useNavigate(); 

    const handleRegister = async (formData) => {
        try {
            const response = await register(formData);  
            const data = response.data;
            if (data.token) {
                localStorage.setItem("token", data.token);
                navigate("/admin"); // Navigate to /admin after successful registration
            }
        } catch (err) {
            console.error("Registration failed:", err);
        }
    };

    return <UserForm onSubmit={handleRegister} />;
};

export default Register;

