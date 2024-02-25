import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Loader from "components/Loader/Loader";
import Navbar from "components/Navigation/NavBar/NavBar";

const SharedLayout = () => {
    return (
    <>  
        <Navbar />
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    </>
)}

export default SharedLayout;