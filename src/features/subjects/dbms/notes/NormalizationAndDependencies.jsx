import React from 'react'
import '../../../../CSS/Dbms.css'

function NormalizationAndDependencies() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Normalization, Data Redundancy, and Functional Dependencies</h1>

        {/* Purpose of Normalization */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Purpose of Normalization</h2>
          <p>
            Normalization is the process of organizing data to reduce redundancy and ensure data integrity. It ensures that data is stored in a way that eliminates unnecessary repetition and maintains consistency across the database.
          </p>
          <ul>
            <li>Minimizes data redundancy</li>
            <li>Avoids update anomalies</li>
            <li>Improves data integrity</li>
            <li>Simplifies queries and management</li>
            <li>Optimizes storage usage</li>
          </ul>
        </div>

        {/* Data Redundancy */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Data Redundancy and Its Problems</h2>
          <p>
            Data redundancy occurs when the same piece of data is stored in multiple places, causing storage inefficiency and potential inconsistencies.
          </p>
          <p><strong>Example:</strong></p>
          <pre>
{`| Student_ID | Student_Name | Course_Name |
|------------|--------------|-------------|
| 101        | Alice        | DBMS        |
| 101        | Alice        | Networking  |`}
          </pre>
          <ul>
            <li>Increases storage usage</li>
            <li>Can cause inconsistencies if data is not updated consistently</li>
          </ul>
        </div>

        {/* Update Anomalies */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Updating Anomalies</h2>
          <p>Updating anomalies occur when modifying data in one place leads to inconsistencies or difficulties. Common types of anomalies include:</p>
          <ul>
            <li><strong>Update Anomaly:</strong> If data is not updated everywhere, inconsistencies arise.</li>
            <li><strong>Insertion Anomaly:</strong> Cannot insert a new record without redundant information.</li>
            <li><strong>Deletion Anomaly:</strong> Deleting a record could cause loss of important data.</li>
          </ul>
        </div>

        {/* Functional Dependencies */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Functional Dependencies</h2>
          <p>
            A functional dependency is a relationship between attributes in a table, where one attribute uniquely determines another.
          </p>
          <pre>
{`| Roll_No | Name  | Dept |
|---------|-------|------|
| 1       | John  | CS   |
| 2       | Alice | IT   |`}
          </pre>
          <ul>
            <li><strong>Roll_No → Name</strong> (Roll_No uniquely identifies Name)</li>
            <li><strong>Roll_No → Dept</strong> (Roll_No uniquely identifies Dept)</li>
          </ul>
        </div>

        {/* Decomposition */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Decomposition</h2>
          <p>
            Decomposition involves breaking down a table into smaller, more manageable tables to eliminate redundancy and avoid anomalies. It ensures that the data is normalized.
          </p>
          <pre>
{`Original Table:
| Roll_No | Name  | Dept | HOD  |
|---------|-------|------|------|
| 1       | John  | CS   | Mr.A |
| 2       | Alice | IT   | Mr.B |

Decomposed Tables:
1. Student Table:
| Roll_No | Name  | Dept |
|---------|-------|------|
| 1       | John  | CS   |
| 2       | Alice | IT   |

2. Department Table:
| Dept | HOD  |
|------|------|
| CS   | Mr.A |
| IT   | Mr.B |`}
          </pre>
          <ul>
            <li>Minimizes redundancy and prevents update anomalies</li>
            <li>Ensures no loss of data during decomposition</li>
          </ul>
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
                <td>Normalization</td>
                <td>Organizes data to reduce redundancy and ensure data integrity.</td>
              </tr>
              <tr>
                <td>Data Redundancy</td>
                <td>Storing the same data multiple times, causing inefficiency and inconsistency.</td>
              </tr>
              <tr>
                <td>Update Anomalies</td>
                <td>Issues like update, insertion, and deletion anomalies due to redundancy.</td>
              </tr>
              <tr>
                <td>Functional Dependencies</td>
                <td>Relationships where one attribute determines another.</td>
              </tr>
              <tr>
                <td>Decomposition</td>
                <td>Breaking down tables to reduce redundancy and avoid anomalies.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default NormalizationAndDependencies;
