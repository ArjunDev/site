import React, { useContext } from 'react';
import { ElementsData } from './kanban/input-context';
import InputBar from './kanban/input-bar';
import StatusColumns from './kanban/status-columns';
import ProjectSummaryModal from './kanban/project-summary-modal';


const Project3 = () => {

  const { projectSummaryModal, setProjectSummaryModal} = useContext(ElementsData); 
  // global context state

  return (
    <div className='flex justify-center items-center w-full'>
      <div className="flex flex-col items-center w-full bg-blue-50">
      {projectSummaryModal.kanban.isOpen && <ProjectSummaryModal/>}
      <InputBar/>
      <StatusColumns/>
      </div>
  </div>
  )
}

export default Project3