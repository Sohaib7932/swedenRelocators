import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/SwedenRelocators.png';
import Modal from '../../components/Modal';
import { Link } from 'react-router-dom';

const ViewTermsConditions = ({ isModalOpen, setIsModalOpen, closeModal, setUsers }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Modal isOpen={isModalOpen} className={'tw-w-[60%] tw-rounded-md border tw-border-gray'} onClose={closeModal}>
        {/* Modal Content */}
        <div className="">
          <div className=" p-4 tw-rounded-md">
            <div className=" tw-flex  tw-items-center tw-justify-between ">
              <img src={logo} alt="" className=" tw-w-44" />

              <div>
                {/* <h6 className=" tw-font-light">Book your Appointment</h6> */}
                <h6 className="  tw-font-bold tw-text-blue">Appointment Information</h6>
              </div>
            </div>

            <h6 className=" tw-text-gray  tw-text-sm  tw-mt-2 tw-font-semibold tw-pt-4">How the Appointment </h6>
            <h6 className=" tw-text-gray  tw-text-sm  ">Process Works: </h6>
            <h6 className=" tw-text-gray  tw-font-normal  tw-text-[13px]  ">
              The first appointment is free for students and EU Citizens who are not yet relocated to Sweden. The one-hour appointment session consists of three phases: Background Information, Assessment of Issues/Problems, and Possible Solutions.{' '}
            </h6>

            <ul className=" tw-p-0  tw-pt-2">
              <li className="">
                <p className=" tw-text-sm  tw-text-gray">1-Appointment Confirmation:</p>
                <h6 className=" tw-text-gray  tw-font-normal  tw-text-[13px]  ">Your appointment will be confirmed only after you receive a confirmation email along with an invoice.</h6>
              </li>
              <li className="">
                <p className=" tw-text-sm  tw-text-gray">2-Free appointments cannot be rescheduled.</p>
                <h6 className=" tw-text-gray  tw-font-normal  tw-text-[13px]  ">Paid appointments can be rescheduled if necessary.</h6>
              </li>

              <li className="">
                <p className=" tw-text-sm  tw-text-gray">3-The appointment cost could be adjusted if you sign up for our services within 30 days after the appointment.</p>
              </li>

              <li className="">
                <p className=" tw-text-sm  tw-text-gray">4-In some cases we will provide a promo code to upload documents, view service charges, and book a free appointment.</p>
              </li>
              <li className="">
                <p className=" tw-text-sm  tw-text-gray">5-It is important to include basic information in the description box while booking an appointment.</p>
              </li>
              <li className="">
                <p className=" tw-text-sm  tw-text-gray">
                  6-For any technical issues during the booking process, please contact customer support via message section or call <Link>0046723276276</Link> during the working hours.
                </p>
              </li>
            </ul>

            <div className="  tw-flex tw-justify-end">
              <div></div>
              <div className=" tw-flex  tw-items-center tw-gap-2">
                <button onClick={() => setIsModalOpen(false)} className=" tw-bg-[#1F2437]  tw-rounded-sm  tw-text-xs px-2 tw-py-1.5 tw-text-white">
                  {' '}
                  <i class="fa fa-times-circle  tw-m-0  tw-mt-1" aria-hidden="true"></i> close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ViewTermsConditions;
