import React from "react";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const connection = [
  {
    id: 1,
    name: "Phone",
    infor: "+994 51 548 92 72",
    icon: <FaPhoneVolume size={24} />,
    href: "tel:+994515489272",
  },
  {
    id: 2,
    name: "Email",
    infor: "dilberamrahova1@gmail.com",
    icon: <MdOutlineEmail size={24} />,
    href: "mailto:dilberamrahova1@gmail.com",
  },
  {
    id: 3,
    name: "LinkedIn",
    infor: "Dilber Amrahova",
    icon: <SiLinkedin size={24} />,
    href: "https://www.linkedin.com/in/dilb%C9%99r-%C9%99mrahova",
  },
  {
    id: 4,
    name: "Github",
    infor: "Dilber Amrahova",
    icon: <FaGithub size={24} />,
    href: "https://github.com/AmrahovaDilber",
  },
];

function Connection() {
  return (
    <div className="w-full max-w-full sm:max-w-xl mt-20 sm:mt-44 mx-auto px-4 sm:px-0">
      {connection.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-5 text-white mb-10 items-center"
        >
          <div className="bg-gradient-to-r from-purple-400 to-pink-600 text-xl flex w-10 h-10 sm:w-12 sm:h-12 rounded-full justify-center items-center">
            {item.icon}
          </div>
          <div className="flex flex-col ">
            <p className="mb-1 sm:mb-0 sm:mr-4 text-[15px] sm:text-[17px]">
              {item.name}
            </p>
            <Link href={item.href}>
              <a className="text-lg sm:text-xl font-semibold mt-1 sm:mt-0">
                {item.infor}
              </a> {/* Added <a> tag */}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Connection;
