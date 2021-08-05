import React from "react";
import { Link } from "react-router-dom";
import "./HomeWelcome.scss";
import heroImg from "../../../assets/Home-Hero-Image.jpg";
import decor from  "../../../assets/Decoration.svg";

export const HomeWelcome = () => {
    return (
        <section className="home container">
            <img src={heroImg} alt="hero" className="home-heroImg"/>
            <div className="home-welcome">
                <h1 className="home-welcome-header">Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decor} alt="decor" className="home-welcome-decor"/>
                <div className="home-welcome-cta">
                    <Link to="/donate" className="home-welcome--btn">oddaj rzeczy</Link>
                    <a href="#" className="home-welcome--btn">zorganizuj zbiórkę</a>
                </div>
            </div>
        </section>
    )
}