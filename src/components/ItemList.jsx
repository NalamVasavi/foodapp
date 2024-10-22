import Item from "./Item";
import styles from "./itemList.module.css";
export default function ItemList({ food, isLoading }) {
  return (
    <div className={styles.scrollspy}>
      <div className=" row row-cols-lg-3 row-cols-md-2 g-3">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.extendedIngredients.map((ing) => <Item key={ing.id} ing={ing} />)
        )}
      </div>
    </div>
  );
}
