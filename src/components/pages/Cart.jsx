import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, child, get, set } from "firebase/database";

import { database } from "../../firebase";
const Cart = () => {
  const dbRef = ref(database);
  useEffect(() => {
    get(child(dbRef, `users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  set(child(dbRef, "users/2"), {
    username: "vanmanh",
    email: "heelo@gmail.com",
    profile_picture: "1231323",
  });

  const navigator = useNavigate();
  const { carts } = useSelector((state) => state.stateProduct);
  const dispatch = useDispatch();

  function updateSubtotal(carts) {
    let subTotal = 0;
    carts.map((item) => {
      subTotal += item.price * item.quantity;
    });
    return subTotal;
  }

  let shipCost = 0;
  function handleDeleteCart(id) {
    let confirmText = confirm("Do you want to remove product out of cart?");
    if (confirmText) {
      dispatch({
        type: "DELETE_CART",
        payload: id,
      });
    }
  }

  return (
    <div>
      <div
        className="rounded-lg mx-auto overflow-hidden bg-transparent container xl:px-24 mb-10"
        style={{ height: "auto" }}
      >
        <div className="grid lg:grid-cols-12 pt-5 gap-4 h-full auto-rows-min">
          <div className="lg:col-span-12">
            <div className="p-3 bg-white shadow-lg w-full rounded-lg">
              <div className="w-full text-center font-semibold">
                My Shopping Cart
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 overflow-auto">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="grid girds-col-12 gap-4 w-full h-full rounded-lg overflow-auto">
                  {carts.length <= 0 ? (
                    <h4 className="text-center mt-12 font-bold text-xl">
                      You have no products in cart
                    </h4>
                  ) : (
                    <>
                      {carts.map((item) => (
                        <div className="bg-white w-full rounded-md p-2 flex">
                          <div className="w-2/6">
                            <img
                              src={item.imageUrl}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-4/6 p-4">
                            <div className="h-[150px]">
                              <h1 className="flex justify-between font-bold text-2xl mb-5">
                                {item.productName}{" "}
                                <span
                                  onClick={() =>
                                    handleDeleteCart(item.productId)
                                  }
                                >
                                  &times;
                                </span>
                              </h1>
                              <span className="text-gray-400">
                                {item.description}
                              </span>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                              <div className="flex bg-gray-300 rounded-md w-[150px] justify-between px-3 py-1 text-3xl font-semibold cursor-pointer">
                                <span
                                  className="text-gray-500"
                                  onClick={() =>
                                    dispatch({
                                      type: "DRECREMENT_QUANTITY",
                                      payload: item.productId,
                                    })
                                  }
                                >
                                  -
                                </span>
                                <span className="text-black font-semibold">
                                  {item.quantity}
                                </span>
                                <span
                                  className="text-yellow-600"
                                  onClick={() =>
                                    dispatch({
                                      type: "INCREMENT_QUANTITY",
                                      payload: item.productId,
                                    })
                                  }
                                >
                                  +
                                </span>
                              </div>
                              <span className="font-bold text-2xl">
                                ${item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <div className="bg-gray-100 px-4 py-2 grid gap-1 gird-cols-12 w-full rounded-lg h-44">
                  <div className="col-span-12">
                    <h6 className="text-lg font-medium">Order Info</h6>
                  </div>
                  <div className="col-span-12 text-lg">
                    <div className="flex items-center justify-between">
                      <p className="font-light text-gray-700">Subtotal:</p>
                      <p className="font-normal">
                        ${updateSubtotal(carts).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-light text-gray-700">Shipping Cost:</p>
                      <p className="font-normal">
                        ${carts.length > 0 ? (shipCost = 10) : "0"}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="flex items-center justify-between font-semibold text-3xl">
                      <p className="">Total:</p>
                      <p className="">
                        ${(updateSubtotal(carts) + shipCost).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <button
                  onClick={() => navigator("/checkout")}
                  className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
  bg-blue-500 text-white hover:bg-blue-400 cursor-allowed w-full"
                >
                  Checkout
                </button>
              </div>
              <div className="col-span-12">
                <button
                  onClick={() => navigator("/products/1")}
                  className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
  border border-blue-500 text-blue-500 hover:bg-blue-200 false w-full"
                >
                  Continue shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
