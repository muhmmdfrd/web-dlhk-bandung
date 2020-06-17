import React from 'react';

const NotFound = () => {
  return (
    <div className='container-fluid'>
      <div className='text-center mt-5'>
        <div className='error mx-auto' data-text='404'>
          404
        </div>
        <p className='lead text-gray-800 mb-5'>Page Not Found</p>
        <a href='/dashboard'>&larr; Back to Dashboard</a>
      </div>
    </div>
  );
};

export default NotFound;
