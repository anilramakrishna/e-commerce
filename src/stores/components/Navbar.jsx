import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
function Navbar() {
    const {cartItems}=useCart()
    return (
        <>
            <div className="navbar-section">
                <div className='navSection'>
                    <div className="title">
                        <h2>Emart</h2>
                    </div>
                    <div className="search">
                        <input type='text' placeholder='search' />
                    </div>
                    <div className="user">
                        <div className="user-detail">
                            <Link to={'/login'} style={{ textDecoration: 'none',color:'white' }}>
                                SignIN/SignUP
                            </Link>
                        </div>
                        <div className="cart">
                            <Link to='/cart' style={{ textDecoration: 'none', color: 'white' }}>Cart<span style={{fontSize:'20px'}}>{cartItems.length}</span></Link>
                        </div>
                    </div>
                </div>
                <div className="subMenu">
                    <ul>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <li>Home</li>
                        </Link>
                        <Link to='/mobiles' style={{ textDecoration: 'none' }}>
                            <li>Mobiles</li>
                        </Link>
                        <Link to='/computers' style={{ textDecoration: 'none' }}>
                            <li>Computers</li>
                        </Link>
                        <Link to='/speakers' style={{ textDecoration: 'none' }}>
                            <li>Speakers</li>
                        </Link>
                        <Link to='/watches' style={{ textDecoration: 'none' }}>
                            <li>Watches</li>
                        </Link>
                        <Link to='/menfashion' style={{ textDecoration: 'none' }}>
                            <li>Men Fashion</li>
                        </Link>
                        <Link to='/womanfashion' style={{ textDecoration: 'none' }}>
                            <li>Woman Fashion</li>
                        </Link>
                        <Link to='/furnitures' style={{ textDecoration: 'none' }}>
                            <li>Furnitures</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
