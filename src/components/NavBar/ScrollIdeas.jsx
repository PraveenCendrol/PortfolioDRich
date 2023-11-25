import { useEffect, useRef, useState } from "react";
import content from "../../assets/content";

export default function ScrollIdeas() {
  const [items, setItems] = useState([...content.ideas]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      scroll();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const scroll = () => {
    setItems((prevItems) => {
      const shiftedItems = prevItems.slice(1); // Shift the first item to the end
      return [...shiftedItems, prevItems[0]];
    });
  };

  // eslint-disable-next-line react/prop-types
  function MapITems({ e, i }) {
    const [curWidth, setCurWidth] = useState(false);

    if (i === 0) {
      setTimeout(() => {
        setCurWidth((e) => {
          return !e;
        });
      }, 2000);
    }
    return (
      <div style={{ maxWidth: curWidth ? "0" : "300px", transition: "all 1s" }}>
        <p className={`scroll_i_item ${i === 0 ? "color-green" : ""}`} key={e}>
          {e}
        </p>
      </div>
    );
  }

  return (
    <div className="scroll_i_main ">
      <div className="scroll_contoller_cont">
        {items.map((e, i) => (
          <MapITems e={e} i={i} key={`${e}${i}`} />
        ))}
      </div>
    </div>
  );
}
