import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Do we get breakfast and dinner ?",
      answer:
        "Yes, we provide both breakfast and dinner. Our experienced chefs will provide you with the most amazing cousine.",
    },
    {
      question: "Do you have jacuzzi ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro libero perspiciatis maxime atque quasi et, totam veritatis quam animi!",
    },
    {
      question: "Does your accomodation has any benefits ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro libero perspiciatis maxime atque quasi et, totam veritatis quam animi!",
    },
    {
      question: "Will you provide country yard tour ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro libero perspiciatis maxime atque quasi et, totam veritatis quam animi!",
    },
  ];

  return (
    <div className="max-w-md mx-auto">
      {questions.map((item, index) => (
        <div key={index} className="border rounded-md mb-4">
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-lg font-medium">{item.question}</h3>
            <svg
              className={`w-6 h-6 transition-transform ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={activeIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          </div>
          {activeIndex === index && (
            <div className="p-4 border-t">
              <p className="text-gray-700">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
