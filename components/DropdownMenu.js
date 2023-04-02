import { useState } from "react";
import { classNames } from "utils";

export const DropdownMenu = ({ options, selectedSquare, onSelect }) => {
    const [searchText, setSearchText] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const filteredOptions = options.filter((option) =>
        option.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleSelect = (option) => {
        onSelect(selectedSquare.x, selectedSquare.y, option.value);
        setIsOpen(false);
        setSearchText("");
    };

    return (
        <div className="relative">
            <div
                className="w-full bg-gray-900 rounded-md shadow-md cursor-pointer py-2 px-3 text-white flex justify-between items-center"
                onFocus={() => setIsOpen(!isOpen)}
                onBlur={() => setIsOpen(false)}
            >
                <input
                    type="text"
                    placeholder="Select a room"
                    className="w-full mr-2 bg-transparent"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
            {isOpen && (
                <div className="absolute bg-white dark:bg-gray-800 rounded-md shadow-md mt-1 w-full max-h-60 overflow-auto z-10">
                    {filteredOptions.map((option) => (
                        <div
                            key={option.value}
                            className="bg-gray-900 hover:bg-gray-700 text-gray-200 flex justify-between items-center py-2 px-3 cursor-pointer"
                            onClick={() => handleSelect(option)}
                        >
                            {option.name}
                            {option.item && <div className={option.item} />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
