import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
}

const Modal = ({ isOpen, onClose, image, title, description }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white rounded-lg max-w-4xl w-full"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="p-6">
              <img
                src={image}
                alt={title}
                className="w-full h-[60vh] object-contain mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;