import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  };

  console.log(users);

  return (
    <main style={{ backgroundColor: 'white' }}>
      <h1>Home</h1>
      <div>users</div>
      {users &&
        users.map((user, i) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <button onClick={() => deleteUser(user.id)}>delete</button>
          </div>
        ))}
    </main>
  );
}

export default Home;
