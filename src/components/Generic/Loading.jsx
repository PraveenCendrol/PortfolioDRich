import React, { useEffect, useState } from "react";

export default function Loading({ loadingList = [], isMounted = false }) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const intervalID = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * loadingList.length);
      setIndex(randomNumber);
    }, 500);
    document.body.classList.add("body-scroll-lock");
    return () => {
      document.body.classList.remove("body-scroll-lock");
      clearInterval(intervalID);
    };
  }, [loadingList]);

  useEffect(() => {
    let timeId;
    if (isMounted) {
      setIsVisible(true);
    } else {
      timeId = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeId);
    };
  }, [isMounted]);

  return (
    <div className={`loading_main-cont ${isVisible ? "visible" : "hidden"}`}>
      <div className="loading_bullet" />
      {loadingList.map((e, i) => {
        return (
          <h1 className={`loading_items ${index === i ? "opacityfull" : ""}`}>
            {e}
          </h1>
        );
      })}
    </div>
  );
}
