import { memo, useEffect, useState } from "react";
function ProductPage(props) {
  let [product, setProduct] = useState([
    {
      image: "#",
      title: "is loading pelese wait",
      description: "is loading pelese wait",
      price: "is loading pelese wait",
    },
  ]);
  let productID = document.URL.slice(39);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((json) => setProduct([json]));
  }, []);

  const loadHandler = (e) => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <>
      {product.map((product) => (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <button
            onClick={loadHandler}
            className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
          >
            در صورت لود نشدن یا محتوای اشتباه این دکمه را بزنید
          </button>
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={product.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.title}
                </h1>
                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-3">
                  <span className="title-font font-medium text-2xl text-gray-900" />
                  <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                    خرید
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default memo(ProductPage);
