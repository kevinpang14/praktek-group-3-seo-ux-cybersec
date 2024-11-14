import React from 'react';
/**
* Component params.
* @param {children} test - button text is child of button
* @returns {React.Component} - react component for button
*/
const Button = ({children}) => {
  return (
    <button className='self-center px-2 py-1 bg-accent text-white rounded-md hover:opacity-90 font-semibold'>{children}</button>
  )
}

export default Button