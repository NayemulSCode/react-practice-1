
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
    <Person name={persons[0].name} job={persons[0].job} salary={persons[0].salary} />
    <Person name={persons[1].name} job={persons[1].job} salary={persons[1].salary} />
    <Person name={persons[2].name} job={persons[2].job} salary={persons[2].salary} />
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
     <Welcome />
     <Welcome />

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
  return(
    <div style={personsStyle}>
      <h1>{props.name}</h1>
      <h3>{props.job}</h3>
      <p>{props.salary}</p>

    </div>
  )
}

export default App;
