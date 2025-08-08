import React from "react";

const Modal = ({ isOpen, onClose, children, className, setIsModalOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="tw-fixed   tw-z-[9999] tw-inset-0 tw-overflow-y-auto">
          <div className="tw-flex tw-items-end tw-justify-center tw-min-h-screen tw-pt-4 tw-px-4 tw-pb-20 tw-text-center sm:tw-block sm:tw-p-0">
            <div
              className="tw-fixed tw-inset-0 tw-transition-opacity"
              aria-hidden="true"
            >
              <div onClick={onClose} className="tw-absolute tw-inset-0  tw-bg-[rgba(0,0,0,0.1)] tw-opacity-75"></div>
            </div>

            <span
              className="tw-hidden sm:tw-inline-block sm:tw-align-middle sm:tw-h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className={`tw-inline-block tw-align-bottom tw-bg-white  tw-text-left tw-overflow-hidden tw-shadow-xl tw-transform tw-transition-all sm:tw-my-8 sm:tw-align-middle ${className} `}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;