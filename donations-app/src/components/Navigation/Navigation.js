import { Link } from "react-scroll";
import "./Navigation.scss";

export const Navigation = () => {
    return (
        <nav className="navigation container">
            <section className="user-navigation">
                <Link activeClass="active" to="/login" className="user-navigation--item" >Zaloguj</Link>
                <Link to="/registration" className="user-navigation--item user-navigation--register">Załóż konto</Link>
            </section>
            <section className="main-navigation">
                <Link to="home" className="main-navigation--item">Start</Link>
                <Link to="steps-info" className="main-navigation--item" smooth={true} duration={1000}>O co chodzi?</Link>
                <Link to="about-us" className="main-navigation--item" smooth={true} duration={1000}>O nas</Link>
                <Link to="who-we-help" className="main-navigation--item" smooth={true} duration={1000}>Fundacja i organizacje</Link>
                <Link to="contact" className="main-navigation--item" smooth={true} duration={1000}>Kontakt</Link>
            </section>
        </nav>
    )
}