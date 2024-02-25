import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBarAuth from "../NavBarAuth/NavBarAuth";
import UserMenu from "../UserMenu/UserMenu";

import { selectIsLogin } from "../../../redux/auth/auth-selectors"

const Navbar = () => {
    const isLogin = useSelector(selectIsLogin);

    return(
    <navbar>
        <Link to="/contacts">"Logo" Your Phonebook</Link>
        {isLogin ? <UserMenu /> : <NavBarAuth /> }
    </navbar>
    )
};

export default Navbar; 