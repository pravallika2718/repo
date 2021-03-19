import React from 'react'

function Welcome(props){
    return (
    <div>
    <h1> Hai welcome to react </h1> 
    <h2>My name is {props.name} {props.surname}</h2>
    </div>
    )
}

export default Welcome