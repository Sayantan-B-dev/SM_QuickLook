import React from 'react'
import "../../../../../CSS/OS.css";

function CLOOK() {
  return (
    <div className="os-section">
  <h2 className="os-subtitle">CLOOK (Circular LOOK) Disk Scheduling Algorithm</h2>

  <p className="os-example">
    The **CLOOK** (Circular LOOK) algorithm is similar to the **LOOK** algorithm but with one important difference: when the disk arm reaches the end of the disk, it does not reverse direction. Instead, the disk arm goes back to the beginning of the disk, as if it is making a circular movement, and continues servicing the requests from the beginning in the same direction.
    
    <br />
    **Key Points of CLOOK:**
    <ul>
      <li>The disk arm moves in one direction to serve all the requests until it reaches the last request in that direction.</li>
      <li>Once the last request is serviced, the arm moves to the beginning of the disk and continues in the same direction to service the remaining requests.</li>
      <li>CLOOK provides better performance than LOOK in scenarios where the requests are spread out over the disk.</li>
      <li>It eliminates the waiting time for the arm to reverse direction, providing faster servicing in certain cases.</li>
    </ul>
  </p>

  <h3 className="os-subtitle">Numerical Example</h3>
  <p className="os-example">
    Let's consider a disk with 200 tracks, and the disk arm is initially at track 50. We have the following disk access requests:
    <br />
    <strong>Requests: [ 98, 183, 37, 122, 14, 124, 65, 67 ]</strong>
    <br />
    The CLOOK algorithm will first move the disk arm in one direction (either towards the highest or lowest track), servicing requests in that direction. Once it reaches the highest or lowest request, it will jump to the opposite end and continue servicing the remaining requests in the same direction.
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
    8. Once the arm reaches the highest track (200), it jumps to track 14 (the lowest request) to continue servicing the remaining requests.
    9. Move from 200 to 14, Seek time = |200 - 14| = 186
    10. Move from 14 to 37, Seek time = |37 - 14| = 23

    Total Seek Time = 15 + 2 + 31 + 24 + 2 + 59 + 186 + 23 = 342
  `}</pre>

  <h4 className="os-subtitle">Average Seek Time</h4>
  <p className="os-example">
    The **average seek time** is calculated by dividing the total seek time by the number of requests:
    <br />
    <strong>Average Seek Time = Total Seek Time / Number of Requests</strong>
    <br />
    **Average Seek Time = 342 / 9 = 38 tracks**
  </p>

  <img 
  className="smallImg"
    src="https://media.geeksforgeeks.org/wp-content/uploads/20190912194433/fcfs-3.jpg" 
    alt="CLOOK Disk Scheduling Diagram" 
    style={{margin:"20px auto", boxShadow:"5px 5px 5px black"}}
  />

  <button
    className="infoBtn"
    onClick={() =>
      window.open("https://www.geeksforgeeks.org/c-look-disk-scheduling-algorithm/")
    }
  >
    Learn More
  </button>
</div>
  )
}

export default CLOOK
