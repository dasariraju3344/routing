import React from 'react';
import {useNavigate} from 'react-router-dom';

const Error = () => {

  const navigate = useNavigate();
  
  return (
    <div className='button'>
      <h1>404 Data not Found</h1>
      <button type="button" className="btn btn-info" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}

export default Error