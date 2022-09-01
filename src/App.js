import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
    return (
        <Routes>
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default App;
