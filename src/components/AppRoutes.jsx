import { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";

import Loader from "./Loader/Loader";

const WelcomePage = lazy(() => import("Pages/WelcomePage/WelcomePage"));
const NotFoundPage = lazy (() => import("Pages/NotFoundPage/NotFoundPage"));
const PhonebookPage = lazy(() => import("Pages/PhonebookPage/PhonebookPage"))
const RegisterPage = lazy(() => import("Pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("Pages/LoginPage/LoginPage"));

const AppRoutes = () => {
    return(
    <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<WelcomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<PhonebookPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
    </Suspense>
          );

};

export default AppRoutes;