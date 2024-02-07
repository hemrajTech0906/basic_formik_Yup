import * as Yup from "yup";

export const SignUpValidation=Yup.object({
    name:Yup.string().min(3).required("please Enter your name"),
    email:Yup.string().email("Please enter your Valid email").required("Please enter your email"),
    password:Yup.string().min(5).required("Please enter your password"),
    cpassword:Yup.string().oneOf([Yup.ref('password')],"cpassword not match")
})