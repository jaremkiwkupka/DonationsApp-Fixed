import facebook from "../../../assets/Facebook.svg";
import instagram from "../../../assets/Instagram.svg";
import "./FooterMobile.scss";

export const FooterMobile = () => {
    return (
        <footer className="mobile-footer">
            <div className="mobile-footer-company">
                <p>Copyright by CodersLab</p>
            </div>
            <div className="mobile-footer-social">
                <a href="#"><img src={facebook} alt="facebook" /></a>
                <a href="#"><img src={instagram} alt="instagram" /></a>
            </div>
        </footer>
    )
}