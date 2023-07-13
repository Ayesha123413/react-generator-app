import React from 'react'

const Button = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` max-md:text-[14px] bg-green-700 text-white px-3 py-1 rounded-sm hover:bg-white hover:text-green-700 hover:border-[1px] hover:border-green-700 hover:duration-200  `}
    >
      Generate
    </button>
  )
}

export default Button
