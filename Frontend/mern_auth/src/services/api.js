import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const login = (credentials) => API.post("/auth/login", credentials);
export const fetchUsers = () => API.get("/admin/users");
export const addUser = (userData) => API.post("/admin/add-user", userData);
export const deleteUser = (userId) => API.delete(`/admin/delete-user/${userId}`);
