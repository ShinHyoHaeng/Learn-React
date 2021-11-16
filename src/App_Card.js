import React, { Component } from 'react'
import './App.css'
import Card from './Card'
import words from './dummyData'

class App extends Component {
    
    // count값을 0으로 초기 설정
    state = {
        index:0
    }

    pickRandomNumber = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)) + min;
    }

    setNumber  = () => {
        this.setState({index: this.pickRandomNumber(0, words.length-1)})
    }

    componentDidMount(){
        this.countID = setInterval(this.setNumber, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.countID)
    }

    render(){
        const {index} = this.state
        const word_picked = words[index]
        console.log(words.length, index)

        return(
            <div className="App">
                <Card>
                    <h1>Flash Card</h1>
                    <p>-------------------</p>
                    <h3>{word_picked.word}</h3>
                    <h3>{word_picked.meaning}</h3>
                </Card>
            </div>
        )
    }
}

export default App;
