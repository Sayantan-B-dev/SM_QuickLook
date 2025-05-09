import React from "react";
import "../../../../../CSS/OS.css";

function FCFS() {
  return (
    <div className="os-section">
  <h2 className="os-subtitle">FCFS (First-Come, First-Served) Disk Scheduling Algorithm</h2>
  
  <p className="os-example">
    The **FCFS (First-Come, First-Served)** disk scheduling algorithm is the simplest method. It serves requests in the order they are received, without any prioritization or optimization. Although easy to implement, FCFS can result in high average seek time, especially when requests are far apart.

    <br />
    **Key Points of FCFS:**
    <ul>
      <li>Simple to implement and understand.</li>
      <li>Requests are processed in the order they are received.</li>
      <li>Does not optimize for seek time or throughput.</li>
      <li>Can lead to high average seek time if requests are scattered across the disk.</li>
    </ul>
  </p>

  <h3 className="os-subtitle">Numerical Example</h3>
  <p className="os-example">
    Consider a disk with 200 tracks, and the disk arm is initially at track 50. We have the following disk access requests in the order they arrive:
    <br />
    <strong>Requests: [ 98, 183, 37, 122, 14, 124, 65, 67 ]</strong>
    <br />
    The FCFS algorithm will serve the requests in the order they are listed. The total seek time is calculated as the sum of the absolute differences between consecutive track positions.
  </p>
  
  <h4 className="os-subtitle">Calculation of Seek Time</h4>
  <p className="os-example">
    Let's calculate the total seek time step by step:
  </p>

  <pre>{`
    Initial position: 50
    1. Move from 50 to 98, Seek time = |98 - 50| = 48
    2. Move from 98 to 183, Seek time = |183 - 98| = 85
    3. Move from 183 to 37, Seek time = |183 - 37| = 146
    4. Move from 37 to 122, Seek time = |122 - 37| = 85
    5. Move from 122 to 14, Seek time = |122 - 14| = 108
    6. Move from 14 to 124, Seek time = |124 - 14| = 110
    7. Move from 124 to 65, Seek time = |124 - 65| = 59
    8. Move from 65 to 67, Seek time = |67 - 65| = 2

    Total Seek Time = 48 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 643
  `}</pre>

  <h4 className="os-subtitle">Average Seek Time</h4>
  <p className="os-example">
    The **average seek time** is calculated by dividing the total seek time by the number of requests:
    <br />
    <strong>Average Seek Time = Total Seek Time / Number of Requests</strong>
    <br />
    **Average Seek Time = 643 / 8 = 80.375 tracks**
  </p>
    <img 
    className="smallImg"
      src="https://media.geeksforgeeks.org/wp-content/uploads/20190727015526/fcfs-1.jpg" 
      alt="FCFS Disk Scheduling Diagram"
      style={{margin:"20px auto", boxShadow:"5px 5px 5px black"}}
    />
    <button
      className="infoBtn"
      onClick={() =>
        window.open("https://www.geeksforgeeks.org/fcfs-disk-scheduling-algorithms/")
      }
    >
      Learn More
    </button>


</div>
  )
}

export default FCFS
