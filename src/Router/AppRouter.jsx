import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FoodDetails from "../components/FoodDetails2";
import SearchListContainer from "../components/SeacrhListContainer";
import Loader from "../components/Loader";
import FoodDetails1 from "../components/FoodDetails1";
import FoodDetails2 from "../components/FoodDetails2";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchListContainer />} />
        <Route path="/view" element={<FoodDetails1 />} />
        <Route path="/view2" element={<FoodDetails2 />} />
        <Route path="/loader" element={<Loader />} />
      </Routes>
    </Router>
  );
}
