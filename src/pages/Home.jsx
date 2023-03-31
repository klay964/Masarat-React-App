import React, { useState } from 'react';

function Home() {
  const [name, setName] = useState(localStorage.getItem('name'));
  const [age, setAge] = useState(localStorage.getItem('age'));

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);

    console.log(name);
    console.log(age);
  };
  return (
    <main style={{ backgroundColor: 'yellow' }}>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <div>name:{name}</div>
        <div>age:{age}</div>

        <input type='text' name='name' onChange={handleName} />
        <input type='number' name='age' onChange={handleAge} />
        <button type='submit'>Submit</button>
      </form>
      <button>Click me</button>
    </main>
  );
}

export default Home;
