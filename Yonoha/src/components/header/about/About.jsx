import { useState } from "react";
import FAQ from "./FAQ";
import faqData from "../../../utils/faqData";
import { useSelector } from "react-redux";

const About = () => {
  const [showItems, setShowItems] = useState(0);

  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`About-container ${isDarkMode ? "text-white" : "text-black"}`}
    >
      <h1>More About this project</h1>
      <div className="acordian">
        {faqData.map((data, index) => (
          <FAQ
            key={data.id}
            showItems={index === showItems ? true : false}
            setShowItems={() => {
              if (index === showItems) {
                setShowItems(null);
              } else {
                setShowItems(index);
              }
            }}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
