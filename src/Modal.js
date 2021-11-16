import React from 'react'
import './Modal.scss'

function Modal({open, children}) {
    return (
        
        <div className={`modalContainer ${open? "open":"close"}`}>
            <div className="Modal">
                {children}
            </div>
        </div>
    )
}


export default Modal;

Modal.defaultProps = {
    open:false
}
