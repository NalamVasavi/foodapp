import styles from "./footer.module.css";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Footer() {
  const footerStyle = {
    // backgroundColor: "#f8f9fa",
    padding: "20px 0",
    textAlign: "center",
    borderTop: "1px solid #e7e7e7",
    position: "relative",
    marginTop: "auto",
    background: "url(/src/assets/images/footer8.jpg) no-repeat center",
    /* background-size: 100% 100%; */
    backgroundSize: "100%",
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    gap: "5px",
  };

  const textStyle = {
    margin: "5px 0",
    fontSize: "16px",
    color: "#000000",
    fontWeight: "bold",
  };

  const iconLinkStyle = {
    color: "#000000",
    textDecoration: "none",
    display: "inline-block",
    margin: "0 10px",
  };

  const iconStyle = {
    borderRadius: "50%",
    border: "2px solid #000000",
    padding: "5px",
    cursor: "pointer",
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+917989638338";
    if (navigator.userAgent.match(/Mobi/)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      navigator.clipboard.writeText(phoneNumber);
      alert("Phone number copied to clipboard");
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={footerStyle}
    >
      <motion.div
        // drag
        // dragConstraints={{
        //   top: -50,
        //   left: -50,
        //   right: 50,
        //   bottom: 50,
        // }}
        // dragElastic={0.3}
        style={containerStyle}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={textStyle}
        >
          Contact: Nalam Vasavi
        </motion.p>

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={textStyle}
        >
          {" "}
          | Contact:
        </motion.p> */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{
            rotateZ: [0, -20, 20, -20, 20, -20, 20, 0],
            transition: { duration: 0.5 },
          }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nalamvasavi15@gmail.com&su=Regarding%20Gourmet%20Guru%20App"
            target="_blank"
            style={iconLinkStyle}
          >
            <FaEnvelope size={32} style={iconStyle} />
          </a>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileHover={{
            rotateZ: [0, -20, 20, -20, 20, -20, 20, 0],
            transition: { duration: 0.5 },
          }}
        >
          <FaPhone size={30} style={iconStyle} onClick={handlePhoneClick} />
        </motion.p>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.75 }}
          href="https://www.linkedin.com/in/nalamvasavi"
          target="_blank"
          style={iconLinkStyle}
          whileHover={{
            rotateZ: [0, -20, 20, -20, 20, -20, 20, 0],
            transition: { duration: 0.5 },
          }}
        >
          <FaLinkedin size={34} style={iconStyle} />
        </motion.a>
      </motion.div>
    </motion.footer>
  );
}
