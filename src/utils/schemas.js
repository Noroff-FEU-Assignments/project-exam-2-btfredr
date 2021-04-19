import * as yup from "yup";

export const loginSchema = yup.object().shape({
  identifier: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export const contactSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "Message must be more than 10 characters"),
});

export const productSchema = yup.object().shape({
  name: yup.string().required("Please enter a name"),
  price: yup.number().required("Please enter a price"),
  image_url: yup.string().required("Please enter an image URL"),
  description: yup.string().required("Please enter a description"),
  capacity: yup
    .number()
    .required("Please enter a value")
    .min(0, "Must be greater than zero"),
  slug: yup.string().required("Please enter an ID"),
});
