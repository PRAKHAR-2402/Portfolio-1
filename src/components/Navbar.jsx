import logo from "../assets/logoPg2.gif";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img src={logo} alt="logo" className="mx-2 w-14" />

      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <FaLinkedinIn />
        <FaGithub />
        <FaTwitterSquare />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
