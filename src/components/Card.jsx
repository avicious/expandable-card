import styles from "./Card.module.css";
import sample from "../assets/sample.jpg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const animationProps = {
    layout: "position",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { delay: 0.1 },
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <motion.div
      layout
      className={styles.card}
      onClick={() => setIsExpanded(true)}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <motion.h2 layout="position">Expandable Card</motion.h2>
      <motion.p layout="position">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero
        quaerat qui eum, nisi facilis nulla quidem doloribus, repellendus
        voluptates officiis! Esse, nisi. Ipsum veritatis cum dolor sequi minus?
        Autem!
      </motion.p>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: "hidden" }}
          >
            <motion.img {...animationProps} src={sample} alt="sample image" />

            <motion.p {...animationProps}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              minima sunt quam exercitationem eius ex obcaecati quia iure nihil.
              Voluptas aut impedit culpa provident, ratione nulla doloribus
              tempora facilis id!
            </motion.p>

            <motion.div {...animationProps} className={styles.btnContainer}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
