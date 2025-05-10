import React, { useState } from "react";
import "../../../../CSS/SE.css";
import { title } from "framer-motion/client";

function DiplomaSE() {
  const [openUnits, setOpenUnits] = useState({});
  const [openTopics, setOpenTopics] = useState({});
  const [openImage, setOpenImage] = useState(null);

  const openModal = (imgUrl) => {
    setOpenImage(imgUrl);
  };

  const closeModal = () => {
    setOpenImage(null);
  };
  function toggleUnit(index) {
    setOpenUnits((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  function toggleTopic(index) {
    setOpenTopics((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  const units = [
    {
      title: "UNIT 1 : Introduction to Software Engineering",
      topics: [
        {
          title: "Software intro",
          links: [
            {
              title: "The evolving Role of software",
              url: "",
              img: "",
            },
            {
              title: "Changing nature of software",
              url: "",
              img: "",
            },
          ],
        },
        {
          title: "Software Engineering",
          links: [
            {
              title: "A layered Technology approach",
              url: "",
              img: "",
            },
            {
              title: "A process framework",
              url: "",
              img: "",
            },
            {
              title: "Software project tracking & control",
              url: "",
              img: "",
            },
            {
              title:
                "The Capability Maturity Model Integration(CMMI) technique",
              url: "",
              img: "",
            },
          ],
        },
        {
          title: "Process",
          links: [
            {
              title: "Process patterns",
              url: "",
              img: "",
            },
            {
              title: "Process Assessment",
              url: "",
              img: "",
            },
            {
              title: "Personal & Team Process models",
              url: "",
              img: "",
            },
            {
              title: "Process Technology Theories",
              url: "",
              img: "",
            },
          ],
        },
        {
          title: "Process Models",
          links: [
            {
              title: "Waterfall",
              url: "",
              img: "",
            },
            {
              title: "Incremental",
              url: "",
              img: "",
            },
            {
              title: "RAD",
              url: "",
              img: "",
            },
            {
              title: "Prototype",
              url: "",
              img: "",
            },
            {
              title: "Spiral",
              url: "",
              img: "",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 2 : Software Development Activities",
      topics: [
        {
          title: "Software Engineering core",
          links: [
            {
              title: "Software Engineering core principles",
              url: "",
              img: "",
            },
            {
              title: "Communication",
              url: "",
              img: "",
            },
            {
              title: "Planning",
              url: "",
              img: "",
            },
            {
              title: "Modelling",
              url: "",
              img: "",
            },
            {
              title: "Construction & Deployment principles",
              url: "",
              img: "",
            },
          ],
        },
        {
          title: "Requirements Engineering",
          links: [
            {
              title: "Requirements Engineering Tasks",
              url: "",
              img: "",
            },
            {
              title: "Initiating the requirement process",
              url: "",
              img: "",
            },
          ],
        },
        {
          title: "Analysis approaches",
          links: [
            {
              title: "Analysis approaches of software",
              url: "",
              img: "",
            },
            {
              title:
                "Preparation of Analysis model using Data Modelling Concepts",
              url: "",
              img: "",
            },
            {
              title: "Object oriented Analysis",
              url: "",
              img: "",
            },
            {
              title: "Flow oriented model",
              url: "",
              img: "",
            },
            {
              title: "Class-Based model",
              url: "",
              img: "",
            },
            {
              title: "Behavioural Model",
              url: "",
              img: "",
            },
          ],
        },
        {
          title: "Design approaches",
          links: [
            {
              title: "Design approaches of software",
              url: "",
              img: "",
            },
            {
              title: "preparation of design model using Design concepts",
              url: "",
              img: "",
            },
            {
              title: "Design model",
              url: "",
              img: "",
            },
            {
              title: "Pattern based design",
              url: "",
              img: "",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 3 : Software Testing Basics",
      topics: [
        {
          title: "Software Testing Fundamentals",
          links: [
            {
              title: "Introduction to Software Testing",
              url: "",
              img: "",
            },
            {
              title: "Software Testing Tutorial - Guru99",
              url: "",
              img: "",
            },
            {
              title: "Types of Software Testing",
              url: "",
              img: "",
            },
          ],
        },
        {
          title: "A Strategic approach to software testing",
          links: [
            {
              title: "Test Strategy vs Test Plan",
              url: "",
              img: "",
            },
            {
              title: "Levels of Software Testing",
              url: "",
              img: "",
            },
            {
              title: "Test Process and Life Cycle",
              url: "",
              img: "",
            },
          ],
        },
        {
          title: "Test Strategies",
          links: [
            {
              title: "Test Strategies for conventional software",
              url: "",
              img: "",
            },
            {
              title: "Unit Testing",
              url: "",
              img: "",
            },
            {
              title: "Integration Testing",
              url: "",
              img: "",
            },
            {
              title: "Regression testing",
              url: "",
              img: "",
            },
            {
              title: "Smoke testing",
              url: "",
              img: "",
            },
            {
              title: "Validation testing using Alpha & beta testing",
              url: "",
              img: "",
            },
            {
              title: "System testing using recovery",
              url: "",
              img: "",
            },
            {
              title: "Security",
              url: "",
              img: "",
            },
            {
              title: "Stress & performance testing",
              url: "",
              img: "",
            },
            {
              title: "Black Box & White Box Testing",
              url: "",
              img: "",
            },
          ],
        },
        {
          title: "Debugging process strategies",
          links: [
            {
              title: "Understanding Debugging",
              url: "",
              img: "",
            },
            {
              title: "Common Debugging Techniques",
              url: "",
              img: "",
            },
            {
              title: "Using Debugging Tools Effectively",
              url: "",
              img: "",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 4 : Project Management",
      topics: [
        {
          title: "The management spectrum",
          links: [
            {
              title: "The people",
              url: "",
              img: "",
            },
            {
              title: "The product",
              url: "",
              img: "",
            },
            {
              title: "The process",
              url: "",
              img: "",
            },
            {
              title: "The project",
              url: "",
              img: "",
            },
          ],
        },
        {
          title: "Project scheduling",
          links: [
            {
              title: "Basic concepts",
              url: "",
              img: "",
            },
            {
              title: "Relationship between people & effort",
              url: "",
              img: "",
            },
            {
              title: "Effort distribution",
              url: "",
              img: "",
            },
            {
              title: "Defining a task for the software project",
              url: "",
              img: "",
            },
            {
              title: "Defining a task network & scheduling of project",
              url: "",
              img: "",
            },
          ],
        },
        {
          title: "Risk Management",
          links: [
            {
              title: "Reactive Vs Proactive risk strategies",
              url: "",
              img: "",
            },
            {
              title: "Software Risks",
              url: "",
              img: "",
            },
            {
              title: "Risk Identification",
              url: "",
              img: "",
            },
            {
              title: "Risk Projection",
              url: "",
              img: "",
            },
            {
              title: "Risk refinement",
              url: "",
              img: "",
            },
            {
              title: "Monitoring & management",
              url: "",
              img: "",
            },
          ],
        },
        {
          title: "Change Management",
          links: [
            {
              title: "SCM scenario",
              url: "",
              img: "",
            },
            {
              title: "SCM repository & process",
              url: "",
              img: "",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 5 : Software Quality",
      topics: [
        {
          title: "Software Quality Management& Estimation",
          links: [
            {
              title: "Basic Quality Concepts",
              url: "",
              img: "",
            },
            {
              title: "Software Quality Assurance",
              url: "",
              img: "",
            },
            {
              title: "Statistical Software Quality Assurance",
              url: "",
              img: "",
            },
            {
              title: "Six Sigma Strategy",
              url: "",
              img: "",
            },
            {
              title: "Software Reliability",
              url: "",
              img: "",
            },
            {
              title: "The ISO 9000 Quality Standards",
              url: "",
              img: "",
            },
            {
              title: "McCall's Quality Factors",
              url: "",
              img: "",
            },
            {
              title: "Observations on Estimation",
              url: "",
              img: "",
            },
            {
              title: "The Project Planning Process",
              url: "",
              img: "",
            },
            {
              title: "Software Scope & Feasibility",
              url: "",
              img: "",
            },
            {
              title: "Resources",
              url: "",
              img: "",
            },
            {
              title: "Decomposition Techniques",
              url: "",
              img: "",
            },
            {
              title: "COCOMO II Model & the Make/Buy Design",
              url: "",
              img: "",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="se-wrapper">
      <div className="se-card">
        <div className="se-title">Diploma CN</div>

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
                          {topic.links.map((link, i) => (
                            <div
                              className="smallItems rounded-2xl shadow-lg flex flex-row justify-center align-center"
                              key={i}
                              style={{ position: "relative" }}
                            >
                              <a
                                href={link.url}
                                className="se-imgLink2"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.title}🔗
                              </a>

                              <img
                                className="tinyImg"
                                src={link.img}
                                alt="thumbnail"
                                onClick={() => openModal(link.img)}
                              />
                            </div>
                          ))}
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

      {/* Modal to show the full image */}
      {openImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img className="modal-image" src={openImage} alt="Full view" />
          </div>
        </div>
      )}
    </div>
  );
}

export default DiplomaSE;
