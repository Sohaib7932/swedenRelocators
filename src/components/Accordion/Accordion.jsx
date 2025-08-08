import { motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa6";
export default function Accordion(props) {
  return (
    <div
      className={` ${
        props.isOpen ? "  tw-bg-blue tw-text-white" : " tw-bg-[#F5FAFF]"
      } tw-mb-4`}
    >
      <button
        className="tw-w-full tw-p-4 tw-flex tw-gap-3 tw-text-left tw-justify-between  tw-transition tw-duration-300"
        onClick={props.toggleAccordion}
      >
        <h6 className=" tw-font-normal">{props.title}</h6>

        <p className=" tw-m-0">{props.isOpen ? <FaMinus /> : <FaPlus />}</p>
      </button>
      <div>
        <motion.div
          initial={false}
          animate={{ height: props.isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden  tw-bg-white  tw-shadow-lg"
        >
          {props.isOpen && (
            <div className="bg-white  p-2 tw-text-sm   tw-text-gray ">
              {props.data}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
