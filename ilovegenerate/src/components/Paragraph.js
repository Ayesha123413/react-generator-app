import React, { useState } from 'react'
import { Paragraphs } from '../Data'
import Button from './Button'
const Paragraph = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (amount < 0) amount = 0
    if (amount > 6) amount = 6

    setText(Paragraphs.slice(0, amount))
    return
  }
  return (
    <div className=" flex flex-col gap-4 ">
      <section>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-center items-center justify-center gap-2 md:gap-4"
        >
          <div className="flex gap-2">
            <label className="max-md:text-[14px] font-bold">Paragraphs:</label>
            <input
              type="number"
              name="amount"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              className="max-md:text-[14px] focus:outline-none border-[1px] border-pink-700 w-[6rem] px-1"
            />
          </div>
          <Button />
        </form>
        <article>
          {text.map((text) => {
            return (
              <p className="max-md:text-[14px] text-justify py-2">{text}</p>
            )
          })}
        </article>
      </section>
    </div>
  )
}

export default Paragraph
