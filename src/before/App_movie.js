
import React, { Component } from 'react';
import './movie.css';
import Movie from './Movie';

class App extends Component{

    // 생성자 함수
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            loading:true,
            movies:[]
        }
    }

    // 이벤트 핸들러 함수
    changeName = () => {
        this.setState({name:"name changed"})
    }

    // 컴포넌트가 생성되었을 때
    componentDidMount(){
        const BASE_URL = 'https://yts.mx/api/v2/list_movies.json?sort_by=like_count';
        console.log("mount")
        console.log("-----------------")
        // 서버에서 데이터 가져오기
        fetch(BASE_URL)
        .then(res => res.json())
        .then(result => {
            console.log(result)
            const {data: {movies}} = result
            this.setState({loading: false, movies})
            
        })
    }

    // 컴포넌트가 업데이트 되었을 때
    componentDidUpdate(){
        console.log("update")
    }

    // 컴포넌트가 제거되었을 때
    componentWillUnmount(){
        console.log("unmount")
    }

    render(){
        const {loading, movies} = this.state
        if(loading){ // loading의 상태값이 true이면
            return(
                <div>
                    <h1>loading...</h1>
                </div>
            )
        }else{
            return (
                <div>
                    {/* open api 데이터 순회=> 컴포넌트로 변환 */}
                    {movies.map(movie => {
                        return(
                            <Movie 
                                key={movie.id}
                                title={movie.title}
                                genres={movie.genres}
                                cover={movie.medium_cover_image}
                                summary={movie.summary}
                            >
                            </Movie>
                        )
                    })}
                </div>
            )
        }
        
    }

}

export default App;
