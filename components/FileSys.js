import React from "react";
import { FiUpload, FiFilePlus, FiSave } from "react-icons/fi";

const FileSys = ({ data, setData, width, height }) => {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            const parsedData = reader.result
                .split("\n")
                .filter((row) => row.trim() !== "") // ignore empty lines
                .map((row) => {
                    return row.split(",").map((cell) => parseInt(cell));
                });
            setData(parsedData);
        };
    };

    const handleClickLoad = () => {
        document.getElementById("fileInput").click();
    };

    const handleClickNew = () => {
        const newMap = Array.from({ length: height }, () =>
            Array.from({ length: width }, () => 0)
        );
        setData(newMap);
    };

    const handleClickSave = () => {
        const csvContent =
            "data:text/csv;charset=utf-8," +
            data.map((row) => row.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "tilemap.csv");
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="w-full bg-gray-700 p-2 text-white">
            <div className="w-full flex gap-2">
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200 ease-in-out"
                        onClick={handleClickNew}
                    >
                        <FiFilePlus />
                        <span className="tooltiptext">New File</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200 ease-in-out"
                        onClick={handleClickLoad}
                    >
                        <FiUpload />
                        <span className="tooltiptext">Load File</span>
                    </button>
                    <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        onChange={handleFileUpload}
                        accept=".csv"
                    />
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200 ease-in-out"
                        onClick={handleClickSave}
                    >
                        <FiSave />
                        <span className="tooltiptext">Save File</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileSys;
