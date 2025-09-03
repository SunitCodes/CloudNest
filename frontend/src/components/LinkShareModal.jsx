import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";

const LinkShareModal = ({ isOpen, onClose, link, title = "Share Link" }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    toast.success("Link copied to clipboard!");
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
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
            <p className="mb-4 text-sm">Share the link with others to give them access to the file</p>

            {/* Link Field */}
            <div className="flex items-center gap-2 mb-2">
              <input
                type="text"
                readOnly
                value={link}
                className="flex-1 px-3 py-2 border rounded-lg text-sm text-gray-700 bg-gray-50"
              />
              <button
                onClick={handleCopy}
                className="px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 flex items-center gap-2 cursor-pointer"
              >
                <Copy size={16} />
                Copy
              </button>
            </div>

            {/* Footer */}
            <div className="flex justify-end">
                <div className="flex items-center mr-18">
                    <p className="text-sm text-gray-600">Anyone with this link can access the file</p>
                </div>
              <button
                onClick={onClose}
                className="px-5.5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LinkShareModal;
