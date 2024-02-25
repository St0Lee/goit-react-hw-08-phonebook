import { useState, useId} from "react";

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
};

const RegisterForm = ({onSubmit}) => {
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

    const nameId = useId();
    const emailId = useId();   
    const passwordId = useId();

    const {name, email, password} = state;

    return (
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor={nameId} >Name:</label>
                <input id={nameId} value={name} onChange={handleChange} name="name" required /> 
            </div>
            <div>
                <label htmlFor={emailId} >Email:</label>
                <input id={emailId} value={email} onChange={handleChange} type="email" name="email" required /> 
            </div>
            <div>
                <label htmlFor={passwordId} >Password:</label>
                <input id={passwordId} value={password} onChange={handleChange} type="password" name="password" required /> 
            </div>
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;