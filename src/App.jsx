import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Madeby from "./assets/madebypranay.svg";
import Button from "./Button";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };

  return (
    <div>
      <div
        className={clsx(
          "flex justify-center items-center min-h-screen font-hnd text-white transition-all duration-300 w-full h-full",
          isHovered
            ? "bg-[#ff4802] bg-[linear-gradient(#ffffff3f_2px,transparent_2px),linear-gradient(90deg,#ffffff3f_2px,transparent_2px),linear-gradient(#ffffff3f_1px,transparent_1px),linear-gradient(90deg,#ffffff3f_1px,rgba(0,0,0,0)_1px)] bg-[250px_250px,250px_250px,50px_50px,50px_50px]"
            : "bg-black"
        )}
        style={{
          backgroundBlendMode: "overlay",
        }}
      >
        <Button text={"Get started →"} onHover={handleHover} />
      </div>
      <a
        href="https://saipranay.vercel.app/"
        target="_blank"
        className="fixed bottom-10 right-10"
      >
        <img
          src={Madeby}
          alt="sai pranay portfolio redirect"
          className="fixed bottom-8 right-8 w-60"
        />
      </a>
    </div>
  );
}

export default App;
