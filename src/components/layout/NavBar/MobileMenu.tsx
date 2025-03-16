import NavItem from "./NavItem";
import { navLinks } from "../../../constants/navLinks";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;
  return (
    <div className="md:hidden bg-white border-t border-gray-200">
      <div className="px-4 py-2 flex flex-col space-y-2">
        {navLinks.map((link) => (
          <NavItem key={link.path} link={link} onClick={onClose} />
        ))}
        ;
      </div>
    </div>
  );
};

export default MobileMenu;
