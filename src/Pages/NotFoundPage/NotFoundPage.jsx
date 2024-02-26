import { Link } from "react-router-dom";

import styles from "./not-found-page.module.css"

const NotFoundPage = () => {
    return (
       <div className={styles.wrap}>
            <h2 className={styles.text}>Oops, it seems that such a page doesn't exist</h2>
            <Link className={styles.link} to="/">Go back to the Home page</Link>
       </div> 
    )
}

export default NotFoundPage;