import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
const Footer = () => {
  return (
    <footer className="section footer">
      {/* <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul> */}
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          // const { id, href, icon } = link;
          // return (
          //   <li key={id}>
          //     <a href={href} target="_blank" className="footer-icon">
          //       <i className={icon}></i>
          //     </a>
          //   </li>
          // );
          return (
            <SocialLinks key={link.id} {...link} itemClass="footer-icon" />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
