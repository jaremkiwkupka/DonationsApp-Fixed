import React from "react";
import "./Home.scss";
import {Navigation} from "../Navigation/Navigation";
import {MobileNavigation} from "../MobileNavigation/MobileNavigation";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {HomeWelcome} from "./HomeWelcome/HomeWelcome";
import {HomeWelcomeMobile} from "./HomeWelcomeMobile/HomeWelcomeMobile";

export const Home = () => {
    const isMobile = useMediaQuery('(max-width:1023px)');


    return (
        <main>
            {isMobile ? <MobileNavigation /> : <Navigation />}
            {isMobile ? <HomeWelcomeMobile /> : <HomeWelcome />}
        </main>
    )
}