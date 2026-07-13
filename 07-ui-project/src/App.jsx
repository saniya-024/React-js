import React from 'react'
import Section1 from './components/Section1.jsx'
import Section2 from './components/Section2.jsx'

const App = () => {
  const users=[
   
   {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Satisfied'
  }, 
   {
    img:'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
    intro:'',
    tag:'Underserved'
  },
  {
    img:'https://media.istockphoto.com/id/1124239071/photo/happy-businesswoman-stock-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=MhVefjMXfzn4YKKQnOZOdu4jw471nfq7S4cudwbaP3I=',
    intro:'',
    tag:'Underbanked'
  },  
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
      
      
    </div>
  )
}

export default App
