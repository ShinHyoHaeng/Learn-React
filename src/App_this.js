import React, { Component } from 'react'

export class App extends Component {

    constructor(props){
        super(props)
        this.showAlert=this.showAlert.bind(this);
    }

    showAlert() {
        console.log(this)
        alert('this is alert message! / this: '+this) // undefined
    }
    
    render() {
        return (
            <div className="App">
                <h1>Show Alert!</h1>
                <button type="button" onClick={this.showAlert}>show</button>
            </div>
        )
    }
}

export default App
