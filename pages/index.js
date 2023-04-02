import React, { useState } from "react";
import UserControlInterface from "components/UserControlInterface.js";
import TileMap from "components/TileMap.js";

const CSVDisplay = () => {
  const [data, setData] = useState([]);
  const [selectedSquare, setSelectedSquare] = useState(null);

  const handleSquareClick = (x, y, value) => {
    setSelectedSquare({ x, y, value });
  };

  return (
    <div className="absolute w-full h-full grid grid-cols-[300px_1fr]">
      <UserControlInterface
        data={data}
        setData={setData}
        selectedSquare={selectedSquare}
      />
      <TileMap data={data} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default CSVDisplay;
