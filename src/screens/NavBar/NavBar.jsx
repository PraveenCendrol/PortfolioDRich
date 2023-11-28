import NavCompany from "../../components/NavBar/NavCompany";
import ScrollIdeas from "../../components/NavBar/ScrollIdeas";
import MenuToggle from "../../components/NavBar/MenuToggle";
import "./navbar.css";
import { useLocation } from "react-router-dom";
export default function NavBar({ companyTextColor }) {
  const { pathname } = useLocation();
  return (
    <div
      className="nav-bar-main-cont"
      style={{ backgroundColor: pathname === "/contact" && "#202020" }}
    >
      <NavCompany
        companyTextColor={
          companyTextColor
            ? companyTextColor
            : pathname === "/contact"
            ? "white"
            : null
        }
      />
      {pathname === "/" && <ScrollIdeas />}
      <MenuToggle />
    </div>
  );
}
