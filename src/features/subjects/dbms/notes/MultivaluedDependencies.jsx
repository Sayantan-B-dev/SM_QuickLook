import React from 'react'
import '../../../../CSS/Dbms.css'

function MultivaluedDependencies() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Multivalued Dependencies (MVD)</h1>

        {/* What is a Multivalued Dependency */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">What is a Multivalued Dependency?</h2>
          <p>
            A multivalued dependency (MVD) occurs when one attribute determines multiple values of another attribute in a table, and these values are independent of each other.
          </p>
          <p>
            It is denoted as <strong> X →→ Y </strong>, where:
            <br />
            - X is the determinant, and
            <br />
            - Y is the set of attributes that are multivalued.
          </p>
          <p>
            MVDs are used to handle situations where an attribute has more than one value for a given key.
          </p>
        </div>

        {/* Example of Multivalued Dependency */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Example of Multivalued Dependency</h2>
          <p>
            Consider the following table representing a <strong>Student</strong> who has multiple <strong>Subjects</strong> and <strong>Hobbies</strong>:
          </p>
          <pre>
{`| Student_ID | Subject       | Hobby     |
|------------|---------------|-----------|
| 101        | DBMS          | Reading   |
| 101        | Networking    | Swimming  |
| 101        | Operating System | Cycling |
| 102        | Algorithms    | Drawing   |
| 102        | DBMS          | Traveling |
`}
          </pre>
          <p>
            Here, <strong>Student_ID →→ Subject</strong> and <strong>Student_ID →→ Hobby</strong> represent multivalued dependencies. The value of <strong>Student_ID</strong> determines both <strong>Subjects</strong> and <strong>Hobbies</strong> independently of each other.
          </p>
        </div>

        {/* Problems Caused by Multivalued Dependencies */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Problems Caused by Multivalued Dependencies</h2>
          <ul>
            <li><strong>Redundancy:</strong> Data gets repeated multiple times when a student has multiple subjects or hobbies.</li>
            <li><strong>Update Anomalies:</strong> If we update a hobby or subject, it needs to be repeated across multiple rows.</li>
            <li><strong>Insertion Anomalies:</strong> It can be difficult to insert new combinations of values without repeating other data.</li>
            <li><strong>Deletion Anomalies:</strong> Deleting a student’s subject or hobby might unintentionally delete other associated information.</li>
          </ul>
        </div>

        {/* Solution: Decomposition (Fourth Normal Form) */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Solution: Decomposition into Fourth Normal Form (4NF)</h2>
          <p>
            To handle multivalued dependencies, we decompose the table into separate tables to eliminate redundancy and maintain data integrity. This decomposition leads to the Fourth Normal Form (4NF).
          </p>
          <pre>
{`Student Table (After Decomposition):
| Student_ID | Subject           |
|------------|-------------------|
| 101        | DBMS              |
| 101        | Networking        |
| 101        | Operating System  |
| 102        | Algorithms        |
| 102        | DBMS              |

Hobby Table (After Decomposition):
| Student_ID | Hobby      |
|------------|------------|
| 101        | Reading    |
| 101        | Swimming   |
| 101        | Cycling    |
| 102        | Drawing    |
| 102        | Traveling  |
`}
          </pre>
          <p>
            By decomposing the table into two separate tables (Student and Hobby), we eliminate the multivalued dependencies and reduce redundancy. This ensures that the database is in 4NF.
          </p>
        </div>

        {/* Summary */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Summary</h2>
          <table className="dbms-summary-table">
            <thead>
              <tr>
                <th>Topic</th>
                <th>Quick Summary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Multivalued Dependencies</td>
                <td>Occurs when one attribute determines multiple independent values of another attribute.</td>
              </tr>
              <tr>
                <td>Example</td>
                <td>A student has multiple subjects and hobbies that are independent of each other.</td>
              </tr>
              <tr>
                <td>Problems</td>
                <td>Leads to redundancy, update, insertion, and deletion anomalies.</td>
              </tr>
              <tr>
                <td>Solution</td>
                <td>Decompose the table into separate tables to eliminate redundancy and achieve 4NF.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MultivaluedDependencies;
