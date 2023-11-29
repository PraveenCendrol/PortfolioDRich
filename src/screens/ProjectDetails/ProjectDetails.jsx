import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./projectdetails.css";
import { useEffect, useRef, useState } from "react";
import content from "../../assets/content";
import imac from "../../assets/svgs/yellow.png";
export default function ProjectDetails() {
  const [currentContent, setCurrentContent] = useState({
    id: "e74ac6fa-57ae-47e3-a036-137ab1d772a8",
    link: "",
    category: "UX & UI",
    projectHead: "SEAL DEAL",
    projectbrief:
      "Designing “Seal Deal” CRM for  Enhanced User Experience and Data Capture",
    use: "CRM for Data Capture.",
    img: crmsvg,
    year: "2023",
    client: "SALESTECH SOLUTIONS",
    duration: "TWO MONTHS",
    liveapp: "",
    video: sealDeal,
    sections: [
      {
        title: "INTRODUCTION",
        align: "left",
        content: `SealTech Solutions approached our team with a mission to enhance their cutting-edge CRM application, "Seal Deal." Designed primarily for their internal stakeholders, including sales and business development teams, this CRM aimed to revolutionize how they conducted business. The project's core objectives were to improve efficiency, transparency, overall user experience, and End-to-end data capturing.`,
      },
      {
        title: "UNDERSTANDING THE CHALLENGES",
        special: true,
        align: "right",
        content: [
          {
            id: "8e662eef-dee9-4a06-bb9e-2d9a3e1381a6",
            heading: "CHALLENGES",
            subHead: "UNDERSTANDING THE CHALLENGES",
            desc: `SealTech Solutions had a powerful CRM application, but they recognized the need for a comprehensive redesign to keep up with evolving market demands. Our team was tasked with reimagining the user interface, optimizing workflows, ensuring a seamless user experience, and enhancing data capture capabilities through the addition of an activity section. The client also wanted to integrate new technologies and features into the existing system.`,
            bgColor: "linear-gradient(90deg, #EC008C 0%, #FC6767 100%)",
          },
          {
            id: "92572259-23a9-471f-8943-36e91be4cb62",
            heading: "PROCESS",
            subHead: "THE DESIGN PROCESS",
            desc: `Our journey began with in-depth research and analysis of the current CRM system. We conducted user interviews, gathered feedback from internal stakeholders, and analyzed user data. Key pain points included lengthy quote generation processes, complex lead management, the need for more actionable insights, and the necessity of proper data capture.`,
            bgColor: "linear-gradient(90deg, #5235D3 0%, #004E92 100%)",
          },
          {
            id: "951958bf-6ed1-4624-a571-40cee01499d2",
            heading: "GOALS",
            subHead: "DESIGN GOALS",
            isDifferent: true,
            contentList: [
              {
                id: "8231a8d8-012a-461e-8362-153f99d4c921",
                contentHead: "EFFICIENCY",
                para: "Streamline workflows to reduce quote generation time and improve lead management.",
              },
              {
                id: "8231a8d8-012a-461e-tyfww-153f99d4c921",
                contentHead: "TRANSPARENCY",
                para: "Enhance data visualization and reporting to provide actionable insights.",
              },
              {
                id: "8231a8d8-9405-461e-8362-153f99d4c921",
                contentHead: "USER-CENTRIC",
                para: "Ensure that the design caters to the specific needs of the sales and business development teams.",
              },
              {
                id: "99494ngn-012a-461e-8362-153f99d4c921",
                contentHead: "INTEGRATION",
                para: "Seamlessly integrate new features while maintaining a cohesive user experience.",
              },
              {
                id: "99494ngn-012a-461e-8362-rethtre",
                contentHead: "DATA CAPTURE",
                para: "Implement an activity section to capture essential data and user interactions for improved decision-making.",
              },
            ],
            desc: `SealTech Solutions had a powerful CRM application, but they recognized the need for a comprehensive redesign to keep up with evolving market demands. Our team was tasked with reimagining the user interface, optimizing workflows, ensuring a seamless user experience, and enhancing data capture capabilities through the addition of an activity section. The client also wanted to integrate new technologies and features into the existing system.`,
            bgColor: "linear-gradient(90deg, #00BF8F 0%, #037460 100%)",
          },
          {
            id: "0803291c-07db-4271-a24b-d7914d4a501b",
            heading: "PROTOTYPING",
            subHead: "WIREFRAMING AND PROTOTYPING",
            desc: `We created wireframes and prototypes to visualize the proposed changes. This allowed us to experiment with various layouts and user flows, optimizing the CRM's functionality, and introducing the activity section. Feedback from user testing sessions was invaluable in refining the design.`,
            bgColor: "linear-gradient(90deg, #FFB347 0%, #FC3 100%)",
          },
        ],
      },
      {
        title: "DESIGN PROCESS",
        align: "left",
        content: `To address these challenges, the design process focused on creating an interface that is user-friendly, modern, and intuitive for both partners and clients. The primary goals were to streamline lead management, client monitoring, and payment processing, ensuring a seamless and efficient user experience. The ultimate aim was to enhance partner engagement and revenue generation for the construction company.`,
      },
      {
        title: "DESIGN GOALS",
        align: "right",
        content: `Our design goals were closely aligned with the client's overarching objectives. We aimed to create a visually stunning and user-friendly interfaces, streamlined lead management, efficient client monitoring, enhanced user experience, partner engagement and scalability.`,
      },
      {
        title: "WIREFRAMING AND PROTOTYPING",
        align: "left",
        content: `The design journey began with wireframing to lay out the app's structure and functionalities, followed by the creation of prototypes to visualize user interactions and gather feedback from stakeholders.`,
      },
      {
        title: "UI DESIGN",
        align: "left",
        content: `The UI design prioritized clarity and ease of use. Notable design elements included color-coded lead classification (hot, warm, cold), real-time construction progress tracking with interactive timelines and progress bars, and an intuitive payment flow with a detailed transaction history.`,
      },
      {
        title: "INTERACTING THE NEW FEATURES",
        align: "right",
        content: `In response to user feedback and industry trends, several additional features were introduced, such as real-time messaging for partners and clients to enhance collaboration, document sharing for easier information exchange, and an analytics dashboard for partners to access data on lead conversion rates and earnings.`,
      },
      {
        title: "RESULTS & ACHIEVEMENTS",
        align: "right",
        content: `The "Partner App" yielded significant results, with lead management becoming 30% more efficient. Real-time construction monitoring increased client satisfaction and reduced project delays by 20%. Automated payment processing reduced errors, leading to a 15% boost in partner engagement.`,
      },
      {
        title: "CONCLUSION",
        align: "right",
        content: `The "Partner App" has transformed the construction company's operations, making lead management, client monitoring, and partner engagement more efficient. It underscores the company's commitment to innovation and client satisfaction, further solidifying its reputation as an industry leader. This case study reflects your ability to design and develop solutions that address real-world business challenges and deliver tangible benefits.`,
      },
      // {
      //   title: "",
      //   content: ``,
      // },
    ],
    teamMembers: [
      {
        name: "YASH RAJ PACHORI",
        bgColor: "rgba(101, 1, 100, 0.50)",
        designation: "UX UI DESIGNER",
        photo: yash,
        id: "6e78b67b-7f5d-41f6-9ca4-9e2cdc1d66d5",
      },
      {
        name: "SHUBHAM PANDEY",
        bgColor: "rgba(152, 0, 101, 0.50)",
        designation: "UX UI DESIGNER",
        photo: shubam,
        id: "6e78b67b-7f5d-41f6-9ca4-9e2cdc1d66d5",
      },
      {
        name: "DENISH RICH",
        bgColor: "rgba(254, 25, 56, 0.50)",
        designation: "UX UI DESIGNER",
        photo: richphoto,
        id: "6e78b67b-7f5d-41f6-9ca4-9e2cdc1d66d5",
      },
      {
        name: "OVIYA",
        bgColor: "rgba(255, 72, 66, 0.50)",
        designation: "UX UI INTERN",
        photo: oviya,
        id: "6e78b67b-7f5d-41f6-9ca4-9e2cdc1d66d5",
      },
    ],
  });
  const containerRef = useRef(null);
  const { pathname } = useLocation();
  console.log(pathname);
  const navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    let includes = false;
    console.log(id);
    for (let i of content.projects) {
      if (i.id === id) {
        includes = true;
        setCurrentContent(i);
        break;
      }
    }
    !includes && navigate("/notFound", { replace: true });
  }, [id]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Add scroll event listener to the container
      const handleScroll = () => {
        container.scrollTop = 0; // Scroll to top when scrolling occurs
      };
      container.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [containerRef]);

  return (
    <main className="project_details_main_cont">
      <section className="project_details_hero_section">
        <h1 className="project_detials_main_head">
          {currentContent.projectHead}
        </h1>
        <div className="project_overview_main_cont">
          <div className="project_overview_items">
            <h2 className="project_overview_head">CLIENT</h2>
            <div className="project_overview_line" />
            <p className="project_overview_content">{currentContent.client}</p>
          </div>
          <div className="project_overview_items">
            <h2 className="project_overview_head">DURATION</h2>
            <div className="project_overview_line" />
            <p className="project_overview_content">
              {currentContent.duration}
            </p>
          </div>
          <div className="project_overview_items">
            <h2 className="project_overview_head">ROLE/SERVICE</h2>
            <div className="project_overview_line" />
            <p className="project_overview_content">
              {currentContent.category}
            </p>
          </div>
          <div className="project_overview_items">
            <h2 className="project_overview_head">LIVE APP</h2>
            <div className="project_overview_line" />
            <a
              href={content.liveapp}
              target="_blank"
              className="project_overview_content"
              style={{ cursor: "pointer" }}
            >
              Click Here
            </a>
          </div>
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
          src={currentContent.video}
          className="project_details_video"
        />
      </section>
      <section
        // className="project_details_por_expl_main_cont"
        ref={containerRef}
      >
        <div className="project_details_pro_expl_cont">
          {currentContent.sections.map((e, i) => {
            let borderBottom = true;

            if (currentContent.sections[i + 1]) {
              if (e.align === currentContent.sections[i + 1].align) {
                borderBottom = false;
              }
            } else {
              borderBottom = false;
            }
            return (
              <div
                key={e.title}
                className={`project_details_pro_item ${
                  e.align === "right" && "alignRight"
                }`}
              >
                {e.align === "left" && <div className="rightBorder" />}
                {e.align === "left" && borderBottom && (
                  <div className="rightBottomBorder" />
                )}
                {e.align === "right" && <div className="leftBorder" />}
                {e.align === "right" && borderBottom && (
                  <div className="leftBottomBorder" />
                )}
                <h1 className="project_details_item_heading">{e.title}</h1>
                <p className="project_details_item_para">{e.content}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="project_details_team">
        <h2>Our Team</h2>
        <div className="project_details_team_list_cont">
          {currentContent.teamMembers.map((e) => {
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
          })}
        </div>
      </section>
    </main>
  );
}
