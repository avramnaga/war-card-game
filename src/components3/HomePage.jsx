import './style.css';

import React, { useState } from 'react';
import Table from './Table';

export default function HomePage(props) {
  const [name, setName] = useState('');
  const [flag, setFlag] = useState(false);


  const validName = () => {
    if (name.length == 0) {
      alert('Enter your full name.');
    } else {
      props.next(name);    
      
    }
  };

  const showTable = () => {
    if (flag) {
      return <Table playerArr={props.playerArr} />;
    } else {
      return null;
    }
  };

  return (
    <div>
      <h1>Ready for war</h1>
      <input onChange={(e) => setName(e.target.value)} type='text' />
      <button onClick={validName}>start</button><br />
      <button onClick={() => setFlag(!flag)}>Players table</button>
      {showTable()}
    </div>
  );
}
















