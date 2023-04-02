import React from "react";
import { FiUpload, FiFilePlus, FiSave } from "react-icons/fi";
import { FaMap } from "react-icons/fa";
import path from 'path';

const VoidWarp = ({ cb, cb2 }) => {

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
            cb(parsedData);
        };
    };

    const handleClickLoad = () => {
        document.getElementById("fileInput").click();
    };

    const handleFileUpload2 = (e) => {
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
            cb2(parsedData);
        };
    };

    const handleClickLoad2 = () => {
        document.getElementById("fileInput2").click();
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
            cb(parsedData);
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

    const handlePresetFile2 = (file) => {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            const parsedData = reader.result
                .split("\n")
                .filter((row) => row.trim() !== "") // ignore empty lines
                .map((row) => {
                    return row.split(",").map((cell) => parseInt(cell));
                });
            cb2(parsedData);
        };
    };

    const handleClickLoadPreset2 = async (filePath) => {
        const response = await fetch(filePath);
        if (!response.ok) {
            // handle error
            return;
        }
        const fileContent = await response.text();
        const fileName = path.basename(filePath);
        const file = new File([fileContent], fileName);
        handlePresetFile2(file);
    };

    return (
        <div className="w-full bg-gray-700 p-2 text-white grid grid-cols-3 gap-2">
            <div className="col-span-2 flex gap-2 bg-slate-800 justify-start items-center px-2">
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-1 px-2 transition-colors duration-200 ease-in-out"
                        onClick={handleClickLoad}
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <FiUpload /> Load Map 1
                        </div>
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
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-1 px-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map1.csv')}
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <FaMap /> Eribu
                        </div>
                        <span className="tooltiptext">Eribu</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-1 px-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map2.csv')}
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <FaMap /> Absu
                        </div>
                        <span className="tooltiptext">Absu</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-1 px-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map3.csv')}
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <FaMap /> Zi
                        </div>
                        <span className="tooltiptext">Zi</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-1 px-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map4.csv')}
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <FaMap /> Kur
                        </div>
                        <span className="tooltiptext">Kur</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-1 px-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map5.csv')}
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <FaMap /> Indi
                        </div>
                        <span className="tooltiptext">Indi</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-1 px-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map6.csv')}
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <FaMap /> Ukkin-Na
                        </div>
                        <span className="tooltiptext">Ukkin-Na</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-1 px-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map7.csv')}
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <FaMap /> Edin
                        </div>
                        <span className="tooltiptext">Edin</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-1 px-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map8.csv')}
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <FaMap /> E-Kur-Mah
                        </div>
                        <span className="tooltiptext">E-Kur-Mah</span>
                    </button>
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-1 px-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset('maps/map9.csv')}
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <FaMap /> Mar-Uru
                        </div>
                        <span className="tooltiptext">Mar-Uru</span>
                    </button>
                </div>
            </div>
            <div className="col-span-1 flex gap-2 bg-slate-800 justify-start items-center px-2">
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-1 px-2 transition-colors duration-200 ease-in-out"
                        onClick={handleClickLoad2}
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <FiUpload /> Load Map 2
                        </div>
                        <span className="tooltiptext">Load File</span>
                    </button>
                    <input
                        type="file"
                        id="fileInput2"
                        className="hidden"
                        onChange={handleFileUpload2}
                        accept=".csv"
                    />
                </div>
                <div className="w-auto">
                    <button
                        className="tooltip bg-gray-900 hover:bg-gray-800 rounded-lg p-1 px-2 transition-colors duration-200 ease-in-out"
                        onClick={() => handleClickLoadPreset2('maps/map4.csv')}
                    >
                        <div className="flex gap-2 justify-center items-center">
                            <FaMap /> Kur
                        </div>
                        <span className="tooltiptext">Kur</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VoidWarp;
