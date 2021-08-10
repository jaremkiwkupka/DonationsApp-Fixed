import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";
import "./Footer.scss";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-company">
                <p>Copyright by CodersLab</p>
            </div>
            <div className="footer-social">
                <a href="#"><img src={facebook} alt="facebook" /></a>
                <a href="#"><img src={instagram} alt="instagram" /></a>
            </div>
        </footer>
    )
}