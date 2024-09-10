import React, { useState } from 'react';
import './App.css';
import GamePage from './components3/GamePage';
import HomePage from './components3/HomePage';
import ScorePage from './components3/ScorePage';
import Table from './components3/Table';
import './components3/style.css'
function App() {
  const [playerArr, setPlayerArr] = useState([  
    { name: 'shimon', game: 0, wins: 0, lose:0,cardArr: [] },
    { name: 'ron', game: 0, wins: 0,lose:0, cardArr: [] },
    { name: 'Zebulon', game: 0, wins: 0,lose:0, cardArr: [] },
    { name: 'Rachel', game: 0, wins: 0,lose:0, cardArr: [] },
    { name: 'Simcha', game: 0, wins: 0,lose:0, cardArr: [] },
    { name: 'will', game: 0, wins: 0,lose:0, cardArr: [] },
    { name: 'Revital', game: 0, wins: 0,lose:0, cardArr: [] },
    { name: 'avram the king', game: 0, wins: 0,lose:0, cardArr: [] },
  ]);

  const [page, setPage] = useState(0); 
  const [lastGame, setLastGame] = useState('');
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);

  const addNewPlayer = (name, game,lose, wins, cardArr) => {   
    const newPlayer = {
      name,
      game,
      wins,
      cardArr,
      lose
    };
    setPlayerArr([...playerArr, newPlayer]);
  };

  const initGame = (userName) => {   
    const cardDeck = new CardDeck();
    const playerDeck = [];
    const computerDeck = [];
  
    for (let i = 0; i < 26; i++) {
      playerDeck.push(cardDeck.dealCard());
      computerDeck.push(cardDeck.dealCard());
    }
  
    let existingPlayer = playerArr.find((player) => player.name === userName);
    if (!existingPlayer) {
      existingPlayer = new Player(userName, playerDeck);
      setPlayerArr([...playerArr, existingPlayer]);
    } else {
      existingPlayer.cardArr = playerDeck;
    }
  
    setPlayer(existingPlayer);
    setComputer(new Player('computer', computerDeck));
  
    setPage(1);
  };
  
  const resetDecks = () => { 
    const cardDeck = new CardDeck();
    const playerDeck = [];
    const computerDeck = [];

    for (let i = 0; i < 26; i++) {
      playerDeck.push(cardDeck.dealCard());
      computerDeck.push(cardDeck.dealCard());
    }

    setPlayer((prevPlayer) => ({ ...prevPlayer, cardArr: playerDeck }));
    setComputer((prevComputer) => ({ ...prevComputer, cardArr: computerDeck }));
  };


  const sortedPlayerArr = [...playerArr].sort((a, b) => b.wins - a.wins);

  const showPage = () => {   
    if (page == 0) {
      return (
        <HomePage
          next={initGame}
          addNewPlayer={addNewPlayer}
          playerArr={sortedPlayerArr}
        />
      );
    } else if (page == 1) {
      return (
        <GamePage
          player={player}
          computer={computer}
          next={setPage}
          setLastGame={setLastGame}
          resetDecks={resetDecks}
          playerArr={sortedPlayerArr}
          setPlayerArr={setPlayerArr}
        />
      );
    } else {
      return (
        <>
          <ScorePage
            player={player}
            lastGame={lastGame}
            next={setPage}
            resetDecks={resetDecks}
          />
          <Table playerArr={sortedPlayerArr} />
        </>
      );
    }
  };

  return <div className="App">{showPage()}</div>;
}

export default App;

class Player {
  game = 0;
  wins = 0;
  lose = 0;
  
constructor(name, cardArr) {
this.name=name;
this.cardArr=cardArr;
}

}

class CardDeck {
cards=[];
constructor(){
this.initCard();
}

initCard(){
for(let i=1;i<14;i++){
for(let j=0;j<4;j++){
this.cards.push(i)
}
}
}

dealCard(){      
const rand=Math.floor(Math.random()*this.cards.length)
const card=this.cards.splice(rand ,1)
return card[0]
}

}
















