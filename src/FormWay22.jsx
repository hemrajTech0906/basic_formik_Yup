import React from "react";
import { Formik, Form, Field } from "formik";
import { SignUpValidation } from "./SingUpValidation";

let initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const FormWay22 = () => {


    let onSubmit=(values,{ resetForm })=>{
        // e.preventDefault()
        
        console.log(values);
        resetForm()
        
    }
    

    let handleKeyDown=(e)=>{
        if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        }
        //  e.preventDefault();
    }


  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={SignUpValidation}
       onSubmit={onSubmit} 
       
        
      >
        {({ errors }) => (
          <Form    onKeyDown={handleKeyDown}>
            <label htmlFor="name">NAME:</label>
            {/* <input
  type="text"
  name="name"
  value={values.name}
  onBlur={handleBlur}
  onChange={handleChange}
/> */}
            <Field type="text" name="name"></Field>
            <br />
            {errors.name && <big>{errors.name}</big>}
            <br />
            <label htmlFor="email">EMAIL:</label>
            {/* <input
  type="email"
  name="email"
  value={values.email}
  onBlur={handleBlur}
  onChange={handleChange}
/> */}
            <Field type="email" name="email"></Field>
            <br />
            {errors.email && <small>{errors.email}</small>}
            <br />
            <label htmlFor="password">PASSWORD:</label>
            {/* <input
  type="password"
  name="password"
  value={values.password}
  onBlur={handleBlur}
  onChange={handleChange}
/> */}
            <Field type="password" name="password"></Field>
            <br />
            {errors.password && <small>{errors.password}</small>}
            <br />
            <label htmlFor="cpassword">CPASSWORD:</label>
            {/* <input
  type="password"
  name="cpassword"
  value={values.cpassword}
  onBlur={handleBlur}
  onChange={handleChange}
/> */}
            <Field type="password" name="cpassword"></Field>
            <br />
            {errors.cpassword && <small>{errors.cpassword}</small>}
            <br />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormWay22;
