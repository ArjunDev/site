import React, { useContext, useEffect, useState } from 'react';
import { ElementsData } from './input-context';
import EditTask from './edit-task-modal';
import DeleteTask from './delete-task-modal';

function StatusColumns() {
  
  const { elements, setElements } = useContext(ElementsData);// Global state item
  const [pendingTasks, setPendingTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false); // Control edit mode
  const [deletingTask, setDeletingTask] = useState(null); // Store task 
  const [isEditing, setIsEditing] = useState(false); // Control edit mode
  const [editingTask, setEditingTask] = useState(null); // Store task being edited


  // Distribute elements into respective columns based on color and sorting based on priority 
  useEffect(() => {
    //setPendingTasks(elements.filter((el) => el.color === 'red'));
    const priorityOrder = {High: 1, Medium: 2, Low: 3};

    const filteredPending = elements.filter((el) => el.color.toLowerCase() === 'red');
    const sortedPendingTasks = filteredPending.sort((a, b)=> 
    priorityOrder[a.priority]-priorityOrder[b.priority]);
    setPendingTasks(sortedPendingTasks);
    
    const filteredInprogress = elements.filter((el) => el.color.toLowerCase() === 'orange');
    const sortedInprogressTasks = filteredInprogress.sort((a,b)=>       priorityOrder[a.priority]-priorityOrder[b.priority]);
    setInProgressTasks(sortedInprogressTasks);

    const filteredCompleted = elements.filter((el) => el.color.toLowerCase() === 'green');
    const sortedCompletedTasks = filteredCompleted.sort((a,b)=> priorityOrder[a.priority]-priorityOrder[b.priority]);
    setCompletedTasks(sortedCompletedTasks);
  }, [elements]);

  const handleDragStart = (e, element) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(element));
    //console.log(element)
  };

  const handleDrop = (e, newColor) => {
    e.preventDefault();
    const draggedElement = JSON.parse(e.dataTransfer.getData('text/plain'));
    //console.log(draggedElement)
    setElements((prevElements) =>
      prevElements.map((el) =>
        el.id === draggedElement.id ? { ...el, color: newColor } : el
      )
    );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleEditTaskBtn = (task) => {
    //console.log(task)
    setEditingTask(task);
    setIsEditing(true);
  };

  const handleSaveTask = (updatedTask) => {
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === updatedTask.id ? updatedTask : el))
    );
    setIsEditing(false);
    setEditingTask(null);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
    setEditingTask(null);
  };


  const handleDeleteTaskBtn = (taskId) => {
    setDeletingTask(taskId);  // Set the task ID to be deleted
    setIsDeleting(true);      // Show the Delete modal
  };
  
  const handlePreceedDelete = (taskId) => {
    const updatedElements = elements.filter((el) => el.id !== taskId); // Filter out the task by ID
    setElements(updatedElements); // Update state
    localStorage.setItem("elements", JSON.stringify(updatedElements));
    // Update localStorage
    setIsDeleting(false); // Close the modal after deletion
  };
  
  const handleCancleDelete = () => {
    setIsDeleting(false); // Close the modal without doing anything
    setDeletingTask(null); // Clear the task ID
  };

  return (
    <div className="flex justify-between items-start gap-4 mt-8 w-full lg:w-[90%]">
      {/* Render the EditTask modal when editing */}
      {isEditing && (
        <EditTask
          task={editingTask}
          onSave={handleSaveTask}
          onClose={handleCloseEdit}
        />
      )}
      {/* Render the DeleteTask modal when deleting */}
      {isDeleting && (
        <DeleteTask
          taskId={deletingTask}
          onYes={handlePreceedDelete}
          onNo={handleCancleDelete}
        />
      )}
      {/* Pending Column */}
      <div
        className="flex flex-col min-h-screen flex-1 border border-dashed border-cyan-500 gap-1 p-2"
        id="pending-col"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'red')}
      >
        <div>
        <span className="shadow-md shadow-red-400 p-2 mb-2 font-bold w-full flex justify-center items-center">Pending
        <span 
          className='text-sm font-light ml-1'>- {pendingTasks.length} {pendingTasks.length > 1 ? "Items" : "Item"}
        </span></span>
        </div>
        {pendingTasks.map((element) => (
          <div
            key={element.id}
            draggable
            onDragStart={(e) => handleDragStart(e, element)}
            className="flex flex-col p-5 gap-2 bg-blue-100 rounded hover:cursor-grab"
            style={{ borderBottom: `3px solid ${element.color}`}}
          >
          <p className="p-2 font-bold text-center">Task: {element.task}</p> 
          <div>
            <span className='font-bold mr-1.5 mb-1.5 text-base'>Description:</span>
            <p className='text-xs'>{element.desc}</p>
          </div>
          <div>
            <span className='font-bold mr-1.5 mb-1.5 text-base'>Priority: </span>
            <span className='text-sm'>{element.priority}</span>
          </div>
          <div className='flex gap-2 justify-center items-center mt-1'>
          <button 
              id={element.id}
              className="shadow-md shadow-red-300 rounded bg-red-500 w-auto p-1 hover:bg-red-400 font-bold hover:cursor-pointer"
              onClick={() => handleDeleteTaskBtn(element.id)}>Delete</button>
            <button
              id={element.id}
              className="shadow-md shadow-blue-300 rounded bg-blue-500 w-auto p-1 hover:bg-blue-400 font-bold hover:cursor-pointer"
              onClick={()=>handleEditTaskBtn(element)}>Edit</button>
          </div>
          </div>
        ))}
      </div>

      {/* InProgress Column */}
      <div
        className="flex flex-col min-h-screen flex-1 border border-dashed border-cyan-500 gap-1 p-2"
        id="inprogress-col"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'orange')}
      >
        <div>
        <span className="shadow-md shadow-yellow-500 p-2 mb-2 font-bold w-full flex justify-center items-center">InProgress
        <span 
          className='text-sm font-light ml-1'>- {inProgressTasks.length} {inProgressTasks.length > 1 ? "Items" : "Item"}
        </span></span>
        </div>
        {inProgressTasks.map((element) => (
          <div
            key={element.id}
            draggable
            onDragStart={(e) => handleDragStart(e, element)}
            className="flex flex-col p-7 gap-2 bg-blue-100 rounded hover:cursor-grab"
            style={{ borderBottom: `3px solid ${element.color}` }}
          >
          <p className="p-2 font-bold text-center">Task: {element.task}
          </p> 
          <div>
            <span className='font-bold mr-1.5 mb-1.5 text-base'>Description:</span>
            <p className='text-xs'>{element.desc}</p>
          </div>
          <div>
            <span className='font-bold mr-1.5 mb-1.5 text-base'>Priority:</span>
            <span className='text-sm'>{element.priority}</span>
          </div>
          <div className='flex gap-2 justify-center items-center mt-1'>
            <button 
              id={element.id}
              className="shadow-md shadow-red-300 rounded bg-red-500 w-auto p-1 hover:bg-red-400 font-bold hover:cursor-pointer"
              onClick={() => handleDeleteTaskBtn(element.id)}>Delete</button>
            <button
              id={element.id}
              className="shadow-md shadow-blue-300 rounded bg-blue-500 w-auto p-1 hover:bg-blue-400 font-bold hover:cursor-pointer"
              onClick={()=>handleEditTaskBtn(element)}>Edit</button>
          </div>
          </div>
        ))}
      </div>

      {/* Completed Column */}
      <div
        className="flex flex-col min-h-screen flex-1 border border-dashed border-cyan-500 gap-1 p-2"
        id="completed-col"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'green')}
      >
        <div>
        <span className="shadow-md shadow-green-500 p-2 mb-2 font-bold w-full flex justify-center items-center">Completed
        <span 
          className='text-sm font-light ml-1'>- {completedTasks.length} {completedTasks.length > 1 ? "Items" : "Item"}
        </span></span>
        </div>
        {completedTasks.map((element) => (
          <div
            key={element.id}
            draggable
            onDragStart={(e) => handleDragStart(e, element)}
            className="flex flex-col p-7 gap-2 bg-blue-100 rounded hover:cursor-grab"
            style={{ borderBottom: `3px solid ${element.color}` }}
          >
          <p className="p-2 font-bold text-center">Task: {element.task}
          </p> 
          <div>
            <span className='font-bold mr-1.5 mb-1.5 text-base'>Description:</span>
            <p className='text-xs'>{element.desc}</p>
          </div>
          <div>
            <span className='font-bold mr-1.5 mb-1.5 text-base'>Priority:</span>
            <span className='text-sm'>{element.priority}</span>
          </div>
          <div className='flex gap-2 justify-center items-center mt-1'>
            <button 
              id={element.id}
              className="shadow-md shadow-red-300 rounded bg-red-500 w-auto p-1 hover:bg-red-400 font-bold hover:cursor-pointer"
              onClick={() => handleDeleteTaskBtn(element.id)}>Delete</button>
            <button
              id={element.id}
              className="shadow-md shadow-blue-300 rounded bg-blue-500 w-auto p-1 hover:bg-blue-400 font-bold hover:cursor-pointer"
              onClick={()=>handleEditTaskBtn(element)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatusColumns;
