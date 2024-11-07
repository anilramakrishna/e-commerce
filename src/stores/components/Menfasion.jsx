import React from 'react'
import { menData } from '../data/men'
function Menfasion() {
    const Fivemen = menData.slice(0, 5)
    return (
        <>
            <div className='proTitle'>
                <h3>Men Fashion</h3>
            </div>
            <div className='proSection'>
                {
                    Fivemen.map((item) => {
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

export default Menfasion
