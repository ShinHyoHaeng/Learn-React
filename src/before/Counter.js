import React, {Component} from 'react'

class Counter extends Component {
    state = {
        count: 0
    }

    increase = () => {
        const {count} = this.state
        console.log(`before updating state: ${count}`)
        this.setState({count: count+1})
        // 업데이트 함수(콜백)
        // this.setState((prevState) => { 
        //     return {count: prevState.count + 1} // 이전 값을 가져와서 +1
        // })
        console.log(`after updating state: ${count}`)
    }

    // 새로운 이벤트 핸들러 함수 
    increaseMultiple = () => {
        // setState 메서드를 동시에 여러번 호출하면 render 함수는 마지막에 있는 하나만 호출
        this.increase()
        this.increase()
        this.increase()
        console.log(`right after event: ${this.state.count}`)
    }

    render(){
        console.log('child')
        const {count} = this.state
        console.log(`state in render function: ${count}`)
        return(
            <>
                <h1>{count}</h1>
                <button type="button" onClick={this.increase}>increase count</button>
            </>
        )
    }
}

export default Counter;