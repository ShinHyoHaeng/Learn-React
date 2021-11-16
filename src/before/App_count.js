
import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        count: 0
    }

    // count에 따라 텍스트를 변경하는 함수 정의(switch문 사용)
    showUI = (cnt) => {
        let ui = null;
        switch(cnt){
            case 0:
                ui = <h1>Home</h1>
                break;
            case 1:
                ui = <h1>About</h1>
                break;
            case 2:
                ui = <h1>Detail</h1>
                break;
            default:
                ui = <h1>Not Found</h1>
        }
        return ui;
    }

    // 버튼 클릭 시 count를 1씩 증가시키는 함수 정의
    increase = () => {
        this.setState({count: this.state.count+1})
    }

    render(){
        const {count} = this.state
        const name = "Haeng"
        const head = () =>  (<h1>Tag</h1>)
        return (
            <div className="App">  
                {/* 클래스 컴포넌트이기 때문에 this 필요 */}
                {this.showUI(count)} 
                {
                    (
                        <>
                            {/* 속성값 쓸 때 camelCase 사용: class -> className, onclick -> onClick */}
                            <h1 className="center">Header 1</h1> 
                            
                            {/* props에서 바로 함수를 만들어 html 태그 넘겨주기 가능 -> 컴파일이 될 때 html 태그가 객체가 되기 때문 */}
                            {/* 단점: 렌더링될 때마다 새롭게 호출되어 메모리에 생성 -> 렌더링할 때 느려짐 */}
                            {/* <p name={() => (<h1>Tag</h1>)}>blah blah blah {name}</p> */}
                            <p name={head}>blah blah blah {name}</p> {/* 해결방법: 별도의 변수로 저장해 변수를 호출 */}
                        </>
                    )
                }
                <button type="button" onClick={this.increase}>Count</button>
                <p>count: {count}</p>
            </div>
        )
    }
}


export default App;
