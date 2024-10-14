'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter as X } from 'react-icons/fa6';
import { scroller } from 'react-scroll';
import IretiLogo from '../../../public/images/IretiLogo.png';
import { motion } from 'framer-motion';
import { Input } from '@/components/input';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import Button from '@/components/buttons/Button';


const Footer = () => {
    // const scrollToDemo = () => {
    //   scroller.scrollTo('Demo', {
    //     duration: 500,
    //     delay: 0,
    //     smooth: 'easeInOut',
    //   });
    // };
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
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <section className='h-full max-w-[1500px] mx-auto bg-white md:hidden flex flex-col items-center justify-between'>

                <div className='w-full bg-white py-16 md:py-20 px-10 rounded-3xl flex flex-col gap-4 items-center'>
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

                <div className='w-full px-8 flex justify-between'>
                    <div>
                        <Link href='mailto:info@iretifoundation.org' className='text-xs hover:underline text-black flex flex-col items-center gap-2'>
                            <p className='text-marquee-text'>Send us an email</p>
                            <p>info@iretifoundation.org</p>
                        </Link>
                    </div>
                    <div>
                        <Link href='#' className='text-xs hover:underline text-black flex flex-col items-center gap-2'>
                            <p className='text-marquee-text'>Contact Us</p>
                            <p>08158986965</p>
                            <p>08169897458</p>
                        </Link>
                    </div>
                </div>

                <div className='w-full'>
                    <Image
                        src={IretiLogo}
                        alt='Workers'
                        width={664}
                        height={161}
                        placeholder='blur' />
                </div>
            </section>

            <section className='h-full max-w-[1500px] mx-auto bg-white md:hidden flex flex-col justify-between px-4'>
                <div className='flex justify-between items-center gap-4 px-2 border-t border-black py-4'>
                    <div>
                        <p className='text-sm text-center'>
                            © {currentYear} Ireti Foundation.
                        </p>
                    </div>

                    {/* Right Section: Social Media Icons */}
                    <div className='flex gap-4'>
                        <Link href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                            <FaFacebook size={20} />
                        </Link>
                        <Link href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram size={20} />
                        </Link>
                        <Link href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                            <X size={20} />
                        </Link>
                        <Link href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin size={20} />
                        </Link>
                    </div>

                </div>

                {/* Footer Note */}
            </section>
        </div>
    );
};

export default Footer;


