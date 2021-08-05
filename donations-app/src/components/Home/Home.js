import React from "react";
import {Navigation} from "../Navigation/Navigation";
import "./Home.scss";
import {MobileNavigation} from "../MobileNavigation/MobileNavigation";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const Home = () => {
    const isMobile = useMediaQuery('(max-width:1023px)');

    return (
        <main>
            {isMobile ? <MobileNavigation /> : <Navigation />}
        </main>
    )
}