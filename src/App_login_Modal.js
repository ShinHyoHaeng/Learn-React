import { Report } from '@material-ui/icons'
import React, { Component } from 'react'
import './App.css'
import Button from './Button'
import loginData from './loginData'
import Modal from './Modal'

export class App extends Component {

    state = {
        id: '',
        password: '',
        login: false,
        open:false
    }

    // 사용자 입력이 들어왔을 때 실행
    handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        this.setState({[name]: value})
    }

    login = (e) => {
        e.preventDefault()
        const {id, password} = this.state
        console.log('login : ', id, password)
        
        // login data 판별
        if(id === loginData.USER_ID && password === loginData.USER_PASSWORD){
            this.setState({login: true, open: false})
        }else{
            this.setState({login:false, open: true})
        }
    }

    openModal = () => {
        this.setState({open:true})
    }

    closeModal=()=>{
        this.setState({open:false})
    }

    render() {
        const {id, password, login, open} = this.state
        const loginForm = (
            <div>
                <form>
                    <label>ID <input type="text" placeholder="Type your id" name="id" value={id} onChange={this.handleChange}/></label>
                    <label>PW <input type="password" placeholder="Type your password" name="password" value={password} onChange={this.handleChange}/></label>
                    <div className="login-btn">
                        <Button handleClick={this.login}  width="fullWidth">Login</Button>
                    </div>
                </form>

                <Modal open={open}>
                    <div className="header"><Report className="icon"/> 로그인 실패</div>
                    <div className="body">
                        <p>로그인에 실패했습니다.<br/>아이디와 비밀번호를 다시 입력하세요.</p>
                    </div>
                    <div className="footer">
                        <Button handleClick={this.closeModal}>닫기</Button>
                    </div>
                </Modal>
            </div>
        )
        const homePage = (
            <>
                <h1>HOME PAGE</h1>
                <p>로그인에 성공하였습니다</p>
            </>
        )
        return (
            <div className="App">
                {login ? (homePage):(loginForm)}
            </div>
        )
    }
}

export default App
