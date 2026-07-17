import React from 'react'

const App = () => {
  function getData(){
    const data=fetch('https://jsonplaceholder.typicode.com/todos/1')

    console.log(data);
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
