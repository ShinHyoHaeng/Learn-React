import React, { Component } from 'react'
import './App.css'
import photos from './dummyData'

class App extends Component {
    
    // count값을 0으로 초기 설정
    state = {count:0}

    // 현재 count에서 1씩 증가시키는 함수 정의
    increaseCount = () => {
        this.setState({count:this.state.count+1})
    }

    // 초기에 웹화면이 렌더링 되었을 때 타이머 설정
    componentDidMount(){
        this.countID = setInterval(this.increaseCount, 1000)
    }
    // 사용자가 웹화면을 벗어나면 타이머 해제
    componentWillUnmount(){
        clearInterval(this.countID)
    }

    render(){
        const {count} = this.state
        console.log(photos)
        // const photo = photos[count] // 오류 발생 -> 5개가 모두 출력된 이후 이미지 X
        const photo = photos[count%photos.length]
        return(
            <div className="App">
                <h1>Image Gallery</h1>
                <img src={photo.src} alt={photo.title}/>
            </div>
        )
    }
}


export default App;
