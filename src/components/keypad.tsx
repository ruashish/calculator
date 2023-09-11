import React from 'react';
import { Button } from './button';

 export const Keypad = () => {
  return (
    <>
      <div className=" flex justify-center items-center  ">
        <Button displayValue={'7'} />
        <Button displayValue={'8'} />
        <Button displayValue={'9'} />
        <Button displayValue={'/'} />
       
      </div>
      {/*2nd Row */}
      <div className="flex justify-center items-center ">
        <Button displayValue={'4'} />
        <Button displayValue={'5'} />
        <Button displayValue={'6'} />
        <Button displayValue={'*'} />
      
      </div>
      {/*3rd Row*/}
      <div className="flex justify-center items-center">
        <Button displayValue={'1'} />
        <Button displayValue={'2'} />
        <Button displayValue={'3'} />
        <Button displayValue={'-'} />
       
      </div>

      <div className="flex justify-center items-center">
        <Button displayValue={'1'} />
        <Button displayValue={'2'} />
        <Button displayValue={'3'} />
        <Button displayValue={'-'} />
       
      </div>
      <div className="flex justify-center items-center">
        <Button displayValue={'0'} />
        <Button displayValue={'.'} />
        <Button displayValue={'='} />
        <Button displayValue={'+'} />
       
      </div>
      <div className="flex justify-center items-center">
        <Button displayValue={'Clear'} />
      </div>



     
    </>
  );
};
