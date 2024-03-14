import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  name: yup.string().min(2).required("Required"),
  message: yup.string().min(5).required("Required"),
  phoneNumber: yup.string().min(10).matches(phoneRegExp, "Phone number is not valid"),
});
