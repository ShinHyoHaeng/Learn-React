import { number } from 'prop-types'
import React, { Component } from 'react'
import './App.css'

class App extends Component {
    
    // count값을 0으로 초기 설정
    state = {
        count:0,
        // 풀이 코드
        numbers: ''
    }

    // 현재 count에서 1씩 증가시키는 함수 정의
    increaseCount = () => {
        this.setState({count:this.state.count+1})
    }

    // 특정한 범위에서 숫자를 랜덤으로 선택하는 코드
    pickRandomNumber = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)) + min;
    }

    // 풀이 코드
    // 난수 체크 함수
    checkDuplication = (numbers, picked) => {
        return numbers.find(num => num === picked)
    }

    // 풀이 코드
    // 무작위로 선택한 난수를 보여주는 코드
    showRandomNumber = () => {
        // 난수 1개 생성
        this.setState({number: this.pickRandomNumber(1, 45)})

        // 난수 배열 생성(6개)
        // const numbers = [0,0,0,0,0,0]
        // const picks = numbers.map(n=>this.pickRandomNumber(1,45))
        // this.setState({number: this.pickRandomNumber(1, 45), numbers: picks.join(' ')})

        // 난수 배열 중복 제거
        const numbers = []
        let cnt = 0;
        while(numbers.length < 6){
            const picked = this.pickRandomNumber(1, 45)
            const isDuplicated = this.checkDuplication(numbers) // 중복 체크
            if(isDuplicated){
                console.log('duplicated...', isDuplicated)
                numbers.push(this.pickRandomNumber(1,45))
            }else{
                numbers.push(picked)
            }
            cnt++;
        }

        this.setState({numbers: this.pickRandomNumber(1, 45), numbers: numbers.join(' ')})
    }

    // 초기에 웹화면이 렌더링 되었을 때 타이머 설정
    // componentDidMount(){
    //     this.countID = setInterval(this.increaseCount, 1000)
    // }
    // 풀이 코드
    componentDidMount(){
        this.countID = setInterval(this.showRandomNumber, 1000)
    }

    // 사용자가 웹화면을 벗어나면 타이머 해제
    componentWillUnmount(){
        clearInterval(this.countID)
    }

    
    render(){
        const {count} = this.state

        // 풀이 코드
        const {number, numbers} = this.state

        // 로또 번호 1개 생성
        const lottoNum = this.pickRandomNumber(1,45);

        // 로또 번호 6개 배열 생성
        const num = 6;
        const lottos = [];
        for(let i = 0; i < num; i++){
            let lotto = this.pickRandomNumber(1,45);

            // 로또 번호 중복값 제거
            if(! sameNum(lotto)){ // 중복이 아닐 경우
                lottos.push(lotto); 
            }else{ // 중복일 경우
                i--; // i값 1 감소(다시 랜덤 숫자를 출력하도록 1 감소)
            }
        }

        // 배열에 있는 요소와 동일한 숫자인지 판별하는 함수
        function sameNum(lotto){ 
            return lottos.find((e) => (e===lotto));
        }

        console.log(lottos)

        return(
            <div className="App">
                <h1>Lotto Operator</h1>
                <h2>{lottoNum}</h2>
                <h2>{lottos.join(' , ')}</h2>
                <p>--------------------------</p>
                <h3>{number}</h3>
                <h3>{numbers}</h3>
                <p>--------------------------</p>
                <p>{count}</p>
            </div>
        )
    }
}


export default App;
