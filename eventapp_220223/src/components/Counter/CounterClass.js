import React from "react"
class CounterClass extends React.Component{
    state = {
        title: "Counter Class",
        counter: 0
    }
    handleClick=()=>{
        this.setState({counter: this.state.counter+1})
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
                 <p>{this.state.counter}</p>
                 <button onClick={this.handleClick}>Add</button> 
                 <button onClick={this.handleAlert}>Alert</button> 
            </section>
        )
    }
}

export default CounterClass