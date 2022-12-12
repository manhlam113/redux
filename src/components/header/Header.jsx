import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  const { carts } = useSelector((state) => state.stateProduct);
  let numberProduct = carts.length;
  return (
    <>
      <div className="header px-16 bg-white shadow-md">
        <nav className="flex justify-between py-2 items-center">
          <ul className="main-menu flex gap-x-8 w-1/3">
            <li className="menu-item">
              <NavLink
                to="/home"
                className="menu-link text-gray-500 text-lg hover:text-black font-semibold"
              >
                Home
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/products/1"
                className="menu-link text-gray-500 text-lg hover:text-black font-semibold"
              >
                Products
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/reviews"
                className="menu-link text-gray-500 text-lg hover:text-black font-semibold"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <h2 className="text-blue-500 text-2xl font-bold text-center w-1/3">
            Beauty.bd
          </h2>
          <NavLink
            to={"/cart"}
            className="cart w-1/3 flex justify-end relative"
          >
            <span className="bg-red-500 rounded-full leading-none absolute w-[20px] h-[20px] flex justify-center items-center text-white">
              {numberProduct}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </NavLink>
        </nav>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
