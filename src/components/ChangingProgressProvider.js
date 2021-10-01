import React, { useState, useEffect } from 'react';



const ChangingProgressProvider = ({interval= 1000, children, values, text }) => {

const [valuesIndex, setValuesIndex] = useState(0)

let intervalId
useEffect(() => {
    intervalId = setInterval(() => {
        setValuesIndex(
            valuesIndex =>(valuesIndex + 1)
          )
          if(values){
           clearInterval(intervalId)
              console.log(values)
          }
    }, interval)

}, [interval, values])

  return(
      <>
          {[valuesIndex]}
    </>
  ) 
  
}

export default ChangingProgressProvider;




// import React from "react";

// class ChangingProgressProvider extends React.Component {
//   static defaultProps = {
//     interval: 1000
//   };

//   state = {
//     valuesIndex: 0
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length
//       });
//     }, this.props.interval);
//   }

//   render() {
//     return this.props.children(this.props.values[this.state.valuesIndex]);
//   }
// }

// export default ChangingProgressProvider;
