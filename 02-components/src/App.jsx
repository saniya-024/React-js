import React from 'react'
import Card from './component/Card'
import Navbar from './component/Navbar'


const App = () => {
  return (
    <div className='parent'>
    
      
      <Card user='ammii' age={18} />
      <Card user='SAmm' age={18} />
      <Navbar/>     </div>
  
    
  )
}


export default App
