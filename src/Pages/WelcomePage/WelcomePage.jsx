import { NavLink, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./welcome-page.module.css"

import { selectIsLogin } from "../../redux/auth/auth-selectors";


const WelcomePage = () => {
    const isLogin = useSelector(selectIsLogin); 
    
    if(isLogin) {
        return <Navigate to="/contacts" />    
    }

    return(
        <div className={styles.wrap}>
            <p className={styles.text}>Welcome!</p>
            <p className={styles.text}> 
                Click 
                <NavLink to="/register" className={styles.link}> Register </NavLink> 
                to start using Your Phonebook.
            </p>
            <p className={styles.text}>Or</p>
            <p className={styles.text}> 
                Click 
                <NavLink to="/login" className={styles.link}> Login </NavLink> 
                if you already have an account.
            </p>
            <p className={styles.text}>You can also use options in the upper right corner.</p>
        </div>
    )
};

export default WelcomePage;