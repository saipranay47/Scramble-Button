import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Madeby from "./assets/madebypranay.svg";
import clsx from "clsx";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState("Get started →");

  const buttonVariants = {
    initial: {
      backgroundColor: "#000",
      color: "#fff",
      boxShadow: "rgba(255, 255, 255, 0.413) 0px 0px 0px",
    },
    hover: {
      backgroundColor: "#fff",
      color: "#000",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
      boxShadow: "rgba(255, 255, 255, 0.413) 0px 0px 50px",
    },
  };

  const textVariants = {
    initial: {
      x: 0,
      transition: {
        duration: 3,
      },
    },
    hover: {
      x: 300,
      display: "none",
      transition: {
        duration: 3,
      },
    },
  };
  const textVariants2 = {
    initial: {
      display: "none",
    },
    hover: {
      display: "block",
    },
  };

  const scrambleText = (text) => {
    const scrambleChars = "abcdefghijklmnopqrstuvwxyz-.，+*@&%/=";
    let i = 0;
    text = "Get started →"

    const performIteration = () => {
      if (i <= text.length) {
        const unscrambledText = text
          .split("")
          .map((char, index) => {
            if (index < i) {
              return text[index];
            }
            return scrambleChars[
              Math.floor(Math.random() * scrambleChars.length)
            ];
          })
          .join("");

        setText(unscrambledText);

        i++;

        if (i <= text.length) {
          setTimeout(performIteration, 30);
        }
      }
    };

    performIteration();
  };

  const handleHover = () => {
    setIsHovered(true);
    scrambleText(text);
  };

  useEffect(() => {
    if (!isHovered) {
      setText("Get started →");
    }
  }, [isHovered]);

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
        <motion.button
          className="text-[80px] border-2 rounded-full h-[191px] w-[750px] flex justify-center items-center"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          onMouseEnter={handleHover}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.span
            variants={textVariants}
            className=" w-full text-left ml-32 overflow-hidden"
          >
            Get started →
          </motion.span>

          <motion.span
            variants={textVariants2}
            className=" w-full text-left  overflow-hidden"
            style={{
              transform: "translateX(128px)",
            }}
          >
            {text}
          </motion.span>
        </motion.button>
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
