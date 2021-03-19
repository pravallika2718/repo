import React, { Component } from 'react'
import './Form.css'

 class Form extends Component {
     constructor(props) {
         super(props)
     this.handlesubmit = this.handlesubmit.bind(this);
         this.state = {
              username:"",
              password:"",
              email:"",
              topic:"react",
              gender:"",
              interests:""
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
        handleemailchange = event => {
            this.setState({
                email:event.target.value
            })
        }
        handletopicchange = event => {
            this.setState({
                topic:event.target.value
            })
        }
        handlegenderchange = event => {
            this.setState({
                gender:event.target.value
            })
        }
        handleinterestschange = event => {
            this.setState({
                interests:event.target.value
            })
        }
        handlesubmit = event => {
            event.preventDefault();
            console.log(event.target.value)
            //alert("Your details are: " + this.state.username +" " + this.state.password + " " + this.state.email + " " +this.state.topic + " " + this.state.gender + " " +this.state.interests)
            alert(`${this.state.username} ${this.state.password} ${this.state.email} ${this.state.topic} ${this.state.gender} ${this.state.interests}`)
        }
     
        render(){
            return (
            <form  className="form" onSubmit = {this.handlesubmit}>
                <div>
                    <label>Username:</label><br /><br />
                    <input type="text" value={this.state.username} onChange={this.handleusernamechange}/><br /><br />
                </div>
                <div>
                    <label>Password:</label><br /><br />
                    <input type="password" value={this.state.password} onChange={this.handlpasswordchange}/><br /><br />
                </div>
                <div>
                    <label>Email:</label><br /><br />
                    <input type="Email" value={this.state.email} onChange={this.handleemailchange}/><br /><br />
                </div>
                <div>
                    <label>Topic:</label><br /><br />
                    <select value={this.state.topic} onChange={this.handletopicchange}>
                        <option value="react">React</option>
                        <option value="node">Node</option>
                        <option value="Python">Python</option>
                    </select>
                </div><br /><br />
                <div>
                    <label>Gender:</label><br /><br />
                    <input type="radio" name="gender" value={this.state.gender} onChange={this.handlegenderchange}/>
                    <label>male </label><br />
                    <input type="radio" name="gender" value={this.state.gender} onChange={this.handlegenderchange}/>
                    <label>Female </label><br />
                    <input type="radio" name="gender" value={this.state.gender} onChange={this.handlegenderchange}/>
                    <label>Others </label><br />
                </div><br /><br />
                <div>
                <label>Interests:</label><br /><br />
                <input type="checkbox" name="interests" value={this.state.interests} onChange={this.handleinterestschange}/>
                <label>front-end</label><br />
                <input type="checkbox" name="interests" value={this.state.interests} onChange={this.handleinterestschange}/>
                <label>Back-end</label><br />
                <input type="checkbox" name="interests" value={this.state.interests} onChange={this.handleinterestschange}/>
                <label>Databases</label>
                </div><br />
                <div id="submit">
                <button type="submit">Submit</button> 
                </div>  
                      
            </form>
        );
    }
}
export default Form

