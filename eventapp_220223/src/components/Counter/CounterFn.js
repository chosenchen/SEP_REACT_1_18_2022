import React, {useState, useRef, useEffect} from "react"
//By new props, useState to update functional components
const CounterFn=(props)=>{
    const [title, setTitle] = useState("Counter Class")
    const [counter, setCounter] = useState(0)
    //share the same state useRef
    const counterRef = useRef(counter)
    counterRef.current = counter

    const handleClick=()=>{
        setCounter(preCounter=> preCounter+1)
    }
    const handleAlert = ()=>{
        setTimeout(()=>{
            alert(counterRef.current)
        }, 5000)
    }
    
    //did mount | will unmount
    useEffect(()=>{
        console.log('did Mount')
        return ()=>{ console.log('will unmount')}
    }, [])

   
    //setState(prevState=>(...prevState, counter: prevState.counter+1))
    console.log(document.querySelector('section'))
    return (
            <section>
                 <header>{title}</header>
                 <p>{counter}</p>
                 <button onClick={handleClick}>Add</button> 
                 <button onClick={handleAlert}>Alert</button>
            </section>
    )
    
}

export default CounterFn