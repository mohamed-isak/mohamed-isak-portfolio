import React, { useRef, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Layout = (props) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        id={"myBtn"}
        title="Go to top"
      >
        <i className="ri-arrow-up-s-line"></i>
      </button>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
