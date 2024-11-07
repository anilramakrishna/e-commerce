import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
function SingleProductpage(props) {
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
console.log(props.data)
    const Filterproduct = selectedproduct.length === 0 ? (props.data) : (props.data).filter((orange) => selectedproduct.includes(orange.brand))
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
                                        <input type='checkbox' onChange={() => companyHandler(phone.brand)} />
                                        {phone.brand}
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
                                    <Link to={`/${props.url}/${item.id}`} state={{data:Filterproduct}} >
                                        <div className='productDiv'>
                                            <img className='proImg' src={item.image} />
                                            
                                        </div>
                                    </Link>
                                    <div className=''>
                                        <p style={{ textAlign: 'center' }}>{item.brand},{item.model},{ item.id}</p>
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

export default SingleProductpage
