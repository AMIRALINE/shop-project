import { useContext } from "react";
import ProductsContext from "../../contexts/AppContext";
import ProductCard from "./productCard";

export default function ProdectList(props) {
  let { state } = useContext(ProductsContext);
  return (
    // <div className="max-w-full">
    //   <h2 className="text-2xl text-gray-500">لیست محصولات</h2>
    //   <div className="flex flex-nowrap ">
    //
    //   </div>
    //   <span className="text-md text-gray-300">لیست کامل</span>
    // </div>
    <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
      {state.status == 404 ? (
        <h1>is loading</h1>
      ) : (
        state.products.map((product) => {
          return (
            <ProductCard
              Product={product}
              title={product.title}
              text={product.description}
              price={product.price}
            />
          );
        })
      )}
    </div>
  );
}
