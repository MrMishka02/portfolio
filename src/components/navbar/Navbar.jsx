import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { saveAs } from "file-saver";

const Navbar = () => {
  const saveFile = () => {
    saveAs(
      "Mikheil Gogia - CV.pdf",
      "Mikheil Gogia - CV.pdf"
    );
  };

  const [showDownloadCv, setShowDownloadCv] = useState(false);

  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span>MG Portfolio</span>
        <div className="social">
          <a href="https://github.com/MrMishka02" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/mikheil-gogia/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a
            className="download"
            onClick={saveFile}
            onMouseLeave={() => setShowDownloadCv((prev) => !prev)}
          >
            {showDownloadCv ? (
              "Download CV"
            ) : (
              <img
                src="/download.png"
                alt=""
                onMouseEnter={() => setShowDownloadCv((prev) => !prev)}
              />
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
