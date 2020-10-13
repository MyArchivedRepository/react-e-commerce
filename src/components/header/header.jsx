import React from "react";

import {Link} from "react-router-dom"

import {auth} from "../../firebase/firebase.utils"

import "./header.scss"
import { ReactComponent as Logo } from "../../assets/logo2.svg"

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className = "logo"  stroke="#FFFFFF" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option" >SHOP</Link>
            <Link to="/contact" className="option" >CONTACT</Link>
            
            {currentUser ? <div className= "option" onClick={()=> auth.signOut()}>SIGN OUT</div>
            :
            <Link to="/member" className="option">SIGN IN</Link>
            }
        </div>
        
    </div>
)

export default Header;