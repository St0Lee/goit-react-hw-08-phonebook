import { useDispatch, useSelector } from "react-redux";

import { login } from "../../redux/auth/auth-operations";

import { selectAuthError, selectAuthLoading } from "../../redux/auth/auth-selectors";

import styles from "./login-page.module.css"

import Loader from "components/Loader/Loader";
import LoginForm from "components/LoginForm/LoginForm";

const LoginPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);

    const dispatch = useDispatch();

    const handleLogin = data => {
        dispatch(login(data));
    }

    return(
        <div className={styles.wrap}>
            <h1 className={styles.title}>Login</h1>
            {authLoading && <Loader />}
            <LoginForm  onSubmit={handleLogin}/>
            {authError}
        </div>
    )
}

export default LoginPage;