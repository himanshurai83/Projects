import React, { useContext } from "react";
import { adminDataContext } from "../context/AdminContext";
import Card from "./Card";
import Loading from "./Loading";

function Home() {
  const { product, deletingProduct, fetching } = useContext(adminDataContext);

  const handleRemoveProduct = (productId) => {
    deletingProduct(productId);
  };

  // console.log("fetching:", fetching);

  return (
    <div className="max-w-4xl mx-auto relative left-[30px] mb-[40px] p-2 rounded-xl shadow-2xl mt-8 ">
      {fetching && <Loading></Loading>}
      {!fetching && (
        <Card product={product} handleRemoveProduct={handleRemoveProduct} />
      )}
    </div>
  );
}

export default Home;
