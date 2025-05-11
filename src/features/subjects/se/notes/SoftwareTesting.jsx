import React, { useState } from "react";
import "../../../../CSS/SE.css";

function SoftwareTesting() {
  const [openUnits, setOpenUnits] = useState([]);
  const [openTopics, setOpenTopics] = useState({});

  const toggleUnit = (index) => {
    setOpenUnits((prevOpenUnits) => {
      const updatedOpenUnits = [...prevOpenUnits];
      updatedOpenUnits[index] = !updatedOpenUnits[index];
      return updatedOpenUnits;
    });
  };

  const toggleTopic = (topicKey) => {
    setOpenTopics((prevOpenTopics) => ({
      ...prevOpenTopics,
      [topicKey]: !prevOpenTopics[topicKey],
    }));
  };

  const units = [
    {
      title: "Unit Testing",
      topics: [
        {
          title: "Definition",
          explanation: "Unit testing involves testing individual units or components of a system in isolation to ensure they perform as expected.",
        },
      ],
    },
    {
      title: "Integration Testing",
      topics: [
        {
          title: "Bang-Bang",
          explanation: "Bang-Bang integration testing involves testing individual components of the system separately and then testing the integration of the whole system in one go.",
        },
        {
          title: "Top-Down",
          explanation: "Top-Down integration testing begins testing from the top level of the system, working down towards the lower levels.",
        },
        {
          title: "Bottom-Up",
          explanation: "Bottom-Up integration testing starts from the lower level of the system and progresses upwards to test all levels of the system.",
        },
        {
          title: "Mixed",
          explanation: "Mixed integration testing combines both top-down and bottom-up strategies to ensure comprehensive testing of the system.",
        },
      ],
    },
    {
      title: "System Testing",
      topics: [
        {
          title: "Alpha Testing",
          explanation: "Alpha testing is conducted by the internal development team before releasing the product to a selected group of users.",
        },
        {
          title: "Beta Testing",
          explanation: "Beta testing is conducted by external users who are not part of the development team to identify potential issues and gather feedback.",
        },
        {
          title: "Acceptance Testing",
          explanation: "Acceptance testing verifies that the system meets the acceptance criteria and is ready for release to customers.",
        },
        {
          title: "Performance Testing",
          explanation: "Performance testing assesses how well the system performs under various conditions, such as load, stress, and volume testing.",
        },
      ],
    },
    {
      title: "Regression Testing",
      topics: [
        {
          title: "Definition",
          explanation: "Regression testing ensures that changes or updates to the system do not introduce new defects or affect existing functionality.",
        },
      ],
    },
  ];

  return (
    <div className="se-card">
      <div className="se-title">Software Testing</div>
      
      {units.map((unit, uIndex) => (
        <div key={uIndex} className="se-section cursor-pointer">
          <h2 className="se-subtitle" onClick={() => toggleUnit(uIndex)}>
            {unit.title}
          </h2>
          
          {openUnits[uIndex] && (
            <div className="se-grid">
              {unit.topics.map((topic, tIndex) => {
                const topicKey = `${uIndex}-${tIndex}`;
                return (
                  <div className="se-grid-item structured" key={topicKey}>
                    <h3 onClick={() => toggleTopic(topicKey)}>
                      ➤ {topic.title}
                    </h3>
                    {openTopics[topicKey] && (
                      <div>
                        <p>{topic.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SoftwareTesting;
