import loaderGif from "../assets/gif/loader3.gif";
import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className="">
      <div className={styles.loader}>
        <img src={loaderGif} alt="Loading..." className="mt-5 pt-5 w-25" />{" "}
      </div>{" "}
      <span className="d-flex justify-content-center fw-bold fs-5 mt-5">
        Loading ...
      </span>
    </div>
  );
}
