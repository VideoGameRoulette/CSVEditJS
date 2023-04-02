import React from "react";

const SelectedTile = ({ selectedSquare }) => {
    return (
        <div className="bg-gray-700 p-4 rounded-md text-white">
            <h2 className="text-lg font-bold mb-2">Selected Tile</h2>
            {selectedSquare ? (
                <div className="bg-gray-900 p-2 rounded-md">
                    <p className="text-gray-200">
                        <strong>X:</strong> {selectedSquare.x}
                    </p>
                    <p className="text-gray-200">
                        <strong>Y:</strong> {selectedSquare.y}
                    </p>
                    <p className="text-gray-200">
                        <strong>Tile Value:</strong> {selectedSquare.value}
                    </p>
                </div>
            ) : (
                <p className="text-gray-400">No tile selected</p>
            )}
        </div>
    );
};

export default SelectedTile;
