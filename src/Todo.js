import React from "react";

// class Todo extends Component {
//     // 초기 데이터 선언
//     constructor(props){ // 부모로부터 전달되는 데이터
//         super(props) // 상위에 있는 모든 데이터 전달받음(props 상속)
//         this.state = { // state 선언
//             name: "cleaning",
//             done: false,
//             description: "cleaning my room on weekends"
//         }
//     }

//     // constructor(props) {...}와 같음
//     // state = { // state 선언
//     //     name: "cleaning",
//     //     done: false,
//     //     description: "cleaning my room on weekends"
//     // }

//     // 이벤트 핸들러 함수
//     changeTodoName = () => {
//         console.log(this)
//         this.setState({name:"learning React"}) //setState({바꿀 프로퍼티 이름: "바꿔줄 값"})
//     }

//     render(){
//         // todo 객체(데이터) 선언
//         const {name, done, description} = this.state

//         // html 템플릿에 데이터 삽입
//         return(
//             <>
//                 <h3>name: {name}</h3>
//                 <p>done: {done? "finished":"ongoing"}</p>
//                 <p>description: {description}</p>
//                 <button type="button" onClick={this.changeTodoName}>Change</button>
//             </>
//         )
//     }
// }

function Todo ({user, name, done, description}){
   
    return(
        <>
            <h3>name: {name}</h3>
            <p>done: {done? "finished":"ongoing"}</p>
            <p>description: {description}</p>
            <button type="button">Change</button>
        </>
    )
}

export default Todo;