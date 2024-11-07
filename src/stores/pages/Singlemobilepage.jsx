import React from 'react'
import { useParams } from 'react-router-dom'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { useCart } from '../context/CartContext'

function Singlemobilepage() {
    const { addItem } = useCart()
    const { id } = useParams()
    const product = mobileData.find((item) => {
        return item.id === id
    })
    return (
        <>
            <Navbar />
            <div className='mainPage'>
                <div className='singlePage'>
                    <img src={product.image} />
                </div>
                <div className='detailsDiv'>
                    <h2>Company:{product.company}</h2>
                    <h2>Brand:{product.company}</h2>
                    <h2>Rs:{ product.price}</h2>
                    <h3>Description:{product.description}</h3>
                    <button onClick={()=>addItem(product)}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Singlemobilepage
