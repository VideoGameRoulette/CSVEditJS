import React, { useEffect, useState } from "react";
import MapDetails from "./MapDetails";
import SelectedTile from "./SelectedTile";
import FileSys from "./FileSys";
import { RoomTypes } from "./RoomTypes";
import { DropdownMenu } from "./DropdownMenu";
import { classNames } from "utils";

const presets = [0, 126, 127, 128, 129, 130, 131];

const UserControlInterface = ({ data, selectedSquare, setData, setSquareValue }) => {
    const [currentMap, setMap] = useState({
        name: "",
        width: 0,
        height: 0,
    });

    const filteredRooms = RoomTypes.filter((obj) => presets.includes(obj.value));

    function getItemByValue(value) {
        const roomType = RoomTypes.find(room => room.value === value);
        return roomType.item ? roomType.item : "";
    }

    return (
        <div className="h-full w-full bg-gray-200 dark:bg-gray-800 p-4">
            <div className="flex flex-col gap-2">
                <FileSys d={data} cb={setData} fileName={currentMap.name} setMap={setMap} />
                <MapDetails
                    width={currentMap.width}
                    height={currentMap.height}
                    name={currentMap.name}
                />
                <SelectedTile selectedSquare={selectedSquare} />
                <DropdownMenu options={RoomTypes} selectedSquare={selectedSquare} onSelect={setSquareValue} />
                <button type="button" className="hidden" />
                <div className="w-full grid grid-cols-4 gap-2">
                    {filteredRooms.map(room => (
                        <button
                            key={room.name}
                            title={room.name}
                            type="button"
                            className={classNames(room.color, "w-full py-2 text-gray-200 font-bold rounded-md hover:opacity-80 flex justify-center items-center")}
                            onClick={() => setSquareValue(selectedSquare.x, selectedSquare.y, room.value)}
                        >
                            <div className={getItemByValue(room.value)}>{room.item ? "" : room.value}</div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserControlInterface;
