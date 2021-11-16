import React,{ Component } from 'react'

class NameTag extends Component {
    state = {
        name: 'initial name'
    }

    // 이벤트 핸들러 함수
    changeName = () => {
        // state 직접 변경 -> 경고: Do not mutate state directly. Use setState()
        // this.state.name = "changed name" 
        // setState 사용
        this.setState({name:'changed name'}) 
    }
    render(){
        console.log('NameTag')
        const{name} = this.state // 하나일 경우에는 this.state.name로도 사용 가능
        return (
            <>
                <h1>{name}</h1>
                {/* 무한 루프 */}
                <button type="button" onClick={this.changeName()}>change name</button> 
                {/* 정상 실행 코드 */}
                {/* <button type="button" onClick={() => this.changeName()}>change name</button> */}
                {/* <button type="button" onClick={this.changeName}>change name</button>  */}
            </>
        )
    }

}

export default NameTag;