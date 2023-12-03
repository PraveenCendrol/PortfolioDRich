import { useEffect, useState } from "react";
import "./contact.css";
import contactVideo from "../../assets/videos/about.gif";
import content from "../../assets/content";
import { SocialMediaItems } from "../../components/NavBar/MenuToggle";
import env from "../../environment";
export const FormRow = ({
  required = false,
  type = "text",
  heading = "",
  no = "",
  placeholder = "",
  onTextChange = () => {},
  value = "",
  minlength = "8",
}) => {
  const onChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <div className="form_row_main_cont">
      <h3 className="form_row_sno">{no}</h3>
      <div className="form_row_qus_ans_cont">
        <h2 className="form_row_qus">{heading}</h2>
        <input
          type={type}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="form_row_ans"
          minlength={minlength}
        />
      </div>
    </div>
  );
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState({
    isError: false,
    erroMsg: "",
    isSuc: false,
  });

  useEffect(() => {
    let timerID = setTimeout(() => {
      if (error.isError) {
        setError((e) => {
          return {
            ...e,
            isError: false,
          };
        });
      }
    }, 5000);

    return () => clearTimeout(timerID);
  }, [error.isError]);

  const submitFunction = async (e) => {
    e.preventDefault();
    setIsLoding(true);

    try {
      const response = await fetch(
        "https://long-gray-nightshirt.cyclic.app/request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, service, message }),
        }
      );

      if (!response.ok) {
        const errorMsg = await response.json();
        setError({
          isError: true,
          erroMsg: errorMsg.data.error,
          isSuc: false,
        });
        setIsLoding(false);

        return;
      }

      const responseData = await response.json();
      setError({
        isError: true,
        erroMsg:
          "Your data has been regiestered successfully we will contact you soon",
        isSuc: true,
      });

      setIsLoding(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoding(false);
    }
  };
  return (
    <main className="contact_main_cont">
      <div
        className={`error_msg_main_cont ${
          error.isError && "error_visible color_error"
        } ${error.isSuc && "color_suc"}`}
      >
        {error.erroMsg}
      </div>
      <section className="contact_hero_main">
        <h1 className="contact_hero_head">Let’s work together</h1>
        <img
          src={contactVideo}
          autoPlay
          muted
          loop
          className="contact_hero_video"
        />
      </section>
      <section className="contact_form_main">
        <form className="contact_form_container" onSubmit={submitFunction}>
          <FormRow
            no="01"
            heading="What’s your name?"
            placeholder="Riche Rich *"
            required
            onTextChange={setName}
            value={name}
          />

          <FormRow
            no="02"
            heading="What’s your email?"
            placeholder="richerich@gmail.com *"
            required
            type="email"
            onTextChange={setEmail}
            value={email}
          />
          <FormRow
            no="03"
            heading="What service are you looking for?"
            placeholder="Web Design, App Design, Responsive design ... *"
            onTextChange={setService}
            required
            value={service}
          />

          <FormRow
            no="04"
            heading="Your message"
            placeholder="Hello Rich, can you help me with ... "
            onTextChange={setMessage}
            value={message}
          />
          <div className="contact-form_btn_cont">
            <div className="contact-form-btn-line" />
            <button className="contac_form_submit" type="submit">
              {isLoding ? (
                <span className="loader"></span>
              ) : (
                <span>Send it!</span>
              )}
            </button>
          </div>
        </form>
        <div className=" contact_details_container">
          <div>
            <h6 className="contact_detail_head">CONTACT DETAILS</h6>
            <p className="contact_details">{content.email}</p>
            <p className="contact_details">{content.contact}</p>
          </div>
          <div>
            <h6 className="contact_detail_head" style={{ marginTop: "4rem" }}>
              SOCIAL
            </h6>
            <div style={{ alignSelf: "flex-start" }}>
              {content.socialMedia.map((e) => (
                <SocialMediaItems data={e} key={e.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
