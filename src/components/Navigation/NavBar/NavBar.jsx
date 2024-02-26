import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBarAuth from "../NavBarAuth/NavBarAuth";
import UserMenu from "../UserMenu/UserMenu";

import styles from "./nav-bar.module.css"

import phoneLogo from "../../../pictures/phone-icon.png"

import { selectIsLogin } from "../../../redux/auth/auth-selectors"

const Navbar = () => {
    const isLogin = useSelector(selectIsLogin);

    return(
    <div className={styles.wrap}>
        <Link to="/contacts" className={styles.link}>
            <img 
                src={phoneLogo}
                alt="phone logo"
                className={styles.icon}
            /> 
            <p className={styles.text}>Your Phonebook</p>
        </Link>
        {isLogin ? <div className={styles.userMenu}><UserMenu /></div> : <div className={styles.navBarAuth}><NavBarAuth /></div>}
    </div>
    )
};

export default Navbar; 