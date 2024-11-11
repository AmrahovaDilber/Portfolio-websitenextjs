"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  function handleTop() {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <div
        onClick={handleTop}
        className="cursor-pointer fixed bottom-[20px] right-[30px] flex items-center justify-center size-[40px] rounded-full bg-white text-[#6f42c1]"
      >
        <FaArrowUp />
      </div>
    )
  );
}

export default BackToTop;
