'use client';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { object, string } from 'yup';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Button from '@/components/buttons/Button';
import { Input } from '@/components/input';

import IretiLogo from '../../../public/images/IretiLogo.png';


const Subscribe = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: object().shape({
      email: string()
        .required('Please provide an email address')
        .email('Please provide a valid email address'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      //
    },
  });

  function getFormikPropsInput(id: keyof typeof formik.values) {
    return {
      ...formik.getFieldProps(id),
      ...formik.getFieldMeta(id),
    };
  }

  return (
    <section className='h-full max-w-[1500px] mx-auto bg-white hidden md:flex items-center justify-between px-8'>

      <div className='w-1/2'>
        <Image
          src={IretiLogo}
          alt='Workers'
          width={664}
          height={161}
          placeholder='blur'
        />
      </div>

      <div className='w-1/2 bg-white py-16 md:py-20 px-4 lg:px-16 rounded-3xl flex flex-col gap-4 items-center'>
        <p className='text-lg font-medium'>Subscribe to our newsletter and stay informed about our latest projects and initiatives.</p>
        <motion.form
          onSubmit={formik.handleSubmit}
          className='w-full flex justify-center items-end'
        >
          <div className='w-full md:w-5/6'>
            <Input
              type='email'
              label=''
              id='email'
              placeholder='Enter Email address'
              inputMode='email'
              required
              className='py-3 md:py-4 bg-white border border-white border-b-black focus:border-b-black focus:outline-none'
              {...getFormikPropsInput('email')}
            />
          </div>


          <div className='max-w-max'>
            <Button
              type='submit'
              isLoading={formik.isSubmitting}
              className='w-full bg-marquee-text rounded-br-full rounded-tl-full rounded-tr-full rounded-bl-sm'
            >
              Subscribe
            </Button>
          </div>

        </motion.form>
        <p className='text-sm font-normal'>*By subscribing, you agree to receive updates and information from Ireti Foundation.</p>
      </div>
    </section>
  );
};

export default Subscribe;
