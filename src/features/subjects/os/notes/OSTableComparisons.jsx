import React from "react";
import "../../../../CSS/OS.css";

function OSTableComparisons() {
  return (
     <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">OS Comparison Tables</h1>

        {/* Process vs Thread */}
        <div className="os-section">
          <h2 className="os-subtitle">1. Process vs Thread</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Process</th>
                <th>Thread</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>Independent program in execution</td>
                <td>Lightweight unit of a process</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>Separate memory space</td>
                <td>Shares memory of the process</td>
              </tr>
              <tr>
                <td>Overhead</td>
                <td>High</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Communication</td>
                <td>Inter-process communication (IPC)</td>
                <td>Direct communication via shared memory</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Monolithic vs Microkernel */}
        <div className="os-section">
          <h2 className="os-subtitle">2. Monolithic Kernel vs Microkernel</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Monolithic Kernel</th>
                <th>Microkernel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Structure</td>
                <td>All services in one space</td>
                <td>Minimal services in kernel, others in user space</td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>Faster due to direct service calls</td>
                <td>Slower due to user-kernel switching</td>
              </tr>
              <tr>
                <td>Stability</td>
                <td>Less secure and stable</td>
                <td>More secure, better isolation</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Paging vs Segmentation */}
        <div className="os-section">
          <h2 className="os-subtitle">3. Paging vs Segmentation</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Paging</th>
                <th>Segmentation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Division</td>
                <td>Memory divided into fixed-size pages</td>
                <td>Memory divided into variable-size segments</td>
              </tr>
              <tr>
                <td>Logical view</td>
                <td>Not visible to the user</td>
                <td>Visible and logical division</td>
              </tr>
              <tr>
                <td>Fragmentation</td>
                <td>Internal fragmentation</td>
                <td>External fragmentation</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Internal vs External Fragmentation */}
        <div className="os-section">
          <h2 className="os-subtitle">4. Internal vs External Fragmentation</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Internal Fragmentation</th>
                <th>External Fragmentation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>Unused space within allocated block</td>
                <td>Unused space between allocated blocks</td>
              </tr>
              <tr>
                <td>Cause</td>
                <td>Fixed-size partitioning</td>
                <td>Variable-size partitioning</td>
              </tr>
              <tr>
                <td>Solution</td>
                <td>Paging</td>
                <td>Compaction</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Preemptive vs Non-Preemptive Scheduling */}
        <div className="os-section">
          <h2 className="os-subtitle">5. Preemptive vs Non-Preemptive Scheduling</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Preemptive</th>
                <th>Non-Preemptive</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Control</td>
                <td>OS can interrupt and switch processes</td>
                <td>Process runs until it finishes</td>
              </tr>
              <tr>
                <td>Response time</td>
                <td>Faster response</td>
                <td>Slower for long jobs</td>
              </tr>
              <tr>
                <td>Complexity</td>
                <td>More complex</td>
                <td>Simple to implement</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Multiprogramming vs Multitasking */}
        <div className="os-section">
          <h2 className="os-subtitle">6. Multiprogramming vs Multitasking</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Multiprogramming</th>
                <th>Multitasking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>Multiple programs in memory</td>
                <td>User can perform multiple tasks simultaneously</td>
              </tr>
              <tr>
                <td>Focus</td>
                <td>CPU utilization</td>
                <td>User interactivity</td>
              </tr>
              <tr>
                <td>OS Type</td>
                <td>Batch OS</td>
                <td>Time-sharing OS</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Spatial vs Temporal Locality */}
        <div className="os-section">
          <h2 className="os-subtitle">7. Spatial vs Temporal Locality</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Spatial Locality</th>
                <th>Temporal Locality</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>Accessing nearby memory locations</td>
                <td>Accessing the same memory repeatedly</td>
              </tr>
              <tr>
                <td>Example</td>
                <td>Array traversal</td>
                <td>Looping on a variable</td>
              </tr>
              <tr>
                <td>Usage</td>
                <td>Prefetching blocks</td>
                <td>Cache management</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="os-section">
          <h2 className="os-subtitle">8. Mutex vs Binary Semaphore</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Mutex</th>
                <th>Binary Semaphore</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ownership</td>
                <td>Only the thread that locks it can unlock it</td>
                <td>No ownership; any thread can signal</td>
              </tr>
              <tr>
                <td>Use case</td>
                <td>Used for mutual exclusion only</td>
                <td>Used for mutual exclusion or signaling</td>
              </tr>
              <tr>
                <td>Value Range</td>
                <td>Only locked (1) or unlocked (0)</td>
                <td>0 or 1, acts as flag</td>
              </tr>
              <tr>
                <td>Atomicity</td>
                <td>Always atomic</td>
                <td>May require atomic implementation</td>
              </tr>
              <tr>
                <td>Priority Inversion Handling</td>
                <td>Supports protocols like Priority Inheritance</td>
                <td>No built-in priority management</td>
              </tr>
              <tr>
                <td>Typical Example</td>
                <td>Thread-safe locking (e.g., in POSIX threads)</td>
                <td>Process communication or signaling</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OSTableComparisons;
