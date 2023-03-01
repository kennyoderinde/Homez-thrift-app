import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css"


export default function Footer() {
  return (
    <React.Fragment>
        <div className='footer flex'>
            <div className='block'>
                <h2 className='title1'> Popular Categories</h2>
                <ul>
                    <Link to="/" className='noul'><li>Mobile Phone</li></Link>
                    <Link to="/" className='noul'><li>Kitcheneries</li></Link>
                    <Link to="/" className='noul'><li>Toys</li></Link>
                    <Link to="/" className='noul'><li>Refrigerator</li></Link>
                    <Link to="/" className='noul'><li>Electronics</li></Link>
                </ul>
                
            </div>
            <div className='block'>
            <h2 className='title1'> Trending Searches</h2>
                <ul>
                    <Link to="/" className='noul'><li>Mobile Phone</li></Link>
                    <Link to="/" className='noul'><li>Kitcheneries</li></Link>
                    <Link to="/" className='noul'><li>Toys</li></Link>
                    <Link to="/" className='noul'><li>Refrigerator</li></Link>
                    <Link to="/" className='noul'><li>Electronics</li></Link>
                </ul>
            </div><div className='block'>
                <h2 className='title2'> About Us</h2>
                <ul>
                    <Link to="/" className='noul'><li>Facebook</li></Link>
                    <Link to="/" className='noul'><li>Instagram</li></Link>
                    <Link to="/" className='noul'><li>Pinterest</li></Link>
                    <Link to="/" className='noul'><li>WhatsApp</li></Link>
                </ul>
            </div><div className='block'>
                <h2 className='title2'> Homez</h2>
                <ul>
                    <Link to="/" className='noul'><li>Shipping & Returns</li></Link>
                    <Link to="/" className='noul'><li>Payment Method</li></Link>
                    <Link to="/" className='noul'><li>Contact</li></Link>
                    <Link to="/" className='noul'><li>Store Policy</li></Link>
                    <Link to="/" className='noul'><li>Content</li></Link>
                </ul>
            </div>
        </div>
        <div className='last'>
        <p>@ 2023 by Homez. Proudly craeted with WTF & Kehinde Oderinde </p>
        </div>
    </React.Fragment>
  )
}
