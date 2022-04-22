import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2>LOGO</h2>
      <ul className="footerLinks FooterSocialLinks">
        <li>
          <a href="#">
            <i className="fa-brands fa-discord"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
      <br />
      <ul className="footerLinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">RoadMap</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Our Team</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
