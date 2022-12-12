import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ productData }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.stateProduct);
  console.log(productData);
  const params = useParams();
  const productId = params.productId;

  const increasementQuantity = () => {
    if (quantity >= 99) return (quantity = 99);
    setQuantity((quantity) => quantity + 1);
  };
  const decreasementQuantity = () => {
    if (quantity <= 1) return (quantity = 1);
    setQuantity((quantity) => quantity - 1);
  };

  const productDetail = [...productData].filter((item) => {
    return item.productId === productId;
  });
  const handleAddCart = () => {
    toast("Thêm Sản phẩm thành công!", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
      type: toast.TYPE.SUCCESS,
    });
    dispatch({
      type: "ADD_CART",
      payload: {
        productId: productDetail[0].productId,
        productName: productDetail[0].productName,
        price: productDetail[0].price,
        imageUrl: productDetail[0].imageUrl,
        description: productDetail[0].description,
        quantity: quantity,
      },
    });
  };
  console.log("Carts", carts);
  if (!productData) return;

  return (
    <div className="w-4/6 bg-white rounded-md p-3">
      <div className="images w-full h-[400px] flex justify-center">
        <img
          src={productDetail[0].imageUrl}
          alt=""
          className="w-[500px] h-full rounded-md"
        />
      </div>
      <div className="product-title mb-10 py-2">
        <h1 className="text-black font-bold text-2xl">
          {productDetail[0].productName}
        </h1>
        <span className="text-gray-500">{productDetail[0].description}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex bg-gray-300 rounded-md w-[150px] justify-between px-4 py-2 text-3xl font-semibold cursor-pointer">
          <span className="text-gray-500" onClick={decreasementQuantity}>
            -
          </span>
          <span className="text-black font-semibold">{quantity}</span>
          <span className="text-yellow-600" onClick={increasementQuantity}>
            +
          </span>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <span className="font-bold text-4xl text-black">
            ${productDetail[0].price}
          </span>
          <button className="px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-300 flex justify-center items-center gap-x-4 text-white">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </span>
            <span onClick={handleAddCart}>Add To Cart</span>
            <ToastContainer></ToastContainer>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
