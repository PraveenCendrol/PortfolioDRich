import content from "../../assets/content";
import NavBar from "../NavBar/NavBar";
import "./work.css";
import workVideo from "../../assets/videos/workVide0.mp4";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HoverItem from "../../components/Generic/HoverItem";
const transition = "all .5s ease-in-out";

export const ListTogglerSvg = ({
  size = "8.5rem",
  fill = "#6C6C6C",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 85 85"
      fill="none"
      style={{ transition }}
      {...props}
    >
      <rect
        x={24}
        y={28}
        width={37.5}
        height={3.75}
        fill={fill}
        style={{ transition }}
      />
      <rect
        x={24}
        y={37}
        width={37.5}
        height={3.75}
        fill={fill}
        style={{ transition }}
      />
      <rect
        x={24}
        y={46}
        width={37.5}
        height={3.75}
        fill={fill}
        style={{ transition }}
      />
      <rect
        x={24}
        y={55}
        width={37.5}
        height={3.75}
        fill={fill}
        style={{ transition }}
      />
    </svg>
  );
};

export const GridTogglerSvg = ({
  size = "8.5rem",
  fill = "#6C6C6C",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 85 85"
    fill="none"
    {...props}
    style={{ transition }}
  >
    <rect
      x={27.5}
      y={27.5}
      width={12}
      fill="#fff"
      height={12}
      stroke={fill}
      style={{ transition }}
    />
    <rect
      x={46.5}
      y={27.5}
      width={12}
      height={12}
      fill="#fff"
      stroke={fill}
      style={{ transition }}
    />
    <rect
      x={46.5}
      y={45.5}
      width={12}
      height={12}
      fill="#fff"
      stroke={fill}
      style={{ transition }}
    />
    <rect
      x={27.5}
      y={45.5}
      width={12}
      height={12}
      stroke={fill}
      fill="#fff"
      style={{ transition }}
    />
  </svg>
);

export const Toggler = ({
  Svg = ListTogglerSvg,
  isActive = true,
  onClick = () => {},
  value = "",
}) => {
  return (
    <div
      onClick={() => {
        onClick(value);
      }}
      className={`work_toggler_main ${isActive && "work_toggler_border_color"}`}
    >
      <span
        className={`toggler_bg_block ${
          isActive ? "toggler1visible" : "toggler1none"
        }`}
      />
      <span
        className={`toggler_bg_block ${
          isActive ? "toggler2visible" : "toggler2none"
        }`}
      />
      <span
        className={`toggler_bg_block ${
          isActive ? "toggler3visible" : "toggler3none"
        }`}
      />
      <span
        className={`toggler_bg_block ${
          isActive ? "toggler4visible" : "toggler4none"
        }`}
      />
      <Svg size="8rem" fill={isActive ? "#fff" : "#6C6C6C"} />
    </div>
  );
};

export const ListItemForWork = () => {
  return <div></div>;
};

export default function Work() {
  const [activeToggle, setActiveToggle] = useState("list");

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
  const navigate = useNavigate();
  return (
    <>
      <NavBar companyTextColor={"var(--menu-white)"} />
      <video
        src={workVideo}
        className="work_header_video"
        loop
        muted
        autoPlay
      />
      <main className="work_main_cont">
        <section className="work_title_container">
          <h1 className="work_title_text">
            Creating next level digital products
          </h1>
        </section>
        <section className="work_all_project_section">
          <div className="work_toggle_main_cont">
            <p className="work_all_project_text">All Projects</p>
            <div className="work_toggleoption_cont">
              <Toggler
                // isActive={false}
                isActive={activeToggle === "list"}
                Svg={ListTogglerSvg}
                value="list"
                onClick={setActiveToggle}
              />
              <Toggler
                isActive={activeToggle === "grid"}
                onClick={setActiveToggle}
                Svg={GridTogglerSvg}
                value="grid"
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              className="work_list_main_cont"
              style={{ maxWidth: activeToggle === "list" ? "100%" : "0" }}
            >
              <div className="work_list_title_cont">
                <p className="work_list_title_name">NAME</p>
                <p className="work_list_title_service">SERVICE</p>
                <p className="work_list_title_year">YEAR</p>
              </div>
              {content.projects.map((e) => {
                return (
                  <div
                    key={e.id}
                    className="work_list_title_cont worklist_hover"
                    onClick={() => {
                      navigate(e.link);
                      window.scroll({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <p className="work_list_title_name list_item_head worklist_color">
                      {e.projectHead}
                      {e.extraBtn && `(${e.extraBtn})`}
                    </p>
                    <p className="work_list_title_service list_item_tail worklist_color">
                      {e.category}
                    </p>
                    <p className="work_list_title_year list_item_tail worklist_color">
                      {e.year}
                    </p>
                  </div>
                );
              })}
            </div>
            <div
              className="work_list_main_cont hover_section_list_cont"
              style={{
                alignItems: "flex-start",
                margin: "20rem 0",
                maxWidth: activeToggle === "grid" ? "100%" : "0",
              }}
            >
              {content.projects.map((e) => (
                <HoverItem data={e} windowWidth={windowWidth} key={e.id} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
