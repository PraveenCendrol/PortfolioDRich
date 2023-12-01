import React, { useEffect, useState } from "react";
import HeroSection from "../../components/Home/HeroSection";
import "./home.css";
import TailScrollSection from "../../components/Home/TailScrollSection";
import Loading from "../../components/Generic/Loading";
import HoverCardItems from "../../components/Generic/HoverCardItems";
export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(">>>>>", windowWidth);

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
    <>
      <div className="home_screen-main-cont">
        <HeroSection windowWidth={windowWidth} />
        <TailScrollSection windowWidth={windowWidth} />
        <HoverCardItems windowWidth={windowWidth} />
      </div>
    </>
  );
}
