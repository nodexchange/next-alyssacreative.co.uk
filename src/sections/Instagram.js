import React from 'react';
import PropTypes from 'prop-types';

export const Instagram = (props) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-full content-center text-center">
        <h1>Our INSTAGRAM:</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="w-[200px] h-[200px] border-2 bg-ascreative">01</div>
        <div className="w-[200px] h-[200px] border-2 bg-ascreative">02</div>
        <div className="w-[200px] h-[200px] border-2 bg-ascreative">03</div>
        <div className="w-[200px] h-[200px] border-2 bg-ascreative">04</div>
        <div className="w-[200px] h-[200px] border-2 bg-ascreative">05</div>
        <div className="w-[200px] h-[200px] border-2 bg-ascreative">06</div>
      </div>
    </div>
  );
};

Instagram.propTypes = {};
