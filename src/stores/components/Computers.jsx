import React from 'react'
import { computerData } from '../data/computers'
function Computers() {
    const FiveComputers = computerData.slice(0,5)
    return (
        <>
            <div className='proTitle'>
                <h3>Computers</h3>
            </div>
            
    <div className='proSection'>
                {
                    FiveComputers.map((item) => {
                        return (
                            <div className='Boxsection'>
                                <img className='imgSection' src={item.image}/>
                            </div>
                        )
                    })
      }
            </div>
        </>
  )
}

export default Computers
