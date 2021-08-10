import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Pagination } from "../../../CommonElements/Pagination/Pagination";

export const LocalCollectionItem = ({ localCollections, toggleState, total, perPage, paginate, currentPage }) => {

    const isMobile = useMediaQuery('(max-width:1023px)');

    console.log(localCollections);

    return (
        <div className={toggleState === 3 ? "who-we-help-tContainer active-content" : "who-we-help-tContainer"}>
            {localCollections.map(localCollection => (
                <div
                    className={isMobile ? "mobile-who-we-have-table" : "who-we-have-table"}
                    key={localCollection.id}
                >
                    <div>
                        <p className="who-we-help-name">{localCollection.name}</p>
                        <p className="who-we-help-details">
                            {localCollection.descr}
                        </p>
                    </div>
                    <div className="who-we-help-needs--wrap">
                        <p className="who-we-help-needs">{localCollection.tags}</p>
                    </div>
                </div>
            ))}
            <Pagination total={ total } perPage={ perPage } paginate={ paginate } currentPage={currentPage} />
        </div>
    )
}