import React from 'react'
import axios from 'axios'

const App = () => {
  const getData=async()=> {

 const response= await axios.get('https://dummyjson.com/users')
 console.log(response);
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
