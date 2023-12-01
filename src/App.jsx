import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./screens/NavBar/NavBar";
import Home from "./screens/Home/Home";
import Footer from "./screens/Footer/Footer";
import Loading from "./components/Generic/Loading";
import { useEffect, useState } from "react";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import Work from "./screens/Work/Work";
import NotFound from "./screens/NotFound/NotFound";
import ProjectDetails from "./screens/ProjectDetails/ProjectDetails";
let loadingListOptions = {
  "/": ["Hello", "வணக்கம்", "Hola", "你好", "привет", "olá", "नमस्ते"],
  "/work": ["Work"],
  "/about": ["About"],
  "/contact": ["Contact"],
  // "/resume": ["Resume"],
};
function App() {
  const [isMounted, setIsMounted] = useState(false);
  const { pathname } = useLocation();

  const isPathIncludes = Object.keys(loadingListOptions).includes(pathname);

  useEffect(
    (e) => {
      let intervalID;
      if (isPathIncludes) {
        const intervalDuration =
          loadingListOptions[pathname].length > 5
            ? 3
            : loadingListOptions[pathname].length;
        if (!isMounted) {
          setIsMounted(true);
          intervalID = setTimeout(() => {
            setIsMounted(false);
          }, intervalDuration * 1000);
        } else {
          intervalID = setTimeout(() => {
            setIsMounted(false);
          }, intervalDuration * 1000);
        }
      }

      return () => {
        clearTimeout(intervalID);
      };
    },
    [pathname]
  );
  let skipPath = ["/about", "/work"];
  return (
    <div>
      {isPathIncludes && (
        <Loading
          loadingList={loadingListOptions[pathname]}
          isMounted={isMounted}
        />
      )}
      {!skipPath.includes(pathname) && <NavBar />}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<ProjectDetails />} />
      </Routes>
      {/\/work\//.test(pathname) || isPathIncludes ? <Footer /> : null}
    </div>
  );
}

export default App;
