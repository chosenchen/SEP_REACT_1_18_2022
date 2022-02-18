import React from 'react';


export function handleInputOnChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
}