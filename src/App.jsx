import React, { useState } from 'react'
import "./style.css"

const App = () => {
const [marks, setMarks] = useState([10, 20, 30, 40, 50]);

  const handleIncrement = (index) => {
    const updatedMarks = [...marks];
    updatedMarks[index] += 1;
    setMarks(updatedMarks);
  };

  const handleDecrement = (index) => {
    const updatedMarks = [...marks];
    updatedMarks[index] -= 1;
    setMarks(updatedMarks);
  };

  return (
    <div className="container">
      <h1>Student Marks</h1>
      {marks.map((mark, index) => (
        <div className="innerContainer" key={index}>
          <button onClick={() => handleIncrement(index)}>+</button>
          <span className="dynText">{mark}</span>
          <button disabled={mark === 0} onClick={() => handleDecrement(index)}>-</button>
        </div>
      ))}
    </div>
  );
}

export default App


