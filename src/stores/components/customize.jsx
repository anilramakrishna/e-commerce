import React from 'react'
import { useState } from 'react'
import { mobileData } from '../data/mobiles'
function customize(props) {
    const [selectedproduct, setselectedproducted] = useState([])

    const companyHandler = (product) => {
        if (selectedproduct.includes(product)) {
            setselectedproducted(selectedproduct.filter(item => item !== product))
        }
        else {
            setselectedproducted([...selectedproduct, product])
        }
    }
    const Filterproduct = selectedproduct.length === 0 ? mobileData : mobileData.filter((orange) => selectedproduct.includes(orange.company))
  return (
      <>
          {
              props.data.map((phone) => {
                  return (
                      <div className='pro-input'>
                          <label>
                              <input type='checkbox' onChange={() => companyHandler(phone.company)} />
                              {phone.company}
                          </label>
                      </div>
                  )

              })
          }
      </>
  )
}
export default customize
