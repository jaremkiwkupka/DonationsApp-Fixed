import React from "react";
import "./Home.scss";
import {Navigation} from "../Navigation/Navigation";
import {MobileNavigation} from "../MobileNavigation/MobileNavigation";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {HomeWelcome} from "./HomeWelcome/HomeWelcome";
import {HomeWelcomeMobile} from "./HomeWelcomeMobile/HomeWelcomeMobile";
import {Statistics} from "../Statistics/Statistics";
import {StepsInfo} from "../StepsInfo/StepsInfo";
import {AboutUs} from "../AboutUs/AboutUs";

export const Home = () => {
    const isMobile = useMediaQuery('(max-width:1023px)');

    return (
        <main>
            {isMobile ? <MobileNavigation /> : <Navigation />}
            {isMobile ? <HomeWelcomeMobile /> : <HomeWelcome />}
            <Statistics isMobile={isMobile}/>
            <StepsInfo isMobile={isMobile}/>
            <AboutUs isMobile={isMobile}/>
        </main>
    )
}