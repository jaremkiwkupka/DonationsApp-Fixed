import { Link } from "react-router-dom";
import { Decor } from "../../CommonElements/Decor/Decor";
import heroImg from "../../../assets/Home-Hero-Image.jpg";
import "./HomeWelcomeMobile.scss";

export const HomeWelcomeMobile = () => {

    return (
        <section className="home" id="home">
            <div className="mobile-home-welcome">
                <h1 className="mobile-home-welcome-header">Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <Decor />
                <div className="mobile-home-welcome-cta">
                    <Link to="/donate" className="mobile-home-btn">oddaj rzeczy</Link>
                    <a href="#" className="mobile-home-btn">zorganizuj zbiórkę</a>
                </div>
                <img src={heroImg} alt="hero" className="mobile-home-heroImg" />
            </div>
        </section>
    )
}