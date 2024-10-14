import * as Yup from 'yup';

import * as CONSTANTS from '@/constant/constant';

export const validationSchema = Yup.object({
  [CONSTANTS.PRODUCT]: Yup.number().required('Please select a product'),
  [CONSTANTS.NAME]: Yup.string().required('Name is required'),
  [CONSTANTS.COMPANY]: Yup.string().required('Company Name is required'),
  [CONSTANTS.WORK_EMAIL]: Yup.string()
    .required('Please enter a valid email address')
    .email('Please enter a valid email address'),
  [CONSTANTS.EMAIL]: Yup.string()
    .required('Please enter a valid email address')
    .email('Please enter a valid email address'),
});

export const initialValues: {
  [CONSTANTS.PRODUCT]: string;
  [CONSTANTS.NAME]: string;
  [CONSTANTS.COMPANY]: string;
  [CONSTANTS.WORK_EMAIL]: string;
  [CONSTANTS.EMAIL]: string;
} = {
  [CONSTANTS.PRODUCT]: '',
  [CONSTANTS.WORK_EMAIL]: '',
  [CONSTANTS.EMAIL]: '',
  [CONSTANTS.NAME]: '',
  [CONSTANTS.COMPANY]: '',
};
