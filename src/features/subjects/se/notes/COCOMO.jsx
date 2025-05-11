import React from "react";
import "../../../../CSS/SE.css";

function COCOMO() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">COCOMO (Constructive Cost Model)</h1>

        <div className="se-section">
          <h2 className="se-subtitle">Basic COCOMO Model</h2>
          <p className="se-example">
            The Basic COCOMO model estimates the effort and cost of software development based on the size of the software (measured in lines of code). The formula is:
          </p>
          <pre>{`
            Effort (E) = a * (KLOC)^b
            Where:
              - Effort (E) is measured in person-months.
              - KLOC is the number of thousands of lines of code.
              - a and b are constants depending on the project type (organic, semi-detached, embedded).
          `}</pre>
          <p className="se-example">
            For an organic project (simple software), the values of "a" and "b" are:
            <strong> a = 2.4, b = 1.05</strong>.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Numeric Problem: Basic COCOMO</h2>
          <p className="se-example">
            Given that a project has 50,000 lines of code (50 KLOC), calculate the estimated effort required using the Basic COCOMO model for an organic project.
          </p>
          <pre>{`
            KLOC = 50 (given)
            a = 2.4, b = 1.05 (for organic project)

            Effort = 2.4 * (50)^1.05
            Effort = 2.4 * 55.48
            Effort = 133.15 person-months
          `}</pre>
          <p className="se-example">
            The estimated effort for this project is 133.15 person-months.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Intermediate COCOMO Model</h2>
          <p className="se-example">
            The Intermediate COCOMO model adds a set of cost drivers that adjust the basic effort estimation based on factors like product reliability, hardware constraints, and team experience.
            The formula is:
          </p>
          <pre>{`
            Effort (E) = a * (KLOC)^b * EAF
            Where:
              - EAF (Effort Adjustment Factor) is the product of 15 cost drivers.
              - EAF is the factor that modifies the basic estimate depending on specific project characteristics.
          `}</pre>
          <p className="se-example">
            The 15 cost drivers include attributes like "product reliability," "hardware constraints," and "team experience."
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Numeric Problem: Intermediate COCOMO</h2>
          <p className="se-example">
            Given that a project has 50,000 lines of code (50 KLOC) and an EAF of 1.5 (based on cost drivers), calculate the estimated effort using the Intermediate COCOMO model for an organic project.
          </p>
          <pre>{`
            KLOC = 50 (given)
            a = 2.4, b = 1.05 (for organic project)
            EAF = 1.5 (given)

            Effort = 2.4 * (50)^1.05 * 1.5
            Effort = 2.4 * 55.48 * 1.5
            Effort = 199.2 person-months
          `}</pre>
          <p className="se-example">
            The estimated effort for this project is 199.2 person-months with the given cost drivers.
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Project Estimation Techniques</h2>
          <p className="se-example">
            Project estimation involves predicting the effort, cost, and time required to complete a software project. Here are the main types of estimation techniques:
          </p>
          <ul className="se-example">
            <li><strong>Empirical Estimation:</strong> Uses historical data to predict future project parameters. COCOMO is an example of an empirical estimation technique.</li>
            <li><strong>Heuristic Estimation:</strong> Relies on expert judgment and experience to make estimations. Often used in early project phases.</li>
            <li><strong>Analytical Estimation:</strong> Involves using mathematical models, formulas, and algorithms to predict effort and cost. COCOMO and Function Point Analysis (FPA) are examples of analytical techniques.</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Project Size & Its Parameters</h2>
          <p className="se-example">
            Project size is typically measured in terms of:
          </p>
          <ul className="se-example">
            <li><strong>KLOC (Thousands of Lines of Code):</strong> The number of lines of code in the software project.</li>
            <li><strong>Function Points:</strong> A measurement of software functionality, based on the inputs, outputs, user interactions, and data files.</li>
            <li><strong>Person-Months:</strong> The total amount of effort (in terms of the number of people working over a set number of months).</li>
          </ul>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Project Estimation Formula</h2>
          <p className="se-example">
            A basic project estimation can be done using the following formula:
          </p>
          <pre>{`
            Project Effort (in person-months) = (KLOC)^b * EAF
          `}</pre>
          <p className="se-example">
            Here, <strong>KLOC</strong> is the number of lines of code, <strong>b</strong> is a coefficient (depends on project type), and <strong>EAF</strong> is the Effort Adjustment Factor (based on cost drivers).
          </p>
        </div>

        <div className="se-section">
          <h2 className="se-subtitle">Estimation Example for Project Size</h2>
          <p className="se-example">
            Consider a project with 30 KLOC, with an Effort Adjustment Factor (EAF) of 1.2, and using the COCOMO formula for a semi-detached project (b = 1.12):
          </p>
          <pre>{`
            KLOC = 30
            b = 1.12 (for semi-detached)
            EAF = 1.2

            Effort = 2.4 * (30)^1.12 * 1.2
            Effort = 2.4 * 46.77 * 1.2
            Effort = 134.4 person-months
          `}</pre>
          <p className="se-example">
            The estimated effort for this project is 134.4 person-months.
          </p>
        </div>
      </div>
    </div>
  );
}

export default COCOMO;
