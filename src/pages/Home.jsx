import React from 'react';

function Home() {
  const users = [
    {
      name: 'ahmed',
      age: 20,
    },
    {
      name: 'mohammed',
      age: 30,
    },
    {
      name: 'fatima',
      age: 22,
    },
    {
      name: 'sara',
      age: 50,
    },
  ];
  return (
    <main style={{ backgroundColor: 'yellow' }}>
      <h1>Home Page</h1>
      <h2>Users</h2>
      <div>
        {users.map((user) => (
          <>
            <p>{user.name}</p>

            <p>{user.age}</p>
          </>
        ))}
      </div>
    </main>
  );
}

export default Home;
