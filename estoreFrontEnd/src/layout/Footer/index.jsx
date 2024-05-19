import React from 'react'
import './style.css'
import estoreImg from '../../assets/images/logo2_footer.png'
import { CiHeart } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
            <div>
                <img className='storeimg' src={estoreImg} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div>
                <ul>
                    <p>Quick Links</p>
                    <li>About</li>
                    <li>Offers & Discounts</li>
                    <li>Get Coupon</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                
                <ul>
                    <p>New Products</p>
                    <li>Woman Cloth</li>
                    <li>Fashion Accessorie</li>
                    <li>Man Accessories</li>
                    <li>Rubber made Toys</li>
                </ul>
            </div>
            <div>
                
                <ul>
                    <p>Support</p>
                    <li>Frequently Asked</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Report a Payment Issue</li>
                </ul>
            </div>
            </div>
            <div className='footerBtm flex justify-content-center mx-auto'>
            <p className='footerBottom'>Copyright ©2024 All rights reserved | This template is made with <CiHeart className='heart' /> by <span>Colorlib</span></p>
            <div className="icons">
            <div className='flex gap-2'>
            <FaTwitter />
            <FaFacebookF />
            <TbWorld />
            </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer