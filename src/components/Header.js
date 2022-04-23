import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/">
    <div className='bg-dark text-light'>All Images and Api provided by themoviedb.org</div>
    </Link>
  )
}

export default Header