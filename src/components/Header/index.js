import React from "react";
import logo from './header.png';

function Header() {
    return (
        <div className="container-fluid text-center">
            <img style={{width: 175, position: "relative", top: -25}} src={logo}/>
            <hr />
        </div>
    );
}
export default Header;