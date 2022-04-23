import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
    <div className='bg-dark text-light p-4'>
      <h3><Link className='p-4' to="/">Home</Link>All Images and Api provided by themoviedb.org</h3>
    </div>
    
  )
}

export default Header