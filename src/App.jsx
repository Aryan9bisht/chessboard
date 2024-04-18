import React, { useState, useEffect } from "react";
import "./App.css";
import Chess from "./Chess";

const initializeSquares = () => {
  const newSquares = [];
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        row.push("white");
      } else {
        row.push("black");
      }
    }
    newSquares.push(row);
  }
  return newSquares
};
// const fetchData = async() => {
//      try {
//       const res = await fetch('https://restcountries.com/v3.1/all')
//       const data = await res.json();
//       return data;
//      } catch (error) {
//       console.log('error',error);
//      }


//   // return fetch('https://restcountries.com/v3.1/all')
//   //   .then(response => response.json())
//   //   .catch(error => {
//   //     console.error('Error fetching data:', error);
//   //   });
// };

function App() {
  const [squares, setSquares] = useState(initializeSquares);

  const handleReset = () => {
    setSquares(initializeSquares())
  };
  // console.log(api);

  const handleClick = async (rowIndex, colIndex) => {
    const newSquares = initializeSquares();
 

    newSquares[rowIndex][colIndex] = "red";
    for (let i = rowIndex - 1, j = colIndex - 1; i >= 0 && j >= 0; i--, j--) {
      newSquares[i][j] = "red";
    }
    for (let i = rowIndex - 1, j = colIndex + 1; i >= 0 && j < 8; i--, j++) {
      newSquares[i][j] = "red";
    }
    for (let i = rowIndex + 1, j = colIndex - 1; i < 8 && j >= 0; i++, j--) {
      newSquares[i][j] = "red";
    }
    for (let i = rowIndex + 1, j = colIndex + 1; i < 8 && j < 8; i++, j++) {
      newSquares[i][j] = "red";
    }

    setSquares(newSquares);
  };

  return (
    <div>
      <div
        className="board"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          height: "80vh",
          width: "80vw",
          border: "10px solid black",
        }}
      >
        {squares &&
          squares.map((row, rowIndex) =>
            row.map((color, colIndex) => (
              <Chess
                key={`${rowIndex}-${colIndex}`}
                index={`${rowIndex}-${colIndex}`}
                option={color}
                handleClick={() => handleClick(rowIndex, colIndex)}
                handleReset={handleReset}
              />
            ))
          )}
      </div>
    </div>
  );
}

export default App;
