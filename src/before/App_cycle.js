
import React, { Component } from 'react';
import './App.css';

class App extends Component{

    // 생성자 함수
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            name: "Haeng"
        }
    }

    // 이벤트 핸들러 함수
    changeName = () => {
        this.setState({name:"name changed"})
    }

    // 컴포넌트가 생성되었을 때
    componentDidMount(){
        console.log("mount")
        console.log("-----------------")
    }

    // 컴포넌트가 업데이트 되었을 때
    componentDidUpdate(){
        console.log("update")
    }

    // 컴포넌트가 제거되었을 때
    componentWillUnmount(){
        console.log("unmount")
    }

    render(){
        console.log("render")
        const {name} = this.state
        return(
            <div className="App">
                <h1>{name}</h1>
                <button onClick={this.changeName}>Change name</button>
            </div>
        )
    }

}

export default App;
