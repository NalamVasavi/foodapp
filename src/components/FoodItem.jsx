import { useNavigate } from "react-router-dom";
import styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId }) {
  const navigate = useNavigate();
  function view() {
    setFoodId(food.id);
    navigate("/view", { state: { foodId: food.id } });
  }
  return (
    <div className="card m-3 col-lg-3 col-md-3 col-sm-2 shadow overflow-hidden g-0 ">
      {/*  <div className={styles.itemCont}> */}
      <img src={food.image} alt={food.title} className={styles.img} />
      <div className={styles.itmcontent}>
        {" "}
        <p className={styles.title}> {food.title} </p>
      </div>
      <div className={styles.btnCont}>
        {/* <button onClick={() => view()} className={styles.button}>
          View Recipe
        </button> */}

        <button className={styles.button} onClick={() => view()}>
          <span className={styles.buttoncontent}> View Recipe</span>
        </button>
      </div>
    </div>
  );
}
