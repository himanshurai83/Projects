import React, { useContext } from "react";
import Title from "./Title.jsx";
import { userDataContext } from "../contexts/UserContent.jsx";
import Card from "./Card.jsx";

function LatestCollection() {
  const { product } = useContext(userDataContext);
  return (
    <div className="bg-gray-50 py-10 px-5 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        {product.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;
