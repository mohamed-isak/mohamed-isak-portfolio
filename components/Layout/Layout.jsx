import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { scrollTop } from "@/const/const";

const Layout = (props) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo(scrollTop);
  }, []);
  return (
    <>
      <button
        onClick={() => {
          window.scrollTo(scrollTop);
        }}
        id={"goto__top"}
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
