import React from 'react';

interface DonationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4 text-center">Make a Donation</h2>
                <p className="text-center mb-4">
                    <strong>THE IRETI FOUNDATION FOR THE UNDERSERVED AND UNDERPRIVILEGED</strong><br />
                    0126205224<br />
                    Wema Bank
                </p>
                <div className="text-center">
                    <button
                        onClick={onClose}
                        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DonationModal;
