import React, { Component } from 'react';
import './App.css'
import Nav from './Nav';

class App extends Component {
    state={
        menus:[
            {
                siteTitle: '구글',
                siteUrl: 'https://www.google.co.kr/'
            },
            {
                siteTitle: '네이버',
                siteUrl: 'https://www.naver.com/'
            },
            {
                siteTitle: '사전검색서비스',
                siteUrl: 'https://shinhyohaeng.github.io/dictionary/'
            }
        ]
    }
    render(){
        const{menus} = this.state
        return(
            <div className="App">
                <Nav menus={menus} />
            </div>
        )
    }
}

export default App;