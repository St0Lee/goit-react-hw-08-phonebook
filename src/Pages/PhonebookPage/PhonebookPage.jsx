// import { useSelector } from "react-redux";

// import { selectIsLogin } from "../../redux/auth/auth-selectors";
// import WelcomePage from "Pages/WelcomePage/WelcomePage";

import MyPhonebook from "components/MyPhonebook/MyPhonebook";

const PhonebookPage = () => {
    // const isLogin = useSelector(selectIsLogin)

    return (
        <div>
            {/* {!isLogin ? <WelcomePage /> : <MyPhonebook /> }; */}
            <MyPhonebook />
        </div>
    )
};

export default PhonebookPage;