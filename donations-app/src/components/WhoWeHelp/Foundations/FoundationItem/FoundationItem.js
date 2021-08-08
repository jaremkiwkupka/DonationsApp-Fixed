import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Pagination } from "../../../CommonElements/Pagination/Pagination";

export const FoundationItem = ({ foundations, toggleState, total, perPage, paginate }) => {

    const isMobile = useMediaQuery('(max-width:1023px)');

    return (
        <div className={toggleState === 1 ? "who-we-help-tContainer active-content" : "who-we-help-tContainer"}>
            {foundations.map(foundation => (
                <div className={isMobile ? "mobile-who-we-have-table" : "who-we-have-table"} key={foundation.id}>
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
            <Pagination total={ total } perPage={ perPage } paginate={ paginate } />
        </div>
    )
}