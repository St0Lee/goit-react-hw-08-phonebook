import { useSelector } from "react-redux"

import { selectUser } from "../../../redux/auth/auth-selectors"

import styles from "./user-menu.module.css"

const NavBarUser = () => {
    const {name} = useSelector(selectUser);
    
    return(
        <div className={styles.wrap}>
            {name}
            <button>Logout</button>
        </div>
    )
}

export default NavBarUser;