import React from 'react'

function Welcome(props) {
    const person = [
        {
            name: 'Nayemul', 
            job:'dev'
        },
        {
            name:'Mona',
            job:'Student'
        },
        {
            name:'Khusbo',
            job:'Student'
        },
        
    ]
    const styleComponent = {
        border: "1px solid black",
        margin: "10px"
    }
    const personName = {
        
    }
    return (
        <div style={styleComponent}>
            <ul>
                {
                    person.map(pname => <li>{pname.name} {pname.job}</li>)  
                }
            </ul>
        </div>
    )
}
export default Welcome
