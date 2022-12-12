import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  //   return (
  //     <div className="max-w-[500px] bg-white shadow-md rounded-md p-4 mx-auto mt-20">
  //       <h1 className="text-center font-semibold mb-4 text-3xl">Login</h1>
  //       <form action="">
  //         <div className="form-group mb-4">
  //           <label htmlFor="">Username</label>
  //           <input
  //             type="text"
  //             name="username"
  //             className="w-full border border-gray-300 hover:border-blue-400 outline-none rounded-md p-1"
  //           />
  //         </div>
  //         <div className="form-group ">
  //           <label htmlFor="">Password</label>
  //           <input
  //             type="text"
  //             name="password"
  //             className="w-full border border-gray-300 hover:border-blue-400 outline-none rounded-md p-1"
  //           />
  //         </div>
  //         <button
  //           type="submit"
  //           className="bg-blue-500 rounded-md w-full mt-10 text-white font-semibold p-2"
  //         >
  //           LOGIN
  //         </button>
  //       </form>
  //     </div>
  //   );
  return (
    <>
      <Formik
        initialValues={{ firstName: "", password: "", email: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="max-w-[500px] mx-auto bg-white rounded-md mt-10 p-4">
          <h1 className="text-center font-semibold text-2xl">Form Login</h1>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field
              name="firstName"
              type="text"
              className="w-full outline-none border border-gray-300 rounded-md p-1"
            />
            <ErrorMessage name="firstName" className="text-red-500" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="text"
              className="w-full outline-none border border-gray-300 rounded-md p-1"
            />
            <ErrorMessage name="password" className="text-red-500" />
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

export default Login;
