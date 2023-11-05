import { motion } from "framer-motion";

function App() {
  const buttonVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
    },
  };

  return (
    <div className="flex justify-center items-center bg-black text-white min-h-screen font-hnd">
      <motion.button
        className="text-[80px] border-2 px-24 py-10 rounded-full"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
      >
        Get started&nbsp;→
      </motion.button>
    </div>
  );
}

export default App;
  