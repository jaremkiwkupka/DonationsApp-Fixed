import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import "./Navigation.scss";

export const Navigation = () => {
    return (
        <nav className="navigation container">
            <section className="user-navigation">
                <Link
                    to="/login"
                    className="user-navigation--item"
                >
                    Zaloguj
                </Link>
                <Link
                    to="/registration"
                    className="user-navigation--item user-navigation--register"
                >
                    Załóż konto
                </Link>
            </section>
            <section className="main-navigation">
                <LinkScroll to="home" className="main-navigation--item">Start</LinkScroll>
                <LinkScroll
                    to="steps-info"
                    className="main-navigation--item"
                    smooth={true}
                    duration={1000}
                >
                    O co chodzi?
                </LinkScroll>
                <LinkScroll
                    to="about-us"
                    className="main-navigation--item"
                    smooth={true}
                    duration={1000}
                >
                    O nas
                </LinkScroll>
                <LinkScroll
                    to="who-we-help"
                    className="main-navigation--item"
                    smooth={true}
                    duration={1000}
                >
                    Fundacja i organizacje
                </LinkScroll>
                <LinkScroll
                    to="contact"
                    className="main-navigation--item"
                    smooth={true}
                    duration={1000}
                >
                    Kontakt
                </LinkScroll>
            </section>
        </nav>
    )
}