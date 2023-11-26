import NavCompany from "../../components/NavBar/NavCompany";
import ScrollIdeas from "../../components/NavBar/ScrollIdeas";
import MenuToggle from "../../components/NavBar/MenuToggle";
import "./navbar.css";
import { useLocation } from "react-router-dom";
export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <div className="nav-bar-main-cont">
      <NavCompany />
      {pathname === "/" && <ScrollIdeas />}
      <MenuToggle />
    </div>
  );
}
