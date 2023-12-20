import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { saveAs } from "file-saver";

const Navbar = () => {
  const saveFile = () => {
    saveAs(
      "https://1drv.ms/b/s!Auuwj7M0nVDUmiKHoSjch-udhUAe?e=RiYcXC",
      "Mikheil Gogia - CV.pdf"
    );
  };
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <div className="social">
          <a href="https://github.com/MrMishka02" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/mikheil-gogia-848315247/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a onClick={saveFile}>
            <img src="/download.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
