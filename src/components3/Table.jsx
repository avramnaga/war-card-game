import React from 'react';
import './style.css';

export default function Table(props) {
  return (
    <div className='table'>
      <h1>Player Table</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Games</th>
        </tr>
        {props.playerArr.map((val) => (
          <tr>
            <td>{val.name}</td>
            <td>{val.wins}</td>
            <td>{val.lose}</td>
            <td>{val.game}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
