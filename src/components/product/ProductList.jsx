import React from "react";
import { useNavigate } from "react-router-dom";

const ProductList = ({ productData }) => {
  const navigator = useNavigate();
  return (
    <div className="w-2/6 flex gap-y-2 flex-col">
      {productData &&
        productData.length > 0 &&
        productData.map((item, index) => (
          <div
            key={index}
            className="product-item p-3 flex items-start h-[200px] gap-x-4 bg-white rounded-md cursor-pointer"
            onClick={() => navigator(`/products/${item.productId || 1}`)}
          >
            <img
              src={item.imageUrl}
              alt=""
              className="w-[300px] h-full object-cover rounded-md"
            />
            <div className="product-info flex flex-col">
              <div className="h-[150px]">
                <h2 className="font-bold text-xl">{item.productName}</h2>
                <span className="text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, qui!
                </span>
              </div>
              <div className="flex justify-between mt-auto">
                <span className="font-bold text-xl">${item.price}</span>
                <span className="font-bold text-lg text-blue-500">Details</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
