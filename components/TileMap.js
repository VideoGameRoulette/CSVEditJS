import React from "react";
import { RoomTypes } from "./RoomTypes";
import { classNames } from "utils";

const TileMap = (props) => {
    const { data, handleSquareClick, selectedSquare } = props;

    function getColorByValue(value) {
        const roomType = RoomTypes.find(room => room.value === value);
        return roomType ? roomType.color : "";
    }

    function getItemByValue(value) {
        const roomType = RoomTypes.find(room => room.value === value);
        return roomType.item ? roomType.item : "";
    }

    function getItemNameByValue(value) {
        const roomType = RoomTypes.find(room => room.value === value);
        return roomType.name ? roomType.name : "";
    }

    const isWorld = data.length > 57;

    return (
        <div className="bg-gray-900 flex-1 p-4">
            <div className="grid grid-cols-16 gap-1">
                {data.map((row, y) => (
                    <div key={y} className="flex gap-1">
                        {row.map((cell, x) => (
                            <div
                                key={`${x},${y}`}
                                title={getItemNameByValue(cell)}
                                className={classNames(getColorByValue(cell), selectedSquare && selectedSquare.x === x && selectedSquare.y === y ? "border-2 border-sky-300" : "", isWorld ? "w-3 h-3" : "w-6 h-6", "cursor-pointer")}
                                onClick={() => handleSquareClick(x, y, cell)}
                            >
                                <div className={getItemByValue(cell)}></div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TileMap;
