import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3 px-4">
            <Link to="/" className="navbar-brand">
                Star Wars Blog
            </Link>

            <div className="ml-auto">
                <Link to="/user" className="btn btn-outline-primary">
                    Usuario
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
