import React from 'react';

function Homepage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-20 py-20 md:py-32">
      
     
      <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center md:text-left leading-relaxed mb-10 md:mb-0">
        Hello, I am <span className="text-blue-600">Om Patil.</span> <br />
        <span className="text-lg sm:text-xl md:text-2xl font-normal">
          From K.K. Wagh Polytechnic
        </span>
      </div>

     
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <div className="h-80 w-80 sm:h-48 sm:w-48 md:h-100 md:w-100 aspect-square rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <img src="../p1.jpg" alt="Om Patil" className="w-full     h-full object-cover" />
        </div>
      </div>

    </div>
  );
}

export default Homepage;
