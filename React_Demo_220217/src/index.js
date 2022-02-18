import React from 'react';
import ReactDOM from 'react-dom';
import MyReactDOM from './MyReact/MyReactDOM';
import MyReact from './MyReact/MyReact';
import './index.css';

class MyTitle extends MyReact.Component {
  constructor(props){
     super(props) //help you to invoke the constructor of React.Component
     //without the constructor, it will use React.Component's constructor
  }

  render() {
    return (
        <h1>{this.props.title}</h1>
    )
  }
}

class MyApp extends MyReact.Component {
  state={
    counter: 0
  }

  handleAdd=()=>{
   // Add callback function to add counter
   //Define setState is async, parameters is callback function
    this.setState((preState)=>
   {return {counter: this.state.counter + 1}})
   this.setState((preState)=>
   {return {counter: this.state.counter + 1}})
  }
    //  console.log(this)
    //  this.setState({counter: this.state.counter+1})
    //  this.setState({counter: this.state.counter+1})
  

  render() {
    return (
    <section 
        className='my-section'
        onClick={this.handleAdd} 
        id="my" style={{color: 'red'}} onClick={() => console.log('Hello')}>
      <MyTitle title={this.props.title} />
      <header>{this.props.title}</header>
      <h1>
       <span style={{color: 'red'}}>Counter: {this.state.counter}</span>
      </h1>
      <button onClick={this.handleAdd}>Add</button>
    </section>
    )
  }
}
//MyApp is a class (function) | <MyApp /> is an object ---> convert to js, react.createElement, return detailedHtml
//react element and real element
//<MyApp /> is React.createElement(Myapp, {})


MyReactDOM.render(<MyApp title="Panda" />, document.getElementById('root'))

