// import photo from './image.jpg';
import './App.css';

import React, { Component } from 'react'

export default class Person extends Component ({data}) {
    // ComponentWillUnmount= ()=>{
    //     let counter = setInterval(0 , 1000)
    //     console.log(counter)
    // }
    render() {
        return (
        <div className='App-header'>
            <h2>😊</h2>
            <h1> {data.fullName} </h1>
            <h1> {data.bio} </h1>
            <h1> {data.profession} </h1>
            <img style={{width:'200px'}} src={data.imgSrc} alt=""></img>
        </div>
        )
    }
}

export default Person