import React from "react";

const Modal = ({ isOpen, errors, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="tw-fixed tw-inset-0 tw-z-50 tw-bg-black/50 tw-flex tw-items-center tw-justify-center">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-5 tw-w-11/12 tw-max-w-md">
        <div className="tw-flex tw-justify-between tw-items-center">
          <h2 className="tw-text-lg tw-font-bold">Validation Errors</h2>
          <button
            onClick={onClose}
            className="tw-text-gray-500 tw-hover:text-red-500 tw-font-bold tw-text-xl"
          >
            &times;
          </button>
        </div>
        <div className="tw-mt-4">
          {errors && Object.keys(errors).length > 0 ? (
            <ul className="tw-list-disc tw-list-inside tw-text-red-500">
              {Object.entries(errors).map(([field, message], index) => (
                <li key={index} className="tw-mb-2">
                  {message}
                </li>
              ))}
            </ul>
          ) : (
            <p>No errors to display.</p>
          )}
        </div>
        <div className="tw-flex tw-justify-end tw-mt-4">
          <button
            onClick={onClose}
            className="tw-bg-blue-600 tw-text-white tw-px-4 tw-py-2 tw-rounded-lg tw-shadow-md tw-hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
