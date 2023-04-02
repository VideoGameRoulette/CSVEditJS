import { useState } from "react";
import { classNames } from "utils";

function sortRoomTypesByName(roomTypes) {
    return roomTypes.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
}

export const DropdownMenu = ({ options, selectedSquare, onSelect }) => {
    const [searchText, setSearchText] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const sortedOptions = sortRoomTypesByName(options);
    const filteredOptions = sortedOptions.filter((option) =>
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
                onFocus={() => setIsOpen(true)}
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
                    onClick={() => setIsOpen(!isOpen)}
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
                            className="bg-gray-900 hover:bg-gray-700 text-gray-200 flex justify-start items-center py-2 px-3 cursor-pointer gap-2"
                            onClick={() => handleSelect(option)}
                        >
                            {option.item === null && <div className={classNames(option.color, "w-8 h-8")} />}
                            {option.item && <div className={classNames(option.item, "w-8 h-8")} />}
                            {option.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
