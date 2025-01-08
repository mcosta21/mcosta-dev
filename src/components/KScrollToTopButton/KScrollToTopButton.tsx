import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IoMdArrowUp } from "react-icons/io";

export default function KScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <motion.div
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          className="fixed z-50 right-5 bottom-5"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Button
            isIconOnly
            className="rounded-xl bg-primary text-white"
            startContent={<IoMdArrowUp size={20} />}
            variant="solid"
            onClick={() => scrollToTop()}
            onTouchStart={() => scrollToTop()}
          />
        </motion.div>
      )}
    </>
  );
}
