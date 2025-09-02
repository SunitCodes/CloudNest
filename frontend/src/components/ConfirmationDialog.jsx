import Modal from "./Modal"; 

const ConfirmationDialog = ({
  isOpen,
  onClose,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  confirmationButtonClass = "bg-red-600 hover:bg-red-700"
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      message={message}
      confirmText={confirmText}
      cancelText={cancelText}
      onConfirm={onConfirm}
      confirmationButtonClass={confirmationButtonClass}
      size="sm"
    >
      {/* Dialog message and buttons go here */}
    </Modal>
  );
};

export default ConfirmationDialog;