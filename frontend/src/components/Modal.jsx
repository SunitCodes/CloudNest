import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({
  isOpen,
  onClose,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  confirmationButtonClass = "bg-blue-600 hover:bg-blue-700",
  size = "md", // "sm", "md", "lg"
}) => {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Box */}
          <motion.div
            className={`bg-white rounded-2xl shadow-xl w-full ${sizeClasses[size]} p-6`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Title */}
            {title && (
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                {title}
              </h2>
            )}

            {/* Message */}
            {message && (
              <p className="text-sm text-gray-600 mb-6">{message}</p>
            )}

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={onClose}
              >
                {cancelText}
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-white ${confirmationButtonClass}`}
                onClick={() => {
                  onConfirm?.();
                  onClose?.();
                }}
              >
                {confirmText}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
