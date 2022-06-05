import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import CategoryList from "../products/categoryList";

function Categories() {
  let { state } = useContext(AppContext);
  return (
    <>
      <CategoryList />
    </>
  );
}

export default Categories;
