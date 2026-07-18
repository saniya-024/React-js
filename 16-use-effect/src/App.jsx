import React from 'react'
import { useEffect } from 'react'

const App = () => {
  useEffect(function(){
    console.log('use effect is running');
  })
  

  return (
    <div>
      <h1>{num}</h1>
    <button onClick={()=>{

    }}>Click</button>
    </div>
  )
}

export default App
