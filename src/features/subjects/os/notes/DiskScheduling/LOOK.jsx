import React from 'react'
import "../../../../../CSS/OS.css";

function LOOK() {
  return (
    <div className="os-section">
  <h2 className="os-subtitle">LOOK Disk Scheduling Algorithm</h2>

  <p className="os-example">
    The **LOOK** algorithm is similar to SCAN, but instead of going all the way to the end of the disk, it stops at the last request in the current direction. Once the disk arm reaches the last request, it reverses direction and services the remaining requests. The LOOK algorithm tends to reduce unnecessary seek time compared to SCAN, as it doesn't travel all the way to the end of the disk.
    
    <br />
    **Key Points of LOOK:**
    <ul>
      <li>Moves in one direction and stops at the last request in that direction.</li>
      <li>Reduces unnecessary seek time by not going all the way to the end of the disk.</li>
      <li>Less overhead than SCAN, as it doesn't go to the end of the disk if not needed.</li>
      <li>More efficient than FCFS and SSTF when there are requests located near the start and end of the disk.</li>
    </ul>
  </p>

  <h3 className="os-subtitle">Numerical Example</h3>
  <p className="os-example">
    Let's consider a disk with 200 tracks, and the disk arm is initially at track 50. We have the following disk access requests:
    <br />
    <strong>Requests: [ 98, 183, 37, 122, 14, 124, 65, 67 ]</strong>
    <br />
    The LOOK algorithm will start at the initial position and move towards the nearest end of the disk, servicing all requests in that direction. Once it reaches the last request in that direction, it will reverse direction and service the remaining requests.
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
    7. Reaching the last request in the upward direction, the arm reverses.
    8. Move from 183 to 14 (reverse direction), Seek time = |183 - 14| = 169
    9. Move from 14 to 37, Seek time = |37 - 14| = 23

    Total Seek Time = 15 + 2 + 31 + 24 + 2 + 59 + 169 + 23 = 325
  `}</pre>

  <h4 className="os-subtitle">Average Seek Time</h4>
  <p className="os-example">
    The **average seek time** is calculated by dividing the total seek time by the number of requests:
    <br />
    <strong>Average Seek Time = Total Seek Time / Number of Requests</strong>
    <br />
    **Average Seek Time = 325 / 9 = 36.11 tracks**
  </p>

  <img 
  className="smallImg"
    src="https://media.geeksforgeeks.org/wp-content/uploads/20190830184834/fcfs-1.png" 
    alt="LOOK Disk Scheduling Diagram" 
    style={{margin:"20px auto", boxShadow:"5px 5px 5px black"}}
  />
  
  <button
    className="infoBtn"
    onClick={() =>
      window.open("https://www.geeksforgeeks.org/look-disk-scheduling-algorithm/")
    }
  >
    Learn More
  </button>
</div>
  )
}

export default LOOK
