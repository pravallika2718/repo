import React, { Component } from 'react'
import './Login.css'
import axios from 'axios'


 class Login extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 username:"",
                 password:"",
            };
        }
        handleusernamechange = event => {
            this.setState({
                username:event.target.value
                
            })
        }
        handlpasswordchange = event => {
           this.setState({
               password:event.target.value
           })
       }
       handlesubmit = event => {
        event.preventDefault();
        console.log(event.target.value)
        console.log(this.state)
        //alert(`${this.state.username} ${this.state.password}`)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
         .then(response =>{
             console.log(response)
         })
         .catch(error =>{
             console.log(error)
         })

    }
    render() {
        return (
            <div>
                <form  className="login" onSubmit = {this.handlesubmit}>
                    <h1>Login Form </h1>
                    <div>
                    <label>Username:</label><br /><br />
                    <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleusernamechange}/><br /><br />
                    </div>
                    <div>
                    <label>Password:</label><br /><br />
                    <input type="password" placeholder="password" value={this.state.password} onChange={this.handlpasswordchange}/><br /><br />
                    </div><br />
                    <div id="submit">
                    <button type="submit">Login</button> 
                    </div> 
                </form> 
            </div>
        );
    }
}

export default Login
