import React from 'react';

interface ButtonProps {
  displayValue: string | number;
  onClickHandler?: () => void;
}

export const Button = ({ displayValue, onClickHandler }: ButtonProps) => {
  return <button onClick={onClickHandler}>{displayValue}</button>;
};
