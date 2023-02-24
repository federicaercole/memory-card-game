import { useEffect, useState } from "react"
import Card, { cards } from "./components/Card"
import Score from "./components/Score"
import Dialog from "./components/Dialog"

function App() {
  const [selected, setSelected] = useState([])
  const [randomCards, setRandomCards] = useState(cards)
  const [actualScore, setActualScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [winning, setWinning] = useState(false);
  const [lose, setLose] = useState(false);

  useEffect(() => {
    if (actualScore === cards.length) {
      setBestScore(actualScore);
      setWinning(true);
    }

    const buttons = [...document.querySelectorAll("button")];
    buttons.forEach(button => button.addEventListener("click", handleClick));

    return () => {
      buttons.forEach(button => button.removeEventListener("click", handleClick));
      randomize();
    };
  }, [selected]);

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
      setLose(true);
      if (actualScore > bestScore) {
        setBestScore(actualScore);
      }
    } else {
      setActualScore(actualScore + 1);
    }
  }

  function resetConditions() {
    setActualScore(0);
    setSelected([]);
    setLose(false);
    setWinning(false);
  }

  return (
    <>
      <h1>Memory Card Game</h1>
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      <Score actualScore={actualScore} bestScore={bestScore} />
      {randomCards.map(card => <Card key={card.id} value={card.name} className={card.className} name={card.name} />)}
      <Dialog lose={lose} winning={winning} resetConditions={resetConditions} />
    </>
  );
}

export default App;