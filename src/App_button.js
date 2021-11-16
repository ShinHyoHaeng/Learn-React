import React, { Component } from 'react';
import './App.css'
import Button from './Button';

function App(){
    const handleClick = () => {alert('clicked button')}
    
    return(
        <div className="App">
            <Button size="large" color="grey" width="fullWidth">Add Todo</Button>
            <Button size="medium" color="tomato"><img src="http://simpleicon.com/wp-content/uploads/rocket.png" width="30px" height="30px"></img> Add Todo</Button>
            <Button size="small" color="green" handleClick={handleClick} disabled={true}>Add Todo</Button>
        </div>
    )
    
}

export default App;