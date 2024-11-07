import React from 'react'
import { watchData } from '../data/watch'
function Watches() {
  const FiveWatches = watchData.slice(0, 5)
  return (
    <>
      <div className='proTitle'>
        <h3>Watches</h3>
      </div>
      <div className='proSection'>
        {
          FiveWatches.map((item) => {
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

export default Watches
