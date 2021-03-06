import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase.utils"
import { connect } from "react-redux"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
            </Link>
                <Link className="option" to="/sign-in">
                    Contact
            </Link>
                {
                    currentUser ?
                        (<div className="option" onClick={() => auth.signOut()}>Sign Out</div>)
                        :
                        (<Link className="option" to="/sign-in">Sign In</Link>)
                }

                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>

    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
    return {
        currentUser,
        hidden,
    }
}


export default connect(mapStateToProps)(Header);