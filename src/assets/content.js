import baseLogo from "../assets/svgs/heroBaseLogo.svg";
import herocoloredLogo from "../assets/svgs/heroColoredLogo.svg";
import heroAvatar from "../assets/svgs/heroAvatar.svg";
import instagramColor from "../assets/svgs/instagramColor.svg";
import instagramStoke from "../assets/svgs/instagramStoke.svg";
import linkedInColor from "../assets/svgs/linkedInColor.svg";
import linkedInStoke from "../assets/svgs/linkedInStoke.svg";
import figmaColor from "../assets/svgs/figmaColor.svg";
import figmaStroke from "../assets/svgs/figmaStroke.svg";
import aboutHeroVideo from "../assets/videos/aboutVideo.mp4";
import aboutPhoto from "../assets/svgs/aboutPhoto.svg";
const content = {
  name: "Rich",
  email: "denishrich07@gmail.com",
  contact: "+91 790 4180 372",
  surname: "Dennis",
  jobDone: "Design by",
  ideas: [
    "I DESIGN.",
    "I ILLUSTRATE.",
    "I PLAY.",
    "I CREATE.",
    "I SOLVE PROBLEM.",
    "I PHOTOGRAPH.",
  ],
  menuItems: [
    {
      id: "09b87f1b-200a-4149-a122-dd20abbdb407",
      label: "Home",
      link: "/",
    },
    {
      id: "2f4fdab6-16e4-4851-bb48-800c81908630",
      label: "Work",
      link: "/work",
    },
    {
      id: "da077f7-1bcb-47f2-9940-1d912e9ae295",
      label: "About",
      link: "/about",
    },
    {
      id: "0efe4df8-6e36-4657-a5e6-cc617023f664",
      label: "Contact",
      link: "/contact",
    },
    {
      id: "2f4fbbb8-2242-4786-b5a2-0cdcb241bb5c",
      label: "Resume",
      link: "/resume",
      isDownload: true,
    },
  ],
  socialMedia: [
    {
      id: "48637c62-o835-4aa9-9ca4-f907305f6449",
      label: "LinkedIn",
      link: "",
      gradiant: "-webkit-linear-gradient(180deg, #5DB4E5 0%, #5985C7 100%)",
    },
    {
      id: "48637c62-a91d-4aa9-9ca4-f907305f6449",
      label: "Instagram",
      link: "",
      gradiant:
        "linear-gradient(94deg, #FEB80A 3.81%, #FEB00D 3.81%, #D43964 47.59%, #A229A8 89.16%)",
    },
  ],
  heroSubHeadGreetings: "Hello,I'm",
  heroSubHeadDesignation: " a UX UI designer from india",
  heroContent: "I design mindful user \nexperiences & \nbeautiful interfaces",
  heroLogoBase: baseLogo,
  heroColoredLogo: herocoloredLogo,
  heroAvatar,
  tailContent: {
    head: "PIXEL PERFECT DESIGNS",
    leftPara: {
      line1: "To stand out in the digital era.",
      line2: "Together we will set the new status quo.",
      line3: "No nonsense, always on the cutting edge.",
    },
    rightPara:
      "The combination of my passion for design & interaction positions me in a unique place in the web design world.",
  },
  footerLocation: "OOTY / TAMILNADU / INDIA",
  footerLogos: [
    {
      stroke: instagramStoke,
      color: instagramColor,
      link: "",
      id: "a59a67f0-5b9c-47bb-bca4-c14134d8f17b",
    },
    {
      stroke: linkedInStoke,
      color: linkedInColor,
      link: "",
      id: "e72bf45d-acab-4d3e-824e-3f858c8702c9",
    },
    {
      stroke: figmaStroke,
      color: figmaColor,
      link: "",
      id: "a78627b0-0208-4b67-8f36-f3d202414716",
    },
  ],
  about: {
    title: "Helping brands thrive in the digital world",
    heroVideo: aboutHeroVideo,
    aboutPhoto,
    aboutPhotoDesc:
      "I sculpt digital landscapes with a blend of art and science, crafting empathetic experiences and aesthetically harmonious interfaces.",
    idealogyheading:
      "With each project, I put my work to new horizons, always putting quality first.",
    icanHelpItems: [
      {
        id: "58822a64-5fc7-4eaf-afee-ed3ec4fb6afe",
        no: "01",
        title: "Research",
        desc: "I uncover hidden user needs and pain points, saving businesses money by preventing costly design errors and boosting revenue through improved customer satisfaction and retention.",
      },
      {
        id: "140a806c-c1d9-440f-8e8c-1a2114695279",
        no: "02",
        title: "Design",
        desc: "With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.",
      },
      {
        id: "58822a64-5fc7-4eaf-ferg-ed3ec4fb6afe",
        no: "03",
        title: "The full package",
        desc: "Complete project from concept to final design, that’s what makes me stand out. My great sense of design skills enable me to create superlative projects.  ",
      },
    ],
  },
};
export default content;
