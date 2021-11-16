import React from 'react'

function Book({title, author, summary, genre, release, isbn}){
    return(
        <ul>
            <li><b>제목:</b> {title}</li>
            <li><b>저자:</b> {author}</li>
            <li><b>요약:</b> {summary}</li>
            <li><b>장르:</b> {genre}</li>
            <li><b>발매일:</b> {release}</li>
            <li><b>ISBN:</b> {isbn}</li>
        </ul>
    )
}

export default Book