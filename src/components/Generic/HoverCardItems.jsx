import React, { useEffect, useRef, useState } from "react";
import "./hoveCard.css";
import HoverItem from "./HoverItem";
import content from "../../assets/content";
export default function HoverCardItems({ windowWidth }) {
  return (
    <section className="hover_card_main">
      <div
        style={
          windowWidth < 600
            ? {
                position: "sticky",
                padding: "5rem 0",
                top: "0",
                left: "2rem",
                backgroundColor: "white",
                zIndex: 3,
                width: "100%",
              }
            : {}
        }
      >
        <h3 className="hover_title_text">SELECTED PROJECTS</h3>
        <h1 className="hover_title_sub_text">Things I like to show others</h1>
      </div>

      <div className="hover_section_list_cont">
        {content.projects.map((e) => (
          <HoverItem windowWidth={windowWidth} data={e} key={e.id} />
        ))}
      </div>
    </section>
  );
}
