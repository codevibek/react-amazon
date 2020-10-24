import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import './Header.css'
import {Link} from "react-router-dom"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue} from './StateProvider'
import {auth} from './Firebase'


function Header() {
    const [{basket, user}] = useStateValue()

    const handleAuthentication = () =>{
        if(user){
            auth.signOut()
        }
    }
    return (
        <nav className= "header">
            <Link to="/">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a3ec529632909.55fc107b84b8c.png"
                alt="Logo"
                className = "header__logo"/>
            </Link>
            <div className="header__search">

            <input type="text" 
            className="header__searchInput"/>

            <SearchIcon className="header__searchIcon">

            </SearchIcon>
            </div>
{/* the navigation stuff */}
            <div className="header__nav">
            <Link to={!user && "/login"} className="header__link"> 
                <div className = "header__option" onClick={handleAuthentication}>
                
                    <span className="header__optionLineOne">Hello {user? user.email:'Guest'}</span>
                    <span className="header__optionLineTwo">{user? 'Logout':'Login'}</span>
                </div>
            </Link>

            <Link to="/orders" className="header__link"> 
                <div className = "header__option">
                
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo"> Orders</span>
                </div>
            </Link>

            <Link to="/" className="header__link"> 
                <div className = "header__option">
                
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>

            <Link to="/checkout" className="header__link"> 
                <div className = "header__optionBasket">
                
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount"> {basket.length}</span>
                </div>
            </Link>

            </div>


        </nav>
    )
}

export default Header
