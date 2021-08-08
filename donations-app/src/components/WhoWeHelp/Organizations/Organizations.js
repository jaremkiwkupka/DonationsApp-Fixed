import { useEffect, useState } from "react";
import { OrganizationItem } from "./OrganizationItem/OrganizationItem";
import { Pagination } from "../../CommonElements/Pagination/Pagination";
import axios from "axios";

export const Organizations = ({ toggleState }) => {

    const [organizations, setOrganizations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [organizationsPerPage] = useState(3);

    useEffect(() => {
        const fetchOrganizations = async () => {
            setLoading(true);
            const res = await axios.get("http://localhost:3000/organizations");
            setOrganizations(res.data);
            setLoading(false);
        }

        fetchOrganizations();
    }, []);

    //Get current foundations
    const indexOfLastOrganization = currentPage * organizationsPerPage;
    const indexOfFirstOrganization = indexOfLastOrganization - organizationsPerPage;
    const currentOrganizations = organizations.slice(indexOfFirstOrganization, indexOfLastOrganization);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <OrganizationItem
                organizations={ currentOrganizations }
                toggleState={ toggleState }
                total={ organizations.length }
                perPage={ organizationsPerPage }
                paginate={ paginate }
            />
        </>
    )
}