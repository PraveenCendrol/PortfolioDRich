import { useEffect, useRef, useState } from "react";
import "./adminpanel.css";
import NavCompany from "../../components/NavBar/NavCompany";
import axios from "axios";
import env from "../../environment";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const RequestItem = ({
  onClick = () => {},
  data = {
    _id: "",
    name: "",
    email: "",
    service: "",
    read: false,
    createdAt: "",
  },
}) => {
  return (
    <div className="req_item_main_cont">
      <div className="req_item_left_cont">
        <h3>{data.name}</h3>
        <p
          className="ap_header_right_designation"
          style={{ textAlign: "left" }}
        >
          {data.service}
        </p>
        <p
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            maxWidth: "15ch",
            marginTop: "2rem",
          }}
        >
          {data?.message || "-"}
        </p>
      </div>
      <div className="req_item_right_cont">
        <p>{data.email}</p>
        <p
          onClick={() => {
            onClick(data);
          }}
          style={{ cursor: "pointer" }}
        >
          Read More{">>>"}
        </p>
      </div>
    </div>
  );
};

export default function AdminPanel() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [ddValue, setDdValue] = useState("createdAt");
  const [search, setSearch] = useState("");
  const [deletePop, setDeletePop] = useState({
    popup: false,
    data: {},
  });
  const [fullMsg, setFullMsg] = useState({
    _id: "",
    name: "",
    email: "",
    service: "",
    read: false,
    createdAt: "2023-12-03T01:25:12.462Z",
  });
  const [me, setMe] = useState({
    _id: "",
    userType: "",
    name: "",
    username: "",
  });
  const [reqData, setReqData] = useState({
    readCount: 0,
    unreadCount: 0,
    total: 0,
    requests: [
      {
        _id: "",
        name: "",
        email: "",
        service: "",
        read: false,
        createdAt: "",
      },
    ],
  });
  const [jwt, setJwt] = useState("");
  const [read, setRead] = useState("");
  // console.log(">>>>>", windowWidth);
  const navigate = useNavigate();
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const jtoken = localStorage.getItem("jwt");
    setJwt(jtoken);
    if (jtoken) {
      getMe(jtoken)
        .then((e) => {
          fetchRequest(jtoken);
        })
        .catch((e) => {
          console.log(e);
          catchFun();
        });
    } else {
      catchFun();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getMe = async (jtoken) => {
    try {
      const res = await axios.get(`${env.baseUrl}users/me`, {
        headers: { Authorization: `Bearer ${jtoken}` },
      });
      const data = res.data.data;
      setMe(data);
      console.log("ended");
    } catch (error) {
      catchFun();
    }
  };
  const fetchRequest = async (jtoken = jwt) => {
    try {
      console.log(read);
      const res = await axios.get(
        `${env.baseUrl}request?search=${search}&sortBy=${ddValue}&read=${read}`,
        { headers: { Authorization: `Bearer ${jtoken}` } }
      );
      const data = await res.data.data;
      console.log(data);
      setReqData(data);
    } catch (error) {
      catchFun();
    }
  };

  const catchFun = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchRequest();
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const deleteRequest = async (data = {}) => {
    await axios
      .delete(`${env.baseUrl}request`, {
        data: { id: data._id },
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((e) => {
        setDeletePop({ data: {}, popup: false });
        setFullMsg({});
        fetchRequest();
      })
      .catch((e) => catchFun());
  };
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      console.log("getting in");
      if (jwt) fetchRequest();
    }
  }, [read, ddValue]);

  return (
    <>
      {deletePop.popup && (
        <div className="ap_delete_main_cont">
          <div className="ap_delete_cont">
            <h2>Are you sure you want to delete?</h2>
            <div className="ap_delete_btn_cont">
              <div
                onClick={() => {
                  setDeletePop({
                    data: {},
                    popup: false,
                  });
                }}
                className="ap_detail_delete_cont negDelete negWidth"
              >
                Don’t delete
              </div>
              <div
                onClick={() => {
                  deleteRequest(deletePop.data);
                }}
                className="ap_detail_delete_cont negWidth"
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      )}
      <main className="admin_panel_main_cont">
        <div className="admin_panel_side_nav_main">
          <div className="ap_nav_top_cont">
            <div style={{ maxWidth: "100%", overflow: "hidden" }}>
              <NavCompany windowWidth={windowWidth} companyTextColor={"#fff"} />
            </div>
            <div className="ap_nav_top_line" />
            <div onClick={() => setRead("")} className="ap_nav_top_option">
              ALL
            </div>
            <div onClick={() => setRead("true")} className="ap_nav_top_option">
              Read
            </div>
            <div onClick={() => setRead("false")} className="ap_nav_top_option">
              Unread
            </div>
          </div>
          <div className="ap_nav_top_cont">
            <div className="ap_nav_top_line" />
            <div onClick={logout} className="ap_nav_top_option">
              Logout
            </div>
          </div>
        </div>
        <div className="ap_header_main_cont">
          <div>
            <input
              type="search"
              placeholder="Search"
              //   value={search}
              className="ap_header_search"
              onChange={(e) => {
                console.log("triggered");
                setSearch(e.target.value);
              }}
              onKeyDown={handleSearch}
            />
            <span style={{ marginLeft: "3rem" }}>Sort by</span>
            <select
              name="pets"
              value={ddValue}
              id="pet-select"
              className="ap_header_dropdown"
              onChange={(e) => {
                setDdValue(e.target.value);
              }}
            >
              <option value="createdAt">Ascending</option>
              <option value="-createdAt">Descending</option>
            </select>
          </div>
          <div className="ap_header_right_cont">
            <p className="ap_header_right_designation">{me.userType}</p>
            <p className="ap_header_right_name">{me.name}</p>
          </div>
        </div>
        <div className="ap_messages_main_cont">
          {reqData?.requests?.map((e) => (
            <RequestItem
              key={e._id}
              data={e}
              onClick={async (e) => {
                setFullMsg(e);
                await axios
                  .get(`${env.baseUrl}request/${e._id}`, {
                    headers: { Authorization: `Bearer ${jwt}` },
                  })
                  .then((e) => {
                    fetchRequest();
                  })
                  .catch((e) => catchFun());
              }}
            />
          ))}
        </div>
        <div className="ap_detail_message_cont">
          {fullMsg?._id ? (
            <div className="ap_detail_cont">
              <div className="ap_detail_header">
                <div className="req_item_left_cont">
                  <h3>{fullMsg.name}</h3>
                  <p
                    className="ap_header_right_designation"
                    style={{ textAlign: "left" }}
                  >
                    {fullMsg.service}
                  </p>{" "}
                </div>
                <div
                  className="req_item_left_cont"
                  style={{ textAlign: "right" }}
                >
                  <h5>
                    {moment(fullMsg.createdAt).format("DD/MM/YYYY hh:mm A")}
                  </h5>
                  <p className="ap_header_right_designation">{fullMsg.email}</p>{" "}
                </div>
              </div>
              <div className="ap_detail_full_msg_maincont">
                {fullMsg?.message ||
                  "No Message send by user try contactting him"}
              </div>
              <div
                onClick={() => setDeletePop({ data: fullMsg, popup: true })}
                className="ap_detail_delete_cont"
              >
                Delete
              </div>
            </div>
          ) : (
            <div>Select a message to See</div>
          )}
        </div>
        <div className="ap_count_main_cont">
          <div className="ap_count_cont">
            <p>All Messages</p>
            <h1>{reqData.total}</h1>
          </div>
          <div className="ap_count_cont">
            <p>Read Messages</p>
            <h1>{reqData.readCount}</h1>
          </div>
          <div className="ap_count_cont">
            <p>Unread Messages</p>
            <h1>{reqData.unreadCount}</h1>
          </div>
        </div>
      </main>
    </>
  );
}
