
const update=function(currentElement, parentElement, isRoot){

    if(typeof currentElement ==='string' || typeof currentElement ==='number'){
        const currentTextNode = document.createTextNode(currentElement)
        parentElement.appendChild(currentTextNode)
        return
    }

    if(currentElement.type.prototype instanceof MyReact.Component){
        const curInstance = new currentElement.type(currentElement.props) // currentElement.type() is a class, add new at the beginning is instance // Invoking the constructor//Sending the props to currentElement
        curInstance.parentDOMele = parentElement
        const renderElement =curInstance.render()
        update(renderElement, parentElement) //Do recursion
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
                    update(element, cur)
                })
            }else if (typeof curchildren === 'string'){
                const currentTextNode = document.createTextNode(curchildren)
                cur.appendChild(currentTextNode)
            }else{
                update(curchildren, cur)
            }
            
        
        }else{
            cur.setAttribute(key, currentElement.props[key])
        }

    })
    if(isRoot){
        parentElement.lastChild.replaceWith(cur)
    }else{
        parentElement.appendChild(cur)
    }
}



class Component {
    constructor(props){
        this.props = props
    }

    setState=(newStateOrCB)=>{ // object or callback function
        setTimeout(()=>{
            if(typeof newStateOrCB === 'function'){
                const newState = newStateOrCB(this.state)
                this.state = {...this.state, ...newState}
            }else{
                this.state = {...this.state, newStateOrCB}
            }

            update(this.render(), this.parentDOMele, true)
        }, 0)
        
        // console.log('state', this.state)// this refers to instance of this class but not in prototype function just normal function
        // this.state ={...this.state, ...newState} // it will be instance method, not prototype method
    }
}


const MyReact ={
    Component, 
}


export default MyReact