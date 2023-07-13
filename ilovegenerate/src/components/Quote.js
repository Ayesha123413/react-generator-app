import React, { useEffect, useState } from 'react'
import Button from './Button'

const Quote = () => {
  const [quote, setQuote] = useState('')

  const getQuote = () => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then(
        (data) => {
          let randomNum = Math.floor(Math.random() * data.length)
          setQuote(data[randomNum])
        },
        (error) => console.log(error),
      )
  }
  useEffect(() => {
    getQuote()
  }, [])
  return (
    <div className="flex justify-center items-center h-full ">
      <div className="flex flex-col items-center justify-center gap-4   md:w-[45%] md:h-[65%]  ">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-center italic md:text-[20px]">" {quote.text} "</p>
          <p className="font-bold italic">{quote.author}</p>
        </div>
        <Button onClick={getQuote} />
      </div>
    </div>
  )
}

export default Quote
