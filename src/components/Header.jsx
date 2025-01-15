import React from 'react'
import nintendo from "/assets/nintendo.svg"
import 'boxicons'
import Boxicons from 'boxicons'

const Header = () => {
  return (
    <>
      <header className='flex justify-between border-b-lightGrey border-b ' >
        <div className='flex'>
          <div className='flex'>
            <img src={nintendo} className='bg-red p-3' alt="" />
            <input type="text" placeholder='search' />
          </div>

            <div className='p-2'>
              <select name="" id="">
                  <option value="">All categories</option>
                  <option value="">Games</option>
                  <option value="">Hardware</option>
                  <option value="">Merchandise</option>
                  <option value="">News and Events</option>
                  <option value="">Support </option>
              </select>

            </div>
          

        </div>

        <div >
            <ul className='flex gap-3 p-2' >
             
              <div className='flex gap-1'>
              <box-icon name="message-alt" type="solid"></box-icon>
                <li>Support</li>
                </div>

                <div className='flex gap-1'>
                <box-icon name="heart" type="solid"></box-icon>

                <li>WishList</li>
                </div>
                
                <div className='flex gap-1'>
              <box-icon name="cart" type="solid"></box-icon>

                  <li>Cart</li>

                </div>
                
                <div className='flex gap-1'>
              <box-icon name="user" type="solid"></box-icon>
                  <li>Log in /Sign up</li>
                </div>
            </ul>
        </div>
        

      </header>

        <nav className='border-b-lightGrey border-b p-3'>
            <ul className='flex justify-center gap-3'>
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