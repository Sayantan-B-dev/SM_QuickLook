import React from "react";
import "../../../../CSS/SE.css";

function COCOMOModels() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">COCOMO Models</h1>

        {/* First Version of COCOMO */}
        <div className="se-section">
          <h2 className="se-subtitle">First Version of COCOMO</h2>
          <p className="se-example">
            The first version of the COCOMO model, introduced by Barry Boehm in the early 1980s, estimates the cost and effort required for software development based on the size of the software (measured in Source Lines of Code, SLOC or KLOC). It uses a simple empirical formula:
          </p>
          <pre>{`
            Effort (E) = a * (KLOC)^b
            Where:
              - Effort (E) is in person-months.
              - KLOC (Thousands of Lines of Code) represents the size of the software.
              - a and b are constants that depend on the project type:
                - Organic projects (a = 2.4, b = 1.05)
                - Semi-detached projects (a = 3.0, b = 1.12)
                - Embedded projects (a = 3.6, b = 1.20)
          `}</pre>
          <p className="se-example">
            <strong>SLOC (Source Lines of Code)</strong> represents the actual lines of code in the program, excluding comments and blank lines. <strong>KLOC (Thousands of Lines of Code)</strong> is just the SLOC divided by 1000.
          </p>
        </div>

        {/* Intermediate COCOMO */}
        <div className="se-section">
          <h2 className="se-subtitle">Intermediate COCOMO Model</h2>
          <p className="se-example">
            The Intermediate COCOMO Model expands the first version by considering several cost drivers (factors) that can influence software development effort. The model is based on the same basic formula as the first version but incorporates additional factors related to the product, hardware, and personnel involved in the project.
          </p>

          <h3 className="se-subtitle">Formula</h3>
          <pre>{`
            Effort (E) = a * (KLOC)^b * Effort Factors
            Where the Effort Factors include:
              - Product Attributes
              - Hardware Attributes
              - Personnel Attributes
          `}</pre>
          <p className="se-example">
            The effort is calculated based on the following categories:
            <ul>
              <li><strong>Product Attributes:</strong> These include the complexity of the software and the reliability requirements.</li>
              <li><strong>Hardware Attributes:</strong> These pertain to the hardware platform being used, such as its speed and memory capacity.</li>
              <li><strong>Personnel Attributes:</strong> These involve the experience and skills of the project team members.</li>
            </ul>
          </p>
        </div>

        {/* Advantages and Disadvantages */}
        <div className="se-section">
          <h2 className="se-subtitle">Advantages and Disadvantages</h2>
          
          <h3 className="se-subtitle">Advantages of First Version of COCOMO</h3>
          <ul className="se-example">
            <li><strong>Simple and Easy to Use:</strong> The first version is easy to apply, using only the size of the software (KLOC) as the primary factor.</li>
            <li><strong>Empirical Basis:</strong> Based on real-world data, the estimates tend to be reasonable for projects with a known scale.</li>
            <li><strong>Quick Estimates:</strong> Provides a rough estimate with minimal input, useful for early project planning.</li>
          </ul>

          <h3 className="se-subtitle">Disadvantages of First Version of COCOMO</h3>
          <ul className="se-example">
            <li><strong>Limited Detail:</strong> It doesn’t take into account detailed factors that may affect the project, such as the complexity of the software.</li>
            <li><strong>Not Suitable for Complex Projects:</strong> The first version is more appropriate for small-to-medium-sized projects, not large, complex systems.</li>
            <li><strong>Over-Simplification:</strong> Solely relying on KLOC can lead to inaccurate estimates for projects where other factors (like complexity) play a larger role.</li>
          </ul>

          <h3 className="se-subtitle">Advantages of Intermediate COCOMO</h3>
          <ul className="se-example">
            <li><strong>More Detailed Estimates:</strong> Includes multiple cost drivers, allowing for a more nuanced estimate than the first version.</li>
            <li><strong>Flexibility:</strong> Can accommodate a variety of project types and conditions by adjusting the effort factors.</li>
            <li><strong>Better for Larger Projects:</strong> More suitable for medium-to-large projects where factors beyond size (KLOC) are significant.</li>
          </ul>

          <h3 className="se-subtitle">Disadvantages of Intermediate COCOMO</h3>
          <ul className="se-example">
            <li><strong>Complexity:</strong> The model requires detailed information on many factors, making it more complex to use than the first version.</li>
            <li><strong>Subjectivity:</strong> Effort factors can be subjective, leading to inconsistencies in estimation across different teams.</li>
            <li><strong>Data Sensitivity:</strong> The model heavily relies on accurate data for effort factors, and incorrect data can skew the estimates significantly.</li>
          </ul>
        </div>

        {/* SLOC and KLOC */}
        <div className="se-section">
          <h2 className="se-subtitle">SLOC (Source Lines of Code) and KLOC (Thousands of Lines of Code)</h2>
          <p className="se-example">
            <strong>SLOC</strong> refers to the total number of executable lines of code in a software system, excluding comments and blank lines. It serves as a measure of software size, which can be used to estimate the effort required for development using COCOMO.
          </p>
          <p className="se-example">
            <strong>KLOC</strong> is simply the number of thousands of lines of code (SLOC divided by 1000). Using KLOC instead of SLOC makes the estimation more manageable, especially for large projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default COCOMOModels;
