import React from 'react'
import { speakerData } from '../data/speaker'
function Speakers() {
    const Fivespeakers = speakerData.slice(0, 5)
    return (
        <>
            <div className='proTitle'>
                <h3>Speakers</h3>
            </div>
            <div className='proSection'>
                {
                    Fivespeakers.map((item) => {
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

export default Speakers
