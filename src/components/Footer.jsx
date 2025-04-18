import React from "react"
import "./Footer.css"
import "./contacts"
import "./CustomerCare"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h5>Saima Akter, Tasfia Tabassum</h5>
            <p>CSE Undergraduate Student at University of Dhaka</p>
            {/* <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div> */}
          </div>

          <div className='box'>
            <Link to = "/AboutUs"><h2>About Us</h2></Link>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
          <Link to = "/CustomerCare"><h2>Customer Care</h2></Link>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
          <Link to = "/contact"><h2>Contact Us</h2></Link>
            <ul>
              <li>Dhaka, Bangladesh</li>
              <li>Email: abcd@gmail.com</li>
              <li>Phone: 017++++++++</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer