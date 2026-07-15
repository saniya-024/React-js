import React, { useState } from 'react'

const App = () => {
  const[num, setNum]= useState(2)
  function increaseNum(){
    setNum(20)

  }
function decreaseNum(){
  setNum(10)

}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increse</button>
      <button onClick={decreaseNum}>decrease</button>
    </div>
  )
}

export default App
