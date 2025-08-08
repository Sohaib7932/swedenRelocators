import React, { useState } from "react";

const Tabs = ({ tabs, defaultTab, className }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  console.log(tabs, "tabks");

  return (
    <div>
      <div className=" tw-flex  md:tw-flex-row tw-flex-col tw-gap-6 tw-py-5 tw-justify-center  tw-rounded-2xl tw-shadow tw-border-white tw-border-opacity-20 tw-backdrop-blur-md tw-scroll-container  tw-productOverflow  tw-overflow-x-auto tw-whitespace-nowrap tw-bg-[#f5faff]">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            className={`tw-px-6 tw-py-2 tw-shadow tw-text-md ${className} ${
              activeTab === tab.title
                ? "    tw-bg-blue tw-text-white   tw-rounded-lg  "
                : "     tw-text-gray   tw-bg-white tw-rounded-full border  "
            }`}
            onClick={() => setActiveTab(tab.title)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.title}
            className={activeTab === tab.title ? "" : "tw-hidden"}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
