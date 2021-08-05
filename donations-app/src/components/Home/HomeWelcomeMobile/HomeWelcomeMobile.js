import React from "react";
import heroImg from "../../../assets/Home-Hero-Image.jpg";
import decor from "../../../assets/Decoration.svg";
import "./HomeWelcomeMobile.scss";

export const HomeWelcomeMobile = () => {
    return (
        <section className="home">
            <div className="mobile-home-welcome">
                <h1 className="mobile-home-welcome-header">Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decor} alt="decor" className="mobile-home-welcome-decor"/>
                <div className="mobile-home-welcome-cta">
                    <a href="#" className="mobile-home-welcome--btn">oddaj rzeczy</a>
                    <a href="#" className="mobile-home-welcome--btn">zorganizuj zbiórkę</a>
                </div>
                <img src={heroImg} alt="hero" className="mobile-home-heroImg"/>
            </div>
        </section>
    )
}