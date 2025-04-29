import React from 'react'
import '../../../../CSS/Dbms.css'

function DataWarehouseBigData() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">Data Warehousing, OLAP, OLTP, Hadoop, Big Data & 5 V's</h1>

        {/* Data Warehouse Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Data Warehouse</h2>
          <p className="dbms-example">
            A <strong>Data Warehouse</strong> is a centralized repository that stores integrated data from multiple sources.
            It supports analytical reporting, structured queries, and decision-making.
            Data warehouses are optimized for **read-heavy** operations and are typically updated periodically (batch updates).
          </p>
          <p className="dbms-example">
            <pre>
              {`Example:
- Companies gather sales, marketing, and customer data from different departments into a central warehouse for analysis.`}
            </pre>
          </p>

          <ul>
            <li>Subject-Oriented</li>
            <li>Integrated</li>
            <li>Time-Variant</li>
            <li>Non-volatile (data is not deleted or updated often)</li>
          </ul>
        </div>

        {/* OLAP Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">OLAP (Online Analytical Processing)</h2>
          <p className="dbms-example">
            <strong>OLAP</strong> enables users to analyze multidimensional data interactively from multiple perspectives.
            It is mainly used for complex queries, reporting, data mining, and business intelligence.
          </p>
          <p className="dbms-example">
            <pre>
              {`Example:
- A sales manager analyzing total sales across different regions, time periods, and product categories.`}
            </pre>
          </p>

          <ul>
            <li>Supports complex queries and aggregations</li>
            <li>Data is usually stored in cubes (dimensions: time, geography, product)</li>
            <li>Examples of OLAP operations: Slice, Dice, Pivot, Drill Down, Roll Up</li>
          </ul>
        </div>

        {/* OLTP Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">OLTP (Online Transaction Processing)</h2>
          <p className="dbms-example">
            <strong>OLTP</strong> systems are optimized for processing a large number of short online transactions (INSERT, UPDATE, DELETE).
            These systems prioritize quick response time and high availability.
          </p>
          <p className="dbms-example">
            <pre>
              {`Example:
- An online banking system processing withdrawals, deposits, and transfers in real-time.`}
            </pre>
          </p>

          <ul>
            <li>Focus on operational tasks</li>
            <li>Handles lots of concurrent users</li>
            <li>Maintains data consistency and integrity</li>
          </ul>
        </div>

        {/* Difference Table */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">OLAP vs OLTP (Summary)</h2>
          <div className="example-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>OLTP</th>
                  <th>OLAP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Focus</td>
                  <td>Transaction Processing</td>
                  <td>Analysis & Reporting</td>
                </tr>
                <tr>
                  <td>Operations</td>
                  <td>INSERT, UPDATE, DELETE</td>
                  <td>SELECT (Complex Queries)</td>
                </tr>
                <tr>
                  <td>Speed</td>
                  <td>Very Fast</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>Data Volume</td>
                  <td>Small (current data)</td>
                  <td>Large (historical data)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Hadoop Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Hadoop</h2>
          <p className="dbms-example">
            <strong>Hadoop</strong> is an open-source framework for storing and processing large datasets distributed across clusters of computers using simple programming models.
          </p>

          <p className="dbms-example">
            <pre>
              {`Components of Hadoop:
- HDFS (Hadoop Distributed File System): Storage layer.
- MapReduce: Processing layer.
- YARN: Resource Management.
- Hadoop Common: Utilities and libraries.`}
            </pre>
          </p>

          <ul>
            <li>Can handle structured, semi-structured, and unstructured data</li>
            <li>Highly fault-tolerant and scalable</li>
            <li>Designed to run on commodity hardware</li>
          </ul>

          <h3 className="dbms-subtitle">Simple Code Diagram for Hadoop Architecture</h3>
          <p className="dbms-example">
            <pre>
              {`Client Application
        |
  Resource Manager (YARN)
        |
Node Manager ---- Node Manager ---- Node Manager
        |
HDFS (DataNodes storing data blocks)`}
            </pre>
          </p>
        </div>

        {/* Five Vs of Big Data */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">5 V's of Big Data</h2>
          <p className="dbms-example">
            Big Data is often defined by five key characteristics, called the 5 Vs:
          </p>

          <ul>
            <li>
              <strong>Volume:</strong> Refers to the amount of data generated every second (e.g., Facebook uploads millions of photos daily).
            </li>
            <li>
              <strong>Velocity:</strong> Refers to the speed at which new data is generated and moves around (e.g., Twitter posts).
            </li>
            <li>
              <strong>Variety:</strong> Refers to the different types of data (structured, semi-structured, unstructured).
            </li>
            <li>
              <strong>Veracity:</strong> Refers to the quality and accuracy of the data (data inconsistency and uncertainty).
            </li>
            <li>
              <strong>Value:</strong> Refers to the worth derived from processing and analyzing big data to make business decisions.
            </li>
          </ul>

          <p className="dbms-example">
            <pre>
              {`Example:
- Volume: Terabytes/Petabytes of retail transaction records.
- Velocity: Real-time traffic updates in Google Maps.
- Variety: Emails, audio, video, transaction records.
- Veracity: Filtering fake news from reliable news in social media.
- Value: Deriving customer preferences from online shopping data.`}
            </pre>
          </p>
        </div>

      </div>
    </div>
  )
}

export default DataWarehouseBigData
