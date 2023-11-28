import { useState } from "react";
import "./contact.css";
import contactVideo from "../../assets/videos/about.gif";
import content from "../../assets/content";
import { SocialMediaItems } from "../../components/NavBar/MenuToggle";
export const FormRow = ({
  required = false,
  type = "text",
  heading = "",
  no = "",
  placeholder = "",
  onTextChange = () => {},
  value = "",
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
        />
      </div>
    </div>
  );
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [yourMsg, setYourMsg] = useState("");
  const submitFunction = (e) => {
    e.preventDefault();
  };
  return (
    <main className="contact_main_cont">
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
            onTextChange={setYourMsg}
            value={yourMsg}
          />
          <div className="contact-form_btn_cont">
            <div className="contact-form-btn-line" />
            <button className="contac_form_submit" type="submit">
              <span>Send it!</span>
            </button>
          </div>
        </form>
        <div className=" contact_details_container">
          <h6 className="contact_detail_head">CONTACT DETAILS</h6>
          <p className="contact_details">{content.email}</p>
          <p className="contact_details">{content.contact}</p>
          <h6 className="contact_detail_head" style={{ marginTop: "4rem" }}>
            SOCIAL
          </h6>
          <div style={{ alignSelf: "flex-start" }}>
            {content.socialMedia.map((e) => (
              <SocialMediaItems data={e} key={e.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
