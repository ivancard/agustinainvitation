import "./footer.scss";
import footerImg from "../assets/img/fotterImg.jpeg";
export const Footer = () => {
  return (
    <div
      className="footer-image"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <h2>Te espero</h2>
    </div>
  );
};
