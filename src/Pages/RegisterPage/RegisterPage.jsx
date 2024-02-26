import { useDispatch, useSelector } from "react-redux";

import RegisterForm from "components/RegisterForm/RegisterForm";

import { signup } from "../../redux/auth/auth-operations";

import { selectAuthError, selectAuthLoading } from "../../redux/auth/auth-selectors";

import styles from "./register-page.module.css"

import Loader from "components/Loader/Loader";

const RegisterPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);

    const dispatch = useDispatch();

    const handleSignup = data => {
        dispatch(signup(data));
    }

    return (
        <main className={styles.wrap}>
            <h1 className={styles.title}>Sign up</h1>
            {authLoading && <Loader />}
            <RegisterForm onSubmit={handleSignup}/>
            {authError}
        </main>
    )
};

export default RegisterPage;
