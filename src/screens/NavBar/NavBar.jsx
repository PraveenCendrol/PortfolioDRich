import NavCompany from "../../components/NavBar/NavCompany";
import ScrollIdeas from "../../components/NavBar/ScrollIdeas";
import MenuToggle from "../../components/NavBar/MenuToggle";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export default function NavBar({ companyTextColor }) {
  const { pathname } = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(">>>>>", windowWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="nav-bar-main-cont"
      style={{ backgroundColor: pathname === "/contact" && "#202020" }}
    >
      <NavCompany
        windowWidth={windowWidth}
        companyTextColor={
          companyTextColor
            ? companyTextColor
            : pathname === "/contact"
            ? "white"
            : null
        }
      />
      {pathname === "/" && windowWidth > 600 && <ScrollIdeas />}
      <MenuToggle />
    </div>
  );
}
