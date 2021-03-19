import React, { Component } from 'react'

 class Sample extends Component {
    render() {
        return (
            <div>
                <h1>Hello Good morning</h1>
                <button>OnClick</button>
                <p>hai this is the sample project for react</p>
                <p> My name is {this.props.name} and My Father is {this.props.father}</p>
            </div>
        )
    }
}

export default Sample
