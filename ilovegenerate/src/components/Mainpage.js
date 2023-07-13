import React from 'react'
import { useParams } from 'react-router-dom'
import bg from '../assets/bg.jpg'
import Navbar from './Navbar.js'
import Paragraph from './Paragraph'
import QR from './QR'
import Quote from './Quote'
const Mainpage = () => {
  const { name } = useParams()
  console.log(name)
  return (
    <div
      className="w-full h-screen bg-center bg-cover bg-fixed bg-no-repeat "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="p-4 bg-black bg-opacity-40 flex flex-col justify-center items-center h-full">
        <Navbar />
        <h1 className="text-white text-center text-4xl md:text-6xl font-[900] pb-4">
          {name === 'Quotes'
            ? 'Quotes Generator'
            : name === 'QR'
            ? 'QR Generator'
            : 'Paragraph Generator'}
        </h1>
        <div className="bg-white bg-opacity-70 w-[90%] h-[85%] flex  justify-center items-center  ">
          <div className="m-2 w-full  h-[97%] border-2  border-pink-700 flex justify-center items-center ">
            <div className="p-4 m-2 w-full bg-white  h-[96.5%] overflow-auto">
              {name === 'Quotes' ? (
                <Quote />
              ) : name === 'QR' ? (
                <QR />
              ) : (
                <Paragraph />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainpage
