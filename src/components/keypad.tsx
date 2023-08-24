import React from 'react';
import { Button } from './button';

export const Keypad = () => {
  return (
    <div>
      keypad
      <Button displayValue={0} />
      <Button displayValue={'ashish'} />
      <Button displayValue={'+'} />
      <Button displayValue={'-'} />
      <Button displayValue={'='} />
    </div>
  );
};
