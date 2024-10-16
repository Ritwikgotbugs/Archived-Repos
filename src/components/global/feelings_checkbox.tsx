import React, { useState } from 'react';

interface CheckboxGroupProps {
  title: string;
  options: string[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ title, options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg w-full max-w-3xl my-4 ">
      <h2 className="text-md font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-3 gap-2">
        {options.map(option => (
          <label key={option} className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
