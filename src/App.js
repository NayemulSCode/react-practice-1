
import { useState } from 'react';
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
export default App;