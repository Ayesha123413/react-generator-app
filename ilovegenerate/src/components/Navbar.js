import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="absolute bottom-[10%] left-0 text-[16px]  md:text-[18px] ">
      <ul className=" rotate-180 font-bold  border-y-[1px] border-l-[1px] border-white rounded-bl-sm  rounded-tl-sm  justify-center items-center  w-[30px] md:w-[45px] h-[245px] md:h-[270px] text-white flex flex-col gap-[60px] bg-pink-700">
        <Link to="/">
          <li className=" cursor-pointer text-center mt-3 rotate-90 px-2 flex justify-center items-center border-r-[1px]  border-white">
            Paragraph
          </li>
        </Link>
        <Link to="/Quotes">
          <li className=" cursor-pointer  px-4 text-center pl-2 rotate-90 border-r-[1px]  border-white">
            Quote
          </li>
        </Link>
        <Link to="/QR">
          <li className=" px-6 mb-3 cursor-pointer  rotate-90 ">QR</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
