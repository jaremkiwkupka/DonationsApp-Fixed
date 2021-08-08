import "./StatisticsMobile.scss";

export const StatisticsMobile = () => {

    return (
        <section className="statistics">
            <div className="mobile-statistics-cont">
                <div className="mobile-statistics-box">
                    <span className="mobile-statistics-box--number">10</span>
                    <h4 className="statistics-box--header">oddanych worków</h4>
                    <p className="statistics-box--text">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
                <div className="mobile-statistics-box">
                    <span className="mobile-statistics-box--number">5</span>
                    <h4 className="statistics-box--header">wspartych organizacji</h4>
                    <p className="statistics-box--text">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
                <div className="mobile-statistics-box">
                    <span className="mobile-statistics-box--number">7</span>
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