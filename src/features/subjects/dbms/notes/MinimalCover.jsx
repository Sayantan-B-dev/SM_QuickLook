import React from "react";
import "../../../../CSS/Dbms.css";

function MinimalCover() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔎 Minimal Cover (Canonical Cover) of Functional Dependencies</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 What is Minimal Cover?</h2>
          <p>
            A <strong>Minimal Cover</strong> is a simplified version of a set of functional dependencies (FDs) that is still logically equivalent to the original set. It is a minimal set of FDs, where:
            <ul>
              <li>Each functional dependency has a single attribute on the right-hand side.</li>
              <li>There is no redundant functional dependency.</li>
              <li>Every functional dependency is necessary.</li>
            </ul>
            The goal is to reduce the complexity of the dependency set while maintaining the same relationship between attributes in the database.
          </p>
        </div>

        {/* Steps for Minimal Cover */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Steps to Find Minimal Cover</h2>
          <p>
            To compute the minimal cover for a set of functional dependencies, follow these steps:
          </p>
          <ul className="dbms-list">
            <li>1️⃣ **Step 1: Make Right-Hand Side Single Attribute**: Convert each functional dependency into the form where the right-hand side (RHS) has only one attribute.</li>
            <li>2️⃣ **Step 2: Remove Redundant FDs**: Check if any FD is redundant, i.e., can be derived from the others. Remove such FDs.</li>
            <li>3️⃣ **Step 3: Remove Unnecessary Attributes from LHS**: For each functional dependency, check if you can remove any attributes from the left-hand side (LHS) while still preserving the dependency. If yes, remove it.</li>
          </ul>
        </div>

        {/* Example */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Example of Minimal Cover</h2>
          <p>
            Let’s consider the following set of functional dependencies for a relation <em>R(A, B, C, D)</em>:
          </p>
          <ul className="dbms-list">
            <li><strong>FD1:</strong> A, B → C, D</li>
            <li><strong>FD2:</strong> A → B</li>
            <li><strong>FD3:</strong> B → C</li>
            <li><strong>FD4:</strong> A, C → D</li>
          </ul>

          <p className="step"><strong>Step 1: Make Right-Hand Side Single Attribute</strong></p>
          <p>
            We need to rewrite the FDs such that the RHS of each FD contains only one attribute. This is done by splitting any FD with multiple attributes on the RHS into separate FDs:
          </p>
          <ul className="dbms-list">
            <li><strong>FD1:</strong> A, B → C</li>
            <li><strong>FD2:</strong> A, B → D</li>
            <li><strong>FD3:</strong> A → B</li>
            <li><strong>FD4:</strong> B → C</li>
            <li><strong>FD5:</strong> A, C → D</li>
          </ul>

          <p className="step"><strong>Step 2: Remove Redundant FDs</strong></p>
          <p>
            Now we will check if any FD can be derived from the others. In this case, we see that:
            <ul>
              <li><strong>FD1:</strong> A, B → C is redundant because <em>B → C</em> is already present in FD4. So, we can remove FD1.</li>
              <li><strong>FD3:</strong> A → B is redundant because we already have <em>A, B → D</em>, which implies <em>A → B</em>.</li>
            </ul>
            After removing the redundant FDs, we are left with:
          </p>
          <ul className="dbms-list">
            <li><strong>FD2:</strong> A, B → D</li>
            <li><strong>FD4:</strong> B → C</li>
            <li><strong>FD5:</strong> A, C → D</li>
          </ul>

          <p className="step"><strong>Step 3: Remove Unnecessary Attributes from LHS</strong></p>
          <p>
            Next, we check if any LHS attribute in each FD is unnecessary. In this case:
            <ul>
              <li><strong>FD2:</strong> A, B → D can be simplified to <em>A → D</em> because <em>A → B</em> and <em>B → C</em> imply that <em>A → D</em>.</li>
              <li><strong>FD5:</strong> A, C → D can be simplified to <em>C → D</em> because <em>A, C → D</em> implies that <em>C → D</em> (since <em>C</em> determines <em>D</em> directly).</li>
            </ul>
            The final minimal cover is:
          </p>
          <ul className="dbms-list">
            <li><strong>FD1:</strong> A → D</li>
            <li><strong>FD2:</strong> B → C</li>
            <li><strong>FD3:</strong> C → D</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Conclusion</h2>
          <p>
            The minimal cover of a set of functional dependencies is the smallest set that is still equivalent to the original set. By following the steps mentioned above—breaking down functional dependencies, removing redundant FDs, and simplifying the left-hand side—you can achieve a minimal cover that reduces complexity and helps in database design.
          </p>
        </div>

        <button className="dbmsBtn">Explore More about Functional Dependencies</button>
      </div>
    </div>
  );
}

export default MinimalCover;
