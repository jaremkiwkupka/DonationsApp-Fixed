import { Decor } from "../CommonElements/Decor/Decor";
import { Foundations } from "./Foundations/Foundations";
import "./WhoWeHelp.scss";

export const WhoWeHelp = () => {

    return (
        <section className="who-we-help container">
            <div className="who-we-help-box">
                <h2 className="header">Komu pomagamy?</h2>
                <Decor />
                <div className="who-we-help-choose">
                    <div className="who-we-help-choose--item">Fundacjom</div>
                    <div className="who-we-help-choose--item active">Organizacjom pozarządowym</div>
                    <div className="who-we-help-choose--item">Lokalnym zbiórkom</div>
                </div>
                <p className="who-we-help-descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <Foundations />
            </div>
        </section>
    )
}