import React from "react";

function Movie({title, genres, cover, summary}){
    return (
        <div className="movie">
            <img src={cover} alt={title}></img>
            <div className="textArea">
                <h3>{title}</h3>
                {/* genres는 배열이기 때문에 join을 사용해 문자열로 변환 */}
                <p>{genres.join(", ")}</p> 
                <p>{summary}</p>
            </div>
        </div>
    )
}

export default Movie;