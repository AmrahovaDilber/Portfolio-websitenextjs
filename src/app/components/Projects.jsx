import { PinContainer } from "./3d-pin";
import Title from "./Title";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "HerseyBurada",
    category: "e-commerce",
    des: "HerseyBurada is a modern e-commerce platform that offers a seamless shopping experience. Users can browse products, add them to a cart, and proceed to checkout effortlessly.",
    image: '/herseyburada.png',
    icons: ["/react.webp", "/tailwindd.svg"],
    link: "https://herseyburada.netlify.app/",
  },
  {
    id: 2,
    title: "Ramadan",
    link: "https://ramadanwebsite.netlify.app/",
    image: "/ramadan.png",
    icons: ["/react.webp", "/css.png"],
    des: "Discover daily inspirational quotes, organize your month with our interactive planner, and explore essential information, community events, and more.",
  },

  {
    id: 3,
    title: "Dilber's Portfolio",
    link: "https://diberamrahova-portfolio.netlify.app/",
    image: "/portfolio.png",
    icons: ["/react.webp", "/scss.png"],
    des: "A personal portfolio showcasing my projects, skills, and experience.It highlights key accomplishments, coding expertise, and includes a contact section for professional connections.",
  }
  
 
];

function Projects() {
  return (
    <div id="projects" className="relative z-10">
      <Title name="A small selection of recent projects" />
      <div className="flex flex-wrap items-center justify-center p-2 gap-x-12 gap-y-6 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="sm:h-[30rem] h-[24rem] lg:min-h-[25em] flex items-center justify-center sm:w-[400px] w-[75vw]"
          >
            <PinContainer title={project.title} href={project.link}>
              <div className="relative flex items-center justify-center sm:w-[400px] w-[70vw] sm:h-[30vh] h-[20vh] mb-8 overflow-hidden bg-[#13162d] rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="z-10"
                />
              </div>
              <h1 className="font-bold lg:text-lg md:text-base text-sm line-clamp-1 text-white">
                {project.title}
              </h1>
              <p className="lg:text-base lg:font-normal font-light text-xs text-white w-[360px]">
                {project.des}
              </p>
              <div className="flex items-center justify-between mt-5 mb-2">
                <div className="flex items-center">
                  {project.icons.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center text-white"
                      style={{ transform: `translateX(-${index * 8}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-1" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-base md:text-xs text-xs text-purple text-white">
                    Check Live Site
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
