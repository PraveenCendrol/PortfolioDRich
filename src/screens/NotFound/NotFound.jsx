import "./notfound.css";
import notFound from "../../assets/svgs/notfoundSvg.svg";
import content from "../../assets/content";
import { ArrowSvg } from "../../components/Generic/ArrowLinkHover";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="not_found_main_cont">
      <div>
        <h1 className="not_found_head">WHOOPS !</h1>
        <p className="not_found_content">
          We couldn’t find the page you are looking for
        </p>
        <div onClick={() => navigate("/")} className="not_found_btn_cont">
          <a className="not_found_btn_text">GO HOME</a>
          <ArrowSvg fill="var(--logo-green)" />
        </div>
      </div>
      <img src={notFound} className="not_found_image" />
    </main>
  );
}
