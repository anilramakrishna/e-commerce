import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
function Productspage(props) {
    const [selectedproduct, setselectedproducted] = useState([])
    const companyHandler = (product) => {
        console.log(product)
        if (selectedproduct.includes(product)) {
            setselectedproducted(selectedproduct.filter(item => item !== product))
            console.log(selectedproduct)
        }
        else {
            setselectedproducted([...selectedproduct, product])
            console.log(selectedproduct, product)
        }
    }

    const Filterproduct = selectedproduct.length === 0 ? (props.data) : (props.data).filter((orange) => selectedproduct.includes(orange.company))
    console.log(Filterproduct, selectedproduct)
    return (
        <>
            <Navbar />
            <div className='fullPage'>
                <div className='pro-selected'>
                    {
                        (props.data).map((phone) => {
                            return (
                                <div className='pro-input'>
                                    <label>
                                        <input type='checkbox' onChange={() => companyHandler(phone.company)} />
                                        {phone.company}
                                    </label>
                                </div>
                            )

                        })
                    }

                </div>
                <div className='proPage'>
                    {
                        Filterproduct.map((item) => {
                            return (
                                <div>
                                    <Link to={`/${props.url}/${item.id}`}>
                                        <div className='productDiv'>
                                            <img className='proImg' src={item.image} />

                                        </div>
                                    </Link>
                                    <div className=''>
                                        <p style={{ textAlign: 'center' }}>{item.company},{item.model}</p>
                                    </div>

                                </div>

                            )
                        })
                    }

                </div>
            </div>
        </>

    )
}

export default Productspage
