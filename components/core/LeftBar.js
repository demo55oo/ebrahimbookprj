import React, { useState } from "react";

// material vertical tabs
import { Tab, Tabs } from "@material-ui/core";

// icons
import { FiEdit, FiFolder, FiTwitter, FiUploadCloud } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import { IoShapesOutline } from "react-icons/io5";

// material btn
import Btn from "../utils/Btn";

// areas
import { EditArea, ImageArea, UploadArea, SavedArea, ElementsArea } from "..";

const TabItem = ({ tab }) => {
  return (
    <div className="w-[85px] h-[60px] flex flex-col items-center justify-center text-[#111] dark:text-[#fafafa]">
      {tab.icon}
      <h3 className="text-xs font-medium lowercase">{tab.name}</h3>
    </div>
  );
};

const LeftBar = ({ data, setData, children, setChildren }) => {
  // current tab
  const [value, setValue] = useState("home");

  // handleChange of tabs
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // mapping of tabs
  const allTabs = [
    {
      name: "home",
      icon: <FiEdit className="text-xl mb-1" />,
    },
    {
      name: "elements",
      icon: <IoShapesOutline className="text-xl mb-1" />,
    },
    {
      name: "uploads",
      icon: <FiUploadCloud className="text-xl mb-1" />,
    },

    {
      name: "images",
      icon: <BiImageAdd className="text-2xl mb-[3px]" />,
    },
    {
      name: "saved",
      icon: <FiFolder className="text-xl mb-1" />,
    },
  ];

  const props = {
    data: data,
    setData: setData,
    children: children,
    setChildren: setChildren,
  };

  const twitterShareLink =
    "https://twitter.com/intent/tweet?text=Checkout%20slickr.vercel.app%20by%20@saviomartin7.%20The%20most%20powerful%20way%20to%20create%20awesome%20cover%20images%20for%20your%20@hashnode%20blog%20🔥";

  return (
    <div className="h-full absolute lg:relative xl:relative w-10/12 lg:w-[32.5%] xl:w-[32.5%] flex bg-[#F1F5FB] dark:bg-[#273250] border-r border-[#564BB330] white-light-shadow">
      <div className="bg-gradient h-full w-[10px] bg-gradient-to-b"></div>
      <div className="h-full bg-[#fff] border-r border-[#564BB330] dark:border-[#fafafa20] white-light-shadow py-3 flex flex-col items-center justify-between dark:bg-[#182341]">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          orientation="vertical"
          variant="scrollable"
        >
          {allTabs.map((tab, key) => (
            <Tab
              label={<TabItem tab={tab} />}
              value={tab.name}
              key={key}
              className="!p-0 !m-0 !min-w-0 !min-h-0"
            />
          ))}
        </Tabs>
        <div className="w-[85px] h-[60px] flex flex-col items-center justify-center">
          <Btn href={twitterShareLink}>
            <div className="w-[70px] h-[60px] bg-[#0F84B425] rounded-md flex flex-col items-center justify-center text-[#0F84B4]">
              <FiTwitter className="text-xl mb-1" />
              <h3 className="text-xs font-medium lowercase">Share</h3>
            </div>
          </Btn>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-start flex-col py-3 overflow-y-scroll">
        {value === "home" && <EditArea data={data} setData={setData} />}
        {value === "elements" && <ElementsArea {...props} />}
        {value === "images" && <ImageArea {...props} />}
        {value === "uploads" && <UploadArea {...props} />}
        {value === "saved" && <SavedArea {...props} />}
      </div>
    </div>
  );
};

export default LeftBar;
