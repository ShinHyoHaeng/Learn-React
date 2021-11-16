import React, { Component } from 'react'
import './App.css'

export class App extends Component {
    state={
        toggle:true
    }

    toggleScreenMode=()=>{
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state
        return (
            <div className={`normal ${toggle? "":"dark"}`}>
                <h1>Change screen mode</h1>
                <button type="button" onClick={this.toggleScreenMode}>{toggle?"DARK":"NORMAL"}</button>
            </div>
        )
    }
}

export default App
