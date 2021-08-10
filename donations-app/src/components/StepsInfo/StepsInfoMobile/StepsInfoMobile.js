import { Link } from "react-router-dom";
import { Decor } from "../../CommonElements/Decor/Decor";
import icon1 from "../../../assets/Icon-1.svg";
import icon2 from "../../../assets/Icon-2.svg";
import icon3 from "../../../assets/Icon-3.svg";
import icon4 from "../../../assets/Icon-4.svg";
import "./StepsInfoMobile.scss";
import "../../Home/HomeWelcome/HomeWelcome.scss"

export const StepsInfoMobile = () => {
    return (
        <section className="steps-info container" id="steps-info">
            <h2 className="header">Wystarczą 4 proste kroki</h2>
            <Decor />
            <div className="mobile-steps-info-box">
                <div className="mobile-steps-info-box--item">
                    <img src={icon1} alt="icon-1" />
                    <h5 className="steps-info-box--header">Wybierz rzeczy</h5>
                    <hr className="steps-info-box--line"/>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="mobile-steps-info-box--item">
                    <img src={icon2} alt="icon-2" />
                    <h5 className="steps-info-box--header">Spakuj je</h5>
                    <hr className="steps-info-box--line"/>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="mobile-steps-info-box--item">
                    <img src={icon3} alt="icon-3" />
                    <h5 className="steps-info-box--header">Zdecyduj komu chcesz pomóc</h5>
                    <hr className="steps-info-box--line"/>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="mobile-steps-info-box--item">
                    <img src={icon4} alt="icon-4" />
                    <h5 className="steps-info-box--header">Zamów kuriera</h5>
                    <hr className="steps-info-box--line"/>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="steps-info-box--btn">
                <Link to="/login" className="home-btn margin-btn">Oddaj rzeczy</Link>
            </div>
        </section>
    )
}