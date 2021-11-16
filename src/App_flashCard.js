import React, { Component } from 'react'
import Words from './dummyData'
import Word from './Words'

export class App extends Component {

    state={
        words: Words
    }

    // 삭제하는 이벤트 핸들러 함수 
    handleRemove = (id, e) => {
        console.log(id)
        console.log(e.target.previousSibling.innerText)
        const word = e.target.previousSibling.innerText
        alert(`really want to remove word '${word}'?`)

        // 단어 제거
        const words_filtered = this.state.words.filter((w, index) => index !== id)
        this.setState({words: words_filtered})
    }

    
    render() {
        const {words} = this.state
        return (
            <div>
                <h1>Words List</h1>
                {words.map((word, id) => {
                    return(
                        <Word key={id} w={word} handleRemove={(e) => this.handleRemove(id, e)}></Word>
                    )
                })}
            </div>
        )
    }
}

export default App
