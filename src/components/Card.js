import React from 'react';

export const Card = ({title, description}) => {
  return (
    <div className="flex-1 flex justify-center">
      <div className="transition-shadow duration-500 shadow-xl bg-white max-w-xs hover:shadow-md">
        <a href="#!">
          <img
            className=""
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
          <div className="p-4">
            <h5 className="border-b-2 pb-2 text-center text-gray-900 text-xl font-medium mb-2">
              {title}
            </h5>
            <p className="text-gray-700 text-base mb-2">{description}</p>
          </div>
        </a>
      </div>
    </div>
  );
};
