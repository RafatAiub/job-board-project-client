import * as Yup from 'yup';

export const applySchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Name must only contain letters and spaces')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  cv: Yup.string().url('Invalid URL').required('CV link is required'),
});

