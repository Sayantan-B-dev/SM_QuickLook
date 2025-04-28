import React from "react";
import "../../../../CSS/Dbms.css";

function FD_Cover_Equivalence_Decomposition() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">
          🔍 Cover and Equivalence of Functional Dependencies & Dependency-Preserving Decomposition
        </h1>

        {/* Cover of Functional Dependencies */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Cover of Functional Dependencies</h2>
          <p>
            A <strong>cover</strong> for a set of functional dependencies <em>F</em> is a smaller set <em>G</em> such that <em>G</em> implies all the functional dependencies in <em>F</em> and vice versa. In other words, <em>G</em> is a minimal set of functional dependencies that preserves all the semantics of <em>F</em>.
          </p>

          <h3 className="dbms-subtitle">📝 Steps to Compute a Cover</h3>
          <ul className="dbms-list">
            <li>
              1️⃣ **Remove Redundant FDs**: Check if any FD in <em>F</em> is redundant, i.e., can be derived from the other FDs. Remove the redundant FDs.
            </li>
            <li>
              2️⃣ **Ensure RHS has Only One Attribute**: For every FD, ensure that the right-hand side (RHS) consists of only a single attribute. If any FD has multiple attributes on the RHS, split it into multiple FDs.
            </li>
            <li>
              3️⃣ **Remove Unnecessary Attributes from LHS**: For each FD, check if you can remove any attribute from the left-hand side (LHS) without changing the dependency. If yes, remove it.
            </li>
          </ul>

          <h3 className="dbms-subtitle">📝 Example of Cover</h3>
          <p>
            Let's consider the following set of functional dependencies for a relation <em>R(A, B, C, D)</em>:
          </p>
          <ul className="dbms-list">
            <li><strong>FD1:</strong> A, B → C</li>
            <li><strong>FD2:</strong> A → B</li>
            <li><strong>FD3:</strong> B → C</li>
            <li><strong>FD4:</strong> A, C → D</li>
          </ul>
          <p>
            By removing redundant FDs and ensuring RHS is a single attribute, we can compute a cover for the set of FDs:
          </p>
          <ul className="dbms-list">
            <li><strong>FD1:</strong> A → B</li>
            <li><strong>FD2:</strong> B → C</li>
            <li><strong>FD3:</strong> A → D</li>
          </ul>
        </div>

        {/* Equivalence of Functional Dependencies */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Equivalence of Functional Dependencies</h2>
          <p>
            Two sets of functional dependencies, <em>F</em> and <em>G</em>, are said to be <strong>equivalent</strong> if they imply each other. In other words, <em>F</em> is equivalent to <em>G</em> if:
            <ul className="dbms-list">
              <li>Every FD in <em>F</em> can be derived from <em>G</em>.</li>
              <li>Every FD in <em>G</em> can be derived from <em>F</em>.</li>
            </ul>
            Formally:
            <ul className="dbms-list">
              <li>F ⊨ G (F implies G)</li>
              <li>G ⊨ F (G implies F)</li>
            </ul>
          </p>

          <h3 className="dbms-subtitle">📝 Example of FD Equivalence</h3>
          <p>
            Let's consider two sets of FDs:
          </p>
          <ul className="dbms-list">
            <li><strong>Set F:</strong> A → B, B → C, A → C</li>
            <li><strong>Set G:</strong> A → C, A → B, B → C</li>
          </ul>
          <p>
            Set <strong>F</strong> and <strong>Set G</strong> are equivalent because:
            <ul className="dbms-list">
              <li>From <strong>F</strong>, we can derive <em>A → C</em> using <em>A → B</em> and <em>B → C</em>.</li>
              <li>From <strong>G</strong>, we can derive <em>A → B</em> using <em>A → C</em> and <em>B → C</em>.</li>
            </ul>
            Therefore, <strong>F</strong> and <strong>G</strong> are equivalent.
          </p>
        </div>

        {/* Dependency-Preserving Decomposition */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Dependency-Preserving Decomposition</h2>
          <p>
            A <strong>dependency-preserving decomposition</strong> is a decomposition of a relation <em>R</em> into smaller relations <em>R1, R2, ..., Rn</em> such that the union of the functional dependencies in the decomposed relations is equivalent to the original set of functional dependencies.
          </p>
          <p>
            In simpler terms, after decomposing the relation, all the original functional dependencies should still be enforceable in the decomposed relations. This is important to avoid losing any important information when breaking down a relation.
          </p>

          <h3 className="dbms-subtitle">📝 Steps for Dependency-Preserving Decomposition</h3>
          <ul className="dbms-list">
            <li>1️⃣ **Check for Dependency Preservation**: Ensure that the functional dependencies are preserved in the decomposed relations.</li>
            <li>2️⃣ **Decompose the Relation**: Decompose the relation based on the keys and functional dependencies.</li>
            <li>3️⃣ **Reconstruct the Original Relation**: The decomposed relations should be able to reconstruct the original relation, ensuring no loss of information.</li>
          </ul>

          <h3 className="dbms-subtitle">📝 Example of Dependency-Preserving Decomposition</h3>
          <p>
            Suppose we have the following relation <em>R(A, B, C, D)</em> with functional dependencies:
          </p>
          <ul className="dbms-list">
            <li><strong>FD1:</strong> A → B</li>
            <li><strong>FD2:</strong> B → C</li>
            <li><strong>FD3:</strong> A, C → D</li>
          </ul>
          <p>
            We can decompose <em>R</em> into two relations:
            <ul className="dbms-list">
              <li><strong>R1(A, B, C)</strong> with functional dependencies: <em>A → B</em>, <em>B → C</em></li>
              <li><strong>R2(A, C, D)</strong> with functional dependency: <em>A, C → D</em></li>
            </ul>
            After the decomposition:
            <ul className="dbms-list">
              <li>The functional dependencies in <strong>R1</strong> are preserved in the decomposed relation.</li>
              <li>The functional dependencies in <strong>R2</strong> are also preserved.</li>
            </ul>
            Therefore, this decomposition is dependency-preserving.
          </p>
        </div>

        {/* Conclusion */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Conclusion</h2>
          <p>
            Understanding <strong>Cover</strong>, <strong>Equivalence</strong>, and <strong>Dependency-Preserving Decomposition</strong> is crucial for optimizing database designs. By simplifying functional dependencies, we ensure that our database schema is minimal and efficient, while also ensuring that decomposing relations doesn't result in lost data or integrity.
          </p>
        </div>

        <button className="dbmsBtn">Learn More About Dependency Preservation</button>
      </div>
    </div>
  );
}

export default FD_Cover_Equivalence_Decomposition;
