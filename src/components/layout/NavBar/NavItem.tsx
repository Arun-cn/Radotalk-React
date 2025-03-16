import { NavLink } from "../../../types/navTypes";
import { Link } from "react-router-dom";

type NavItemProps = {
  link: NavLink;
  onClick?: () => void;
};

const NavItem = ({ link, onClick }: NavItemProps) => {
  return (
    <Link
      to={link.path}
      className="text-gray-700 hover:text-blue-500 transitionduration-300"
      onClick={onClick}
    >
      {link.label}
    </Link>
  );
};

export default NavItem;
