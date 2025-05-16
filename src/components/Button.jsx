import clsx from "clsx";
import { useRef, useState } from "react";

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);
  const audioElementRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
    itemRef.current.getBoundingClientRect();
    
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    
    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(100px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };
  
  const handleMouseEnter =()=>{
    
    audioElementRef.current.play();
  }

  const handleMouseLeave = () => {
    audioElementRef.current.pause();
    setTransformStyle("");
  };

  return (
    <div
      id={id}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ transform: transformStyle }}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black hover:rounded-lg",
        containerClass
      )}
    >
      {leftIcon}
      <audio
        ref={audioElementRef}
        src="/audio/button.mp3"
        className="hidden"
        
              />

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </div>
  );
};

export default Button;
