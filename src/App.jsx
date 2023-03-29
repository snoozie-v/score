import React, { useState } from "react";

function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [history1, setHistory1] = useState([]);
  const [history2, setHistory2] = useState([]);

  const handlePlayer1Change = (e) => {
    setPlayer1(e.target.value);
  };

  const handlePlayer2Change = (e) => {
    setPlayer2(e.target.value);
  };

  const handlePlayer1ScoreChange = () => {
    if (input1 > 0) {
      setScore1(score1 + parseInt(input1));
      setHistory1([...history1, parseInt(input1)]);
      setInput1(0);
    }
  };

  const handlePlayer2ScoreChange = () => {
    if (input2 > 0) {
      setScore2(score2 + parseInt(input2));
      setHistory2([...history2, parseInt(input2)]);
      setInput2(0);
    }
  };

  const handleInput1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2 = (e) => {
    setInput2(e.target.value);
  };

  const handleUndo = () => {
    if (history1.length > 0 && history2.length > 0) {
      const lastScore1 = history1[history1.length - 1];
      const lastScore2 = history2[history2.length - 1];
      setScore1(score1 - lastScore1);
      setScore2(score2 - lastScore2);
      setHistory1(history1.slice(0, -1));
      setHistory2(history2.slice(0, -1));
    }
  };

  return (
    <div>
      <h1>Scoreboard</h1>
      <div>
        <label>
          Player 1:
          <input type="text" value={player1} onChange={handlePlayer1Change} />
        </label>
        <label>
          Score:
          <input type="number" value={input1} onChange={handleInput1} />
          <button onClick={handlePlayer1ScoreChange}>+</button>
        </label>
        <ul>
          {history1.map((score, index) => (
            <li key={index}>{score}</li>
          ))}
        </ul>
      </div>
      <div>
        <label>
          Player 2:
          <input type="text" value={player2} onChange={handlePlayer2Change} />
        </label>
        <label>
          Score:
          <input type="number" value={input2} onChange={handleInput2} />
          <button onClick={handlePlayer2ScoreChange}>+</button>
        </label>
        <ul>
          {history2.map((score, index) => (
            <li key={index}>{score}</li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={handleUndo}>Undo</button>
      </div>
      <div>
        <p>
          {player1}: {score1}
        </p>
        <p>
          {player2}: {score2}
        </p>
      </div>
    </div>
  );}

  export default App