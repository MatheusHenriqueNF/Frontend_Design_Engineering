'use client';

import { useEffect, useState } from "react";

const ListaUsuario = () => {
    const [users, setUsers] = useState<string[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("http://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data.map((user: { name: string }) => user.name));
        };
        fetchUsers();
    }, []);

    return (
        <>
            <h1>Lista de Usuários</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </>
    );
};

export default ListaUsuario;