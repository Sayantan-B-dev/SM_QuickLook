import React, { useState } from "react";
import "../../../../CSS/Dbms.css";
import { title } from "framer-motion/client";

function DiplomaDBMS() {
    const [openUnits, setOpenUnits] = useState({});
    const [openTopics, setOpenTopics] = useState({});
    function toggleUnit(index) {
        setOpenUnits((prev) => ({ ...prev, [index]: !prev[index] }));
    }

    function toggleTopic(index) {
        setOpenTopics((prev) => ({ ...prev, [index]: !prev[index] }));
    }

    const units = [
        {
            title: "UNIT 1 : Database System Concepts amd Architecture",
            topics: [
                {
                    title: "Introduction to DBMS",
                    links: [
                        {
                            title: "Basic Concepts of DBMS",
                            url: "https://www.geeksforgeeks.org/basic-database-concepts/"
                        },
                        {
                            title: "Advantages of DBMS over File System",
                            url: "https://www.geeksforgeeks.org/advantages-of-dbms-over-file-system/"
                        },
                        {
                            title: "DBMS Abstraction",
                            url: "https://www.geeksforgeeks.org/basic-database-concepts/#database-abstraction"
                        },
                        {
                            title: "Data Languages",
                            url: "https://www.geeksforgeeks.org/database-languages-in-dbms/"
                        },
                        {
                            title: "Database Independence",
                            url: "https://www.geeksforgeeks.org/what-is-data-independence-in-dbms/"
                        }
                    ]
                },
                {
                    title: "Database System Architecture",
                    links: [
                        {
                            title: "ANSII/SPARC Architecture",
                            url: "https://www.geeksforgeeks.org/the-three-level-ansi-sparc-architecture/"
                        }
                    ]
                },
                {
                    title: "Database Users",
                    links: [
                        {
                            title: "Roles and Responsibilities of DBA",
                            url: "https://www.weetechsolution.com/blog/roles-and-responsibilities-of-dba"
                        },
                        {
                            title: "Data dictionary",
                            url: "http://geeksforgeeks.org/what-is-data-dictionary/"
                        }
                    ]
                }
            ]
        },
        {
            title: "UNIT 2 : Data Modeling Technique",
            topics: [
                {
                    title: "Duta Models",
                    links: [
                        {
                            title: "Hierarchical Model",
                            url: "https://www.geeksforgeeks.org/hierarchical-model-in-dbms/"
                        },
                        {
                            title: "Network Model",
                            url: "https://www.geeksforgeeks.org/network-model-in-dbms/"
                        },
                        {
                            title: "E-R Model",
                            url: "https://www.geeksforgeeks.org/introduction-of-er-model/"
                        },
                        {
                            title: "Object Oriented Model",
                            url: "https://www.geeksforgeeks.org/basic-object-oriented-data-model/"
                        },
                        {
                            title: "Comparative study between different models",
                            url: "https://www.geeksforgeeks.org/difference-between-hierarchical-network-and-relational-data-model/"
                        }
                    ]
                },
                {
                    title: "The Enhanced Entity-Relationship (EER) model",
                    links: [
                        {
                            title: "Specialization",
                            url: "https://www.geeksforgeeks.org/generalization-specialization-and-aggregation-in-er-model/"
                        },
                        {
                            title: "Generalization",
                            url: "https://www.geeksforgeeks.org/generalization-specialization-and-aggregation-in-er-model/"
                        },
                        {
                            title: "Aggregation",
                            url: "https://www.geeksforgeeks.org/generalization-specialization-and-aggregation-in-er-model/"
                        },
                        {
                            title: "Categorization",
                            url: "https://www.oreilly.com/library/view/database-systems-concepts/9788177585674/9788177585674_ch07lev1sec4.html"
                        }
                    ]
                }
            ]
        }
        ,
        {
            title: "UNIT 3 : Relational Data Model in Depth",
            topics: [
                {
                    title: "Relational Model",
                    links: [
                        {
                            title: "Basic concepts",
                            url: "https://www.geeksforgeeks.org/relational-model-in-dbms/"
                        },
                        {
                            title: "attributes and domains",
                            url: "https://www.geeksforgeeks.org/introduction-of-relational-model-and-codd-rules-in-dbms/"
                        }
                    ]
                },
                {
                    title: "Keys Concept",
                    links: [
                        {
                            title: "Super",
                            url: "https://www.geeksforgeeks.org/types-of-keys-in-relational-model-candidate-super-primary-alternate-and-foreign/"
                        },
                        {
                            title: "Candidate",
                            url: "https://www.geeksforgeeks.org/types-of-keys-in-relational-model-candidate-super-primary-alternate-and-foreign/"
                        },
                        {
                            title: "Primary",
                            url: "https://www.geeksforgeeks.org/types-of-keys-in-relational-model-candidate-super-primary-alternate-and-foreign/"
                        },
                        {
                            title: "Foreign",
                            url: "https://www.geeksforgeeks.org/types-of-keys-in-relational-model-candidate-super-primary-alternate-and-foreign/"
                        },
                        {
                            title: "Alternate",
                            url: "https://www.geeksforgeeks.org/types-of-keys-in-relational-model-candidate-super-primary-alternate-and-foreign/"
                        }
                    ]
                },
                {
                    title: "Integrity constraints",
                    links: [
                        {
                            title: "Implicit and Explicit Constraints",
                            url: "https://www.geeksforgeeks.org/constraints-on-relational-database-model/"
                        },
                        {
                            title: "Domain Constraints",
                            url: "https://www.geeksforgeeks.org/constraints-on-relational-database-model/"
                        },
                        {
                            title: "Key Constraints",
                            url: "https://www.geeksforgeeks.org/constraints-on-relational-database-model/"
                        },
                        {
                            title: "Referential Integrity Constraints",
                            url: "https://www.geeksforgeeks.org/constraints-on-relational-database-model/"
                        },
                        {
                            title: "General Constraints",
                            url: "https://www.geeksforgeeks.org/constraints-on-relational-database-model/"
                        }
                    ]
                },
                {
                    title: "Security & Authorization",
                    links: [
                        {
                            title: "Secrecy",
                            url: "https://www.geeksforgeeks.org/control-methods-of-database-security/"
                        },
                        {
                            title: "Integrity",
                            url: "https://www.geeksforgeeks.org/dbms-integrity-constraints/"
                        },
                        {
                            title: "Availability",
                            url: "https://www.geeksforgeeks.org/control-methods-of-database-security/"
                        },
                        {
                            title: "Access Control",
                            url: "https://www.geeksforgeeks.org/control-methods-of-database-security/"
                        },
                        {
                            title: "Authorization",
                            url: "https://www.geeksforgeeks.org/control-methods-of-database-security/"
                        }
                    ]
                },
                {
                    title: "Relational Algebra",
                    links: [
                        {
                            title: "Basic Operations",
                            url: "https://www.geeksforgeeks.org/introduction-of-relational-algebra-in-dbms/#operators-in-relational-algebra"
                        },
                        {
                            title: "Set Operations",
                            url: "https://www.geeksforgeeks.org/introduction-of-relational-algebra-in-dbms/#operators-in-relational-algebra"
                        },
                        {
                            title: "Join Operations",
                            url: "https://www.geeksforgeeks.org/introduction-of-relational-algebra-in-dbms/#operators-in-relational-algebra"
                        },
                        {
                            title: "Division Operation",
                            url: "https://www.geeksforgeeks.org/introduction-of-relational-algebra-in-dbms/#operators-in-relational-algebra"
                        }
                    ]
                }
            ]
        }
        ,
        {
            title: "UNIT 4 : Structured Query Language",
            topics: [
                {
                    title: "Introduction to SQL queries",
                    links: [
                        {
                            title: "Creating",
                            url: "https://www.geeksforgeeks.org/sql-tutorial/"
                        },
                        {
                            title: "Inserting",
                            url: "https://www.geeksforgeeks.org/sql-tutorial/"
                        },
                        {
                            title: "Updating",
                            url: "https://www.geeksforgeeks.org/sql-tutorial/"
                        },
                        {
                            title: "Deleting",
                            url: "https://www.geeksforgeeks.org/sql-tutorial/"
                        },
                        {
                            title: "Retrieving",
                            url: "https://www.geeksforgeeks.org/sql-tutorial/"
                        }
                    ]
                },
                {
                    title: "Table creation applying constraints",
                    links: [
                        {
                            title: "Primary key",
                            url: "https://www.geeksforgeeks.org/sql-constraints/"
                        },
                        {
                            title: "Check constraints",
                            url: "https://www.geeksforgeeks.org/sql-constraints/"
                        },
                        {
                            title: "Unique",
                            url: "https://www.geeksforgeeks.org/sql-constraints/"
                        },
                        {
                            title: "Check",
                            url: "https://www.geeksforgeeks.org/sql-constraints/"
                        },
                        {
                            title: "Default",
                            url: "https://www.geeksforgeeks.org/sql-constraints/"
                        }
                    ]
                },
                {
                    title: "Set operations",
                    links: [
                        {
                            title: "Set operations & operators",
                            url: "https://www.geeksforgeeks.org/sqlalchemy-core-set-operations/"
                        },
                        {
                            title: "Aggregate functions",
                            url: "https://www.geeksforgeeks.org/aggregate-functions-in-sql/"
                        },
                        {
                            title: "String functions",
                            url: "https://www.geeksforgeeks.org/sql-string-functions/"
                        },
                        {
                            title: "Date, time functions",
                            url: "https://www.geeksforgeeks.org/sql-date-functions/"
                        }
                    ]
                },
                {
                    title: "More SQL queries",
                    links: [
                        {
                            title: "Null values",
                            url: "https://www.geeksforgeeks.org/sql-null-values/"
                        },
                        {
                            title: "Nested sub queries",
                            url: "https://www.geeksforgeeks.org/nested-queries-in-sql/"
                        },
                        {
                            title: "Complex queries",
                            url: "https://www.geeksforgeeks.org/sql-with-clause/"
                        },
                        {
                            title: "Join operations",
                            url: "https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/"
                        },
                        {
                            title: "Union, intersection, difference",
                            url: "https://www.datacamp.com/tutorial/set-operators-sql-introduction"
                        }
                    ]
                },
                {
                    title: "PL/SQL",
                    links: [
                        {
                            title: "Introduction to PL/SQL",
                            url: "https://www.geeksforgeeks.org/plsql-introduction/"
                        },
                        {
                            title: "PL/SQL Block Structure",
                            url: "https://www.geeksforgeeks.org/plsql-introduction/#structure-of-plsql-block"
                        },
                        {
                            title: "PL/SQL Data Types & variables",
                            url: "https://www.geeksforgeeks.org/plsql-introduction/#structure-of-plsql-block"
                        },
                        {
                            title: "SQL statements in PL/SQL",
                            url: "https://www.geeksforgeeks.org/plsql-introduction/"
                        },
                        {
                            title: "PL/SQL Control Structures",
                            url: "https://www.geeksforgeeks.org/decision-making-plsql-else-nested-elsif-else/"
                        },
                        {
                            title: "PL/SQL Cursors",
                            url: "https://www.geeksforgeeks.org/cursors-in-pl-sql/"
                        },
                        {
                            title: "PL/SQL Procedures and Functions",
                            url: "https://www.geeksforgeeks.org/sql-procedures/"
                        },
                        {
                            title: "PL/SQL Packages",
                            url: "https://www.geeksforgeeks.org/plsql-packages/"
                        },
                        {
                            title: "PL/SQL Triggers",
                            url: "https://www.geeksforgeeks.org/plsql-triggers/"
                        }
                    ]
                }
            ]
        }
        ,
        {
            title: "UNIT 5 : Functional Dependencies & Normalization",
            topics: [
                {
                    title: "Purpose",
                    links: [
                        {
                            title: "Purpose of Normalization",
                            url: "https://www.geeksforgeeks.org/what-is-data-normalization-and-why-is-it-important/"
                        },
                        {
                            title: "Functional Dependency",
                            url: "https://www.geeksforgeeks.org/types-of-functional-dependencies-in-dbms/"
                        },
                        {
                            title: "Types of Functional Dependency",
                            url: "https://www.geeksforgeeks.org/types-of-functional-dependencies-in-dbms/"
                        },
                        {
                            title: "Data redundancy and updating anomalies",
                            url: "https://www.geeksforgeeks.org/types-of-functional-dependencies-in-dbms/"
                        },
                        {
                            title: "Functional Decomposition",
                            url: "https://byjus.com/gate/decomposition-in-dbms/"
                        }
                    ]
                },
                {
                    title: "Process",
                    links: [
                        {
                            title: "1NF",
                            url: "https://www.geeksforgeeks.org/normal-forms-in-dbms/"
                        },
                        {
                            title: "2NF",
                            url: "https://www.geeksforgeeks.org/normal-forms-in-dbms/"
                        },
                        {
                            title: "3NF",
                            url: "https://www.geeksforgeeks.org/normal-forms-in-dbms/"
                        },
                        {
                            title: "BCNF",
                            url: "https://www.geeksforgeeks.org/normal-forms-in-dbms/"
                        },
                        {
                            title: "Multivalued dependencies",
                            url: "https://www.geeksforgeeks.org/normal-forms-in-dbms/"
                        },
                        {
                            title: "4NF",
                            url: "https://www.geeksforgeeks.org/normal-forms-in-dbms/"
                        },
                        {
                            title: "5NF",
                            url: "https://www.geeksforgeeks.org/normal-forms-in-dbms/"
                        }
                    ]
                }
            ]
        }
    ];

    return (
        <div className="dbms-wrapper">
            <div className="dbms-card">
                <div className="dbms-title">Diploma - Software Engineering</div>
                {units.map((unit, uIndex) => (
                    <div key={uIndex} className="dbms-section cursor-pointer">
                        <h2 className="dbms-subtitle" onClick={() => toggleUnit(uIndex)}>
                            {unit.title}
                        </h2>
                        {openUnits[uIndex] && (
                            <div className="dbms-grid">
                                {unit.topics.map((topic, tIndex) => {
                                    const topicKey = `${uIndex}-${tIndex}`;
                                    return (
                                        <div className="dbms-grid-item structured" key={topicKey}>
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
                                                                className="dbms-imgLink2"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                🔗{link.title}
                                                            </a>
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
        </div>
    );
}

export default DiplomaDBMS;
