import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Description from "./Description";

function App() {
  const [currentScore, getCurentScore] = useState(0);
  const [bestScore, getBestScore] = useState(0);

  return (
    <>
      <Header curentScore={currentScore} bestScore={bestScore} />
      <Description />
    </>
  );
}

export default App;
