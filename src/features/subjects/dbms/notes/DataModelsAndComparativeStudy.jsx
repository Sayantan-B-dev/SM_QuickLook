import React from 'react';
import '../../../../CSS/Dbms.css';

function DataModelsAndComparativeStudy() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">

        <h1 className="dbms-title">Data Models and Comparative Study</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <p className="text-grey-400">
            A <strong>Data Model</strong> defines how data is connected, stored, and retrieved inside a database. Different models represent data differently depending on the needs of the application and complexity of the system.
          </p>
        </div>

        {/* Hierarchical Model */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">1. Hierarchical Model</h2>
          <p className="text-grey-400">
            The hierarchical model organizes data in a tree-like structure, where each record has a single parent, and each parent can have multiple children.
          </p>

          <p className="text-grey-400 mt-2">
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc text-grey-400 pl-5">
            <li>Data is represented by parent-child relationships (1:N relationship).</li>
            <li>Each child has only one parent (strict hierarchy).</li>
            <li>Navigation through data is done by traversing the tree structure.</li>
            <li>Fast retrieval for well-structured data.</li>
          </ul>

          <p className="text-grey-400 mt-4"><strong>Example:</strong> Organization Structure (CEO → Manager → Employee)</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`Company
 ├── HR Department
 │    ├── HR Manager
 │    └── HR Executive
 └── IT Department
      ├── IT Manager
      └── Developer`}
          </pre>

          <p className="text-grey-400 mt-4"><strong>Limitation:</strong> Complex to restructure and redundancy if child needs to be related to multiple parents.</p>
        </div>

        {/* Network Model */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">2. Network Model</h2>
          <p className="text-grey-400">
            The network model expands upon the hierarchical model by allowing a child to have multiple parents, forming a graph structure.
          </p>

          <p className="text-grey-400 mt-2">
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc text-grey-400 pl-5">
            <li>Many-to-many relationships between records.</li>
            <li>Data is represented using graph structures (nodes and edges).</li>
            <li>Flexible and more efficient navigation through complex relationships.</li>
          </ul>

          <p className="text-grey-400 mt-4"><strong>Example:</strong> University Database (Students enrolled in multiple Courses, Courses taught by multiple Professors)</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`Student
 ↔️ EnrolledIn ↔️ Course
 ↔️ TaughtBy ↔️ Professor`}
          </pre>

          <p className="text-grey-400 mt-4"><strong>Limitation:</strong> Complexity in handling pointers and relationships. Difficult for beginners to understand.</p>
        </div>

        {/* Object-Oriented Model */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">3. Object-Oriented Model</h2>
          <p className="text-grey-400">
            The object-oriented model integrates database concepts with object-oriented programming principles. Data is stored as objects, similar to OOP languages like Java, C++.
          </p>

          <p className="text-grey-400 mt-2">
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc text-grey-400 pl-5">
            <li>Data and operations (methods) are encapsulated together in objects.</li>
            <li>Supports inheritance, polymorphism, and complex data types (like multimedia, spatial data).</li>
            <li>Suitable for applications dealing with complex data like CAD/CAM, Multimedia databases.</li>
          </ul>

          <p className="text-grey-400 mt-4"><strong>Example:</strong> Library System (Book, Author as objects, where Book object has a reference to Author object)</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`class Book {
   String title;
   Author writtenBy;
}`}
          </pre>

          <p className="text-grey-400 mt-4"><strong>Limitation:</strong> Not widely adopted for simple applications due to overhead in object management and lack of standardized query languages.</p>
        </div>

        {/* E-R Model */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">4. Entity-Relationship (E-R) Model</h2>
          <p className="text-grey-400">
            The E-R model is a high-level conceptual data model used to visually describe data and its relationships using entities and relationships.
          </p>

          <p className="text-grey-400 mt-2">
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc text-grey-400 pl-5">
            <li>Data is modeled using Entities (things) and Relationships (associations).</li>
            <li>Helps in database design by converting real-world scenarios into a structured diagram.</li>
            <li>Entities have attributes (properties) and can be connected by various types of relationships (1:1, 1:N, M:N).</li>
          </ul>

          <p className="text-grey-400 mt-4"><strong>Example:</strong> Hospital Database (Patient entity related to Doctor entity through Consultation relationship)</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`[Patient] ---Consults---> [Doctor]`}
          </pre>

          <p className="text-grey-400 mt-4"><strong>Limitation:</strong> Needs to be converted into a relational model for actual implementation. Not directly usable by DBMS.</p>
        </div>

        {/* Comparative Study */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-title">Comparative Study of Different Data Models</h2>

          <table className="w-full text-grey-400 mt-4 table-fixed border-collapse border border-gray-500">
            <thead className="bg-gray-800">
              <tr>
                <th className="border border-gray-500 p-2">Feature</th>
                <th className="border border-gray-500 p-2">Hierarchical</th>
                <th className="border border-gray-500 p-2">Network</th>
                <th className="border border-gray-500 p-2">Object-Oriented</th>
                <th className="border border-gray-500 p-2">E-R Model</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 p-2">Structure</td>
                <td className="border border-gray-500 p-2">Tree</td>
                <td className="border border-gray-500 p-2">Graph</td>
                <td className="border border-gray-500 p-2">Objects</td>
                <td className="border border-gray-500 p-2">Entities & Relationships</td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">Relationship Type</td>
                <td className="border border-gray-500 p-2">One-to-Many</td>
                <td className="border border-gray-500 p-2">Many-to-Many</td>
                <td className="border border-gray-500 p-2">Complex/Inheritance</td>
                <td className="border border-gray-500 p-2">Flexible (1:1, 1:N, M:N)</td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">Ease of Modification</td>
                <td className="border border-gray-500 p-2">Difficult</td>
                <td className="border border-gray-500 p-2">Complex</td>
                <td className="border border-gray-500 p-2">Moderate</td>
                <td className="border border-gray-500 p-2">Simple (conceptual level)</td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">Use Cases</td>
                <td className="border border-gray-500 p-2">Early DBMS, IBM IMS</td>
                <td className="border border-gray-500 p-2">Airline Reservations</td>
                <td className="border border-gray-500 p-2">CAD, Multimedia DBs</td>
                <td className="border border-gray-500 p-2">Database Design Phase</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default DataModelsAndComparativeStudy;
