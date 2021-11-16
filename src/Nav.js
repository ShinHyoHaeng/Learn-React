import Button from "./Button";
import './Nav.css'

function Nav({menus}){
    const navigate = (url) => {
        window.location.href= url
    }

    return(
        <div className="nav-container">
            {menus.map(menu=>{
                return(
                    <Button size="small" color="grey" handleClick={()=>navigate(menu.siteUrl)} >{menu.siteTitle}</Button>    
                )
            })}
            {/* 
            <Button size="small" color="grey" handleClick={()=>navigate('https://www.google.co.kr/')} >구글</Button>
            <Button size="small" color="grey" handleClick={()=>navigate('https://www.naver.com/')}>네이버</Button>
            <Button size="small" color="grey" handleClick={()=>navigate('https://shinhyohaeng.github.io/dictionary/')}>사전검색서비스</Button> 
            */}
        </div>
    )
}

export default Nav;