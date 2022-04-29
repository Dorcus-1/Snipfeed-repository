import React from 'react'
import '../App.css'
import './navBar.css'

export default function Navbar() {

    return (
      <div className='navbar'>
          <ul>
             <li className='logo'>logo</li>
              <li className='links'> <span>
              <i class="fa-solid fa-folder-open"></i>
                </span> Links</li>
              <li className='links'> <span>
              <i class="fa-solid fa-pen-ruler"></i>
                </span> Design</li>
          </ul>
          <div className='link'>
            <p>https://pin.it/3pfYY33</p>
          <button>Copy</button>
          </div>
      </div>
    )

}

