import React from "react";

const MapDetails = ({ width, height, name }) => {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-gray-700 p-4 text-white rounded-md">
                <h1 className="text-lg font-bold mb-1">Current Map</h1>
                <div className="bg-gray-900 p-2 rounded-md">
                    <p className="text-gray-200">
                        <strong>Name:</strong> {name}
                    </p>
                    <p className="text-gray-200">
                        <strong>Size:</strong> {width} x {height}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MapDetails;
