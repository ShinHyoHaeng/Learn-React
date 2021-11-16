import React, { Component } from 'react'
import './App.css'
import Button from './Button'

export class App extends Component {

    state = {
        id: '',
        password: ''
    }

    // 사용자 입력이 들어왔을 때 실행
    handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        this.setState({[name]: value})
    }

    login = (e) => {
        e.preventDefault()
        console.log('login')
    }

    render() {
        const {id, password} = this.state
        return (
            <div className="App">
                <form>
                    <label>ID <input type="text" placeholder="Type your id" name="id" value={id} onChange={this.handleChange}/></label>
                    <label>PW <input type="password" placeholder="Type your password" name="password" value={password} onChange={this.handleChange}/></label>
                    <div className="login-btn">
                        <Button handleClick={this.login}  width="fullWidth">Login</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default App
