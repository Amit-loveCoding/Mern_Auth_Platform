import React, { useEffect, useState } from "react";
import { fetchUsers, addUser, deleteUser } from "../services/api";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const { data } = await fetchUsers();
            setUsers(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleAddUser = async (userData) => {
        try {
            await addUser(userData);
            setShowForm(false);
            loadUsers();
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await deleteUser(userId);
            loadUsers();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <button onClick={() => setShowForm(true)}>Add User</button>
            {showForm && <UserForm onSubmit={handleAddUser} />}
            <UserList users={users} onDelete={handleDeleteUser} />
        </div>
    );
};

export default AdminPanel;
