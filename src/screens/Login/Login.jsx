import "./login.css";
import loginImg from "../../assets/svgs/loginimg.gif";
import { useEffect, useState } from "react";
import axios from "axios";
import env from "../../environment";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIserror] = useState({
    error: false,
    msg: "",
  });

  const navigate = useNavigate();
  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(`${env.baseUrl}users/login`);
    await axios
      .post(`${env.baseUrl}users/login`, {
        username: userName,
        password,
      })
      .then((e) => {
        localStorage.setItem("jwt", e.data.token);

        navigate("/adminPanel", {
          replace: true,
        });
      })
      .catch((e) => {
        setIserror({
          error: true,
          msg: "Invalid Username or Password",
        });
      });
  };

  useEffect(() => {
    initial();
  }, []);

  const initial = async () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios
        .get(`${env.baseUrl}users/me`, {
          headers: { Authorization: `Bearer ${jwt}` },
        })
        .then((e) => {
          navigate("/adminPanel", {
            replace: true,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    let timerID = setTimeout(() => {
      if (isError.error) {
        setIserror((e) => {
          return {
            ...e,
            error: false,
          };
        });
      }
    }, 5000);

    return () => clearTimeout(timerID);
  }, [isError.error]);

  return (
    <main className="login_main_cont">
      <div
        className={`error_msg_main_cont ${
          isError.error && "error_visible color_error"
        }`}
      >
        {isError.msg}
      </div>
      <img src={loginImg} alt="login" className="login_img" />
      <form onSubmit={onFormSubmit} className="login_form_main_cont">
        <h1>LOGIN</h1>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="login_form_input"
          placeholder="Username"
          minLength={"8"}
          value={userName}
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="login_form_input"
          placeholder="password"
          minLength="8"
          value={password}
        />
        <button type="submit" className="login_btn">
          Login
        </button>
      </form>
    </main>
  );
}
