import React, {useState, useRef, useEffect} from "react"

import {myStore} from "../../MyRedux/MyRedux"

//By new props, useState to update functional components
const CounterFn=(props)=>{
    const [title, setTitle] = useState("Counter Class")
    const [counter, setCounter] = useState(0)
    const [update,forceUpdate] = useState(false)

    //share the same state useRef
    const counterRef = useRef(counter)
    counterRef.current = counter

    const handleClick=()=>{
        // setCounter(preCounter=> preCounter+1)
        myStore.dispatch({type: 'counter/incremented'})
        forceUpdate(!update) // trigger update
        console.log("Click update", update)
    }
    const handleAlert = ()=>{
        setTimeout(()=>{
            alert(counterRef.current)
        }, 5000)
    }
    
    //did mount | will unmount
    useEffect(()=>{
       
        myStore.subscribe(()=>{  
            forceUpdate(!update)
        })
        // return ()=>{ console.log('will unmount')}
    }, [])

   
    //setState(prevState=>(...prevState, counter: prevState.counter+1))
    return (
            <section>
                 <header>{title}</header>
                 <p>Counter: {myStore.getState().value}</p>
                 <button onClick={handleClick}>Add</button> 
                 <button onClick={handleAlert}>Alert</button>
            </section>
    )
    
}

export default CounterFn