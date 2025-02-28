import React from 'react'

const Project1 = () => {
  return (
    <div 
      className='flex flex-col justify-start items-center flex-1 min-h-screen bg-gray-800 p-4 py-8 gap-4'>
      <ul 
        className='list-disc list-outside pl-8 flex flex-col justify-start items-start bg-gray-100 text-sm p-2 py-4 rounded'>
        <li className='font-medium mb-4 list-none'>Summary:</li>
        <li>Developed a Learning Management System (LMS) using React.js, Tailwind CSS, and Redux Toolkit.</li> 
        <li>Implemented user authentication with signup and login functionality.</li>
        <li>Integrated role-switching, allowing users to toggle between learner and course creator modes.</li>
        <li>Designed multiple pages: Home, Explore Courses, My Courses, Create Courses, and Published Courses.</li>
        <li>Enabled course purchasing, with enrolled courses appearing in "My Courses."</li>
        <li>Built a seamless course creation and publishing workflow for creators.</li>
        <li>Ensured a responsive and user-friendly UI for an enhanced learning experience.</li>
      </ul>
      <a 
        className='bg-blue-500 font-medium p-2 rounded cursor-pointer'
        target='_blank'
        href="https://arjundev.github.io/lms-react-app/" 
        rel="noopener noreferrer"
        >Check out the App</a>
    </div>
  )
}

export default Project1