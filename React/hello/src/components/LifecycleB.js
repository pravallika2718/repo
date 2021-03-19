import React, { Component } from 'react'



 class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "pravallika"
        }
        console.log(" B constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log(" B getDerived called")
        return null
    }
    componentDidMount(){
        console.log(" B component did mount")
    }

    shouldComponentUpdate(){
        console.log("B should component update")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(" B get snapshot before update method")
        return null

    }
    componentDidUpdate(){
        console.log("B component did update method")
    }
    
    render() {
        console.log("  B render metod")
        return (
            <div>Lifecycle</div>
        )
    }
}

export default LifecycleB

