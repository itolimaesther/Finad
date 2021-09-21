import React, { useState, useEffect } from 'react';



const ChangingProgressProvider = ({ interval = 1000, children, values }) => {

const [valuesIndex, setValuesIndex] = useState([])

let valb = (valuesIndex + 1) % values.length

useEffect(() => {
    setInterval(() => {
        setValuesIndex(
            {valuesIndex: {valb}}
          )
    })
}, [interval, valb])


  return(
    //   <>
      
          children(values, valuesIndex)
    
    
  ) 
    
  
}

export default ChangingProgressProvider;