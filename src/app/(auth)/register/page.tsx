// pages/login.js
"use client"
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email is a required field')
    .email('Invalid email format'),
  password: Yup.string()
    .required('Password is a required field')
    .min(8, 'Password must be at least 8 characters'),
});

function Login() {
  return (
    <div className='h-[100vh] w-[100vw] flex justify-center content-center'>
    <div className='h-[100%] flex justify-center items-center bg-fuchsia-200'>
      <h1>Login</h1>
      <Formik
        validationSchema={schema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
       
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
    </div>
  );
}

export default Login;
