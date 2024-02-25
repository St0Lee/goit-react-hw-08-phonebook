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
            <p>Welcome!</p>
            <p> 
                Click 
                <NavLink to="/register" className={styles.link}> Register </NavLink> 
                to start using your Phonebook.
            </p>
            <p>Or</p>
            <p> 
                Click 
                <NavLink to="/login" className={styles.link}> Login </NavLink> 
                if you already have an account.
            </p>
            <p>You can also use options in the upper right corner.</p>
        </div>
    )
};

export default WelcomePage;