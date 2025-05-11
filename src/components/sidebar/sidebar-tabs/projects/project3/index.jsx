import React from 'react';
import {data} from './kanban-data'

const Project3 = () => {

  
  const box = 'bg-gray-900 rounded-2xl flex flex-col justify-start items-center p-1 overflow-hidden text-white shadow-sm shadow-blue-500 hover:cursor-pointer hover:shadow-md hover:shadow-green-500 transition'

  return (
    <div 
      className='flex flex-col justify-start items-center flex-1 min-h-screen bg-gray-800 py-8 gap-4 p-4 mt-14 sm:mt-0'>
      <div>
        <a 
          className='bg-blue-500 font-medium p-2 rounded cursor-pointer shadow-2xs'
          target='_blank'
          href="https://arjundev.github.io/plan-with-me/" 
          rel="noopener noreferrer"
        >Check out the App</a>
      </div>
      <div className='grid md:grid-cols-3 auto-rows-[250px] gap-4 w-full md:px-56 mt-2'>
        {data.map((item, i)=> (
          <div 
            key={i}
            className={`${box} ${i === 3 ? 'md:col-span-3' : ""}`}
            onClick={() => window.open('https://arjundev.github.io/plan-with-me/', '_blank')}
          >
          <span>{item.title}</span>
          <div className="w-full h-56 bg-gray-900 flex items-center justify-center">
            <img 
              src={item.url} 
              alt="image" 
              className="object-fill h-full"
              
            />
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project3