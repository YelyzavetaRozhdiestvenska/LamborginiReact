import logo from "./../../images/logo.svg"
import "./header.css"
import "./../../styles/reset.css"
import "./../../styles/common.css"


const menuLinkLeft = ["О гонке", "Трек", "Lamborghini Super trofeo", "Новости"];
const menuLinkRight = ["Купить билеты", "Смотреть онлайн", "Контакты"];


function Nav () {
    return (<div>
        <ul className="menu-list menu-left">
            {menuLinkLeft.map(link => <MenuLink>{ link }</MenuLink> )}
        </ul>
        <img className="logo" src={logo} alt="logo"></img> 
        <ul className="menu-list menu-right">
           {menuLinkRight.map(link => <MenuLink>{ link }</MenuLink> )}
        </ul>
    </div>);
}


function MenuLink({ children }) {
    return <li className="menu-item"><a href="#" className="menu-link">{children}</a></li>
}


// function HeaderMenu({ })

export default Nav;