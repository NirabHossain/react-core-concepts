import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:'Photoshop',price:'$90.99'},
    {name:'Mobile stand',price:'$70.99'},
    {name:'Illustrator',price:'$60.99'}    
  ];
  const friends=['Nirab','Nur Alam', 'Sohan'];

  return (
    <div className="App">
      <header className="App-header">        
        <Counter></Counter>
        <Users></Users>

        <ul>
          {friends.map(friend => <li>{friend}</li>)}
        </ul>
  
        {products.map(product=><Product product={product}></Product>)}
  
      </header>
    </div>
  );
}

// function Person(props){
//   const personStyle={border:"2px solid red",margin: "10px"};
//   return (<div style={personStyle}>
//               <h1>My Name: {props.name}</h1>
//               <h3>My profession: {props.job}</h3>
//           </div>)
// }


function Product(props){
  const prodStyle={
    border:"1px solid gray",
    borderRadius:'5px',
    backgroundColor:'lightgray',
    // height: '250px',
    width: '200px',
    margin: '5px',
    paddingBottom: '10px',
    float: 'left'
  }
  return (
    <div style={prodStyle}>
      <h6>I am {props.product.name}</h6>
      <p>{props.product.price}</p>
      <button>By now</button>
    </div>

  );
}


function Counter(){
  const [count, setCount]=useState(10);
  return(
    <div>
      <h4>Count: {count}</h4>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}


function Users(){
  const [users, setUsers]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {users.map(user=><li>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default App;
