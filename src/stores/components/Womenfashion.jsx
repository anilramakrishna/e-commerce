import React from 'react'
import { womanData } from '../data/woman'
function Womenfashion() {
    const FiveWoman = womanData.slice(0, 5)
    return (
        <>
            <div className='proTitle'>
                <h3>Woman Fashion</h3>
            </div>
            <div className='proSection'>
                {
                    FiveWoman.map((item) => {
                        return (
                            <div className='Boxsection'>
                                <img className='imgSection' src={item.image} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Womenfashion
