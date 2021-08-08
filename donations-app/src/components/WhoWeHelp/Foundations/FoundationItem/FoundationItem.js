export const FoundationItem = ({ foundations }) => {
    return (
        <div className="who-we-help-tContainer">
            {foundations.map(foundation => (
                <div className="who-we-have-table" key={foundation.id}>
                    <div>
                        <p className="who-we-help-name">{foundation.name}</p>
                        <p className="who-we-help-details">
                            {foundation.descr}
                        </p>
                    </div>
                    <div className="who-we-help-needs--wrap">
                        <p className="who-we-help-needs">{foundation.tags}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}