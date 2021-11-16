import React, { Component } from 'react'
import './App.css'
import Button from './Button'

export class App extends Component {
    constructor(props){
        super(props)
        this.state={
            files: [],
            fileName: '',
            imgSrc:''
        }

        this.fileInput = React.createRef() // ref 생성
    }
    
    openFileWindow = () => {
        this.fileInput.current.click() // 파일 입력창이 열림
    }

    // 파일 유효성 검사
    isValid = (type) => {
        return type === 'image' // 파일의 타입이 이미지인지 판별
    }

    // 사용자가 파일을 선택하면 실행할 이벤트 핸들러 함수
    handleChange = (e) => {
        console.log(e.target.files[0])
        const files = [{file}];
        const file = e.target.files[0] // 배열이기 때문
        const imgPath = URL.createObjectURL(file) //  file 데이터 -> blob

        // 파일 유효성 검사 로직
        if(this.isValid(file.type.split('/')[0])){
            this.setState({fileName: file.name, imgSrc: imgPath})
        }else {
            this.setState({fileName:'File is not valid type !', imgSrc:''})
        }
    }
       
    render() {
        const {fileName, imgSrc, files} = this.state
        return (
            <div className="App">
                <p>{fileName}</p>
                {
                    imgSrc !== '' && // 빈 배열이 아니면 img 태그 출력
                    <img src={imgSrc} alt="preview-image" width="300px" height="400px" />
                }
                <input className="Upload" type="file" onChange={this.handleChange} ref={this.fileInput} accept="image/*"></input>
                <Button handleClick={this.openFileWindow} width="fullWidth">Upload</Button>
            </div>
        )
    }
}

export default App
