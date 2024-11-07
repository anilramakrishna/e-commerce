import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import Navbar from '../components/Navbar'
function Cart() {
    const { cartItems, removeCartItem,totalPrice } = useCart()
    const [cost, setcost] = useState(0)
    return (
        <>
            <Navbar />
            <h2 style={{ textAlign: 'center' }}>Cart</h2>
            {cartItems.length === 0 ? <p style={{textAlign:'center',fontSize:'20px'}}>The cart is Empty</p> :
                <div className='mainDiv'>
                
               
                    <div className='fullCart'>
                        {
                            cartItems.map((item) => {
                                return (
                                    <div className='cartDiv'>
                                        <div className='imgDiv'>
                                            <img src={item.image} />
                                        </div>
                                        <div className='details'>
                                            <p>Details</p>
                                            <h5>{item.company},{item.model}</h5>
                                        </div>
                                        <div className='price'>
                                            <p>Price</p>
                                            Rs.{item.price}
                                        </div>
                                        <div className='removebtn'>
                                            <button onClick={() => removeCartItem(item)}>Remove</button>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div className='totalamount'>
                        TotalAmount:{totalPrice}
                        <button className='buybtn'>Buy Now</button>
                    </div>
                  
                </div>
            }
        </>
       
    )
}

export default Cart
