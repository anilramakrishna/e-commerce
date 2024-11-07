import React from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'
import Productspage from './Productspage'
import SingleProductpage from './SingleProductpage'

function Speakerpage() {
    return (
        <SingleProductpage data={ speakerData} url='speaker'/>
    )
}

export default Speakerpage
