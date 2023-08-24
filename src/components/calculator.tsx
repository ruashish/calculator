import React from 'react';

import { Keypad } from './keypad';
import { Screen } from './screen';

export const Calculator = () => {
  return (
    <div>
      calculator
      <Screen />
      <Keypad />
    </div>
  );
};
