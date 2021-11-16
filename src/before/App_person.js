
import React, { Component } from 'react';
import './App.css';

function App(){
    const person = {
        name: "Haeng",
        age:200
    }

    // 출력할 내용을 변수에 저장
    const personPage = (
        <>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
        </>
    )
    const notFoundPage = (
        <>
            <h1>Not Found!</h1>
        </>
    )
    if(person.name){ // person.name에 데이터가 있을 때 실행
        // return personPage;
        return(
            <div className = "App">
                {/* 삼항 연산자 사용 */}
                <div>{person.name? "your name is nice!":"name doesn't exist!"} - {person.age}</div>
    
                {/* person.name의 값이 null이 아니거나 비어있지 않다면 텍스트 출력 */}
                <div>{person.name && "your name is nice!"} - {person.age}</div>
    
                {/* person.name에 데이터가 있다면 personPage에 저장된 내용 출력 */}
                <div>{person.name && personPage}</div>
            </div>
        )
    } else { // person.name에 데이터가 없거나 null일 때 실행
        // return notFoundPage;
        return(
            <div className = "App">
                {notFoundPage}
            </div>
        )
    }
}

export default App;
