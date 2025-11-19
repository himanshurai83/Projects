import React, { useContext } from "react";
import { userDataContext } from "../contexts/UserContent";
import Card from "./Card";
import Title from "./Title";

function Bestseller() {
  const { product } = useContext(userDataContext);
  const filteredProduct = product.filter((item) => item.bestseller);
  return (
    <div className="bg-gray-50 py-10 px-5 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <Title text1={"BEST"} text2={"SELLER"} />
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        {filteredProduct.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Bestseller;
