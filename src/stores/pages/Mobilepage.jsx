import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Productspage from './Productspage'
function Mobilepage() {
    return(
    <Productspage data={ mobileData} url='mobile' />
)}

export default Mobilepage
