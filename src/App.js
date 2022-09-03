import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));

function App() {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/forgot-pass" element={<ForgotPasswordPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Suspense>
    );
}

export default App;
