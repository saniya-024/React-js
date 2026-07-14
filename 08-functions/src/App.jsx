import React from 'react'

const App = () => {
  function inputChanging(){
console.log('input is changed');
  }
  
  
  return (
    <div>
      <input onChange={function(elem) {
        console.log(elem.target.value);

      }}
        
        type="text" 
        placeholder='Enter Name' />
    </div>
  )
}

export default App
