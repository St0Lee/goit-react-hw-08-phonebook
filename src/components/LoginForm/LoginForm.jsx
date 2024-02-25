import { useState, useId} from "react";

const INITIAL_STATE = {
    email: "",
    password: "",
};

const LoginForm = ({onSubmit}) => {
    const [state, setState] = useState({...INITIAL_STATE});

    const handleChange = ({target}) => {
        const {name, value, type, checked} = target;
        const newValue = type === "checkbox" ? checked :value;
        
        setState({
            ...state,
            [name]: newValue,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        reset();
    };

    const reset = () => {
        setState({...INITIAL_STATE})
    };

    const emailId = useId();   
    const passwordId = useId();

    const { email, password} = state;

    return (
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor={emailId} >Email:</label>
                <input id={emailId} value={email} onChange={handleChange} type="email" name="email" required /> 
            </div>
            <div>
                <label htmlFor={passwordId} >Password:</label>
                <input id={passwordId} value={password} onChange={handleChange} type="password" name="password" required /> 
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;