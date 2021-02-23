
import { useEffect, useState } from 'react';
import './App.css';
import Welcome from './Welcome'
function App() {
  const persons =[
    {
      name:"nayemul",
      job:'Dev',
      salary:50000
    },
    {
      name:"MOna",
      job:'Student',
      salary:40000
    },
    {
      name:'Fayal',
      job:'Business Man',
      salary:100000
  }
  ]

  return (
    <div className="App">
    <Person person={persons[0]} />
    <Person person={persons[1]} />
    <Person person={persons[2]} />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <Welcome  />
     <Increment />
     <Users />
    </div>
  );
}

function Person(props){
  const personsStyle ={
    border:'2px solid black',
    borderRadius:'5px',
    width:'200px',
    height:'200px',
    margin:'5px',
    float:'left'
  }
   const {name,job,salary} = props.person;
  return(
    <div style={personsStyle}>
      <h1>{name}</h1>
      <h3>{job}</h3>
      <p>{salary}</p>

    </div>
  )
}
// use state
function Increment(){
  const [count, setCount] = useState(0);
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
//useEffect data load from api
function Users(){
  const userStyle = {
    border:'2px solid black',
    borderRadius:'10px',
    boxShadow:'0px 5px 8px',
    padding:'10px',
    width:'400px',
    float:'left',
    margin:'30px'
  }
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  
  return(
    <div>
      <h3>Total User: {users.length}</h3>
      {
        <div >
          {users.map(user =><div style={userStyle}>
              <h3>Name: {user.name}</h3> 
              <p><span style={{fontWeight:'bold'}}>Email: </span>{user.email}</p>
            </div>
          )}
        </div>
      }
    </div>
  )
}
export default App;