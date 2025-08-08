import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/SwedenRelocators.png';
import Modal from '../../components/Modal';
import Button from "../../components/Button";


const SubmitModel = ({ isModalOpen, setIsModalOpen, closeModal, setUsers, modelmessage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Modal isOpen={isModalOpen} className={'md:tw-w-[60%] tw-w-[100%] tw-rounded-md border tw-border-gray'} onClose={closeModal}>
        {/* Modal Content */}
        <div className="">
          <div className=" md:p-4 p-3 tw-rounded-md">
            <div className=" tw-flex md:tw-flex-row tw-flex-col tw-justify-between ">
              <img src={logo} alt="" className=" tw-w-44" />

              <div>
                <h6 className=" tw-font-light"> Online Assessments</h6>
                <h6 className="  tw-font-bold tw-text-blue">Made Easy</h6>
              </div>
            </div>

            <div className=" tw-bg-[#d0e8d6] tw-my-4 border tw-py-3 tw-px-6 tw-rounded-md tw-flex md:tw-flex-row tw-flex-col tw-items-center tw-justify-between ">
              <div>
                <h5 className=" tw-m-0 tw-text-[green]">{modelmessage}</h5>
              
              </div>
            </div>

         

            <div className="  tw-flex tw-justify-center tw-pt-4">
              <div></div>
              <div className=" tw-flex md:tw-flex-row tw-flex-col  tw-items-center tw-gap-2">

             
                <Button
                  className={"btn-warning "}
                  label="close"
                  onClick = {() => setIsModalOpen(false)}
                />

             
              
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SubmitModel;
