import React from 'react'
import "../../../../../CSS/OS.css";

function SSTF() {
  return (
    <div className="os-section">
  <h2 className="os-subtitle">SSTF (Shortest Seek Time First) Disk Scheduling Algorithm</h2>
  
  <p className="os-example">
    The **SSTF (Shortest Seek Time First)** algorithm selects the request that is closest to the current head position, minimizing the seek time. This approach is more efficient than **FCFS**, as it tends to reduce the total seek time by always choosing the request with the shortest distance. However, SSTF can cause **starvation** for requests that are far away if there are a continuous stream of nearby requests.
    
    <br />
    **Key Points of SSTF:**
    <ul>
      <li>Reduces the total seek time compared to FCFS.</li>
      <li>Always selects the nearest request to the current head position.</li>
      <li>Can cause starvation for requests that are far away.</li>
      <li>Better than FCFS in terms of average seek time, but not always optimal.</li>
    </ul>
  </p>

  <h3 className="os-subtitle">Numerical Example</h3>
  <p className="os-example">
    Let's consider a disk with 200 tracks, and the disk arm is initially at track 50. We have the following disk access requests:
    <br />
    <strong>Requests: [ 98, 183, 37, 122, 14, 124, 65, 67 ]</strong>
    <br />
    The SSTF algorithm will choose the request that is closest to the current head position, and then proceed to the next closest request, and so on.
  </p>
  
  <h4 className="os-subtitle">Step-by-Step Calculation</h4>
  <p className="os-example">
    Let's calculate the seek time step by step, starting from the initial position (50):
  </p>

  <pre>{`
    Initial position: 50

    1. Move from 50 to 65 (closest), Seek time = |65 - 50| = 15
    2. Move from 65 to 67 (closest), Seek time = |67 - 65| = 2
    3. Move from 67 to 37 (closest), Seek time = |67 - 37| = 30
    4. Move from 37 to 14 (closest), Seek time = |37 - 14| = 23
    5. Move from 14 to 98 (closest), Seek time = |98 - 14| = 84
    6. Move from 98 to 122 (closest), Seek time = |122 - 98| = 24
    7. Move from 122 to 124 (closest), Seek time = |124 - 122| = 2
    8. Move from 124 to 183 (closest), Seek time = |183 - 124| = 59

    Total Seek Time = 15 + 2 + 30 + 23 + 84 + 24 + 2 + 59 = 239
  `}</pre>

  <h4 className="os-subtitle">Average Seek Time</h4>
  <p className="os-example">
    The **average seek time** is calculated by dividing the total seek time by the number of requests:
    <br />
    <strong>Average Seek Time = Total Seek Time / Number of Requests</strong>
    <br />
    **Average Seek Time = 239 / 8 = 29.875 tracks**
  </p>


    <img 
    className="smallImg"
      src="https://media.geeksforgeeks.org/wp-content/uploads/3333-4.png" 
      alt="SSTF Disk Scheduling Diagram"
      style={{margin:"20px auto", boxShadow:"5px 5px 5px black"}}
    />
    <button
      className="infoBtn"
      onClick={() =>
        window.open("https://www.geeksforgeeks.org/program-for-sstf-disk-scheduling-algorithm/")
      }
    >
      Learn More
    </button>

</div>
  )
}

export default SSTF
