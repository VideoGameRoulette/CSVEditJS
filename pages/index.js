import React, { useEffect, useState } from "react";
import UserControlInterface from "components/UserControlInterface.js";
import TileMap from "components/TileMap.js";

const CSVDisplay = () => {
  const [data, setData] = useState([]);
  const [selectedSquare, setSelectedSquare] = useState(null);

  useEffect(() => {
    console.log("Map:", data);
  }, [data]);

  const handleSquareClick = (x, y, value) => {
    setSelectedSquare({ x, y, value });
  };

  const setSquareValue = (x, y, newValue) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[y][x] = newValue;
      return newData;
    });
  };

  return (
    <div className="absolute w-full h-full grid grid-cols-[300px_1fr]">
      <UserControlInterface
        data={data}
        setData={setData}
        selectedSquare={selectedSquare}
        setSquareValue={setSquareValue}
      />
      <TileMap data={data} selectedSquare={selectedSquare} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default CSVDisplay;
