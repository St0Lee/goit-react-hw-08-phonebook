import { useSelector, useDispatch } from "react-redux"

import { logout } from "../../../redux/auth/auth-operations";

import { selectUser } from "../../../redux/auth/auth-selectors"

import styles from "./user-menu.module.css"

const UserMenu = () => {
    const { name } = useSelector(selectUser);
    
    const dispatch = useDispatch();

    const onLogout = () => dispatch(logout());

    return(
        <div className={styles.wrap}>
            {name}
            <button onClick={onLogout} type="button" className={styles.button}>Logout</button>
        </div>
    )
}

export default UserMenu;

