import { useEffect, useState } from "react";
import styles from "./search.module.css";

export default function Search({
  foodData,
  setFoodData,
  setLoading,
  setErrorMsg,
  setHasError,
}) {
  const [query, setQuery] = useState("milk shake");
  const API_KEY = import.meta.env.VITE_API_KEY_3;
  useEffect(() => {
    async function fetchQuery() {
      try {
        //   console.log("Demo Executed");
        const res = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`
        );
        if (res.ok) {
          const data = await res.json();
          //   console.log(data.results);
          setFoodData(data.results);
          setLoading(false);
        } else {
          setHasError(true);
          setLoading(false);
          setErrorMsg("Network Error");
          return <div>Network Error</div>;
        }
      } catch (error) {
        setHasError(true);
        setLoading(false);
        setErrorMsg("Network Error");
        return <div>{error}</div>;
      }
    }
    fetchQuery();
  }, [query]);
  return (
    <div>
      <div className={styles.searchCont}>
        {/* <input
        type="text"
        name="query"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      /> */}

        <div className="input-group mb-3 inp">
          <input
            type="text"
            className="form-control "
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            name="query"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <span className="input-group-text" id="basic-addon2">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
