import React, { Component } from 'react'
import './App.css'
import words from './dummyData'

class App extends Component {
    
    // count값을 0으로 초기 설정
    state = {
        // count:0,
        index:0
    }

    // 현재 count에서 1씩 증가시키는 함수 정의
    // increaseCount = () => {
    //     this.setState({count:this.state.count+1})
    // }

    // 특정한 범위에서 숫자를 랜덤으로 선택하는 코드
    pickRandomNumber = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)) + min;
    }

    // 풀이 코드
    setNumber  = () => {
        this.setState({index: this.pickRandomNumber(0, words.length-1)})
    }

    // 풀이 코드
    // 초기에 웹화면이 렌더링 되었을 때 타이머 설정
    componentDidMount(){
        // this.countID = setInterval(this.increaseCount, 1000)
        this.countID = setInterval(this.setNumber, 1000)
    }
    // 사용자가 웹화면을 벗어나면 타이머 해제
    componentWillUnmount(){
        clearInterval(this.countID)
    }

    // 단어를 랜덤으로 뽑아서 보여주기

    render(){
        // const {count} = this.state
        // let word = Words[count%Words.length] // 순차반복
        const {index} = this.state
        const word_picked = words[index]
        console.log(words.length, index)

        const cardStyle = {
            background: 'tan',
            width:'30%',
            margin: '0 auto',
            textAlign: 'center',
            padding:'20px',
            color: '#fff',
            fontSize:'24px'
        }
        
        return(
            <div className="App" style={cardStyle}>
                <h1 style={{borderBottm:'1px solid lightgrey'}}>Flash Card</h1>
                {/* <h2>{word.word}</h2> */}
                {/* <h2>{word.meaning}</h2> */}
                <p>-------------------</p>
                <h3>{word_picked.word}</h3>
                <h3>{word_picked.meaning}</h3>
                {/* <p>{count}</p> */}
            </div>
        )
    }
}

export default App;
