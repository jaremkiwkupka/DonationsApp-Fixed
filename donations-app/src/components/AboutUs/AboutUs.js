import React from "react";
import decor from "../../assets/Decoration.svg";
import signature from "../../assets/Signature.svg";
import people from "../../assets/People.jpg";
import "./AboutUs.scss";

export const AboutUs = ({isMobile}) => {
    return (
        <section className={isMobile ? "mobile-about-us" : "about-us"}>
            <div className="about-us--content">
                <h2 className="header">O nas</h2>
                <img src={decor} alt="decor" className="decor"/>
                <p className="about-us--descr">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img src={signature} alt="signature" className="about-us--signature" />
            </div>
            <div className={isMobile ? "mobile-about-us--image" : "about-us--image"}>
                <img src={people} alt="people" />
            </div>
        </section>
    )
}