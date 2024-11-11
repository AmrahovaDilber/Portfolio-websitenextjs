import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import Form from "./Form";
import Connection from "./Connection";
function Contact() {
  return (
    <div
      id="contact"
      className="mx-auto max-w-7xl min-h-screen  flex flex-col lg:flex-row space-x-[150px] py-[150px]  "
    >
      <Form></Form>
      <Connection></Connection>
    </div>
  );
}

export default Contact;
