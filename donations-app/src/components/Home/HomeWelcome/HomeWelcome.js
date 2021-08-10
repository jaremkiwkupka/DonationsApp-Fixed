import { Link } from "react-router-dom";
import { Decor } from "../../CommonElements/Decor/Decor";
import heroImg from "../../../assets/Home-Hero-Image.jpg";
import "./HomeWelcome.scss";

export const HomeWelcome = () => {

    return (
        <section className="home container" id="home">
            <img src={heroImg} alt="hero" className="home-heroImg"/>
            <div className="home-welcome">
                <h1 className="home-welcome-header">Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <Decor />
                <div className="home-welcome-cta">
                    <Link to="/donate" className="home-btn">oddaj rzeczy</Link>
                    <a href="#" className="home-btn">zorganizuj zbiórkę</a>
                </div>
            </div>
        </section>
    )
}