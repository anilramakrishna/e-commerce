import React from 'react'
import { furnitureData } from '../data/furniture'
import Productspage from './Productspage'
import SingleProductpage from './SingleProductpage'
function Furniturespage() {
  return (
      <SingleProductpage data={ furnitureData} url='furniture'/>
  )
}

export default Furniturespage
