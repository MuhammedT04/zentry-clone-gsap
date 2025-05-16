import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedHeroText = ({ currentIndex }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const letters = containerRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
       {
        y: 50,
        opacity: 0,
        
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.06,
        duration: 0.8,
        ease: "power2.inOut",
      }
    );
  }, [currentIndex]);

  const getTitle = () => {
    switch (currentIndex) {
      case 1:
        return [
          "G",
          <b key="b">A</b>,
          "MING",
        ];
      case 2:
        return [
          "IDE",
          <b key="b">N</b>,
          "TITY",
        ];
      case 3:
        return [
          "RE",
          <b key="b">A</b>,
          "LITY",
        ];
      case 4:
        return [
          "AG",
          <b key="b">E</b>,
          "NTIC AI",
        ];
      default:
        return [];
    }
  };

  return (
    <h1
      ref={containerRef}
      className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 pr-6"
    >
      {getTitle().map((part, index) =>
        typeof part === "string" ? (
          part.split("").map((char, i) => (
            <span key={`${index}-${i}`} className="letter inline-block">
              {char}
            </span>
          ))
        ) : (
          <span key={index} className="letter inline-block font-bold">
            {part}
          </span>
        )
      )}
    </h1>
  );
};

export default AnimatedHeroText;
