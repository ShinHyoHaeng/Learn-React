import React, { Component } from 'react'
import Modal from './Modal'
import Button from './Button'

class App extends Component{
    state = {open:false}
    openModal = () => {
        // 버튼 클릭할 때마다 열기/닫기
        this.setState({open:true})
    }
    closeModal=()=>{
        this.setState({open:false})
    }
    render(){
        const {open} = this.state
        const {openModal, closeModal} = this
        return (
            <div className="App">
                <Button handleClick={openModal}>할 일 추가</Button>
                <Modal open={open}>
                    <div className="header">할 일을 추가하시겠습니까?</div>
                    <div className="body">
                        <label>할 일:<input type="text"/></label>
                        <label>설명:<input type="text"/></label>
                    </div>
                    <div className="footer">
                        <Button>추가</Button>
                        <Button handleClick={closeModal}>닫기</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default App
