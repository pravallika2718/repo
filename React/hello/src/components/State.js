import React, { Component } from 'react'

class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"pravallika" ,
             password:"pra2709"
        }
    }
    
   render() {
       return (
           <div>
             {this.state.name} {this.state.password}
           </div>
       )
   }
}

export default State
