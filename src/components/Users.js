import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers([]);
        setLoading(true);

        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(res);
        setUsers(res.data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );
}

export default Users;
