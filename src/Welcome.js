import React from 'react'

function Welcome(props) {
    const Person = [
        {
            name: 'Nayemul', 
            ob:'dev'
        },
        {
            name:'Mona',
            job:'Student'
        },
    ]
    const styleComponent = {
        border: "1px solid black",
        margin: "10px"
    }
    return (
        <div style={styleComponent}>
            <h1>Hello,{props.name}</h1>
            {/* <p>Job: {person.job}</p> */}
        </div>
    )
}

export default Welcome
