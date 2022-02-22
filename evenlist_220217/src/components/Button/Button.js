import React from "react";
import "./Button.css"

class Button extends React.Component{
   
    render(){
        //send the rest of props
        const {children, ...restProps} = this.props
        return <button className="btn" {...restProps} >{children}</button>
    }
}

export default Button;