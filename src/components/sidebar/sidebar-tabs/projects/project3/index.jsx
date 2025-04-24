import React from 'react';
import {data} from './kanban-data'

const Project3 = () => {

  
  const box = 'bg-gray-900 rounded-2xl flex flex-col justify-start items-center p-1 overflow-hidden text-white shadow-sm shadow-orange-500 hover:cursor-pointer hover:shadow-md hover:shadow-green-500 transition'

  return (
    <div 
      className='flex flex-col justify-start items-center flex-1 min-h-screen bg-gray-800 py-8 gap-4 p-4'>
      <div>
        <a 
          className='bg-green-500 font-medium p-2 rounded cursor-pointer shadow-2xs'
          target='_blank'
          href="https://arjundev.github.io/plan-with-me/" 
          rel="noopener noreferrer"
        >Check out the App</a>
      </div>
      {/* <div className='grid md:grid-cols-3 auto-rows-[200px] gap-4 w-full md:px-56'>
        {data.map((item, i)=> (
          <div 
            key={i}
            className={`${box} ${i === 3 ? 'md:col-span-2' : ""}`}
            onClick={() => window.open('https://arjundev.github.io/recipe-finder-app/#/home', '_blank')}
          >
          <span>{item.title}</span>
          <div className="w-full h-64 bg-gray-900 flex items-center justify-center">
            <img 
              src={item.url} 
              alt="image" 
              className="object-contain h-full"
            />
          </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Project3