import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'
import Productspage from './Productspage'

function Computerpage() {
    
    return (
        < Productspage data = {computerData} url='computer' />
    )
}

export default Computerpage
