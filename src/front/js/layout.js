import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import UserPage from "./pages/userPage";
import Single from "./pages/single";

const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/user" element={<UserPage />} />
                        <Route path="/single/:type/:id" element={<Single />} />
                        <Route path="*" element={<h1>Not Found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default Layout;
