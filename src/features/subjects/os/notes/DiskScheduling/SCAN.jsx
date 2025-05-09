import React from 'react'
import "../../../../../CSS/OS.css";

function SCAN() {
  return (
    <div className="os-section">
  <h2 className="os-subtitle">SCAN Disk Scheduling Algorithm</h2>
  
  <p className="os-example">
    The **SCAN** algorithm moves the disk arm towards the end of the disk, servicing requests as it goes, and then reverses direction at the end of the disk to service any remaining requests. This is sometimes called the **Elevator Algorithm**, as it behaves similarly to an elevator moving up and down between floors. SCAN provides better performance than **FCFS** and **SSTF**, especially when requests are uniformly distributed.
    
    <br />
    **Key Points of SCAN:**
    <ul>
      <li>Moves in one direction to service requests until it reaches the end of the disk, then reverses direction.</li>
      <li>Reduces the overall seek time compared to FCFS and SSTF.</li>
      <li>Requires knowledge of the disk's end points (start and end of the tracks).</li>
      <li>Can have longer delays for requests near the end of the disk if they are on the opposite side of the initial movement.</li>
    </ul>
  </p>

  <h3 className="os-subtitle">Numerical Example</h3>
  <p className="os-example">
    Let's consider a disk with 200 tracks, and the disk arm is initially at track 50. We have the following disk access requests:
    <br />
    <strong>Requests: [ 98, 183, 37, 122, 14, 124, 65, 67 ]</strong>
    <br />
    The SCAN algorithm will start at the initial position and move towards one end of the disk, servicing all requests in that direction. Once it reaches the end, it will reverse direction and service the remaining requests.
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
    7. Reach the end of the disk (200), Seek time = |200 - 183| = 17
    8. Reversing direction to 14, Seek time = |200 - 14| = 186
    9. Move from 14 to 37, Seek time = |37 - 14| = 23

    Total Seek Time = 15 + 2 + 31 + 24 + 2 + 59 + 17 + 186 + 23 = 359
  `}</pre>

  <h4 className="os-subtitle">Average Seek Time</h4>
  <p className="os-example">
    The **average seek time** is calculated by dividing the total seek time by the number of requests:
    <br />
    <strong>Average Seek Time = Total Seek Time / Number of Requests</strong>
    <br />
    **Average Seek Time = 359 / 9 = 39.89 tracks**
  </p>

  <img 
  className="smallImg"
    src="https://media.geeksforgeeks.org/wp-content/uploads/20190727175932/fcfs-2.jpg" 
    alt="SCAN Disk Scheduling Diagram" 
    style={{margin:"20px auto", boxShadow:"5px 5px 5px black"}}
  />
  
  <button
    className="infoBtn"
    onClick={() =>
      window.open("https://www.geeksforgeeks.org/scan-elevator-disk-scheduling-algorithms/")
    }
  >
    Learn More
  </button>
</div>
  )
}

export default SCAN
