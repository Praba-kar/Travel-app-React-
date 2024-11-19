import { pageLinks } from "../data";
import PageLink from "./PageLink";
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
          //   <li key={links.id}>
          //     <a href={links.href} className={itemClass}>
          //       {links.text}
          //     </a>
          //   </li>
          <PageLink key={link.id} link={link} itemClass={itemClass} />
        );
      })}
    </ul>
  );
};
export default PageLinks;
