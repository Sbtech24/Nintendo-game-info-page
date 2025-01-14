import React from 'react'
import nintendo from "/assets/nintendo.svg"

const Header = () => {
  return (
    <>
      <header className='bg-red '>
        <div>
            <img src={nintendo} alt="" />
            <input type="text" placeholder='search' />
            <select name="" id="">
                <option value="">Games</option>
                <option value="">Hardware</option>
                <option value="">Merchandise</option>
                <option value="">News and Events</option>
                <option value="">Support </option>
            </select>


        </div>

        <div>
            <ul>
                <li>Support</li>
                <li>WishList</li>
                <li>Cart</li>
                <li>Log in /Sign up</li>
            </ul>
        </div>
        

      </header>

        <nav>
            <ul>
                <li>My Nintendo Store </li>
                <li>Games</li>
                <li>Nintendo Switch</li>
                <li>News & Events </li>
                <li>Play Nintendo</li>
                
            </ul>
        </nav>

       
    </>
  
     
  )
}

export default Header