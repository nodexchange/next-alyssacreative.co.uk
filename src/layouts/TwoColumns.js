import React from 'react';

export const TwoColumns = ({left, right}) => {
  return (
    <div className="pb-10 px-8 sm:px-6 md:px-8">
      <div className="flex -mx-2">
        <div className="w-1/2 px-20 text-white">
          {left}
        </div>
        <div className="w-1/2 px-20 text-white">
          {right}
        </div>
      </div>
    </div>);
};