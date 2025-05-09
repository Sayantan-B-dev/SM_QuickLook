import React from 'react'
import "../../../../../CSS/OS.css";

function CSCAN() {
  return (
<div className="os-section">
  <h2 className="os-subtitle">C-SCAN (Circular SCAN) Disk Scheduling Algorithm</h2>

  <p className="os-example">
    The **C-SCAN** (Circular SCAN) algorithm is a variation of the SCAN algorithm. Instead of reversing direction once the disk arm reaches the end, C-SCAN moves the disk arm back to the beginning (track 0) after reaching the end of the disk. It then continues servicing requests in the same direction as before. This approach provides a more uniform waiting time for requests, especially for requests near the end of the disk.
    
    <br />
    **Key Points of C-SCAN:**
    <ul>
      <li>Moves in one direction servicing requests until it reaches the end of the disk.</li>
      <li>Once the end is reached, it moves back to the beginning of the disk and continues in the same direction.</li>
      <li>Reduces the average wait time for requests near the end of the disk compared to SCAN.</li>
      <li>Provides a more predictable response time for all requests.</li>
    </ul>
  </p>

  <h3 className="os-subtitle">Numerical Example</h3>
  <p className="os-example">
    Let's consider a disk with 200 tracks, and the disk arm is initially at track 50. We have the following disk access requests:
    <br />
    <strong>Requests: [ 98, 183, 37, 122, 14, 124, 65, 67 ]</strong>
    <br />
    The C-SCAN algorithm will start at the initial position and move in one direction, servicing all requests, until it reaches the end. Once it reaches the end, the disk arm moves back to the starting position (track 0) and continues servicing requests in the same direction.
  </p>

  <h4 className="os-subtitle">Step-by-Step Calculation</h4>
  <p className="os-example">
    Let's calculate the seek time step by step, starting from the initial position (50). Assume we move towards the highest track number first (200).
  </p>

  <pre>{`
    Initial position: 50

    1. Move from 50 to 65 (upward), Seek time = |65 - 50| = 15
    2. Move from 65 to 67, Seek time = |67 - 65| = 2
    3. Move from 67 to 98, Seek time = |98 - 67| = 31
    4. Move from 98 to 122, Seek time = |122 - 98| = 24
    5. Move from 122 to 124, Seek time = |124 - 122| = 2
    6. Move from 124 to 183, Seek time = |183 - 124| = 59
    7. Reaching the last request in the upward direction, the arm moves to track 200 (end of the disk).
    8. Move from 200 to 0 (circular movement), Seek time = |200 - 0| = 200
    9. Move from 0 to 14, Seek time = |14 - 0| = 14
    10. Move from 14 to 37, Seek time = |37 - 14| = 23

    Total Seek Time = 15 + 2 + 31 + 24 + 2 + 59 + 200 + 14 + 23 = 370
  `}</pre>

  <h4 className="os-subtitle">Average Seek Time</h4>
  <p className="os-example">
    The **average seek time** is calculated by dividing the total seek time by the number of requests:
    <br />
    <strong>Average Seek Time = Total Seek Time / Number of Requests</strong>
    <br />
    **Average Seek Time = 370 / 9 = 41.11 tracks**
  </p>

  <img 
  className="smallImg"
    src="https://media.geeksforgeeks.org/wp-content/uploads/20190820015715/fcfs2.png" 
    alt="C-SCAN Disk Scheduling Diagram" 
    style={{margin:"20px auto", boxShadow:"5px 5px 5px black"}}
  />

  <button
    className="infoBtn"
    onClick={() =>
      window.open("http://geeksforgeeks.org/c-scan-disk-scheduling-algorithm/")
    }
  >
    Learn More
  </button>
</div>
  )
}

export default CSCAN
