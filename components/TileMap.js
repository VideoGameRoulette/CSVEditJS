import React from "react";

const TileMap = (props) => {
    const { data, handleSquareClick } = props;

    return (
        <div className="bg-gray-900 flex-1 p-4">
            <div className="grid grid-cols-16 gap-1">
                {data.map((row, y) => (
                    <div key={y} className="flex gap-1">
                        {row.map((cell, x) => (
                            <div
                                key={`${x},${y}`}
                                className={`w-6 h-6 ${cell === 1 ? "bg-rose-500" : "bg-black"
                                    } cursor-pointer`}
                                onClick={() => handleSquareClick(x, y, cell)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TileMap;
