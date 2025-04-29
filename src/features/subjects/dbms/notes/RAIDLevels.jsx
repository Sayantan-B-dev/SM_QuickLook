import React from 'react'
import '../../../../CSS/Dbms.css'

function RAIDLevels() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">RAID - Redundant Array of Independent Disks</h1>

        {/* RAID 0 Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">RAID 0 - Striping</h2>
          <p className="dbms-example">
            RAID 0 offers no redundancy but focuses on performance. It splits data into chunks and writes those chunks across multiple disks (striping). The performance increases because data can be read and written to multiple disks in parallel.
            However, if one disk fails, all data is lost because there's no redundancy.
          </p>

          <ul>
            <li>
              <strong>Advantages:</strong>
              <ul>
                <li>High speed and performance.</li>
                <li>Efficient use of disk space since no parity or mirroring is used.</li>
              </ul>
            </li>
            <li>
              <strong>Disadvantages:</strong>
              <ul>
                <li>No redundancy, data is lost if one disk fails.</li>
              </ul>
            </li>
            <li>
              <strong>Example:</strong> <code>RAID 0</code> is commonly used in environments where speed is critical, such as video editing or gaming.
              <p className="dbms-example">
                <pre>
                  {`RAID 0 Example:
                  Data A → Disk 1
                  Data B → Disk 2`}
                </pre>
              </p>
            </li>
          </ul>
        </div>

        {/* RAID 1 Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">RAID 1 - Mirroring</h2>
          <p className="dbms-example">
            RAID 1 mirrors data across two or more disks. Each disk in the array stores a copy of the same data, providing redundancy. If one disk fails, the system can continue working because the data is still available on the other disk.
            This setup improves data reliability but reduces storage capacity by half.
          </p>

          <ul>
            <li>
              <strong>Advantages:</strong>
              <ul>
                <li>Redundant and fault-tolerant; no data loss if one disk fails.</li>
                <li>Data is always available for read operations from any disk in the array.</li>
              </ul>
            </li>
            <li>
              <strong>Disadvantages:</strong>
              <ul>
                <li>Higher cost per gigabyte due to mirroring.</li>
                <li>Lower usable storage compared to the number of disks.</li>
              </ul>
            </li>
            <li>
              <strong>Example:</strong> <code>RAID 1</code> is ideal for systems requiring high availability, such as web servers and file servers.
              <p className="dbms-example">
                <pre>
                  {`RAID 1 Example:
                  Data A → Disk 1
                  Data A → Disk 2`}
                </pre>
              </p>
            </li>
          </ul>
        </div>

        {/* RAID 5 Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">RAID 5 - Striping with Parity</h2>
          <p className="dbms-example">
            RAID 5 uses striping (like RAID 0) and adds a parity block for redundancy. The data and parity are spread across all the disks in the array, which provides fault tolerance. If one disk fails, the parity information can be used to reconstruct the lost data. RAID 5 requires at least three disks to operate.
          </p>

          <ul>
            <li>
              <strong>Advantages:</strong>
              <ul>
                <li>Offers a good balance of performance, redundancy, and storage efficiency.</li>
                <li>Can survive the failure of one disk without data loss.</li>
              </ul>
            </li>
            <li>
              <strong>Disadvantages:</strong>
              <ul>
                <li>Performance hit on write operations due to parity calculation.</li>
                <li>More complex setup and recovery process compared to RAID 1.</li>
              </ul>
            </li>
            <li>
              <strong>Example:</strong> <code>RAID 5</code> is commonly used in environments where a balance of performance and data redundancy is required.
              <p className="dbms-example">
                <pre>
                  {`RAID 5 Example:
                  Data A → Disk 1
                  Data B → Disk 2
                  Parity → Disk 3`}
                </pre>
              </p>
            </li>
          </ul>
        </div>

        {/* RAID 6 Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">RAID 6 - Striping with Double Parity</h2>
          <p className="dbms-example">
            RAID 6 is similar to RAID 5 but with double parity. This means it can survive the failure of two disks. RAID 6 provides more redundancy and fault tolerance compared to RAID 5, but it has a higher overhead due to the additional parity.
          </p>

          <ul>
            <li>
              <strong>Advantages:</strong>
              <ul>
                <li>Can survive two disk failures without data loss.</li>
                <li>Provides very high data availability and fault tolerance.</li>
              </ul>
            </li>
            <li>
              <strong>Disadvantages:</strong>
              <ul>
                <li>Slower write performance compared to RAID 5 due to double parity calculation.</li>
                <li>Higher storage overhead for parity data.</li>
              </ul>
            </li>
            <li>
              <strong>Example:</strong> <code>RAID 6</code> is ideal for critical systems that require high fault tolerance, such as large-scale databases and enterprise-level storage.
              <p className="dbms-example">
                <pre>
                  {`RAID 6 Example:
                  Data A → Disk 1
                  Data B → Disk 2
                  Parity → Disk 3
                  Parity → Disk 4`}
                </pre>
              </p>
            </li>
          </ul>
        </div>

        {/* RAID Diagram Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">RAID Level Diagrams</h2>
          <p className="dbms-example">
            Below are diagrams that illustrate how the different RAID levels work:
          </p>

          <div className="dbms-grid">
            {/* RAID 0 Diagram */}
            <div className="dbms-grid-item">
              <h3>RAID 0</h3>
              <pre>
{`[Disk 1][Disk 2]
[Data A][Data B]`}
              </pre>
            </div>

            {/* RAID 1 Diagram */}
            <div className="dbms-grid-item">
              <h3>RAID 1</h3>
              <pre>
{`[Disk 1]  [Disk 2]
[Data A] [Data A]`}
              </pre>
            </div>

            {/* RAID 5 Diagram */}
            <div className="dbms-grid-item">
              <h3>RAID 5</h3>
              <pre>
{`[Disk 1][Disk 2][Disk 3]
[Data A][Data B][Parity]`}
              </pre>
            </div>

            {/* RAID 6 Diagram */}
            <div className="dbms-grid-item">
              <h3>RAID 6</h3>
              <pre>
{`[Disk 1][Disk 2][Disk 3][Disk 4]
[Data A][Data B][Parity][Parity]`}
              </pre>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RAIDLevels
