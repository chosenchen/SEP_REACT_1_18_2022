import React from "react"
import MyReact from "./MyReact"

//Virtual DOM is JS object that helps you to update real DOM
const render=function(currentElement, parentElement){

    if(typeof currentElement ==='string' ||
        typeof currentElement ==='number'){
        const currentTextNode = document.createTextNode(currentElement)
        parentElement.appendChild(currentTextNode)
        return
    }

    if(currentElement.type.prototype instanceof MyReact.Component){
        console.log(currentElement.type.prototype instanceof MyReact.Component) // check if currentElement is the instance of React.Component
        const curInstance = new currentElement.type(currentElement.props) // currentElement.type() is a class, add new at the beginning is instance // Invoking the constructor//Sending the props to currentElement
        curInstance.parentDOMele = parentElement
        const renderElement =curInstance.render()
        curInstance.preVDOM = renderElement;
        render(renderElement, parentElement) //Do recursion
        return
    }
   
    const cur = document.createElement(currentElement.type)

    Object.keys(currentElement.props).forEach(key=>{
        if(key==='style'){
            Object.keys(currentElement.props[key]).forEach(styleProp=>{
                cur.style[styleProp] = currentElement.props[key][styleProp]
            })
        }
         else if(key==='id'){
             cur.setAttribute(key, currentElement.props[key])
         }
        else if(key==='className'){
            //add the value to the className
            cur.classList.add(currentElement.props[key]) // key is variable 
        }else if (key.startsWith("on")){
            let curEvent = key.substring(2).toLowerCase()
            //cur.addEventListener(key.substring(2).toLowerCase(), )
            cur.addEventListener(curEvent, currentElement.props[key]); 
        }else if (key === 'children'){
            const curchildren = currentElement.props[key]
            if(Array.isArray(curchildren)){
                curchildren.forEach((element)=>{
                    render(element, cur)
                })
            }else if (typeof curchildren === 'string'){
                const currentTextNode = document.createTextNode(curchildren)
                cur.appendChild(currentTextNode)
            }else{
                render(curchildren, cur)
            }
            
        
        }else{
            cur.setAttribute(key, currentElement.props[key])
        }

    })

    parentElement.appendChild(cur)
}

const MyReactDOM = {
    render
}

export default MyReactDOM