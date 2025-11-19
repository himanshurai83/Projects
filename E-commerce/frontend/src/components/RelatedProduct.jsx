import React, { useContext, useEffect, useState } from "react";
import { userDataContext } from "../contexts/UserContent";
import { useSearchParams } from "react-router";
import Card from "./Card";
import Title from "./Title";

function RelatedProduct({ category, subcategory, productId }) {
  const { product } = useContext(userDataContext);
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    if (product.length > 0) {
      let filterProduct = product
        .filter((item) => item.category === category)
        .filter((item) => item.subcategory === subcategory)
        .filter((item) => item._id !== productId);
      setRelatedProduct(filterProduct);
    }
  }, [productId]);
  return (
    relatedProduct.length > 0 && (
      <div>
        <Title text1={"RELATED"} text2={"PRODUCT"} />
        <div className="flex flex-wrap m-5">
          {relatedProduct.map((item, idx) => (
            <Card item={item} key={idx} />
          ))}
        </div>
      </div>
    )
  );
}

export default RelatedProduct;
