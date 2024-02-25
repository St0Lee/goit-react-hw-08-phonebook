import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { login } from "../../redux/auth/auth-operations";

import { Notify } from 'notiflix/build/notiflix-notify-aio'

import { selectAuthError, selectAuthLoading, selectIsLogin } from "../../redux/auth/auth-selectors";
import Loader from "components/Loader/Loader";

import LoginForm from "components/LoginForm/LoginForm";

const LoginPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);
    const isLogin = useSelector(selectIsLogin);

    const dispatch = useDispatch();

    const handleLogin = data => {
        dispatch(login(data));
        Notify.success("You've successfully loged in!")
    }

    if(isLogin) {
        return <Navigate to="/contacts" />    
    }
    return(
        <div>
            <h1>Login</h1>
            {authLoading && <Loader />}
            <LoginForm  onSubmit={handleLogin}/>
            {authError &&  Notify.failure("wrong email")}
        </div>
    )
}

export default LoginPage;