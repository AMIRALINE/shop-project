function Categorycard(props) {
  let { category } = props;
  return (
    <div className="p-4 border shadow hover:shadow-lg ease-out rounded-3xl">
      <h1> {category} </h1>
      <p>
        <button class="px-4 py-2 font-medium rounded-full tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600  hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          رفتن به دسته بندی
        </button>
      </p>
    </div>
  );
}

export default Categorycard;
