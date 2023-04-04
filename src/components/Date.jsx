import React from 'react';

function Date({ person, name, changeState, age }) {
  const handleChange = () => {
    changeState('Ali');
  };
  return (
    <>
      <h1>this is date component</h1>
      <div>{person}</div>
      <div>{name}</div>
      <div>{age}</div>

      <button onClick={handleChange}>click</button>
    </>
  );
}

export default Date;
