import React from "react";
import "../../../../CSS/Dbms.css";

function FunctionalDependency() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔑 Functional Dependency & Decomposition</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 What is Functional Dependency?</h2>
          <p>
            A <strong>Functional Dependency</strong> (FD) is a relationship between two sets of attributes in a database.
            It defines a constraint that one set of attributes (determinants) uniquely determines another set of attributes.
            In other words, for a given set of values in the determinant attributes, there is only one possible value for the dependent attribute.
          </p>
          <p>
            For example, in a relation with the attributes <strong>Employee (EmpID, EmpName, EmpDept)</strong>, we might have a functional dependency: 
            <strong>EmpID → EmpName</strong>, meaning that the <em>EmpID</em> uniquely determines the <em>EmpName</em>.
          </p>
        </div>

        {/* Types of Functional Dependency */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Types of Functional Dependencies</h2>

          {/* Trivial Functional Dependency */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">1. Trivial Functional Dependency</h3>
            <p>
              A <strong>Trivial Functional Dependency</strong> occurs when an attribute or set of attributes in a relation
              functionally determines itself. In this case, the left-hand side of the functional dependency is a subset of the right-hand side.
            </p>
            <p className="dbms-example">
              💡 Example: In a relation with attributes <strong>R(A, B, C)</strong>, a trivial functional dependency would be:
              <br />
              <strong>A, B → A</strong> or <strong>A, C → A</strong>. 
            </p>
            <table className="example-table">
              <thead>
                <tr>
                  <th>EmpID</th>
                  <th>EmpName</th>
                  <th>EmpDept</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>E101</td>
                  <td>Alice</td>
                  <td>HR</td>
                </tr>
                <tr>
                  <td>E102</td>
                  <td>Bob</td>
                  <td>Engineering</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Non-Trivial Functional Dependency */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">2. Non-Trivial Functional Dependency</h3>
            <p>
              A <strong>Non-Trivial Functional Dependency</strong> occurs when the left-hand side of the functional dependency
              does not appear on the right-hand side, and the relationship is not a trivial one.
            </p>
            <p className="dbms-example">
              💡 Example: In a relation with attributes <strong>R(A, B, C)</strong>, a non-trivial functional dependency would be:
              <br />
              <strong>A → B</strong>, where attribute <em>A</em> determines <em>B</em>.
            </p>
            <table className="example-table">
              <thead>
                <tr>
                  <th>EmpID</th>
                  <th>EmpName</th>
                  <th>EmpDept</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>E101</td>
                  <td>Alice</td>
                  <td>HR</td>
                </tr>
                <tr>
                  <td>E102</td>
                  <td>Bob</td>
                  <td>Engineering</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Properties of Functional Dependency */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Properties of Functional Dependency</h2>

          {/* Reflexivity */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">1. Reflexivity</h3>
            <p>
              The <strong>Reflexive Property</strong> states that if a set of attributes <em>X</em> is a subset of another set of attributes <em>Y</em>,
              then <em>X → Y</em> is always true.
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                Example: {`{EmpID, EmpName} → EmpID`} is reflexive.
              </code>
            </pre>
          </div>

          {/* Augmentation */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">2. Augmentation</h3>
            <p>
              The <strong>Augmentation Property</strong> states that if <em>X → Y</em> holds, then for any set of attributes <em>Z</em>,
              <em>X, Z → Y, Z</em> must also hold.
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                Example: {`EmpID → EmpName`} ⟶ {`EmpID, EmpDept → EmpName, EmpDept`}
              </code>
            </pre>
          </div>

          {/* Transitivity */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">3. Transitivity</h3>
            <p>
              The <strong>Transitivity Property</strong> states that if <em>X → Y</em> and <em>Y → Z</em> hold, then <em>X → Z</em> must also hold.
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                Example: {`EmpID → EmpName`} and {`EmpName → EmpDept`} ⟶ {`EmpID → EmpDept`}
              </code>
            </pre>
          </div>

          {/* Union */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">4. Union</h3>
            <p>
              The <strong>Union Property</strong> states that if <em>X → Y</em> and <em>X → Z</em> hold, then <em>X → Y, Z</em> must also hold.
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                Example: {`EmpID → EmpName`} and {`EmpID → EmpDept`} ⟶ {`EmpID → EmpName, EmpDept`}
              </code>
            </pre>
          </div>

          {/* Decomposition */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">5. Decomposition</h3>
            <p>
              The <strong>Decomposition Property</strong> states that if <em>X → Y, Z</em> holds, then <em>X → Y</em> and <em>X → Z</em> must also hold.
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                Example: {`EmpID → EmpName, EmpDept`} ⟶ {`EmpID → EmpName`} and {`EmpID → EmpDept`}
              </code>
            </pre>
          </div>

          {/* Pseudotransitivity */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">6. Pseudotransitivity</h3>
            <p>
              The <strong>Pseudotransitivity Property</strong> states that if <em>X → Y</em> and <em>Y, Z → W</em> hold, then <em>X, Z → W</em> must also hold.
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg">
              <code>
                Example: {`EmpID → EmpName`} and {`EmpName, EmpDept → EmpSalary`} ⟶ {`EmpID, EmpDept → EmpSalary`}
              </code>
            </pre>
          </div>
        </div>

        {/* Lossless Decomposition */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Lossless and Lossy Decomposition</h2>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">1. Lossless Decomposition</h3>
            <p>
              A decomposition is <strong>lossless</strong> if no information is lost during the decomposition process. After decomposing a relation, we should be able to reconstruct the original relation.
            </p>
            <p className="dbms-example">
              💡 Example: If a relation <em>R(A, B, C)</em> is decomposed into <em>R1(A, B)</em> and <em>R2(B, C)</em>, the decomposition is lossless if the common attribute <em>B</em> is a key in either <em>R1</em> or <em>R2</em>.
            </p>
          </div>

          <div className="dbms-section">
            <h3 className="dbms-subtitle">2. Lossy Decomposition</h3>
            <p>
              A decomposition is <strong>lossy</strong> if some information is lost during the decomposition process. In a lossy decomposition, we cannot reconstruct the original relation from its decomposed parts.
            </p>
            <p className="dbms-example">
              💡 Example: If a relation <em>R(A, B, C)</em> is decomposed into <em>R1(A, B)</em> and <em>R2(A, C)</em> without any key in common, the decomposition is lossy.
            </p>
          </div>
        </div>

        <div className="dbms-section">
            <h3 className="dbms-subtitle">1. Partial dependency</h3>
            <p>
              A <strong>Partial Dependency</strong> occurs when a non-prime attribute is functionally dependent on a part of a candidate key. This means that the non-prime attribute is dependent on only a subset of the candidate key.
            </p>
            <p className="dbms-example">
              💡 Example: In a relation with attributes <strong>R(A, B, C)</strong>, if <em>A</em> is a candidate key and <em>B</em> is a non-prime attribute, then the functional dependency <em>A → B</em> is a partial dependency.
            </p>
          </div>


          <div className="dbms-section">
            <h3 className="dbms-subtitle">2.Transitive dependency</h3>
            <p>
              A <strong>Transitive Dependency</strong> occurs when a non-prime attribute is functionally dependent on another non-prime attribute through a prime attribute. This means that the non-prime attribute is indirectly dependent on the candidate key.
            </p>
            <p className="dbms-example">
              💡 Example: In a relation with attributes <strong>R(A, B, C)</strong>, if <em>A</em> is a candidate key and <em>B</em> and <em>C</em> are non-prime attributes, then the functional dependency <em>A → B</em> and <em>B → C</em> implies that <em>A → C</em> is a transitive dependency.
            </p>
          </div>

        <button className="dbmsBtn">Learn More about Functional Dependency</button>
      </div>
    </div>
  );
}

export default FunctionalDependency;
