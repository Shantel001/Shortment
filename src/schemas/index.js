import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  profileName: Yup.string()
    .min(3, "Too Short!")
    .max(60, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(10, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
})