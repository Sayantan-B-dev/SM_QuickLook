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
            Disk Scheduling refers to the method used by the operating system to
            manage the order in which disk access requests are served. Since the
            disk has a mechanical arm that moves to specific tracks to
            read/write data, the order of requests can affect the performance of
            the system. The goal is to minimize seek time and increase disk
            throughput.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">
            Comparison of Disk Scheduling Algorithms
          </h2>
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
            window.open(
              "https://www.geeksforgeeks.org/disk-scheduling-algorithms/"
            )
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default DiskScheduling;
