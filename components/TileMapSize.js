import React from "react";

const TileMapSize = ({ width, height }) => {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-gray-700 p-4 text-white rounded-md">
                <h1 className="text-lg font-bold mb-1">Current Map</h1>
                <div className="flex flex-col bg-gray-900 rounded-md p-2">
                    <div className="font-semibold">Name: <span className="font-normal">To Do</span></div>
                    <div className="font-semibold">Size: <span className="font-normal">{width} x {height}</span></div>
                </div>
            </div>
        </div>
    );
};

export default TileMapSize;
