import { FaGraduationCap } from "react-icons/fa6";

const experience = [
  {
    year: "10/2023 – 12/2023",
    object: "Front-end Development",
    place: "4SIM/C4IRAzerbaijan",
  },
  { year: "2024-2025", object: "Front-end Development", place: "Tripsee" },
  {
    year: "07/2024 – Present",
    object: "Front-end Developer | Freelance",
    place: "Digigo Group",
  },
];

function Experience() {
  return (
    <div className="w-full lg:w-1/2 p-4 sm:p-0">
      <div className="flex items-center mb-8 space-x-4">
        <div className="text-white text-[35px] sm:text-[45px]">
          <FaGraduationCap />
        </div>
        <h1 className="text-white font-semibold text-[30px] sm:text-[45px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          My Experience
        </h1>
      </div>

      <div className="flex flex-col space-y-6">
        {experience.map((item, index) => (
          <div
            key={index}
            className="hover:translate-y-[-8px] duration-300 rounded-xl p-4 sm:p-6 bg-[#140c1c] group hover:bg-gradient-to-r hover:from-cyan-700 hover:via-purple-500 hover:to-pink-500 transition-all"
          >
            <p className="mb-2 font-bold text-indigo-600 text-[16px] sm:text-[18px] group-hover:text-white">
              {item.year}
            </p>
            <h1 className="text-[20px] sm:text-[25px] uppercase font-bold text-white mb-2">
              {item.object}
            </h1>
            <p className="text-base sm:text-lg text-white">{item.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
