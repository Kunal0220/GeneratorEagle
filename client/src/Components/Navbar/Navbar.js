import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div  className='navbar d-flex p-4'>



        <div>
        <ul className='navbar-li '>
            <li className='px-5'>Home</li>
            <li className='px-5'>About</li>
            <li className='px-5'>Generator</li>

        </ul>
        </div>
        <div>
        <ul className='navbar-li d-flex m-1 '>
            <li className='px-5'>SignIn</li>
            <li className='px-3 signup'>SignUp</li>
        </ul>
        </div>
       


    </div>
  )
}

export default Navbar