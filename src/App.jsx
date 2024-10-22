import { useState } from "react";

import "./App.css";

import Nav from "./components/Nav";

import "bootstrap/dist/css/bootstrap.min.css";

import AppRouter from "./Router/AppRouter";
import Footer from "./components/Footer";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("665769");

  return (
    <div className="App">
      <Nav />
      <div>
        <AppRouter />
      </div>
      <Footer />
      {/* <Search foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>

        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container> */}
    </div>
  );
}

export default App;
