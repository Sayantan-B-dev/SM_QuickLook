import React from 'react';
import '../../../../CSS/Dbms.css';

function EnhancedERModel() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">

        <h1 className="dbms-title">Enhanced Entity-Relationship (EER) Model</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <p className="text-grey-400">
            The <strong>Enhanced Entity-Relationship (EER) model</strong> is an extension of the basic E-R model that includes additional modeling concepts to handle more complex database design requirements. EER includes concepts like <strong>Specialization</strong>, <strong>Generalization</strong>, and <strong>Aggregation</strong>.
          </p>
        </div>

        {/* Specialization */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">1. Specialization</h2>
          <p className="text-grey-400">
            <strong>Specialization</strong> is the process of defining a set of subclasses from a single superclass based on some distinguishing characteristics.
          </p>

          <p className="text-grey-400 mt-2"><strong>Purpose:</strong> Break down a general entity into more specific entities based on attributes.</p>

          <p className="text-grey-400 mt-4"><strong>Example:</strong> Specializing an "Employee" entity into "Engineer", "Accountant", and "Manager" based on roles.</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`Employee
  ├── Engineer
  ├── Accountant
  └── Manager`}
          </pre>

          <p className="text-grey-400 mt-4">
            <strong>Properties:</strong>
          </p>
          <ul className="list-disc text-grey-400 pl-5">
            <li><strong>Top-Down Approach:</strong> Start from a higher-level entity and break it into lower-level sub-entities.</li>
            <li><strong>Disjoint or Overlapping:</strong> An entity instance can belong to only one subclass (disjoint) or multiple subclasses (overlapping).</li>
            <li><strong>Total or Partial Specialization:</strong> Every entity in the superclass must be a member of at least one subclass (total specialization) or may not belong to any subclass (partial specialization).</li>
          </ul>
        </div>

        {/* Generalization */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">2. Generalization</h2>
          <p className="text-grey-400">
            <strong>Generalization</strong> is the reverse of specialization. It is the process of abstracting two or more entities into a higher-level, generalized entity.
          </p>

          <p className="text-grey-400 mt-2"><strong>Purpose:</strong> Combine similar entities into a broader superclass.</p>

          <p className="text-grey-400 mt-4"><strong>Example:</strong> Generalizing "Car" and "Truck" into a "Vehicle" entity.</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`Car
Truck
  ↳ Vehicle`}
          </pre>

          <p className="text-grey-400 mt-4">
            <strong>Properties:</strong>
          </p>
          <ul className="list-disc text-grey-400 pl-5">
            <li><strong>Bottom-Up Approach:</strong> Start from lower-level entities and combine them into a higher-level entity.</li>
            <li><strong>Common Attributes:</strong> Generalization occurs based on shared attributes among the entities.</li>
          </ul>
        </div>

        {/* Aggregation */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">3. Aggregation</h2>
          <p className="text-grey-400">
            <strong>Aggregation</strong> is a modeling concept used when a relationship itself has attributes, or when treating a relationship as a higher-level entity is required.
          </p>

          <p className="text-grey-400 mt-2"><strong>Purpose:</strong> Represent a relationship as an abstract entity to model more complex scenarios.</p>

          <p className="text-grey-400 mt-4"><strong>Example:</strong> A "Project" is assigned to an "Employee" with a "Works_On" relationship. If "Works_On" has attributes like "Hours_Worked", we can treat "Works_On" as an aggregated entity.</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-2">
{`[Employee] --Works_On--> [Project]
  (Hours_Worked attribute associated with Works_On)`}
          </pre>

          <p className="text-grey-400 mt-4">
            <strong>Properties:</strong>
          </p>
          <ul className="list-disc text-grey-400 pl-5">
            <li>Aggregation models a "has-a" or "part-of" relationship.</li>
            <li>Used when relationships themselves need to participate in other relationships.</li>
            <li>Visually represented using a box around the relationship in an EER diagram.</li>
          </ul>
        </div>

        {/* Differences between Specialization, Generalization, and Aggregation */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-title">Comparative Summary</h2>

          <table className="w-full text-grey-400 mt-4 table-fixed border-collapse border border-gray-500">
            <thead className="bg-gray-800">
              <tr>
                <th className="border border-gray-500 p-2">Aspect</th>
                <th className="border border-gray-500 p-2">Specialization</th>
                <th className="border border-gray-500 p-2">Generalization</th>
                <th className="border border-gray-500 p-2">Aggregation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 p-2">Approach</td>
                <td className="border border-gray-500 p-2">Top-Down</td>
                <td className="border border-gray-500 p-2">Bottom-Up</td>
                <td className="border border-gray-500 p-2">Abstraction of Relationships</td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">Purpose</td>
                <td className="border border-gray-500 p-2">Create Subclasses</td>
                <td className="border border-gray-500 p-2">Create Superclass</td>
                <td className="border border-gray-500 p-2">Simplify Complex Relationships</td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">Entity/Relationship Focus</td>
                <td className="border border-gray-500 p-2">Entity to Sub-Entities</td>
                <td className="border border-gray-500 p-2">Entities to Super Entity</td>
                <td className="border border-gray-500 p-2">Relationship as an Entity</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default EnhancedERModel;
