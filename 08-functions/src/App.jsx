import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('button is clicked');
  }
  
  return (
    <div>
      <input type="text" placeholder='Enter Name' />
    </div>
  )
}

export default App
