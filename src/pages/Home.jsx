import React, { useState } from 'react';
import Date from '../components/Date';

function Home() {
  const [title, setTitle] = useState('Melad');

  return (
    <main style={{ backgroundColor: 'yellow' }}>
      <h1>Home</h1>
      <Date person={title} name='Mohammed' age={20} changeState={setTitle} />
      <div></div>
    </main>
  );
}

export default Home;
