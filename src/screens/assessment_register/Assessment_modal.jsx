import React, { useEffect } from "react";
import logo from "../../assets/images/SwedenRelocators.png";
import Modal from "../../components/Modal";
import Button from "../../components/Button";

const Assessment_modal = ({
  isModalOpen,
  setIsModalOpen,
  closeModal,
  data,
  errors = {},
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hasErrors = errors && Object.keys(errors).length > 0;

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        className="md:tw-w-[60%] tw-w-[100%] tw-rounded-md tw-border tw-border-gray"
        onClose={closeModal}
      >
        <div>
          {hasErrors ? (
            // Show Errors
            <div className="tw-bg-red-100 tw-py-2 tw-px-4 tw-rounded-md tw-mb-4">
              <h4 className="tw-text-red-600 tw-font-semibold tw-mb-2">Errors</h4>
              <ul className="tw-list-disc tw-list-inside tw-text-red-500">
                {Object.entries(errors).map(([field, message], index) => (
                  <li key={index}>
                    <strong>{field.replace(/_/g, " ")}:</strong> {message}
                  </li>
                ))}
              </ul>
              <div className="tw-flex tw-justify-center tw-pt-4">
                <Button
                  className={"btn-warning"}
                  label="Close"
                  onClick={() => setIsModalOpen(false)}
                />
              </div>
            </div>
          ) : (
            // Show Data Result
            <div className="md:tw-p-4 tw-p-3 tw-rounded-md">
              <div className="tw-flex md:tw-flex-row tw-flex-col tw-justify-between">
                <img src={logo} alt="Logo" className="tw-w-44" />
                <div>
                  <h6 className="tw-font-light">ONLINE ASSESSMENT RESULT</h6>
                  <h6 className="tw-font-bold tw-text-blue">
                    FAMILY REUNIFICATION ASSESSMENT
                  </h6>
                </div>
              </div>

              <div className="tw-bg-[#d0e8d6] tw-my-4 tw-border tw-py-3 tw-px-6 tw-rounded-md tw-flex md:tw-flex-row tw-flex-col tw-items-center tw-justify-between">
                <div>
                  {data.result === "Eligible" ? (
                    <h5 className="tw-m-0 tw-text-[green]">
                      You are {data.result}
                    </h5>
                  ) : (
                    <h5 className="tw-m-0 tw-text-[red]">
                      You are {data.result}
                    </h5>
                  )}
                  <p className="tw-m-0 tw-text-blue">
                    Assessment No: {data.assessment_no}
                  </p>
                </div>

                <div>
                  <h6 className="tw-font-normal tw-text-center">
                    AS PER YOUR PROVIDED INFORMATION'S <br /> YOU ARE{" "}
                    {data.result} TO APPLY
                  </h6>
                </div>
              </div>

              <p className="tw-m-0 tw-leading-3 tw-text-[green] tw-text-lg tw-font-semibold tw-text-center">
                A positive assessment does not guarantee eligibility, but it does{" "}
                <br />
                satisfy the basic criteria required by the relevant Departments.
              </p>

              <div className="tw-flex tw-justify-center tw-pt-4">
                <Button className={"btn-warning"} label="Download/View Report" />
                <Button className={"btn-warning"} label="Book an Appointment" />
                <Button
                  className={"btn-warning"}
                  label="Close"
                  onClick={() => setIsModalOpen(false)}
                />
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Assessment_modal;
