import NavCompany from "../../components/NavBar/NavCompany";
import ScrollIdeas from "../../components/NavBar/ScrollIdeas";
import MenuToggle from "../../components/NavBar/MenuToggle";
import "./navbar.css";
export default function NavBar() {
  return (
    <div className="nav-bar-main-cont">
      <NavCompany />
      <ScrollIdeas />
      <MenuToggle />
    </div>
  );
}
