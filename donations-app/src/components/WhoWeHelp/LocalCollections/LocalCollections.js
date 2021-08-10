import { useEffect, useState } from "react";
import { LocalCollectionItem } from "./LocalCollectionItem/LocalCollectionItem";
import axios from "axios";

export const LocalCollections = ({ toggleState }) => {

    const [localCollections, setLocalCollections] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [localCollectionsPerPage] = useState(3);

    useEffect(() => {
        const fetchLocalCollections = async () => {
            setLoading(true);
            const res = await axios.get("http://localhost:3000/localCollections");
            setLocalCollections(res.data);
            setLoading(false);
        }

        fetchLocalCollections();
    }, []);

    //Get current foundations
    const indexOfLastLocalCollections = currentPage * localCollectionsPerPage;
    const indexOfFirstLocalCollections = indexOfLastLocalCollections - localCollectionsPerPage;
    const currentLocalCollections = localCollections.slice(indexOfFirstLocalCollections, indexOfLastLocalCollections);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <LocalCollectionItem
                localCollections={ currentLocalCollections }
                toggleState={ toggleState }
                total={ localCollections.length }
                perPage={ localCollectionsPerPage }
                paginate={ paginate }
                currentPage={currentPage}
            />
        </>
    )
}