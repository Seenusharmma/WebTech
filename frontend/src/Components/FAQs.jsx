import React from 'react'
import Accordian from './Accordian'

const FAQs = () => {
  const questions = [
  { id: 1, question: "qwertyuiop", answer: "123" },
  { id: 2, question: "asdfghjkl", answer: "456" },
  { id: 3, question: "zxcvbnm", answer: "789" },
  { id: 4, question: "zaqwedcfrtgb", answer: "0987" },
  { id: 5, question: "eztrxdtycfyvgubhnj", answer: "654321" },
];
  return (
    <div className='min-h-screen bg-gray-100 p-4 md:p-8 flex justify-center items-center '>
<div className='max-w-2xl w-full'>
        <h1 className='text-3xl md:text-4xl font-bold mb-8 text-center'>Frequently Asked Questions!</h1>
      <Accordian data={questions}/>
</div>
    </div>
  )
}

export default FAQs
