import React, { useState } from "react";
import crmsvg from "../../assets/svgs/crmsvg.svg";
import { useNavigate } from "react-router-dom";

export default function HoverItem({ data, windowWidth }) {
  const [hover, setHover] = useState(false);
  const { id, category, projectHead, projectbrief, use, img, extraBtn, link } =
    data;
  const navigate = useNavigate();
  const onHover = () => {
    setHover((e) => !e);
  };
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      className="hover_items_main_cont"
      onClick={() => {
        link && window.scrollTo(0, 0);
        navigate(link);
      }}
    >
      <div className="hover_item_cont">
        <img
          src={img}
          className={`hover_bg_video ${
            windowWidth < 600 || hover ? " hover-top" : "hover-opacity"
          }`}
        />

        <h2 className="hover_item_head">{category}</h2>
        <div>
          <div className="hover_item_ani_cont">
            <h3 className="hover_item_main_head">{projectHead}</h3>
            <div
              className={`hover_ani_para ${
                (windowWidth < 600 || hover) && "hover-width"
              }`}
            >
              <p className="hover_item_main_para ">{projectbrief}</p>
            </div>
          </div>
          <div className="hover_custom_details_cont">
            <div
              className="hover_cont_line"
              style={{ width: windowWidth < 600 || hover ? "100%" : "10%" }}
            />
            <p
              className={`hover_custom_detail hov_another_detail ${
                (windowWidth < 600 || hover) && "hover-opacity"
              }`}
            >
              {use}
            </p>
            <p
              className={`hover_custom_detail ${
                !(windowWidth < 600 || hover) ? "hover-opacity" : ""
              }`}
            >
              {extraBtn || "View"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
