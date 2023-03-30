import React, { useState } from "react";

function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [history1, setHistory1] = useState([]);
  const [history2, setHistory2] = useState([]);
  const [history3, setHistory3] = useState([]);

  const handlePlayer1Change = (e) => {
    setPlayer1(e.target.value);
  };

  const handlePlayer2Change = (e) => {
    setPlayer2(e.target.value);
  };

  const handlePlayer3Change = (e) => {
    setPlayer3(e.target.value);
  }

  const handlePlayer1ScoreChange = () => {
    if (input1 >= 0) {
      setScore1(score1 + parseInt(input1));
      setHistory1([...history1, parseInt(input1)]);
      setInput1(0);
    }
  };

  const handlePlayer2ScoreChange = () => {
    if (input2 >= 0) {
      setScore2(score2 + parseInt(input2));
      setHistory2([...history2, parseInt(input2)]);
      setInput2(0);
    }
  };

  const handlePlayer3ScoreChange = () => {
    if (input3 >= 0) {
      setScore3(score3 + parseInt(input3));
      setHistory3([...history3, parseInt(input3)]);
      setInput3(0);
    }
  };

  const handleInput1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2 = (e) => {
    setInput2(e.target.value);
  };

  const handleInput3 = (e) => {
    setInput3(e.target.value);
  };
  const handleUndo1 = () => {
    if (history1.length > 0) {
      const lastScore1 = history1[history1.length - 1];
      setScore1(score1 - lastScore1);
      setHistory1(history1.slice(0, -1));
    }
  };

  const handleUndo2 = () => {
    if (history2.length > 0) {
      const lastScore2 = history2[history2.length - 1];
      setScore2(score2 - lastScore2);
      setHistory2(history2.slice(0, -1));
    }
  };

  const handleUndo3 = () => {
    if (history3.length > 0) {
      const lastScore3 = history3[history3.length - 1];
      setScore3(score3 - lastScore3);
      setHistory3(history3.slice(0, -1));
    }
  };

  return (
    <div>
      <h1>Scoreboard</h1>
      <div>
        <p>
          {player1}: {score1}
        </p>
        <p>
          {player2}: {score2}
        </p>
        <p>
          {player3}: {score3}
        </p>
      </div>
      <div>
        <label>
          {player1}:
          <input type="text" value={player1} onChange={handlePlayer1Change} />
        </label>
        <label>
          Add Score:
          <input type="number" value={input1} onChange={handleInput1} />
          <button onClick={handlePlayer1ScoreChange}>+</button>
          <button onClick={handleUndo1}>Undo</button>
        </label>
        <ul>
          <h3>History</h3>
          {history1.map((score, index) => (
            <li key={index}>{score}</li>
          ))}
        </ul>
      </div>
      <div>
        <label>
          {
player2}:
<input type="text" value={player2} onChange={handlePlayer2Change} />
</label>
<label>
Add Score:
<input type="number" value={input2} onChange={handleInput2} />
<button onClick={handlePlayer2ScoreChange}>+</button>
<button onClick={handleUndo2}>Undo</button>
</label>
<ul>
<h3>History</h3>
{history2.map((score, index) => (
<li key={index}>{score}</li>
))}
</ul>
</div>
<div>
        <label>
          {player3}:
          <input type="text" value={player3} onChange={handlePlayer3Change} />
        </label>
        <label>
          Add Score:
          <input type="number" value={input3} onChange={handleInput3} />
          <button onClick={handlePlayer3ScoreChange}>+</button>
          <button onClick={handleUndo3}>Undo</button>
        </label>
        <ul>
          <h3>History</h3>
          {history3.map((score, index) => (
            <li key={index}>{score}</li>
          ))}
        </ul>
      </div>
</div>
);
}

export default App;