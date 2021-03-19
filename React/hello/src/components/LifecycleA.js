import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "pravallika"
        }
        console.log(" A constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log(" A getDerived called")
        return null
    }
    componentDidMount(){
        console.log(" A component did mount")
    }

    shouldComponentUpdate(){
        console.log("A should component update")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(" A get snapshot before update method")
        return null

    }
    componentDidUpdate(){
        console.log("A component did update method")
    }
    changeState = () => {
        this.setState ({
            name:"vadranam"
        })
    }
    
    render() {
        console.log("  A render metod")
        return (
            <div>
            <div>Lifecycle</div>
            <button onClick={this.changeState}>change state.</button>
            <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA

