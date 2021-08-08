import { Decor } from "../CommonElements/Decor/Decor";

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
                <div className="who-we-help-tContainer">
                    <div className="who-we-have-table">
                        <div>
                            <p className="who-we-help-name">Organizacja “Lorem Ipsum 1”</p>
                            <p className="who-we-help-details">
                                Quis varius quam quisque id diam vel quam elementum pulvinar.
                            </p>
                        </div>
                        <div className="who-we-help-needs--wrap">
                            <p className="who-we-help-needs">Egestas, sed, tempus</p>
                        </div>
                    </div>
                    <div className="who-we-have-table">
                        <div>
                            <p className="who-we-help-name">Organizacja “Lorem Ipsum 2”</p>
                            <p className="who-we-help-details">Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        </div>
                        <div className="who-we-help-needs--wrap">
                            <p className="who-we-help-needs">Ut, aliquam, purus, sit, amet</p>
                        </div>
                    </div>
                    <div className="who-we-have-table">
                        <div>
                            <p className="who-we-help-name">Organizacja “Lorem Ipsum 3”</p>
                            <p className="who-we-help-details">Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        </div>
                        <div className="who-we-help-needs--wrap">
                            <p className="who-we-help-needs">Mi, quis, hendrerit, dolor</p>
                        </div>
                    </div>
                </div>
                <div className="who-we-help-pagination">
                    <div className="who-we-help-pagination--page current-page">1</div>
                    <div className="who-we-help-pagination--page">2</div>
                    <div className="who-we-help-pagination--page">3</div>
                </div>
            </div>
        </section>
    )
}