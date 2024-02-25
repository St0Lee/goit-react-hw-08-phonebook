import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import RegisterForm from "components/RegisterForm/RegisterForm";

import { signup } from "../../redux/auth/auth-operations";

import { Notify } from 'notiflix/build/notiflix-notify-aio'

import { selectAuthError, selectAuthLoading, selectIsLogin } from "../../redux/auth/auth-selectors";
import Loader from "components/Loader/Loader";

const RegisterPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);
    const isLogin = useSelector(selectIsLogin);

    const dispatch = useDispatch();

    const handleSignup = data => {
        dispatch(signup(data));
        Notify.success("Registration has been successful!")
    }

    if(isLogin) {
        return <Navigate to="/contacts" />    
    }

    return (
        <main>
            <h1>Sign up</h1>
            {authLoading && <Loader />}
            <RegisterForm onSubmit={handleSignup}/>
            {authError &&  Notify.failure(`${authError}`)}
        </main>
    )
};

export default RegisterPage;
