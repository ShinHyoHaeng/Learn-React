import React from 'react'
import './button.css'

// export default function Button({children}) {
//     // 버튼 스타일
//     // const style={
//     //     all:'unset',
//     //     color:'#fff',
//     //     background:'#999',
//     //     cursor:'pointer',
//     //     height:'50px',
//     //     padding:'0 10px',
//     //     borderRadius:'5px',
//     //     fontWeight:'bold'
//     // }
//     return (
//         <button className="Button">{children}</button>
//     )
// }

export default function Button({children, size, color, width, handleClick, disabled, navigate}) {
    return (
        <button disabled={disabled} onClick={handleClick} className={`Button ${size} ${color} ${width}`}>{children}</button>
    )
}

// 기본값 설정
Button.defaultProps = {
    size: 'medium',
    color: 'grey',
    disabled: false // 활성화
}