import useMediaQuery from "@material-ui/core/useMediaQuery";
import decor from "../../../assets/Decoration.svg";
import "./Decor.scss";

export const Decor = () => {

    const isMobile = useMediaQuery('(max-width:1023px)');
    const mobileView = <img src={decor} alt="decor" className="mobile-decor" />;
    const desktopView = <img src={decor} alt="decor" className="decor" />;

    return (
        <>
            {isMobile ? mobileView : desktopView}
        </>
    )
}