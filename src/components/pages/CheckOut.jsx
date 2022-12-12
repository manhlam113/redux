import React from "react";

const CheckOut = () => {
  return (
    <div className="xl:px-24 mx-auto mt-10">
      <div className="form-checkout rounded-md p-4">
        <div className="info-container grid grid-cols-2 gap-x-5">
          <div className="info-customer bg-white rounded-md p-4">
            <h1 className="text-black font-semibold border-b-2 mb-4">
              INFO OF CUSTOMER
            </h1>
            <form action="">
              <div className="form-info-fill grid grid-cols-2 gap-x-2">
                <div className="form-left">
                  <div className="form-group flex flex-col mb-5">
                    <label htmlFor="firstName">Your Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="outline-none border border-gray-300 rounded-md p-1"
                    />
                  </div>
                  <div className="form-group flex flex-col mb-5">
                    <label htmlFor="firstName">Address</label>
                    <input
                      type="text"
                      name="firstName"
                      className="outline-none border border-gray-300 rounded-md p-1"
                    />
                  </div>
                </div>
                <div className="form-right">
                  <div className="form-group flex flex-col mb-5">
                    <label htmlFor="firstName">Email</label>
                    <input
                      type="text"
                      name="firstName"
                      className="outline-none border border-gray-300 rounded-md p-1"
                    />
                  </div>
                  <div className="form-group flex flex-col mb-5">
                    <label htmlFor="firstName">Phone Number</label>
                    <input
                      type="text"
                      name="firstName"
                      className="outline-none border border-gray-300 rounded-md p-1"
                    />
                  </div>
                </div>
              </div>
              <div className="form-note">
                <label htmlFor="">Notes</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="w-full outline-none border border-gray-300 p-2 rounded-md"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="info-products bg-white rounded-md p-4">
            <h1 className="text-black font-semibold border-b-2 mb-4">
              INFOMATIONS OF PRODUCTS
            </h1>
            <div className="info-product-table">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <td className="font-semibold">Products</td>
                    <td className="font-semibold">SubTotal</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2">
                    <td>Samsung j7prime</td>
                    <td>$22</td>
                  </tr>
                </tbody>
                <tfoot className="">
                  <tr class="order-total">
                    <td className="font-semibold">Total:</td>
                    <td>
                      <strong class="total-price">$22</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <button className="px-10 py-2 rounded-md bg-blue-400 mt-10 ml-[400px] relative text-white font-semibold">
              ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
