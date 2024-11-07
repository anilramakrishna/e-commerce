import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Navbar from '../components/Navbar'
function SingleProduct() {
    const location = useLocation()
    const { data } = location.state || {}
    console.log(data)
    const { addItem } = useCart()
    const { id } = useParams()
    const product = (data).find((item) => {
        return String(item.id) === id
    })
    console.log(product.image)
    return (
        <>
            <Navbar />
            <div className='mainPage'>
                <div className='singlePage'>
                    <img src={`${'http://localhost:3000'}/${product.image}`} />
                </div>
                <div className='detailsDiv'>
                    <h2>Company:{product.company}</h2>
                    <h2>Brand:{product.brand}</h2>
                    <h2>Rs:{product.price}</h2>
                    <h3>Description:{product.description}</h3>
                    <button onClick={() => addItem(product)}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default SingleProduct
