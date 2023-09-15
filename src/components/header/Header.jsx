import Nav from "./Navi.jsx"
import "./header.css"
import "./../../styles/reset.css"
import "./../../styles/common.css"





function Header() {
    return (
        <header className="header">
            <div className="big-container">
                <Nav className="nav" />
            </div>
        </header>
    );
}


export default Header; 

// {/* <Nav>
//     <Menu className="right" />
//     <Logo></Logo>
//     <Menu className="left" />
// </Nav>

