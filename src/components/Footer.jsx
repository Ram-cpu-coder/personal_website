import React from "react";
import SideBarFooter from "./SideBarFooter";

const Footer = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <hr style={{ width: "100vw" }} />
      <SideBarFooter />
      <div className="text-center py-3 d-flex flex-column">
        © {new Date().getFullYear()} Sabitra Oli. All rights reserved.
        <p>Made by Ram Kumar Dhimal</p>
      </div>
    </div>
  );
};

export default Footer;
