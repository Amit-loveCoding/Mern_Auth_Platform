import React from "react";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const handleRegister = async (formData) => {
        const navigate = useNavigate();
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.token) {
                localStorage.setItem("token", data.token);
                navigate("/admin");
            }
        } catch (err) {
            console.error("Registration failed:", err);
        }
    };

    return <UserForm onSubmit={handleRegister} />;
};

export default Register;
