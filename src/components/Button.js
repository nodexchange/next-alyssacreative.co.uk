import React from 'react'

export const Button = ({text}) => {
  return (
    <button className="shadow rounded-xl px-4 bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 focus:shadow-outline focus:outline-none" type="button">
      {text}
    </button>
  )
}