import React, { Component } from 'react'
import YoutubeVideos from './YoutubeVideos'
import Button from './Button'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import './imageSlider.css'

export class App extends Component {
    state = { index:0 }

    // prev button
    decreaseIndex = () => {
        const nextIndex = this.state.index-1
        this.setState({index: (nextIndex < 0 ) ? YoutubeVideos.length-1:nextIndex})
    }

    // next button
    increaseIndex = () => {
        const nextIndex = this.state.index+1
        this.setState({index:(nextIndex > YoutubeVideos.length - 1) ? 0 : nextIndex})
    }

    render() {
        const {index} = this.state
        const {increaseIndex, decreaseIndex} = this
        const path = YoutubeVideos[index].src
        const title = YoutubeVideos[index].title

        return (
            <div className="App">
                <h1>Youtube Video Carousel</h1>
                <p>{index+1}번째 비디오</p>
                <div className="video-container">
                    <iframe width="560" height="315" src={path} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

