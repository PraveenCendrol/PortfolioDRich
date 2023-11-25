import React, { useState } from "react";
import content from "../../assets/content";
import { Link } from "react-router-dom";

export const MenuItems = ({
  data = {
    id: "",
    label: "",
    link: "",
    isDownload: false,
  },
}) => {
  return (
    <div>
      <Link href={"/home"} className="menu_list_items">
        {data.label}
      </Link>
    </div>
  );
};

export const SocialMediaItems = ({
  data = {
    id: "",
    label: "",
    link: "",
    gradiant: "",
  },
}) => {
  const [mouse, setMouse] = useState(false);

  const mouseChange = () => {
    setMouse((e) => !e);
  };

  return (
    <div>
      <a
        onMouseEnter={mouseChange}
        onMouseLeave={mouseChange}
        className="social_items"
        style={mouse ? { backgroundImage: data.gradiant } : {}}
      >
        {data.label}
      </a>
      <div
        className="socialline"
        style={mouse ? { backgroundImage: data.gradiant } : {}}
      />
    </div>
  );
};

export default function MenuToggle() {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen((e) => !e);
  };
  return (
    <>
      <div className="menu_main_cont" onClick={onClick}>
        <div className={`menu_cover ${open ? "menu_cover-click " : ""}`} />
        <div className="menu_icon-cont">
          <span className={`menu_icon ${open ? "transformIcon" : ""}`} />
          <span
            className={`menu_icon_before ${open ? "transformIconBefore" : ""}`}
          />
          <span
            className={`menu_icon_after ${open ? "transformIconAfter" : ""}`}
          />
        </div>
      </div>
      <div className={`menu_details-cont ${open ? "openMenu" : ""}`}>
        <h5>NAVIGATION</h5>
        <hr />
        <div>
          {content.menuItems.map((e) => (
            <MenuItems data={e} key={e.id} />
          ))}
        </div>
        <div className="menu_social_main">
          <h5>Social</h5>
          <div className="menu_social_items_cont">
            {content.socialMedia.map((e) => (
              <SocialMediaItems data={e} key={e.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
