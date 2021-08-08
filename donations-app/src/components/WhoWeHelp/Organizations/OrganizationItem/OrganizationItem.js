import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Pagination} from "../../../CommonElements/Pagination/Pagination";

export const OrganizationItem = ({ organizations, toggleState, total, perPage, paginate }) => {

    const isMobile = useMediaQuery('(max-width:1023px)');

    return (
        <div className={toggleState === 2 ? "who-we-help-tContainer active-content" : "who-we-help-tContainer"}>
            {organizations.map(organization => (
                <div className={isMobile ? "mobile-who-we-have-table" : "who-we-have-table"} key={organization.id}>
                    <div>
                        <p className="who-we-help-name">{organization.name}</p>
                        <p className="who-we-help-details">
                            {organization.descr}
                        </p>
                    </div>
                    <div className="who-we-help-needs--wrap">
                        <p className="who-we-help-needs">{organization.tags}</p>
                    </div>
                </div>
            ))}
            <Pagination total={ total } perPage={ perPage } paginate={ paginate } />
        </div>
    )
}