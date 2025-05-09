import React from "react";
import "../../../../CSS/OS.css";

function DiskAccessTime() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Disk Access Time</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is Disk Access Time?</h2>
          <p className="os-example">
            Disk Access Time refers to the total time it takes for the disk to complete an operation. It consists of several components:
            <ul>
              <li><strong>Seek Time (ST):</strong> The time it takes to position the read/write head over the correct track.</li>
              <li><strong>Rotational Latency (RT):</strong> The time it takes for the disk to rotate to the correct position under the read/write head.</li>
              <li><strong>Transfer Time (TT):</strong> The time taken to transfer the data once the head is positioned correctly.</li>
              <li><strong>Controller Time (CT):</strong> Time required for the disk controller to process the request.</li>
              <li><strong>Queue Time (QT):</strong> Time spent waiting for disk access if multiple requests are pending.</li>
            </ul>
            These components together contribute to the total disk access time.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Components of Disk Access Time</h2>

          <h3 className="os-subtitle">1. Seek Time (ST)</h3>
          <p className="os-example">
            Seek time is the time required to move the disk's read/write head to the track where the data is stored. It can be broken into three categories:
            <ul>
              <li><strong>Best Case Seek Time:</strong> This occurs when the head is already positioned over the correct track, so the seek time is zero.</li>
              <li><strong>Average Case Seek Time:</strong> This is the typical seek time, calculated based on a uniform distribution of requests across tracks.</li>
              <li><strong>Worst Case Seek Time:</strong> The worst-case scenario occurs when the head has to move across the entire disk, from the innermost to the outermost track.</li>
            </ul>
          </p>

          <h3 className="os-subtitle">2. Rotational Latency (RT)</h3>
          <p className="os-example">
            Rotational latency is the time it takes for the disk platter to rotate the required sector under the read/write head. This depends on the disk's rotational speed (measured in revolutions per minute, or RPM). The latency can be divided into:
            <ul>
              <li><strong>Best Case Latency:</strong> This occurs when the sector we want to read is already under the read/write head. This would be the time for zero rotations.</li>
              <li><strong>Average Case Latency:</strong> The average time is usually calculated as half of the full rotation time, as the desired sector could be anywhere on the disk.</li>
              <li><strong>Worst Case Latency:</strong> This happens when the desired sector is on the opposite side of the disk, meaning the disk has to complete nearly a full rotation.</li>
            </ul>
            <p>
              Formula for rotational latency:<br />
              <strong>RT = 1 / (2 * RPM) </strong><br />
              For example, for a 7200 RPM disk, average rotational latency is:
              <br />
              <strong>RT = 1 / (2 * 7200) ≈ 4.17 ms</strong>
            </p>
          </p>

          <h3 className="os-subtitle">3. Transfer Time (TT)</h3>
          <p className="os-example">
            Transfer time refers to the time taken to read or write data once the head has been correctly positioned. It depends on the data transfer rate, which can be influenced by:
            <ul>
              <li><strong>Number of heads:</strong> The number of read/write heads on the disk can impact transfer speed.</li>
              <li><strong>Capacity of each frame:</strong> Larger frame sizes mean more data can be transferred in one operation.</li>
              <li><strong>Number of rotations per second (RPM):</strong> Faster rotation means more data is accessed in a shorter time.</li>
            </ul>
            Formula for Transfer Time:<br />
            <strong>TT = Data to be transferred / Transfer rate</strong>
          </p>

          <h3 className="os-subtitle">4. Disk Access Time Formula</h3>
          <p className="os-example">
            The total disk access time is the sum of the individual components. It can be calculated as:
            <br />
            <strong>
              Total Disk Access Time = Seek Time (ST) + Rotational Latency (RT) + Transfer Time (TT) + Controller Time (CT) + Queue Time (QT)
            </strong>
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Disk Access Time Breakdown</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20231007173007/disk1.png"
            alt="Disk Access Time Breakdown Diagram"
          />
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/disk-access-time-in-os/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default DiskAccessTime;
