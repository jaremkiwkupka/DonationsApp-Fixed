import { useEffect, useState } from "react";
import { FoundationItem } from "./FoundationItem/FoundationItem";
import { Pagination } from "../../CommonElements/Pagination/Pagination";
import axios from "axios";

export const Foundations = ({ toggleState }) => {

    const [foundations, setFoundations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [foundationsPerPage] = useState(3);

    useEffect(() => {
        const fetchFoundations = async () => {
            setLoading(true);
            const res = await axios.get("http://localhost:3000/foundations");
            setFoundations(res.data);
            setLoading(false);
        }

        fetchFoundations();
    }, []);

    //Get current foundations
    const indexOfLastFoundation = currentPage * foundationsPerPage;
    const indexOfFirstFoundation = indexOfLastFoundation - foundationsPerPage;
    const currentFoundations = foundations.slice(indexOfFirstFoundation, indexOfLastFoundation);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <FoundationItem
                foundations={ currentFoundations }
                toggleState={ toggleState }
                total={ foundations.length }
                perPage={ foundationsPerPage }
                paginate={ paginate }
            />
        </>
    )
}