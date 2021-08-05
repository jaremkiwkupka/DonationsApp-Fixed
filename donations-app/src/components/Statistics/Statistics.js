import React from "react";
import "./Statistics.scss";

export const Statistics = ({isMobile}) => {
    return (
        <section className="statistics">
            <div className={isMobile ? "mobile-statistics-cont" : "statistics-cont container"}>
                <div className={isMobile ? "mobile-statistics-box" : "statistics-box"}>
                    <span className={isMobile ? "mobile-statistics-box--number" : "statistics-box--number"}>10</span>
                    <h4 className="statistics-box--header">oddanych worków</h4>
                    <p className="statistics-box--text">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
                <div className={isMobile ? "mobile-statistics-box" : "statistics-box"}>
                    <span className={isMobile ? "mobile-statistics-box--number" : "statistics-box--number"}>5</span>
                    <h4 className="statistics-box--header">wspartych organizacji</h4>
                    <p className="statistics-box--text">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
                <div className={isMobile ? "mobile-statistics-box" : "statistics-box"}>
                    <span className={isMobile ? "mobile-statistics-box--number" : "statistics-box--number"}>7</span>
                    <h4 className="statistics-box--header">zorganizowanych zbiórek</h4>
                    <p className="statistics-box--text">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
            </div>
        </section>
    )
}