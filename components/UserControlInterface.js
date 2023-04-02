import React, { useEffect, useState } from "react";
import TileMapSize from "./TileMapSize";
import SelectedTile from "./SelectedTile";
import FileSys from "./FileSys";

const UserControlInterface = ({ data, selectedSquare, setData }) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setWidth(data.length > 0 ? data[0].length : 0);
        setHeight(data.length);
    }, [data]);

    return (
        <div className="h-full w-full bg-gray-200 dark:bg-gray-800 p-4">
            <div className="flex flex-col gap-2">
                <FileSys data={data} setData={setData} width={width} height={height} />
                <TileMapSize
                    width={width}
                    height={height}
                    setWidth={setWidth}
                    setHeight={setHeight}
                />
                <SelectedTile selectedSquare={selectedSquare} />
            </div>
        </div>
    );
};

export default UserControlInterface;
