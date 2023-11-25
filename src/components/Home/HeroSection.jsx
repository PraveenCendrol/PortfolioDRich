import React, { useRef, useState } from "react";
import content from "../../assets/content";
import ArrowLinkHover from "../Generic/ArrowLinkHover";
import clickHere from "../../assets/svgs/clickHere.svg";
import hoverHere from "../../assets/svgs/hoverHere.svg";
export default function HeroSection() {
  const [imageVisible, setImageVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const clickHereRef = useRef(false);

  const onClickName = () => {
    if (clickHereRef.current === false) clickHereRef.current = true;
    setImageVisible((e) => !e);
  };

  const onHoverChange = () => {
    if (hover === false) setHover(true);
  };

  return (
    <div className="home_hero_main_cont">
      <div className="hero_intro_text-cont">
        <p className="hero_intro_text">
          {content.heroSubHeadGreetings}{" "}
          <span onClick={onClickName}>
            {!clickHereRef.current && <img src={clickHere} />}
            <img
              src={content.heroAvatar}
              className="hero_avatar"
              style={{ top: imageVisible ? "-12rem" : "1.5rem", left: "-3rem" }}
            />
            <div
              style={{
                backgroundColor: "var(--menu-white)",
                height: "18rem",
                width: "12rem",
                position: "absolute",
                top: "1rem",
                left: "-3rem",
                zIndex: "-1",
              }}
            />
            {content.name}
          </span>{" "}
          {content.heroSubHeadDesignation}
        </p>
        <h1>{content.heroContent}</h1>
        <ArrowLinkHover
          additionalStyles={{ marginTop: "4.6rem" }}
          label="LET’S WORK TOGETHER"
        />
      </div>
      <div className="hero_logo_main-cont">
        {!hover && <img src={hoverHere} className="hero-hover-here" />}
        <img
          onMouseEnter={onHoverChange}
          src={content.heroLogoBase}
          className="hero-base-logo"
        />
        <img src={content.heroColoredLogo} className="hero-colored-logo" />
      </div>
    </div>
  );
}
