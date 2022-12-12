import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { database } from "../../firebase";

import React from "react";
import * as Yup from "yup";
const SignUp = () => {
  const dbRef = ref(database);

  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ username: "", password: "", email: "" }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Username is required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Password is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          set(child(dbRef, `users/${new Date()}`), {
            username: values.username,
            email: values.email,
            password: values.password,
          });
        }}
      >
        <Form className="max-w-[500px] mx-auto bg-white rounded-md mt-10 p-4">
          <h1 className="text-center font-semibold text-2xl">Sign Up</h1>
          <div className="form-group mb-2">
            <label htmlFor="email">Username</label>
            <Field
              name="username"
              type="text"
              className="w-full outline-none border border-gray-300 rounded-md  p-2 hover:border-blue-500"
            />
            <span className="text-red-500">
              <ErrorMessage name="username" />
            </span>
          </div>

          <div className="form-group mb-2">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="text"
              className="w-full outline-none border border-gray-300 rounded-md  p-2  hover:border-blue-500"
            />
            <span className="text-red-500">
              <ErrorMessage name="email" />
            </span>
          </div>

          <div className="form-group mb-2">
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="text"
              className="w-full outline-none border border-gray-300 rounded-md p-2  hover:border-blue-500"
            />
            <span className="text-red-500">
              <ErrorMessage name="password" />
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-400 rounded-md p-2 text-white mt-4"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SignUp;
