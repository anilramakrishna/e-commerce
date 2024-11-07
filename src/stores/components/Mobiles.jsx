import React from 'react'
import { mobileData } from '../data/mobiles'
export default function mobiles() {
    const Fivemobiles = mobileData.slice(0, 5)
    return (
        <>
            <div className='proTitle'>
                <h3>Mobiles</h3>
            </div>
            <div className='proSection'>
                {
                    Fivemobiles.map((item) => {
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
