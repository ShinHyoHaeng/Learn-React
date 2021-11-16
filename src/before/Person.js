import React from 'react';

// 함수형 컴포넌트
// function Person({country, name, age}){
    
//     // 함수형 컴포넌트에는 render() X

//     // 초기 데이터
//     // const name = "Haeng"
//     // const age = 200
//     // const {country, name, age} = props // App.js(부모)에서 전달받은 props

//     // html 템플릿
//     return (
//         <fragment>
//             <h1>{country}</h1>
//             <h3>{name}</h3>
//             <h4>{age}</h4>
//         </fragment>
//     )
// }


const Person = ({country, name, age}) => {
    return (
        <fragment>
            <h1>{country}</h1>
            <h3>{name}</h3>
            <h4>{age}</h4>
        </fragment>
    )
}

export default Person;
