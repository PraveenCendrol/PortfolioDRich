import { useEffect, useState } from "react";
import "./footer.css";
import content from "../../assets/content";
import ArrowLinkHover from "../../components/Generic/ArrowLinkHover";
import { useLocation } from "react-router-dom";
// import topArrow from "../../assets/svgs/topArrow.svg";

export const SocialMedia = ({ data = {} }) => {
  return (
    <a
      href={data?.link}
      target={data?.link}
      className="social_media_main"
      style={!data?.link ? { pointerEvents: "none" } : {}}
    >
      <img className="social_medial_colored" src={data.color} alt={data.link} />
      <img className="social_media_stroke" src={data.stroke} alt={data.link} />
    </a>
  );
};

export const TopArrow = ({
  size = "4rem",
  fill = "white",
  style = "",
  ...props
}) => (
  <svg
    className={style}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    {...props}
  >
    <path
      style={{ transition: "all 0.5s ease" }}
      d="M4.1667 33.3333L25 12.5L45.8334 33.3333L42.1355 37.0313L25 19.8958L7.86462 37.0313L4.1667 33.3333Z"
      fill={fill}
    />
  </svg>
);
export default function Footer() {
  const [time, setTime] = useState(new Date());
  const [mouse, setMouse] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const onMouseEvent = () => {
    setMouse((e) => !e);
  };
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
    <footer
      className="footer_main-cont"
      style={{ backgroundColor: pathname === "/contact" && "#202020" }}
    >
      <div className="footer_top-cont">
        <div className="footer_top_text_cont">
          <p className="footer_head_text">YOUR CUP OF TEA?</p>
          <h1 className="footer_start_text">Let’s start</h1>
        </div>
        <div className="footer_time_loc_cont">
          <h1
            className="footer_start_text "
            style={windowWidth < 600 ? { fontSize: "3rem" } : {}}
          >
            {formattedTime}
          </h1>
          <p className="footer_head_text">{content.footerLocation}</p>
        </div>
      </div>
      {pathname !== "/contact" && (
        <div className="footer_mid_cont">
          <div className="footer_mid_details_cont">
            <div className="footer_contact_cont">
              <a className="footer_contact" href={`mailto:${content.email}`}>
                {content.email}
              </a>
            </div>
            <div className="footer_contact_cont">
              <a className="footer_contact" href={`tel:${content.contact}`}>
                {content.contact}
              </a>
            </div>
          </div>
          {!(windowWidth < 600) && (
            <ArrowLinkHover
              link="/about"
              color="white"
              label="KNOW MORE ABOUT ME"
            />
          )}
          <div
            onMouseEnter={onMouseEvent}
            onMouseLeave={onMouseEvent}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="top_main_cont"
          >
            <div
              className={`top_bottom ${mouse ? "" : "maxWidthFooter colorWhiteTop"
                }`}
            >
              TOP
            </div>
            <TopArrow
              // src={topArrow}
              fill={mouse ? "black" : "white"}
              style={`top_arrow ${mouse ? "mlTop" : ""}`}
            />
            <div className={`top_top ${mouse ? "maxWidthFooter" : ""}`}>
              TOP
            </div>
          </div>
        </div>
      )}
      <div className="footer_bottom-cont">
        <div className="footer_socail-line" />
        <div
          className="footer_socail_cont"
          style={{
            backgroundColor: pathname === "/contact" ? "#202020" : "black",
          }}
        >
          {content.footerLogos.map((e) => (
            <SocialMedia key={e.id} data={e} />
          ))}
        </div>
      </div>
    </footer>
  );
}
