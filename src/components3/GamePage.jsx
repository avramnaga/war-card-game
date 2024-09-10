import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Button } from 'react-bootstrap';   
import './style.css';

export default function GamePage(props) {
  const [index, setIndex] = useState(0);
  const [playerPoint, setPlayerPoint] = useState(0);
  const [computerPoint, setComputerPoint] = useState(0);

  useEffect(() => {     
    if (props.player.cardArr[index] > props.computer.cardArr[index]) {
      setPlayerPoint((prevPlayerPoint) => prevPlayerPoint + 1);
    } else if (props.player.cardArr[index] < props.computer.cardArr[index]) {
      setComputerPoint((prevComputerPoint) => prevComputerPoint + 1);
    }
    if (index === 25) {
      props.player.game++;
      if (playerPoint > computerPoint) {
        props.player.wins++;
        props.setLastGame('wins');
      } else if (playerPoint < computerPoint) {
        props.player.lose++;
        props.setLastGame('lose');
      } else {
        props.setLastGame('draw');
      }
      props.resetDecks();
      props.next(2);

      const updatedPlayerArr = [...props.playerArr];
      const playerIndex = updatedPlayerArr.findIndex(
        (player) => player.name == props.player.name
      );
      updatedPlayerArr[playerIndex] = { ...props.player };
      props.setPlayerArr(updatedPlayerArr);
    }
  }, [index]);

  const nextRound = () => {
    if (index < 25) {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <Button variant="danger" onClick={() => props.next(0)}>
        X
      </Button>
      <h1>computer: {computerPoint}</h1>
      <Card value={props.computer.cardArr[index]} />
      <Card value={props.player.cardArr[index]} />
      <h1>
        {props.player.name}: {playerPoint}
      </h1>
      <h1>Round: {index + 1}</h1>
      <button onClick={nextRound}>next</button>
    </div>
  );
}

























