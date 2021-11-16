import React, { Component } from 'react'
import './App.css'
import Button from './Button'

export class App extends Component {
    constructor(props){
        super(props)
        this.state={
            files:[]
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

    // 사용자가 파일을 여러개 선택했을 때
    handleChange = (e) => {
        const files = e.target.files
        const uploadedFiles = [] // 빈 배열 생성

        for(let file of files){
            if(this.isValid(file.type.split('/')[0])){
                const name = file.name
                const imgSrc = URL.createObjectURL(file)
                uploadedFiles.push({name, imgSrc})
            }else{
                alert(`file [${file.name}] type is not valid !`)
            }
        }
        this.setState({files:uploadedFiles})
    }
       
    render() {
        const {files} = this.state
        return (
            <div className="App">
                {
                    files.length !== 0 && files.map((file, id) => {
                        return(
                            <div key={id}>
                                 <p>{file.name}</p>
                                 <img src={file.imgSrc} alt={file.name} width="300px" height="400px" />
                                {/* {
                                    file.imgSrc !== '' && // 빈 배열이 아니면 img 태그 출력
                                    
                                } */}
                            </div>
                        )
                    })
                }
                <input className="Upload" type="file" onChange={this.handleChange} ref={this.fileInput} accept="image/*" multiple></input>
                <Button handleClick={this.openFileWindow} width="fullWidth">Upload</Button>
            </div>
        )
    }
}

export default App
