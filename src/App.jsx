import { useEffect, useState } from "react"
import Card, { cards } from "./components/Card"
import Score from "./components/Score"
import Dialog from "./components/Dialog"

function App() {
  const [selected, setSelected] = useState([])
  const [randomCards, setRandomCards] = useState(cards)
  const [actualScore, setActualScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [status, setStatus] = useState("play");

  useEffect(() => {
    if (actualScore === cards.length) {
      setBestScore(actualScore);
      setStatus("win");
    }

    randomize();
  }, [actualScore]);

  const handleClick = (event) => {
    setSelected(selected.concat(event.target.value));
    updateScore(event.target.value);
  }

  function randomize() {
    const cardsCopy = [...cards]
    for (let i = cardsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = cardsCopy[i];
      cardsCopy[i] = cardsCopy[j];
      cardsCopy[j] = temp;
    }
    setRandomCards(cardsCopy);
  }

  function updateScore(card) {
    const index = selected.indexOf(card);
    if (index > -1) {
      setStatus("lose");
      if (actualScore > bestScore) {
        setBestScore(actualScore);
      }
    } else {
      setActualScore(actualScore + 1);
    }
  }

  function startNewGame() {
    setActualScore(0);
    setSelected([]);
    setStatus("play");
  }

  return (
    <>
      <h1>Memory Card Game</h1>
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      <Score actualScore={actualScore} bestScore={bestScore} />
      {randomCards.map(card => <Card key={card.id} value={card.name} className={card.className} onClick={handleClick} name={card.name} />)}
      <Dialog status={status} startNewGame={startNewGame} />
    </>
  );
}

export default App;