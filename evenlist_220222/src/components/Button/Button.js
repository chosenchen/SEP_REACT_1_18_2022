import React from "react";
import "./Button.css"

function Button({ children, ...restProps }) {

    return  <button className="btn" {...restProps} >
                {children}
            </button>

}

export default Button;