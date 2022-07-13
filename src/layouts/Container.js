import React from 'react'

export const Container = ({children}) => {
  return (
    <div className='lg:max-w-[1200px] mx-auto'>
      {children}
      </div>
  )
}