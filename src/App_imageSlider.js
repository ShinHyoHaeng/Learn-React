import React, { Component } from 'react'
import images from './imageData'
import Button from './Button'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import './imageSlider.css'

export class App extends Component {
    state = { index:0 }

    // prev button
    decreaseIndex = () => {
        const nextIndex = this.state.index-1
        this.setState({index: (nextIndex < 0 ) ? images.length-1:nextIndex})
    }

    // next button
    increaseIndex = () => {
        const nextIndex = this.state.index+1
        this.setState({index:(nextIndex > images.length - 1) ? 0 : nextIndex})
    }

    render() {
        const {index} = this.state
        const {increaseIndex, decreaseIndex} = this
        const path = images[index].src
        const title = images[index].title

        return (
            <div className="App">
                <div className="img-container">
                    <img src={path} alt={title}/>
                </div>
                <div className="control-btns">
                    <Button handleClick={decreaseIndex}><ArrowBackIos/></Button>
                    <Button handleClick={increaseIndex}><ArrowForwardIos/></Button>
                </div>
            </div>
        )
    }
}

export default App

