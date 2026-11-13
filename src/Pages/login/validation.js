import * as Yup from "yup";
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const loginValidation = Yup.object({
  email: Yup.string().email("Enter a valid email").trim().required("Required"),
  password: Yup
    .string()
    .trim()
    .required()
    .matches(
      passwordRegex,
      "Use 8+ characters with a mix of uppercase, lowercase, numbers, and symbols",
    ),
});