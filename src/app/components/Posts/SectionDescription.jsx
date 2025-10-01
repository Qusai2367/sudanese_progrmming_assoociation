import React from 'react'

const SectionDescription = ({title}) => {
  return (
      <div className='section-header'>
        <h2 className="text-white display-6 fw-bold lh-tight px-4 pb-4 pt-5">
          {title}
      </h2>
      </div>
  );
}

export default SectionDescription
