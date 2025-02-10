import React, { createContext, useState } from 'react';

// Create context
export const ElementsData = createContext();

export const InputContext = ({ children }) => {
 
  const [elements, setElements] = useState([]);
  //Global state to manage tasks  
  const [projectSummaryModal, setProjectSummaryModal] = useState({
    
    kanban: {
      name: "Kanban",
      summary: [
        "This is a dynamic kanban style task management app built using React.js and Tailwind CSS.",
        "Users can add, edit, and delete tasks efficiently.",
        "Has a drag-and-drop functionality for seamless task movement across columns(Pending, InProgress, Completed).",
        "Tasks are sorted based on priority in each column(High Medium, Low).",
        "Used localStorage for data persistence, ensuring tasks remain saved even after closing the page.",
        "Optimized performance using React hooks like useState and useEffect, Context API"
      ],
      isOpen: true
    }
  });
  //global state to manage project summary modal

  //console.log(elements)
  // Prevent accessing properties before state is set
  //console.log(projectSummaryModal);
  //console.log(projectSummaryModal?.kanban?.summary); // This prevents errors

  return (
    <ElementsData.Provider 
     value={{ elements, setElements, projectSummaryModal,setProjectSummaryModal}}
    >
      {children}
    </ElementsData.Provider>
  );
};
