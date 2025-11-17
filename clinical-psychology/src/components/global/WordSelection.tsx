import { useState } from 'react';

interface WordSelectionProps {
  lists: string[][];
  maxSelection: number;
  userName: string;
}

const WordSelection: React.FC<WordSelectionProps> = ({ lists, maxSelection, userName }) => {
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[][]>(
    Array(lists.length).fill([])
  );

  // Function to toggle word selection
  const toggleWordSelection = (word: string) => {
    setSelectedWords((prevState) => {
      const currentSelection = prevState[currentListIndex];
      const updatedSelection = currentSelection.includes(word)
        ? currentSelection.filter((w) => w !== word)
        : currentSelection.length < maxSelection
        ? [...currentSelection, word]
        : currentSelection;
      const newState = [...prevState];
      newState[currentListIndex] = updatedSelection;
      return newState;
    });
  };

  // Function to handle navigation to the next list or finishing
  const handleNextList = () => {
    if (currentListIndex < lists.length) {
      setCurrentListIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Progress bar style for the active steps
  const progressBarClass = (index: number) => {
    return index <= currentListIndex
      ? 'bg-[#015C56]'
      : 'bg-gray-300';
  };

  return (
    <div className="bg-[#E4F1F0] w-full max-w-7xl mx-auto p-10 rounded-sm ">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4">Choose the words from the list</h1>

      {/* Progress Bar */}
      <div className="flex gap-2 mb-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded-full ${progressBarClass(index)}`}
          />
        ))}
      </div>

      {/* Word Selection Section */}
      {currentListIndex < lists.length && (
        <>
          {/* Instruction */}
          <p className="mb-4 text-sm text-red-600">* Select up to {maxSelection} words</p>

          {/* Word Selection */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {lists[currentListIndex].map((word) => (
              <div key={word} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedWords[currentListIndex]?.includes(word)}
                  onChange={() => toggleWordSelection(word)}
                  className="w-4 h-4"
                  disabled={
                    !selectedWords[currentListIndex]?.includes(word) &&
                    selectedWords[currentListIndex].length >= maxSelection
                  }
                  title={`Select ${word}`}
                />
                <label className="text-gray-800">{word}</label>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <div className="flex justify-center">
            <button
              onClick={handleNextList}
              className="mt-4 px-6 py-2 bg-[#015C56] text-white rounded hover:bg-[#015C56] transition"
              disabled={selectedWords[currentListIndex]?.length === 0}
            >
              {currentListIndex < lists.length - 1 ? 'Next' : 'Finish'}
            </button>
          </div>
        </>
      )}

      {/* Final Summary Page */}
      {currentListIndex >= lists.length && (
        <div className="mt-8 text-center">
          <p className="text-xl font-bold">
            <strong>{userName}</strong> has selected: <br />
            {selectedWords[0]?.join(', ')} and {selectedWords[1]?.join(', ')}.
          </p>
          <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
            ← back to Home Page
          </button>
        </div>
      )}
    </div>
  );
};

export default WordSelection;






