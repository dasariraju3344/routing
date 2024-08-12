import React from 'react';
import {useNavigate} from 'react-router-dom'

const FormSubmit = () => {

  const navigate = useNavigate();

  return (
    <div className='button'>
      <h1>Successfully Form is Submitted</h1>
      <button type="button" className="btn btn-info" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}

export default FormSubmit