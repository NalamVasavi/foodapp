import { useState } from "react";
import Container from "./Container";
import FoodList from "./FOodList";
import InnerContainer from "./InnerContainer";
import Search from "./Search";
import Loader from "./Loader";

export default function SearchListContainer() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("665769");
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState({});
  const [hasError, setHasError] = useState(false);
  return (
    <div>
      <Search
        foodData={foodData}
        setFoodData={setFoodData}
        setLoading={setLoading}
        setErrorMsg={setErrorMsg}
        setHasError={setHasError}
      />
      {loading ? (
        <Loader />
      ) : hasError ? (
        <div>{errorMsg}</div>
      ) : (
        <Container>
          <InnerContainer>
            <FoodList foodData={foodData} setFoodId={setFoodId} />
          </InnerContainer>
        </Container>
      )}
    </div>
  );
}
