import React, { useState } from "react";
import { Link } from "react-router-dom";
let transition = "all 1s cubic-bezier(0,1.02,0,1.12)";
export const ArrowSvg = ({ size = 24, fill = "#1C1B1F", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        style={{ transition }}
        d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
        fill={fill}
      />
    </svg>
  );
};
export default function ArrowLinkHover({
  windowWidth,
  label = "",
  additionalStyles = {},
  color = "black",
  link = "",
}) {
  const [mouse, setMouse] = useState(false);
  const onMouseEvent = () => {
    setMouse((e) => !e);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "2rem",
        position: "relative",
        transition,
        width: "max-content",
        cursor: "pointer",
        ...additionalStyles,
      }}
      onMouseEnter={onMouseEvent}
      onMouseLeave={onMouseEvent}
    >
      <Link
        to={link}
        style={{
          color: `${mouse ? "var(--logo-green)" : color}`,
          transition,
          textDecoration: "none",
        }}
      >
        {label}
      </Link>
      <ArrowSvg
        fill={mouse ? "var(--logo-green)" : color}
        style={{
          marginLeft: mouse ? "1.5rem" : ".5rem",
          transition,
        }}
        size={"3rem"}
      />
      <div
        style={{
          width: "85%",
          height: ".2rem",
          backgroundColor: "var(--logo-green)",
          position: "absolute",
          bottom: "0",
          left: mouse ? "0" : "-200%",
          opacity: mouse ? "1" : "0",
          transition,
        }}
      />
    </div>
  );
}
