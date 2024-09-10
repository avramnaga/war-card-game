import React from 'react';
import './style.css';

export default function ScorePage(props) {
  const showResult = () => {
    if (props.lastGame === 'wins') {
      return <h1 style={{ color: 'green' }}>win</h1>;
    } else if (props.lastGame === 'lose') {
      return <h1 style={{ color: 'red' }}>lose</h1>;
    } else {
      return <h1 style={{ color: 'pink' }}>draw</h1>;
    }
  };

  return (
    <div>
      {showResult()}
      <h1 style={{ color: 'red' }}>{props.player.wins} - {props.player.lose}</h1>
      <button onClick={() => { props.next(1) }}>Play again?</button>    
      <button onClick={() => { props.resetDecks(); props.next(0) }}>Back to home page</button>
    </div>
  );
}

















