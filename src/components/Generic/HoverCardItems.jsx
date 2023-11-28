import React, { useEffect, useRef, useState } from "react";
import "./hoveCard.css";
import HoverItem from "./HoverItem";
import content from "../../assets/content";
export default function HoverCardItems() {
  return (
    <section className="hover_card_main">
      <h3 className="hover_title_text">SELECTED PROJECTS</h3>
      <h1 className="hover_title_sub_text">Things I like to show others</h1>
      <div className="hover_section_list_cont">
        {content.projects.map((e) => (
          <HoverItem data={e} key={e.id} />
        ))}
      </div>
    </section>
  );
}
