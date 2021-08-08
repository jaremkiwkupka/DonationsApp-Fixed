import { useState } from "react";
import { Decor } from "../CommonElements/Decor/Decor";
import { Foundations } from "./Foundations/Foundations";
import { Organizations } from "./Organizations/Organizations";
import { LocalCollections } from "./LocalCollections/LocalCollections";
import "./WhoWeHelp.scss";

export const WhoWeHelp = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="who-we-help container">
            <div className="who-we-help-box">
                <h2 className="header">Komu pomagamy?</h2>
                <Decor />
                <div className="who-we-help-choose">
                    <div
                        className={toggleState === 1 ? "who-we-help-choose--item active-tab" : "who-we-help-choose--item"}
                        onClick={() => toggleTab(1)}>
                        Fundacjom
                    </div>
                    <div
                        className={toggleState === 2 ? "who-we-help-choose--item active-tab" : "who-we-help-choose--item"}
                        onClick={() => toggleTab(2)}>
                        Organizacjom pozarządowym
                    </div>
                    <div
                        className={toggleState === 3 ? "who-we-help-choose--item active-tab" : "who-we-help-choose--item"}
                        onClick={() => toggleTab(3)}>
                        Lokalnym zbiórkom
                    </div>
                </div>
                <p className="who-we-help-descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <Foundations toggleState={ toggleState } />
                <Organizations toggleState={ toggleState } />
                <LocalCollections toggleState={ toggleState } />
            </div>
        </section>
    )
}