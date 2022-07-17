import React from 'react'

export const Container = ({children, bg = 'bg-white'}) => {
  return (
    <div className={`py-3 ${bg}`}>
      <div className='lg:max-w-[1200px] mx-auto'>
      {children}
      </div>
    </div>
  )
}