import React from "react";

import './SideDrawer.css';

const SideDrawer = props => {
    console.log(props.children);
    return (
        <aside className="side-drawer">{props.children}</aside>
    )
}

export default SideDrawer;