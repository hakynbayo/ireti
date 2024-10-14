import { motion } from 'framer-motion';
import Link from 'next/link';
import { PiX } from 'react-icons/pi';
import Modal from 'react-modal';

import Logo from '@/components/Logo';

import { ModalProps } from './type';

const GenModal: React.FC<ModalProps> = ({
  handleCloseModal,
  isOpen,
  children,
  hideCloseIcon,
  className,
  shouldCloseOnOverlayClick,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      shouldCloseOnEsc
      style={{
        overlay: {
          backgroundColor: '#00000020',
          zIndex: 100,

          overflow: 'auto',
        },
        content: {
          outline: 'none',
        },
      }}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick ?? true}
      shouldReturnFocusAfterClose={true}
      ariaHideApp={false}
      className={`ml-auto  h-max flex-shrink-0 bg-transparent  drop-shadow-2xl md:h-max lg:w-[485px] ${className}`}
    >
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: '100vw' }}
        exit={{ x: '100vw' }}
        transition={{
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
        className='ml-auto  h-screen overflow-y-auto bg-white px-10 py-10'
      >
        {!hideCloseIcon && (
          <div className='flex w-full flex-row justify-between items-center'>
            <div className='relative h-[34px] w-[220px]'>
              <Link
                href='/'
                className='block w-max text-2xl py-2'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Logo className='' variant='white' />
              </Link>
            </div>
            <button onClick={handleCloseModal}>
              <PiX className='text-2xl text-gray-800' />
            </button>
          </div>
        )}

        {children}
      </motion.div>
    </Modal>
  );
};

export default GenModal;
