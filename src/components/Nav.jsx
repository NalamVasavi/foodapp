import styles from "./nav.module.css";
import { motion } from "framer-motion";
export default function Nav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={styles.nav}
    >
      {/* <h1 className={styles.title}>React Eats</h1> */}
      <div className={styles.two}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Gourmet Guru
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className={styles.altTwo}
          >
            Elevate Your Cooking Game
          </motion.span>
        </motion.h1>
      </div>
    </motion.div>
  );
}
