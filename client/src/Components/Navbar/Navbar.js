import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div  className='navbar d-flex p-4'>



        <img className='NavbarImage' src={require('../imgs/logo.png')} alt="" />
        <div>
        <ul className='navbar-li '>
            <li className='px-5'> <Link id='LinkTag' to='/'> Home</Link></li>
            <li className='px-5'> <Link id='LinkTag'  to='/about' > About </Link></li>
            <li className='px-5'> <Link id='LinkTag'  to='/generator' >Generator </Link></li>

        </ul>
        </div>
       


    </div>
  )
}

export default Navbar