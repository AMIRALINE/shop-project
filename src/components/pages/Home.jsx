import { memo } from "react";
import CTAproduct from "../layout/CTAproduct";
import Features from "../layout/Features";
import ProdectList from "../products/prodectListInHome.jsx";

function Home(props) {
  return (
    <>
      <Features />
      <CTAproduct />
      <ProdectList />
    </>
  );
}

export default memo(Home);
