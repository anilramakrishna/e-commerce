import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { useCart } from '../context/CartContext'


function Singlecomputerpage() {
    const { id } = useParams()
    const computer = computerData.find(computer => computer.id === id)
    const { addItem } = useCart()
    return (
        <>
            <Navbar />
            <div className='mainPage'>
                <div className='singlePage'>
                    <img src={computer.image} />
                </div>
                <div className='detailsDiv'>
                    <h2>Company:{computer.company}</h2>
                    <h2>Brand:{computer.company}</h2>
                    <h3>Description:{computer.description}</h3>
                    <button onClick={() => { addItem(computer) }}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Singlecomputerpage
