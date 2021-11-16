import React from 'react'
import Button from './Button'

function Words({w, handleRemove}) {
    const onRemove = (e) => {
        handleRemove(e)
    }
    const wordStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    return (
        
        <div style={wordStyle}>
            <h2 style={{marginRight:'15px'}}>{w.word}</h2>
            <Button size="small" type="button" handleClick={(e) => onRemove(e)}>DELETE</Button>
        </div>
    )
}

export default Words
