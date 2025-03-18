import React from 'react';

const Other = () => {
  return (
    <div className='flex justify-center items-center min-h-screen w-full gap-6 bg-gray-800 scroll-auto p-4 flex-wrap'>
      <div className='flex justify-center items-center flex-col gap-2 shadow-lg px-2 py-2 rounded-2xl bg-gray-200'>
        <img 
          src="images/other/tvshow-app.jpg" 
          alt="tvshow-app.jpg"
          className='object-bottom min-w-72 h-52 rounded-2xl overflow-hidden'
        />
        <a 
          className='bg-green-600 font-medium py-2 px-3 rounded-2xl cursor-pointer shadow-gray-900 shadow-md'
          target='_blank'
          href="https://arjundev.github.io/tvshow-app/" 
          rel="noopener noreferrer"
        >TV Show finder App</a>
      </div>
      <div className='flex justify-center items-center flex-col gap-2 shadow-lg px-2 py-2 rounded-2xl bg-gray-200'>
        <img 
          src="images/other/todo-app.png" 
          alt="todo-app.png"
          className='object-bottom w-72 h-52 rounded-2xl overflow-hidden'
        />
        <a 
          className='bg-green-600 font-medium py-2 px-3 rounded-2xl cursor-pointer shadow-gray-900 shadow-md'
          target='_blank'
          href="https://arjundev.github.io/todo-react-app/" 
          rel="noopener noreferrer"
        >ToDo App</a>
      </div>
      <div className='flex justify-center items-center flex-col gap-2 shadow-lg px-2 py-2 rounded-2xl bg-gray-200 mb-16 sm:mb-0'>
        <img 
          src="images/other/quiz-app.jpg" 
          alt="quiz-app.jpg"
          className='object-fill w-72 h-52 rounded-2xl overflow-hidden'
        />
        <a 
          className='bg-green-600 font-medium py-2 px-3 rounded-2xl cursor-pointer shadow-gray-900 shadow-md'
          target='_blank'
          href="https://arjundev.github.io/quiz-app/" 
          rel="noopener noreferrer"
        >Trivia Quiz App</a>
      </div>
  </div>
  )
}

export default Other