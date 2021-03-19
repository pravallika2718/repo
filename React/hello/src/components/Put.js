import React, { Component } from 'react'
import axios from 'axios'

 class Put extends Component {
    
    
        updateData(){
            const data =
        {
            "userId": "1",
            "id": "1",
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    
            componentDidMount()
            {
                axios.put('https://jsonplaceholder.typicode.com/posts/1',data)
                 .then(data => {
                     console.log(data)
                 })
                     
                
                 .catch(error => {
                     console.log(error)
                 })
            }
        }
        render() {
        return (
            <div>
                <button onClick={this.updateData}>click</button>
            </div>
        )
    }
}

export default Put
