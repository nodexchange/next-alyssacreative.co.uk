import React from 'react';

export const FullWidth = ({ children }) => {
  return (
    <div className="flex pb-10 px-20 sm:px-6 md:px-8">
      <div className="flex-none w-8 " />
      <div className="flex w-full mx-4 justify-center">{children}</div>
      <div className="flex-none w-8" />
    </div>
  );
};