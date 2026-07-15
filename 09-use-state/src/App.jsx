import React, { use, useState, useSyncExternalStore } from 'react'

const App = () => {
 const [num, setNum]= useState(20)
 const [username,setUsername] =useState('sana')
function changeNum(){
  setNum(100)
}
  return (
    <div>
    <h1>value of num is{num}<br />value of user is{username}</h1>
    <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App

