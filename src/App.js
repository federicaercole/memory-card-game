import { useEffect, useState } from "react"

function App() {
  const cards = [{ name: "red", nameClass: "red", id: 1 },
  { name: "Blue", nameClass: "blue", id: 2 },
  { name: "Yellow", nameClass: "yellow", id: 3 },
  { name: "Black", nameClass: "black", id: 4 },
  { name: "Green", nameClass: "green", id: 5 },
  { name: "Purple", nameClass: "purple", id: 6 },
  { name: "Orange", nameClass: "orange", id: 7 },
  { name: "Light Blue", nameClass: "light-blue", id: 8 }]

  const [selected, setSelected] = useState([])
  const [randomCards, setRandomCards] = useState(cards)

  useEffect(() => {
    const buttons = [...document.querySelectorAll("button")];
    buttons.forEach(button => button.addEventListener("click", handleClick));

    return () => {
      buttons.forEach(button => button.removeEventListener("click", handleClick));
      randomize();
    };
  }, [selected]);

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

  const handleClick = (event) => {
    setSelected(selected.concat(event.target.value));
    checkWinning(event.target.value);
  }

  function checkWinning(card) {
    const index = selected.indexOf(card);
    if (index > -1) {
      console.log("oopsie!")
    }
  }

  return (
    <>
      <h1>Memory Card Game</h1>
      {randomCards.map(card => <button key={card.id} value={card.name}><div className={card.nameClass}></div><span>{card.name}</span></button>)}
    </>
  );
}
export default App;
