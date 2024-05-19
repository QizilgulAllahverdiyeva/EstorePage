import { InputAdornment, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import USA from '../../assets/images/USA.png'
import { IoIosArrowDown } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { GrSearch } from "react-icons/gr";
import './style.css'
import { NavLink } from 'react-router-dom';
import estoreImg from '../../assets/images/logo2_footer.png'
import { IoIosMenu } from "react-icons/io";


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
      <img className='storeimg' src={estoreImg} alt="" />
      <div>
        <ul className='routers'>
          <li><NavLink style={{textDecoration:"none"}} to={"/"} className={(nav)=>{
                 return  nav.isActive ? "active" : "" }}>Home</NavLink></li>
          <li><NavLink style={{textDecoration:"none"}} to={"/form"} className={(nav)=>{
                 return  nav.isActive ? "active" : "" }}>Form</NavLink></li>
          <li>Latest</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='headerBottomRight'>
      <div className="  justify-center">
  <div className="relative py-2">
    <div className="t-0 absolute left-3">
      <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
        0
      </p>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="file: mt-4 h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  </div>
 
</div> 
<IoIosMenu className='menu' />
        <TextField className='inputtt'
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