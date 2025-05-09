import React from "react";
import "../../../../CSS/OS.css";

function DiskScheduling() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Disk Scheduling Algorithms</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is Disk Scheduling?</h2>
          <p className="os-example">
            Disk Scheduling refers to the method used by the operating system to manage the order in which disk access requests are served. Since the disk has a mechanical arm that moves to specific tracks to read/write data, the order of requests can affect the performance of the system. The goal is to minimize seek time and increase disk throughput.
          </p>
        </div>

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


        <div className="os-section">
          <h2 className="os-subtitle">Comparison of Disk Scheduling Algorithms</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Algorithm</th>
                <th>Strategy</th>
                <th>Average Seek Time</th>
                <th>Efficiency</th>
                <th>Starvation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FCFS</td>
                <td>Serves requests in the order they arrive</td>
                <td>High</td>
                <td>Low</td>
                <td>None</td>
              </tr>
              <tr>
                <td>SSTF</td>
                <td>Serves the closest request to the head</td>
                <td>Medium</td>
                <td>Medium</td>
                <td>Possible</td>
              </tr>
              <tr>
                <td>SCAN</td>
                <td>Moves in one direction, then reverses</td>
                <td>Low</td>
                <td>High</td>
                <td>Possible</td>
              </tr>
              <tr>
                <td>LOOK</td>
                <td>Stops at the last request in the direction</td>
                <td>Low</td>
                <td>High</td>
                <td>Possible</td>
              </tr>
              <tr>
                <td>CSCAN</td>
                <td>Moves in one direction, then jumps to the start</td>
                <td>Low</td>
                <td>High</td>
                <td>None</td>
              </tr>
              <tr>
                <td>CLOOK</td>
                <td>Moves in one direction, jumps to the closest request</td>
                <td>Low</td>
                <td>High</td>
                <td>None</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/disk-scheduling-algorithms/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default DiskScheduling;
