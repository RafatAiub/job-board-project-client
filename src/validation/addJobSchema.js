import * as Yup from 'yup';
export const addJobSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Job title must be at least 3 characters')
    .max(100, 'Job title must be at most 100 characters')
    .required('Job title is required'),
  company: Yup.string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be at most 100 characters')
    .required('Company name is required'),
  location: Yup.string()
    .min(2, 'Location must be at least 2 characters')
    .max(100, 'Location must be at most 100 characters')
    .required('Location is required'),
  description: Yup.string()
    .min(10, 'Description must be at least 10 characters')
    .max(1000, 'Description must be at most 1000 characters')
    .required('Description is required'),
  salary: Yup.number()
    .typeError('Salary must be a number')
    .positive('Salary must be positive')
    .max(10000000, 'Salary seems too high')
    .required('Salary is required'),
});