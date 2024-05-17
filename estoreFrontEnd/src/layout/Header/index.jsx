import { InputAdornment, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import USA from '../../assets/images/USA.png'
import { IoIosArrowDown } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { GrSearch } from "react-icons/gr";
import './style.css'

const Header = () => {
  return (
    <>
    <header>
      <div className='headerLeft'>
      <img className='USAimg' src={USA} alt="" />
      <p>USA</p>
      <IoIosArrowDown />
      <p>+777 23457886</p>
      </div>
      <ul className='headerRight'>
        <li>My account</li>
        <li>WishList</li>
        <li>Shopping</li>
        <li>Cart</li>
        <li>CheckOut</li>
      </ul>
    </header>
    <header className='headerBottom'>
      <h1>Estore<span>.</span></h1>
      <div>
        <ul className='routers'>
          <li>Home</li>
          <li>Form</li>
          <li>Latest</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='headerBottomRight'>
      <SlBasket className='iconBasket' />
        <TextField
        id="input-with-icon-textfield"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <GrSearch />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <button className='signIn'>SIGN IN</button>
      </div>
    </header>
    
    
    
    
    </>

  )
}

export default Header