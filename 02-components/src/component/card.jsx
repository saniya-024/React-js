import React from 'react'

const Card=(props)=> {
    console.log(props.user,props.age);
  return <div className="Card">
      <h1>Sannaa</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ab sit. Culpa, aut dolorem et animi autem similique molestiae nesciunt quo voluptatem obcaecati assumenda deserunt, ea, neque voluptas quaerat consequatur.</p>
      <button>View Profile</button>
      </div>
  
}

export default Card
