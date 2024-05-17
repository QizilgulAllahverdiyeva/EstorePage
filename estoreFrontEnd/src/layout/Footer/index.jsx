import React from 'react'
import './style.css'
import estoreImg from '../../assets/images/logo2_footer.png'
const Footer = () => {
    return (
        <footer>
            <div>
                <img src={estoreImg} alt="" />
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
        </footer>
    )
}

export default Footer