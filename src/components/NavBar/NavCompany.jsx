import { useState } from "react";
import content from "../../assets/content";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavCompany({ companyTextColor = "", windowWidth = 0 }) {
  const [entered, setEntered] = useState(false);
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const onMouseEnter = () => {
    setEntered(true);
  };
  const onMouseLeave = () => {
    setEntered(false);
  };
  const changeRoute = () => {
    navigation(pathname === "/" ? "" : "/");
  };
  return (
    <div
      onClick={changeRoute}
      className="nav__main-cont"
      style={{ color: companyTextColor || "black" }}
    >
      <div className="nav__brand-cont">
        <p className="nav__mainLogo">$</p>
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="nav_logo-ani-cont"
        >
          {windowWidth > 500 ? (
            <>
              <p className={`${entered ? "lefttoright" : "righttoleft"}`}>
                {content.surname}
              </p>

              <p className={`${entered ? "bottomtotop" : "toptobottom"}`}>
                {content.jobDone}
              </p>

              <p className={`${entered ? "lightLeft" : "lightRight"}`}>
                {content.name}
              </p>
            </>
          ) : (
            `${" "}${content.jobDone} ${content.name}`
          )}
        </div>
      </div>
    </div>
  );
}
