import React from 'react'
import { furnitureData } from '../data/furniture'
function Furniture() {
    const Fivefurniture = furnitureData.slice(0, 5)
    return (
        <>
            <div className='proTitle'>
                <h3>Furnitures</h3>
            </div>            <div className='proSection'>
                {
                    Fivefurniture.map((item) => {
                        return (
                            <div className='Boxsection'>
                                <img src={item.image} className='imgSection' />
                            </div>
                        )
                    })
                }

            </div>

        </>
    )
}

export default Furniture
