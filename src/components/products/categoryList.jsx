import Categorycard from "./categoryCard";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";

function CategoryList(props) {
  let { state } = useContext(AppContext);
  return (
    <div className="grid grid-cols-2 gap-4 m-5">
      {state.categories.map((c) => (
        <Categorycard category={c} />
      ))}
    </div>
  );
}

export default CategoryList;
