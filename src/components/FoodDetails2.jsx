import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";
// const API_KEY = "a3698369d6a944af920c47b26a6276cc";
// const API_KEY = "95ccb2b38a434817bc2ee37b2fd5a85f";

export default function FoodDetails2() {
  const API_KEY = import.meta.env.VITE_API_KEY_3;
  const location = useLocation();
  const { foodId } = location.state || {};
  const [food, setFood] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [errorMsg, setErrorMsg] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${API_KEY}`
        );
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setFood(data);
          setIsloading(false);
        } else {
          setErrorMsg("Network response was not ok");
          setIsloading(false);
          return <div>{errorMsg}</div>;
        }
      } catch (error) {
        // alert(error);
        setErrorMsg(error);
        setIsloading(false);
        return <div>{errorMsg}</div>;
      }
    }
    fetchRecipe();
  }, [foodId]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" row row-cols-lg-2 row-cols-md-1 m-3">
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.front}>
                <h3 className={styles.title}>
                  <h3 className={styles.title}>{food.title} Recipe</h3>
                </h3>
                <p className={styles.subtitle}>
                  <div>
                    <img className={styles.img} src={food.image} alt="" />
                    <div className={styles.recipeDetails}>
                      <span>
                        <strong>⏱{food.readyInMinutes} Minutes</strong>
                      </span>
                      <span>
                        <strong>👨‍👩‍👦‍👦 Servings {food.servings}</strong>
                      </span>
                      <span>
                        <strong>
                          {food.vegetarian
                            ? "🥦 Vegetarian"
                            : "🍗 Non-Vegetarian"}
                        </strong>
                      </span>
                      <span>
                        <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
                      </span>
                      <span>
                        <strong>
                          {food.glutenFree ? "👍 Gluten Free" : ""}
                        </strong>
                      </span>{" "}
                    </div>
                    <div>
                      <span>
                        <strong>
                          $ {food.pricePerServing / 100} Per Serving
                        </strong>
                      </span>
                    </div>{" "}
                  </div>
                </p>
              </div>

              <div className={styles.back}>
                <p className={styles.description}>
                  {" "}
                  <div className=" p-4 my-2">
                    <h3 className="text-decoration-underline">Instructions</h3>
                    <ol>
                      {isLoading ? (
                        <p>Loading...</p>
                      ) : (
                        food.analyzedInstructions[0].steps.map((step) => (
                          <li key={step.number}>{step.step}</li>
                        ))
                      )}
                    </ol>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <h3 className="text-decoration-underline">Ingredients</h3>
              <button
                className="btn fw-bold fs-5 text-light"
                style={{ backgroundColor: "#8EBCB1" }}
                onClick={() => navigate("/")}
              >
                <i className="bi bi-arrow-left"></i>{" "}
              </button>
            </div>

            <ItemList food={food} isLoading={isLoading} />
          </div>{" "}
        </div>
      )}
    </div>
  );
}
