import { Navigation } from "../Navigation/Navigation";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";
import { HomeWelcome } from "./HomeWelcome/HomeWelcome";
import { HomeWelcomeMobile } from "./HomeWelcomeMobile/HomeWelcomeMobile";
import { Statistics } from "../Statistics/Statistics";
import { StatisticsMobile } from "../Statistics/StatisticsMobile/StatisticsMobile";
import { StepsInfo } from "../StepsInfo/StepsInfo";
import { StepsInfoMobile} from "../StepsInfo/StepsInfoMobile/StepsInfoMobile";
import { AboutUs } from "../AboutUs/AboutUs";
import { AboutUsMobile } from "../AboutUs/AboutUsMobile/AboutUsMobile";
import { WhoWeHelp } from "../WhoWeHelp/WhoWeHelp";
import { WhoWeHelpMobile } from "../WhoWeHelp/WhoWeHelpMobile/WhoWeHelpMobile";
import { Contact } from "../Contact/Contact";
import { ContactMobile } from "../Contact/ContactMobile/ContactMobile";
import { Footer } from "../Footer/Footer";
import { FooterMobile } from "../Footer/FooterMobile/FooterMobile";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import "./Home.scss";

export const Home = () => {

    const isMobile = useMediaQuery('(max-width:1023px)');

    return (
        <main>
            {isMobile ? <MobileNavigation /> : <Navigation />}
            {isMobile ? <HomeWelcomeMobile /> : <HomeWelcome />}
            {isMobile ? <StatisticsMobile /> : <Statistics />}
            {isMobile ? <StepsInfoMobile /> : <StepsInfo />}
            {isMobile ? <AboutUsMobile /> : <AboutUs />}
            {isMobile ? <WhoWeHelpMobile /> : <WhoWeHelp />}
            {isMobile ? <ContactMobile /> : <Contact />}
            {isMobile ? <FooterMobile /> : <Footer />}
        </main>
    )
}