import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.scss";

export const Navigation = () => {
    return (
        <nav>
            <section className="user-navigation">
                <Link to="/login" className="user-navigation--item">Zaloguj</Link>
                <Link to="/registration" className="user-navigation--item user-navigation--register">Załóż konto</Link>
            </section>
            <section className="main-navigation">
                <Link to="/" className="main-navigation--item">Start</Link>
                <Link to="/" className="main-navigation--item">O co chodzi?</Link>
                <Link to="/" className="main-navigation--item">O nas</Link>
                <Link to="/" className="main-navigation--item">Fundacja i organizacje</Link>
                <Link to="/" className="main-navigation--item">Kontakt</Link>
            </section>
        </nav>
    )
}