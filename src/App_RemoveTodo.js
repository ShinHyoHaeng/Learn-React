import React, { Component } from 'react'
import Modal from './Modal'
import Button from './Button'

class App extends Component{
    state = {
        open:false,
        remove:false
        // msg:''
    }
    openModal = () => {
        // 버튼 클릭할 때마다 열기/닫기
        this.setState({open:true, remove:false})
    }
    closeModal=()=>{
        this.setState({open:false, remove:false})
    }
    removeTodo=()=>{
        this.setState({remove:true,open:false})
        // this.closeModal()
        // this.setState({msg:'성공적으로 삭제하였습니다'})
    }
    render(){
        const {open, remove} = this.state
        // const {open, msg} = this.state
        const {openModal, closeModal, removeTodo} = this
        return (
            <div className="App">
                <Button handleClick={openModal}>할 일 삭제</Button>
                {/* <h1>{msg}</h1> */}
                <Modal open={open}>
                    <div className="header">할 일을 삭제하시겠습니까?</div>
                    <div className="body">
                        <p>할 일을 삭제하시면 복원되지 않습니다.</p>
                    </div>
                    <div className="footer">
                        <Button handleClick={removeTodo}>Remove</Button>
                        <Button handleClick={closeModal}>닫기</Button>
                    </div>
                </Modal>
                {
                    remove && <h1>remove successfully!</h1>
                }
            </div>
        )
    }
}
export default App
