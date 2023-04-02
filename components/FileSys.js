import React from "react";
import { FiUpload, FiFilePlus, FiSave } from "react-icons/fi";
import { FaMap } from "react-icons/fa";
import path from 'path';

const FileSys = ({ data, setData, fileName, setMap }) => {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];

        if (!file || !(file instanceof Blob)) {
            // handle error
            return;
        }

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
            setMap({
                name: file.name,
                width: parsedData.length > 0 ? parsedData[0].length : 0,
                height: parsedData.length
            });
        };
    };

    const handleClickLoad = () => {
        document.getElementById("fileInput").click();
    };

    const handleClickNew = () => {
        const newWidth = parseInt(prompt("Enter the width of the new map:"));
        const newHeight = parseInt(prompt("Enter the height of the new map:"));
        if (!isNaN(newWidth) && newWidth !== 0 && !isNaN(newHeight) && newHeight !== 0) {
            const newMap = Array.from({ length: newHeight }, () =>
                Array.from({ length: newWidth }, () => 0)
            );
            setData(newMap);
            setMap({
                name: "map.csv",
                width: newWidth,
                height: newHeight
            });
        } else {
            if (newWidth === 0 && newHeight !== 0) alert("0 is not valid width, Please enter valid width value.");
            if (newWidth !== 0 && newHeight === 0) alert("0 is not valid height, Please enter valid height value.");
            if (isNaN(newWidth) || isNaN(newHeight)) alert("Only Numbers are Valid. Please enter valid width and height values.");
            handleClickNew();
        }
    };

    const handleClickSave = () => {
        const csvContent =
            "data:text/csv;charset=utf-8," +
            data.map((row) => row.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
    };

    const handlePresetFile = (file) => {
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
            setMap({
                name: file.name,
                width: parsedData.length > 0 ? parsedData[0].length : 0,
                height: parsedData.length
            });
        };
    };

    const handleClickLoadPreset = async (filePath) => {
        const response = await fetch(filePath);
        if (!response.ok) {
            // handle error
            return;
        }
        const fileContent = await response.text();
        const fileName = path.basename(filePath);
        const file = new File([fileContent], fileName);
        handlePresetFile(file);
    };

    return (
        <div className="w-full bg-gray-700 p-2 text-white flex flex-col gap-2">
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
            <div className="w-full flex flex-wrap gap-2">
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map1.csv')}
                    >
                        <FaMap />
                        <span className="tooltiptext">Eribu</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map2.csv')}
                    >
                        <FaMap />
                        <span className="tooltiptext">Absu</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map3.csv')}
                    >
                        <FaMap />
                        <span className="tooltiptext">Zi</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map4.csv')}
                    >
                        <FaMap />
                        <span className="tooltiptext">Kur</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map5.csv')}
                    >
                        <FaMap />
                        <span className="tooltiptext">Indi</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map6.csv')}
                    >
                        <FaMap />
                        <span className="tooltiptext">Ukkin-Na</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map7.csv')}
                    >
                        <FaMap />
                        <span className="tooltiptext">Edin</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map8.csv')}
                    >
                        <FaMap />
                        <span className="tooltiptext">E-Kur-Mah</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map9.csv')}
                    >
                        <FaMap />
                        <span className="tooltiptext">Mar-Uru</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/World.csv')}
                    >
                        <FaMap />
                        <span className="tooltiptext">World</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileSys;
