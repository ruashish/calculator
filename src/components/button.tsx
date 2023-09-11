import React from 'react';

interface ButtonProps {
  displayValue: string | number;
  onClickHandler?: () => void;
}

export const Button = ({ displayValue, onClickHandler }: ButtonProps) => {
  return (
    <button
      className="bg-gray-700 text-white  
      hover:bg-gray-800 hover:text-white rounded-md p-4 text-2xl"
      onClick={onClickHandler}
    >
      {displayValue}
    </button>
  );
};
