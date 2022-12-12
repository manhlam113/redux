import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetail from "../product/ProductDetail";
import ProductList from "../product/ProductList";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "GET_PRODUCT",
    });
  }, []);

  const { products } = useSelector((state) => state.stateProduct);

  return (
    <div className="mt-10 mb-10 max-w-[1280px] mx-auto flex justify-start gap-x-10 h-[600px]">
      {products.length > 0 ? (
        <>
          <ProductDetail productData={products}></ProductDetail>
          <ProductList productData={products}></ProductList>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Product;
