import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Description from "./Description";
import ImageSection from "./ImageSection";

function App() {
  const [currentScore, setCurentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [shuffledItems, setShuffledItems] = useState([]);
  const [clickedItems, setClickedItems] = useState([]);

  useEffect(() => {
    setShuffledItems(shuffleArray(characterNames));
  }, []);

  useEffect(() => {
    if (bestScore === 18) {
      setBestScore(0);
      setCurentScore(0);
      setClickedItems([]);
      alert(
        "Congratulations! You have reached the Maximum Points, you can now play again"
      );
    }
  }, [bestScore]);

  const handleShuffleClick = () => {
    setShuffledItems(shuffleArray(characterNames));
  };

  function increaseCurrentScore() {
    setCurentScore(currentScore + 1);
  }

  function clickCardFn(event) {
    handleShuffleClick();
    if (clickedItems.includes(event.currentTarget.id)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurentScore(0);
      setClickedItems([]);
      return;
    }
    setClickedItems([...clickedItems, event.currentTarget.id]);
    increaseCurrentScore();
  }

  return (
    <>
      <Header curentScore={currentScore} bestScore={bestScore} />
      <Description />
      <ImageSection shuffledItems={shuffledItems} onClick={clickCardFn} />
    </>
  );
}

function shuffleArray(array) {
  const shuffled = [...array];
  let currentIndex = shuffled.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
  }

  return shuffled;
}

const characterNames = [
  "Dragon ball",
  "Spy x Family",
  "Bleach",
  "One Piece",
  "Hunter x Hunter",
  "Demon Slayer",
  "One Punch man",
  "Hajime no Ippo",
  "Yu Yu Hakusho",
  "Jujutsu Kaisen",
  "Fullmetal Alchemist",
  "My Hero Academia",
  "Pokemon",
  "Inazuma",
  "Fire Force",
  "Tokyo Revengers",
  "Black Clover",
  "Mashle",
];

export default App;
