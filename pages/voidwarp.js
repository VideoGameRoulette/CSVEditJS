import React, { useEffect, useState } from "react";
import TileMap from "components/TileMap.js";
import VoidWarp from "components/VoidWarp";

const Compare = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [selectedSquare, setSelectedSquare] = useState(null);

  const handleSquareClick = (x, y, value) => {
    setSelectedSquare({ x, y, value });
  };

  return (
    <div className="absolute w-full h-full grid grid-rows-[4rem_1fr] bg-gray-900">
      <div className="row-span-1 flex">
        <VoidWarp cb={setData} cb2={setData2} />
      </div>
      <div className="row-span-1 grid grid-cols-3">
        <div className="col-span-2 border-r-2">
          <TileMap data={data} selectedSquare={selectedSquare} handleSquareClick={handleSquareClick} />
        </div>
        <div className="col-span-1 border-l-2">
          <TileMap data={data2} selectedSquare={selectedSquare} handleSquareClick={handleSquareClick} />
        </div>
      </div>
    </div>
  );
};

export default Compare;
