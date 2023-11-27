import { useState } from "react";
import content from "../../assets/content";

export default function NavCompany({ companyTextColor = "" }) {
  const [entered, setEntered] = useState(false);
  const onMouseEnter = () => {
    setEntered(true);
  };
  const onMouseLeave = () => {
    setEntered(false);
  };
  return (
    <div className="nav__main-cont" style={{ color: companyTextColor }}>
      <div className="nav__brand-cont">
        <p className="nav__mainLogo">$</p>
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="nav_logo-ani-cont"
        >
          <p className={`${entered ? "lefttoright" : "righttoleft"}`}>
            {content.surname}
          </p>
          <p className={`${entered ? "bottomtotop" : "toptobottom"}`}>
            {content.jobDone}
          </p>
          <p className={`${entered ? "lightLeft" : "lightRight"}`}>
            {content.name}
          </p>
        </div>
      </div>
    </div>
  );
}
