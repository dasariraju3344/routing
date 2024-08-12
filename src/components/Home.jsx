import React from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()

  const handelOnClick = () => {
    navigate('/submit')
  }

  return (
    <>
      <h2>Home</h2>
      <div className='button'>
        <button type="button" className="btn btn-info" onClick={handelOnClick}>Submit</button>
      </div>
    </>
  )
}

export default Home;