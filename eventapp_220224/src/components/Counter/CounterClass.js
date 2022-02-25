import React from "react"
import {myStore} from "../../MyRedux/MyRedux"
class CounterClass extends React.Component{
    state = {
        title: "Counter Class",
        counter: 0
    }

    componentDidMount=()=>{
        myStore.subscribe(()=>{
            this.forceUpdate()
        })
    }

    handleClick=()=>{
        // this.setState({counter: this.state.counter+1})
        myStore.dispatch({type: 'counter/incremented'})
        
    }
    handleAlert=()=>{
       setTimeout(()=>{
           alert(this.state.counter)
       }, 5000)
    }


    render(){
        return (
            <section>
                 <header>{this.state.title}</header>
                 <p>Counter: {myStore.getState().value}</p>
                 <button onClick={this.handleClick}>Add</button> 
                 <button onClick={this.handleAlert}>Alert</button> 
            </section>
        )
    }
}

export default CounterClass