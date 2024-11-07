import React from 'react'
import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'
import SingleProductpage from './SingleProductpage'
function Watchepage() {
        return (
        <SingleProductpage data={watchData} url='watch'/>
        )
}

export default Watchepage
