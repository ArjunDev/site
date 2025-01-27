import React from 'react';
import StatusColumns from '../../../kanban/status-columns';
import { InputContext } from '../../../kanban/input-context';
import InputBar from '../../../kanban/input-bar';

const Projects = () => {
  return (
    <div className='flex justify-center items-center w-full'>
    <InputContext>
      <div className="flex flex-col items-center w-full bg-blue-50">
       <InputBar/>
        <StatusColumns/>
      </div>
    </InputContext>
  </div>
  )
}

export default Projects