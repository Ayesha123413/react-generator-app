import React, { useState } from 'react'
import Button from './Button'

const QR = () => {
  const [input, setInput] = useState('')
  const [qr, setQr] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const getQRCode = (e) => {
    e.preventDefault()

    setIsLoading(true)
    fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`,
    )
      .then((res) => res.url)
      .then((img) => {
        setQr(img)
        setIsLoading(false)
      })
  }
  return (
    <div className="flex justify-center items-center h-full">
      <div className=" mx-auto flex justify-center items-center  md:w-[45%] md:h-[75%] ">
        <form
          onSubmit={getQRCode}
          className="flex flex-col justify-center items-center gap-4 "
        >
          <div className="flex flex-col  md:flex-row justify-center items-center gap-1 ">
            <label className="font-bold ">Your URL :</label>
            <input
              className="focus:outline-none  max-md:text-[14px] max-md:w-[12rem] text-center italic border-b-2 border-pink-700 md:w-[13rem] px-1 md:px-2 "
              type="text"
              placeholder="https://www.example.com/"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="my-6">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              qr && (
                <img
                  className="w-[80%] h-[80%]  mx-auto"
                  src={qr}
                  alt="qrcode"
                />
              )
            )}
          </div>
          <Button />
        </form>
      </div>
    </div>
  )
}

export default QR
