import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./projectdetails.css";
import { useEffect, useRef, useState } from "react";
import content from "../../assets/content";
import imac from "../../assets/svgs/yellow.png";
import React from "react";

interface CurrentContentSection {
  title: string;
  special?: boolean;
  align: string;
  content?: "";
  specialContent?: [SpecialContent];
}
enum Direction {
  topLeft,
  bottomRight,
  topRight,
  bottomLeft,
}

interface SpecialContent {
  id: string;
  heading: string;
  subHead: string;
  position: Direction;
  isDifferent?: boolean;

  contentList?: [SpecialContentList];
  desc?: string;
  bgColor: string;
}

interface SpecialContentList {
  id: string;
  contentHead: string;
  para: string;
}

interface TeamMembersList {
  name: string;
  bgColor: string;
  designation: string;
  photo: any;
  id: string;
  slogan: string;
}

interface CurrentContent {
  id: string;
  link: string;
  category: string;
  projectHead: string;
  projectbrief: string;
  use: string;
  img: any;
  year: string;
  client: string;
  duration: string;
  liveapp: string;
  video: any;
  sections: [CurrentContentSection];
  teamMembers: [TeamMembersList];
}
interface Props {
  data: [SpecialContent];
  windowWidth: number;
}

export const ArrowRight = ({ size = 15, fill = "#000", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 11.249L5.25 7.49902L9 3.74902L9.66563 4.41465L6.58125 7.49902L9.66563 10.5834L9 11.249Z"
      fill={fill}
    />
  </svg>
);

export const SpecialContainer: React.FC<Props> = ({ data, windowWidth }) => {
  const position = {
    topLeft: "special_top_left",
    bottomRight: "special_bottom_right",
    topRight: "special_top_right",
    bottomLeft: "special_bottom_left",
  };

  const contentPosition = {
    topLeft: "headingTopLeft",
    bottomRight: "headingBottomRight ",
    topRight: "headingTopRight",
    bottomLeft: "headingBottomLeft ",
  };
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(1);
  const [currentHover, setCurrentHover] = useState(2);
  return (
    <div className="special-container">
      {!(windowWidth < 600) &&
        data.map((e, i) => {
          return (
            <div
              key={e.id}
              onClick={() => setCurrentSelectedIndex(i)}
              className={`special_clip_path  ${position[e.position]}`}
            >
              <p
                className={`special_heading_gradiant ${
                  contentPosition[e.position]
                }`}
                style={{ opacity: i === currentSelectedIndex ? 1 : "" }}
              >
                {e.heading}
              </p>
              <div
                className={`gradiant_clip_cont ${
                  currentSelectedIndex !== i && "clipzero"
                }`}
                style={{ background: e.bgColor }}
              />
            </div>
          );
        })}
      <div className="special_content_main_cont">
        {data.map((e, i) => {
          return (
            <div className="special_overall_main">
              <div
                className={`special_content_head_cont ${
                  currentSelectedIndex === i && "special_height"
                }`}
              >
                <div
                  style={{
                    height: "3rem",
                    width: ".5rem",
                    background: e.bgColor,
                    marginRight: "3rem",
                  }}
                />
                <h1 className="special_content_head">{e.subHead}</h1>
              </div>

              <div
                className={`special_content_desc_cont ${
                  currentSelectedIndex === i && "special_width"
                }`}
              >
                {!e.isDifferent ? (
                  <p className={`special_content_desc `}>{e.desc}</p>
                ) : (
                  <div style={{ position: "relative" }}>
                    <div className="special_different_main">
                      {e.contentList?.map((e, i) => {
                        return (
                          <div
                            onMouseEnter={() => setCurrentHover(i)}
                            className="special_different_inner_main_cont"
                          >
                            <span className="special_different_inner_head">
                              {e.contentHead}
                            </span>
                            <span
                              style={{
                                width: currentHover === i ? "80%" : "0%",
                              }}
                              className="special_different_inner_head_line"
                            />
                          </div>
                        );
                      })}
                    </div>
                    {e.contentList?.map((e, i) => (
                      <div
                        className={`specail_different_inner_para_cont ${
                          currentHover === i && "special_inner_height"
                        }`}
                      >
                        <p className="specail_different_inner_para">{e.para}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {windowWidth < 600 && (
        <div className="special_btn_indi_cont">
          <div className="spl_index_cont">
            {data.map((e, i) => {
              return (
                <div
                  className={`spl_ind_box ${
                    i === currentSelectedIndex && "spl_ind_width"
                  }`}
                />
              );
            })}
          </div>
          <div
            className="team_mobile_btn_cont"
            style={{ position: "relative", right: 0, bottom: 0 }}
          >
            <div
              onClick={() => {
                setCurrentSelectedIndex((e) => {
                  if (e === 0) {
                    return data.length - 1;
                  }

                  return e - 1;
                });
              }}
              className="right_arrow"
            >
              <ArrowRight />
            </div>
            <div
              onClick={() => {
                setCurrentSelectedIndex((e) => {
                  if (e === data.length - 1) {
                    return 0;
                  }

                  return e + 1;
                });
              }}
              className="left_arrow"
            >
              <ArrowRight />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ProjectDetails() {
  const [currentContent, setCurrentContent] = useState<CurrentContent | any>();
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const containerRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    let includes = false;
    for (let i of content.projects) {
      if (i.id === id) {
        includes = true;
        setCurrentContent(i);
        break;
      }
    }
    !includes && navigate("/notFound", { replace: true });
  }, [id]);
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
    <main className="project_details_main_cont">
      <section className="project_details_hero_section">
        <h1 className="project_detials_main_head">
          {currentContent?.projectHead}
        </h1>
        <div className="project_overview_main_cont">
          <div className="project_overview_items">
            <h2 className="project_overview_head">CLIENT</h2>
            <div className="project_overview_line" />
            <p className="project_overview_content">{currentContent?.client}</p>
          </div>
          <div className="project_overview_items">
            <h2 className="project_overview_head">DURATION</h2>
            <div className="project_overview_line" />
            <p className="project_overview_content">
              {currentContent?.duration}
            </p>
          </div>
          <div className="project_overview_items">
            <h2 className="project_overview_head">ROLE/SERVICE</h2>
            <div className="project_overview_line" />
            <p className="project_overview_content">
              {currentContent?.category}
            </p>
          </div>
          {currentContent?.liveapp && (
            <div className="project_overview_items">
              <h2 className="project_overview_head">LIVE APP</h2>
              <div className="project_overview_line" />
              <a
                href={currentContent?.liveapp}
                target="_blank"
                className="project_overview_content"
                style={{ cursor: "pointer" }}
              >
                Click Here
              </a>
            </div>
          )}
        </div>
      </section>
      <section className="project_details_imac">
        <img
          src={imac}
          className="project_details_imac_mockup"
          alt="mac mockup"
        />
        <video
          autoPlay
          muted
          src={currentContent?.video}
          className="project_details_video"
        />
      </section>
      <section
      // className="project_details_por_expl_main_cont"
      >
        <div className="project_details_pro_expl_cont">
          {currentContent?.sections.map(
            (e: CurrentContentSection, i: number) => {
              let borderBottom = true;

              if (currentContent?.sections[i + 1]) {
                if (e?.align === currentContent?.sections[i + 1].align) {
                  borderBottom = false;
                }
              } else {
                borderBottom = false;
              }
              if (windowWidth < 600) {
                borderBottom = false;
              }

              return (
                <div
                  key={e.title}
                  className={`project_details_pro_item ${
                    !(windowWidth < 600) && e.align === "right" && "alignRight"
                  }`}
                >
                  {(windowWidth < 600 || e.align === "left") && (
                    <div className="rightBorder" />
                  )}
                  {e.align === "left" && borderBottom && (
                    <div className="rightBottomBorder" />
                  )}
                  {!(windowWidth < 600) && e.align === "right" && (
                    <div className="leftBorder" />
                  )}
                  {e.align === "right" && borderBottom && (
                    <div className="leftBottomBorder" />
                  )}
                  {e.special ? (
                    <SpecialContainer
                      data={e.specialContent}
                      windowWidth={windowWidth}
                    />
                  ) : (
                    <>
                      <h1 className="project_details_item_heading">
                        {e.title}
                      </h1>
                      <p className="project_details_item_para">{e.content}</p>
                    </>
                  )}
                </div>
              );
            }
          )}
        </div>
      </section>
      <section className="project_details_team">
        <h2>Our Team</h2>
        <div className="project_details_team_list_cont">
          {windowWidth < 600 ? (
            <div
              className="projectDetails_team_list_mobile_main"
              style={{ transform: ` translateX(${currentTeamIndex * -100}%)` }}
            >
              {currentContent?.teamMembers.map((e: TeamMembersList) => {
                return (
                  <div className={`project_details_team_mobile_cont`}>
                    <img
                      className="project_team_mobile_img"
                      src={e.photo}
                      alt=""
                    />
                    <div
                      style={{
                        marginLeft: "3rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "5rem 0",
                      }}
                    >
                      <p className="team_mob_slogan">{e.slogan}</p>
                      <div>
                        <h1 style={{ fontSize: "3rem" }}>{e.name}</h1>
                        <p style={{ fontSize: "2.5rem" }}>{e.designation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            currentContent?.teamMembers.map((e: TeamMembersList, i: number) => {
              return (
                <div className="project_details_team_indi_cont">
                  <img src={e.photo} className="project_details_team_photo" />
                  <div
                    className="project_details_indi_name_cont"
                    style={{ background: e.bgColor }}
                  >
                    <h3 className="project_details_indi_name">{e.name}</h3>
                    <p className="project_details_indi_para">{e.designation}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {windowWidth < 600 && (
          <div className="team_mobile_btn_cont">
            <div
              onClick={() => {
                setCurrentTeamIndex((e) => {
                  if (e === 0) {
                    return currentContent?.teamMembers.length - 1;
                  }

                  return e - 1;
                });
              }}
              className="right_arrow"
            >
              <ArrowRight />
            </div>
            <div
              onClick={() => {
                setCurrentTeamIndex((e) => {
                  if (e === currentContent?.teamMembers.length - 1) {
                    return 0;
                  }

                  return e + 1;
                });
              }}
              className="left_arrow"
            >
              <ArrowRight />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
