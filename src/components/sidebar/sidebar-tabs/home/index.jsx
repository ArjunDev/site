import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center items-center flex-col w-full h-auto gap-6 bg-gray-300 font-mono sm:w-full sm:min-h-screen'>
      <div className='flex justify-center items-center flex-col sm:flex-row gap-4 sm:gap-6 mt-16'>
        <div className='w-52 h-52 rounded-full shadow-md shadow-gray-900 overflow-hidden'>
          <img 
            src="images/profile-pic.jpg" 
            alt="profile photo"
            className='w-full h-full object-cover'
          />
        </div>
        <section className='flex justify-center items-center flex-col gap-4'>
          <div className='flex justify-center items-center flex-col gap-2'>
            <p>Hello, I'm</p>
            <p className='font-bold text-2xl'>Mallikarjun H</p>
            <p>Frontend Developer</p>
          </div>
          <div className='flex gap-2'>
              <a 
                href='/path-to-cv.pdf' 
                download='Mallikarjun_resume.pdf'
                className='bg-gray-900 text-gray-50 text-sm font-bold py-3 px-4 rounded-3xl shadow-md hover:bg-gray-700 transition'
              >Download CV</a>
              <a 
                href='https://www.linkedin.com/in/mallikarjunh97'
                target="_blank"
                rel="noopener noreferrer" // Security & privacy: prevents access to window.opener and removes Referer header  
                className='bg-gray-900 text-gray-50 text-sm font-bold py-3 px-4 rounded-3xl shadow-md hover:bg-gray-700 transition'
              >LinkedIn</a>
              <a 
                href='https://github.com/arjundev'
                target="_blank"
                rel="noopener noreferrer" // Security & privacy: prevents access to window.opener and removes Referer header 
                className='bg-gray-900 text-gray-50 text-sm font-bold py-3 px-4 rounded-3xl shadow-md hover:bg-gray-700 transition'
              >GitHub</a>
          </div>
        </section>
      </div>
      <div className='flex flex-col ustify-center items-center mt-10 mb-4 p-4'>
        <div className='flex justify-center items-center mb-4'>
          <span className='font-bold text-2xl'>About Me</span>
        </div>
        <div className='flex gap-2'>
          <div className='flex-1 flex flex-col justify-center items-center p-4 border rounded-2xl shadow-lg'>
            <p className='font-bold text-lg p-2'>Experience</p>
            <p className='text-center'>1+ year frontend development</p>
          </div>
          <div className='flex-1 flex flex-col justify-start items-center p-4 border rounded-2xl shadow-lg'>
            <p className='font-bold text-lg p-2'>Education</p>
            <p className='text-center'>Bachelors of Engineering</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mb-6 p-4'>
        <div className='flex justify-center items-center'>
          <span className='font-bold text-2xl p-3'>Skills</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <ul className="flex-1 p-4 border rounded-2xl shadow-md list-disc list-inside pl-5 sm:min-h-[180px] sm:h-full w-full">
            <p className="font-bold mb-4 text-center">Core Front-End Technologies</p>
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>Responsive Web Design (RWD)</li>
            <li>Cross-Browser Compatibility</li>
          </ul>
          <ul className="flex-1 p-4 border rounded-2xl shadow-md list-disc list-inside pl-5 sm:min-h-[180px] sm:h-full w-full">
            <p className="font-bold mb-4 text-center">Front-End Libraries</p>
            <li>React.js (Hooks, Context API, React Router)</li>
            <li>Redux / Zustand (State Management)</li>
            <li>Tailwind CSS</li>
          </ul>
          <ul className="flex-1 p-4 border rounded-2xl shadow-md list-disc list-inside pl-5 sm:h-full w-full">
            <p className="font-bold mb-4 text-center">Development Tools & Build Systems</p>
            <li>Vite</li>
            <li>NPM</li>
            <li>Git, GitHub</li>
          </ul>
        </div>
      </div>  
    </div>
  )
}

export default Home