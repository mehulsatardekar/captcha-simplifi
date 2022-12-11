import * as Yup from "yup";

const emailRegex =
  /^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/;

const wrongEmailMessage =
  "Invalid Email format it should contain valid email address eg: alexdadario@gmail.com";

const signupValidationSchema = Yup.object({
  fullname: Yup.string().required("fullname is required"),
  email: Yup.string()
    .required("Invalid Email Format Email should contain valid email address")
    .required("Email Address is required")
    .matches(emailRegex, wrongEmailMessage),
  captcha: Yup.string().required("Captcha required"),
});

export { signupValidationSchema };
