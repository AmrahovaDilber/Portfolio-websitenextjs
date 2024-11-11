import Education from "./Education";
import Experience from "./Experience";

function Resume() {
  return (
    <div
      id="resume"
      className="mx-auto max-w-7xl mt-20 flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0 "    >
      <Education />
      <Experience />
    </div>
  );
}

export default Resume;
