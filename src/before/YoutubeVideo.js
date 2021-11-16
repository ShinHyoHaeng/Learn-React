import React, {Component} from 'react'
import PropTypes from 'prop-types'

function YoutubeVideo({videoId, videoName, videoLength, videoDescription, videoAuthor, children}){ // videoAuthor 속성 추가(기본값)
    return(
        <div id ={videoId}>
            <h1>{videoName} - {(parseInt(videoLength)/1000).toFixed(1)} MB</h1>
            {/* <h2>author - {videoAuthor}</h2> */}
            <p>{videoDescription}</p>
            {children}
        </div>
    )
}

export default YoutubeVideo;

// 유효성 검증
YoutubeVideo.propTypes = {
    videoId: PropTypes.string,
    videoName: PropTypes.string,
    videoLength: PropTypes.number,
    videoDescription: PropTypes.string
}

// 기본값 설정(default)
// YoutubeVideo.defaultProps = {
//     videoAuthor: "Haeng"
// }