import styles from "./item.module.css";

export default function Item({ ing }) {
  return (
    // // <div className={styles.cont}>
    // <div class="d-flex justify-content-between card shadow overflow-hidden p-2 mb-3 ">
    //   {/* <div className={styles.imgCont}> */}
    //   <div class="w-50 h-100 mx-2 col-md-3">
    //     <img
    //       className={styles.img}
    //       src={`https://spoonacular.com/cdn/ingredients_100x100/` + ing.image}
    //       alt=""
    //     />{" "}
    //   </div>
    //   <div className={styles.nameCont}>
    //     <h3 className={styles.name}>{ing.name}</h3>

    //     <div className={styles.amt}>
    //       <h5>
    //         {ing.amount} {ing.unit}
    //       </h5>
    //     </div>
    //   </div>
    // </div>

    <div className={styles.con}>
      <div className={styles.conDet}>
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/` + ing.image}
          className={styles.img}
          alt=""
        />{" "}
        <h6>{ing.name}</h6> <br />
        <h6>
          {" "}
          {ing.amount} {ing.unit}{" "}
        </h6>
      </div>
    </div>
  );
}
