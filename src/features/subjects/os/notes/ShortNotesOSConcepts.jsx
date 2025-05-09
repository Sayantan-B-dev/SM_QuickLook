import React from "react";
import "../../../../CSS/OS.css";

function ShortNotesOSConcepts() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Short Notes on Important OS Concepts</h1>

        {/* PCB */}
        <div className="os-section">
          <h2 className="os-subtitle">Process Control Block (PCB)</h2>
          <p className="os-example">
            PCB is a data structure maintained by the OS for every process. It contains:
            <ul>
              <li>Process ID</li>
              <li>Process State</li>
              <li>Program Counter</li>
              <li>CPU Registers</li>
              <li>Memory Management Info (base, limit, page tables)</li>
              <li>Accounting Info (CPU used, job priority)</li>
              <li>I/O Status Info</li>
            </ul>
          </p>
        </div>

        {/* Process States */}
        <div className="os-section">
          <h2 className="os-subtitle">Process States</h2>
          <p className="os-example">
            A process moves through states during its life cycle:
            <ul>
              <li><strong>New:</strong> Process is being created</li>
              <li><strong>Ready:</strong> Waiting to be assigned to a CPU</li>
              <li><strong>Running:</strong> Instructions are being executed</li>
              <li><strong>Waiting:</strong> Waiting for some event (e.g., I/O)</li>
              <li><strong>Terminated:</strong> Process is finished</li>
              <li><strong>Suspended:</strong> Process is paused or swapped out</li>
            </ul>
          </p>
        </div>

        {/* System Call */}
        <div className="os-section">
          <h2 className="os-subtitle">System Call</h2>
          <p className="os-example">
            System calls allow user-level processes to request services from the kernel. Categories include:
            <ul>
              <li><strong>Process Control:</strong> fork, exec, exit</li>
              <li><strong>File Management:</strong> open, read, write, close</li>
              <li><strong>Device Management:</strong> ioctl, read, write</li>
              <li><strong>Information Maintenance:</strong> getpid, alarm</li>
              <li><strong>Communication:</strong> pipe, shmget, socket</li>
            </ul>
          </p>
        </div>

        {/* Demand Paging */}
        <div className="os-section">
          <h2 className="os-subtitle">Demand Paging</h2>
          <p className="os-example">
            Only loads required memory pages into RAM when needed. Pages not in memory cause a **page fault**, and the OS loads them from secondary storage. Reduces memory usage and enables larger programs to run.
          </p>
        </div>

        {/* Virtual Memory */}
        <div className="os-section">
          <h2 className="os-subtitle">Virtual Memory</h2>
          <p className="os-example">
            It allows execution of processes that may not be fully in memory. Combines physical memory and disk to simulate more RAM. Techniques include:
            <ul>
              <li>Paging</li>
              <li>Segmentation</li>
              <li>Demand Paging</li>
            </ul>
            It provides:
            <ul>
              <li>Logical address space larger than physical memory</li>
              <li>Isolation between processes</li>
              <li>Efficient memory management</li>
            </ul>
          </p>
        </div>

        {/* chmod */}
        <div className="os-section">
          <h2 className="os-subtitle">chmod Command (Linux)</h2>
          <p className="os-example">
            Changes file/directory permissions.
            <br />
            <pre>{`chmod [permissions] [file]`}</pre>
            Permissions:
            <ul>
              <li><strong>r = 4</strong> (read)</li>
              <li><strong>w = 2</strong> (write)</li>
              <li><strong>x = 1</strong> (execute)</li>
            </ul>
            <pre>{`chmod 755 file.txt`}</pre>
            Means: owner can read/write/execute, others can read/execute.
          </p>
        </div>

        {/* Deadlock */}
        <div className="os-section">
          <h2 className="os-subtitle">Deadlock</h2>
          <p className="os-example">
            A situation where processes wait indefinitely for resources held by each other.
            <br />
            <strong>Necessary conditions:</strong>
            <ul>
              <li>Mutual Exclusion</li>
              <li>Hold and Wait</li>
              <li>No Preemption</li>
              <li>Circular Wait</li>
            </ul>
            <strong>Handling Strategies:</strong>
            <ul>
              <li>Deadlock Prevention</li>
              <li>Deadlock Avoidance (e.g., Banker's algorithm)</li>
              <li>Deadlock Detection and Recovery</li>
              <li>Ignore (ostrich algorithm)</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShortNotesOSConcepts;
