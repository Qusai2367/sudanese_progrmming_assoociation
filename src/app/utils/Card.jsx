import React from 'react'

const Card = ({header, title}) => {
  return (
      <div className='experience-grid'>
          <div className="service-card mx-3">
              <h1 className='section-header'>{header}</h1>
              <p className="text-gray-700 rounded ">
                  {title}
              </p>

          </div>
      </div>
  );
}

export default Card
