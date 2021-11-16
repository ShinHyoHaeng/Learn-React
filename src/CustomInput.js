import React, { Component } from 'react'

export class Custominput extends Component {
    constructor(props){
        super(props)
        this.textInput = React.createRef() // ref 생성
    }
    focusInput = () => {
        console.log(this.textInput.current)
        this.textInput.current.focus() // ref 사용(참조값.current을 해서 가져옴)
    }
    render() {
        return (
            <>
                {/* ref 설정하기 */}
                <input type="text" ref={this.textInput}></input>   
                <button onClick={this.focusInput}>focus input</button>
            </>
        )
    }
}

export default Custominput
