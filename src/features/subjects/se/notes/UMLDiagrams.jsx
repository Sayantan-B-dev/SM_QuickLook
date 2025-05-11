import React, { useState } from "react";
import "../../../../CSS/SE.css";

function UMLDiagrams() {
    const [openUnits, setOpenUnits] = useState([]);
    const [openTopics, setOpenTopics] = useState({});
    const [openImage, setOpenImage] = useState(null);

    const openModal = (imgUrl) => {
        setOpenImage(imgUrl);
    };

    const closeModal = () => {
        setOpenImage(null);
    };
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
            title: "Behavior Diagrams",
            topics: [
                {
                    title: "Activity Diagram",
                    url: "https://www.geeksforgeeks.org/unified-modeling-language-uml-activity-diagrams/",
                    explanation: "An activity diagram represents the sequence of activities or actions within a system during a particular state or operation.",
                    img: "https://media.geeksforgeeks.org/wp-content/uploads/20240112151723/Activity-Diagram-Notations.jpg",
                },
                {
                    title: "Interaction Diagram",
                    url: "https://www.geeksforgeeks.org/interaction-overview-diagrams-unified-modeling-language-uml/",
                    explanation: "An interaction diagram shows the interactions between various elements in the system. It can represent the flow of messages between objects.",
                    img: "https://media.geeksforgeeks.org/wp-content/uploads/20240303123245/Initial-Node-.webp",
                },
                {
                    title: "State Machine Diagram",
                    url: "https://www.geeksforgeeks.org/unified-modeling-language-uml-state-diagrams/",
                    explanation: "A state machine diagram depicts the states of an object and the transitions between those states. It is useful for modeling state-based systems.",
                    img: "https://media.geeksforgeeks.org/wp-content/uploads/20240113170059/A-State-Machine-Diagram-for-user-verification.jpg",
                },
                {
                    title: "Use Case Diagram",
                    url: "Use Case Diagram",
                    explanation: "A use case diagram provides a high-level view of system functionality and the actors that interact with it.",
                    img: "https://media.geeksforgeeks.org/wp-content/uploads/20240129102203/Use-Case-Diagram-Notations.webp",
                },
            ],
        },
        {
            title: "Structure Diagrams",
            topics: [
                {
                    title: "Class Diagram",
                    url: "https://media.geeksforgeeks.org/wp-content/uploads/20240308165524/Class-Diagram-example.webp",
                    explanation: "A class diagram illustrates the structure of a system by representing its classes, their attributes, methods, and relationships.",
                    img: "https://media.geeksforgeeks.org/wp-content/uploads/20240308165524/Class-Diagram-example.webp",
                },
                {
                    title: "Deployment Diagram",
                    url: "https://www.geeksforgeeks.org/deployment-diagram-unified-modeling-languageuml/",
                    explanation: "A deployment diagram shows the hardware and software architecture of a system, mapping the physical deployment of components.",
                    img: "https://media.geeksforgeeks.org/wp-content/uploads/20240304155202/Component-.webp",
                },
                {
                    title: "Component Diagram",
                    url: "https://www.geeksforgeeks.org/component-based-diagram/",
                    explanation: "A component diagram defines the structure of a system by modeling its components and their interactions.",
                    img: "https://media.geeksforgeeks.org/wp-content/uploads/20241104151401903734/component-based-diagram-example.webp",
                },
                {
                    title: "Object Diagram",
                    url: "https://www.geeksforgeeks.org/unified-modeling-language-uml-object-diagrams/",
                    explanation: "An object diagram shows a snapshot of the system at a particular point in time, depicting the objects and their relationships.",
                    img: "https://media.geeksforgeeks.org/wp-content/uploads/20240130113507/Object-Diagram-Notations-222.jpg",
                },
            ],
        },
    ];


    return (
        <div className="se-wrapper">
            <div className="se-card">
                <div className="se-title">UML Diagrams</div>
                <div className="se-section">
                    <h2 className="se-subtitle">UML (Unified Modeling Language)</h2>
                    <div className="se-grid">
                        <div className="se-grid-item structured">
                            <h3>Overview</h3>
                            <p>
                                UML is a standardized modeling language used to visualize the design of a system. It consists of various types of diagrams that describe different aspects of a system, from its behavior to its structure.
                            </p>
                            <h4>Types of UML Diagrams:</h4>
                            <ul>
                                <li>Behavior Diagrams: Represent dynamic aspects of the system.</li>
                                <li>Structure Diagrams: Represent static aspects and relationships between objects and components.</li>
                            </ul>
                        </div>

                        <div className="se-grid-item unstructured">
                            <h3>Behavior Diagrams</h3>
                            <p>
                                Behavior diagrams focus on the interactions between components, how they behave over time, and the sequences of actions or events.
                            </p>
                            <ul>
                                <li>Active Diagram</li>
                                <li>Interaction Diagram</li>
                                <li>State Machine Diagram</li>
                                <li>Use Case Diagram</li>
                            </ul>
                        </div>

                        <div className="se-grid-item structured">
                            <h3>Structure Diagrams</h3>
                            <p>
                                Structure diagrams describe the static structure of the system, detailing its components, classes, and relationships.
                            </p>
                            <ul>
                                <li>Class Diagram</li>
                                <li>Deployment Diagram</li>
                                <li>Component Diagram</li>
                                <li>Object Diagram</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="se-section">

                    <h4 className="se-title">Class Diagram vs Object Diagram (Table)</h4>
                    <table className="se-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Class Diagram</th>
                                <th>Object Diagram</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Purpose</td>
                                <td>Defines the structure of a system's classes.</td>
                                <td>Shows the objects that are instances of the classes.</td>
                            </tr>
                            <tr>
                                <td>Representation</td>
                                <td>Represents classes, attributes, and relationships.</td>
                                <td>Represents objects, their states, and relationships.</td>
                            </tr>
                            <tr>
                                <td>Time Context</td>
                                <td>Represents a system's static structure over time.</td>
                                <td>Represents a snapshot at a particular time.</td>
                            </tr>
                            <tr>
                                <td>Scope</td>
                                <td>More general, shows design-level information.</td>
                                <td>More specific, shows runtime details.</td>
                            </tr>
                            <tr>
                                <td>Relationship Representation</td>
                                <td>Uses associations like inheritance, composition, and aggregation.</td>
                                <td>Shows instances of classes interacting with each other.</td>
                            </tr>
                            <tr>
                                <td>Change Representation</td>
                                <td>Static – doesn't change over time.</td>
                                <td>Dynamic – reflects actual object states and connections.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {units.map((unit, uIndex) => (
                    <div key={uIndex} className="se-section cursor-pointer">
                        <h2 className="se-subtitle" onClick={() => toggleUnit(uIndex)}>
                            👇{unit.title}
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
                                                <div className="eachCardItem">
                                                    <p>{topic.explanation}</p>
                                                    <img
                                                        className="tinyImg2"
                                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsJFCUAt1RL4xGDklC-BnA0ChfuP05ALvHw&s"
                                                        alt="thumbnail" onClick={() => openModal(topic.img)} />
                                                </div>
                                            )}
                                            <a className="infoBtn" href={topic.url} target="_blank" rel="noopener noreferrer">
                                                Know more
                                            </a>

                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}
                {openImage && (
                    <div className="image-modal" onClick={closeModal}>
                        <div className="modal-content" onClick={closeModal}>
                            <span className="close" onClick={closeModal}>
                                &times;
                            </span>
                            <img className="modal-image" src={openImage} alt="Full view" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UMLDiagrams;
