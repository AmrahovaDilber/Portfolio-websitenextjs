"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const PNG_FILE_URL = "http://localhost:3000/resume.pdf";
function HeroSection() {
  function handleDownload(url) {
    const aTag = document.createElement("a")
    aTag.href = url;
    aTag.setAttribute('download', 'resume.pdf')
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <section id='home' className=" text-white py-32 w-full">
      <div className=" max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-12 items-center ">
        <div className="col-span-7 text-center lg:text-left">
          <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Dilber",
                1300,
                "Front-End Developer",
                1300,
                "I Create Interactive Web Experiences",
                1300,
              ]}
              wrapper="span"
              speed={60}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            Crafting seamless and intuitive user interfaces, I deliver
            high-quality, front-end solutions that engage and connect millions
            of users worldwide.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            {/* <button className="bg-[#121212] px-6 w-full sm:w-fit py-3 rounded-full bg-transparent hover:bg-slate-800 text-white  mt-3 lg:mt-0 flex bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  items-center">
              Hire Me!
            </button> */}
            <button
              onClick={() => {
                handleDownload(PNG_FILE_URL);
              }}
              className="bg-[#121212] px-6 w-full sm:w-fit py-3 rounded-full bg-transparent hover:bg-slate-800 text-white  mt-3 lg:mt-0 flex bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 20l9-9-4-4-5 5-5-5-4 4 9 9z"
                />
              </svg>
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/myimage.jpeg"
              alt="My Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
