import React from 'react';
import { Label } from '../components/Label';

export const TwoColumns = ({title, left, right, textClass = 'text-white'}) => {
  return (
    <div className="pb-10 px-8 sm:px-6 md:px-8">
      {title ? <Label text={title} /> : <></>}
      <div className="flex -mx-2">
        <div className={`w-1/2 px-20 ${textClass}`}>
          {left}
        </div>
        <div className={`w-1/2 px-20 ${textClass}`}>
          {right}
        </div>
      </div>
    </div>);
};