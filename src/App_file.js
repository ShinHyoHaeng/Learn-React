import React, { Component } from 'react'
import Button from './Button'

export class App extends Component {
    constructor(props){
        super(props)
        this.fileInput = React.createRef()
    }
    focusInput = () => {
        this.fileInput.current.click()
    }
    render() {
        return (
            <div className="App">
                <h1>File Upload</h1>
                <Button handleClick={this.focusInput}>Upload</Button>
                <input type="file" style={{visibility:'hidden'}} ref={this.fileInput}></input>
            </div>
        )
    }
}

export default App
