import { NavLink } from "react-router-dom";

import styles from "./nav-bar-auth.module.css"

const NavBarAuth = () => {
    return(
        <div className={styles.wrap}>
            <NavLink to="/register" className={styles.link}> Register </NavLink> 
            <NavLink to="/login" className={styles.link}> Login </NavLink> 
        </div>
    )
};

export default NavBarAuth;