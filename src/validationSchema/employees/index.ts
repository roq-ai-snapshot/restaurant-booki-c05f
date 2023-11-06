import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  position: yup.string().required(),
  restaurant_id: yup.string().nullable().required(),
});
