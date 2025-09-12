import React from 'react'

const Card = ({header, title}) => {
  return (
      <div className=''>
          <div className="card h-100 border-0 rounded-4 py-4 px-5 overflow-hidden shadow-sm transition-shadow duration-300 bg-gray-900 text-start">
              <h1 className='text-white text-left'>{header}</h1>
              <p className="text-gray-700 rounded ">
                  {title}
              </p>
          </div>
      </div>
  );
}

export default Card
