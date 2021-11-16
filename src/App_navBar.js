import { Close, MenuOpen,MenuRounded } from '@material-ui/icons'
import React, { Component } from 'react'
import Button from './Button'
import SideBar from './SideBar'
import './App.css'

export class App extends Component {
    state = {
        toggle: false,
        menus: [
            { icon: '♜', title: 'HOME' }, 
            { icon: '♞', title: 'ABOUT' }, 
            { icon: '☻', title: 'SETTING' }, 
            { icon: '♜', title: 'HOME' }, 
            { icon: '♞', title: 'ABOUT' }, 
            { icon: '☻', title: 'SETTING' }
        ]
    }

    toggleMenu = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        
        const {toggle, menus} = this.state

        return (
            <div className="App">
                <div className="right">
                    <Button handleClick={this.toggleMenu}>{ toggle ? (<Close/>):(<MenuRounded/>)}</Button>
                </div>
                <SideBar open={toggle}>
                    {menus.map((menu, id) => {
                        return <div className="menu" key={id}>{menu.icon} {menu.title}</div>
                    })}
                </SideBar>
            </div>
        )
    }
}

export default App
