import React from "react";
import "../../../../CSS/OS.css";

function UserVsKernelLevelThreads() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">User-Level Threads vs Kernel-Level Threads</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What are User-Level Threads?</h2>
          <p className="os-example">
            User-level threads (ULTs) are managed entirely by user-level libraries and are not known to the operating system (OS). The OS kernel only schedules the process, not the individual threads within that process. This means that thread management (like scheduling, creation, synchronization) is handled in user space without kernel involvement.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">What are Kernel-Level Threads?</h2>
          <p className="os-example">
            Kernel-level threads (KLTs) are managed by the operating system kernel. The kernel knows about each thread and handles their scheduling, creation, and termination. Each thread can be scheduled independently, even if multiple threads belong to the same process. This allows better utilization of multi-core processors.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Key Differences Between User-Level and Kernel-Level Threads</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>User-Level Threads (ULT)</th>
                <th>Kernel-Level Threads (KLT)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Management</td>
                <td>Managed by user-level libraries (e.g., pthreads).</td>
                <td>Managed by the operating system kernel.</td>
              </tr>
              <tr>
                <td>Visibility to Kernel</td>
                <td>Not visible to the kernel; the kernel only schedules processes.</td>
                <td>The kernel is aware of all threads and schedules them individually.</td>
              </tr>
              <tr>
                <td>Thread Scheduling</td>
                <td>Scheduling is done by user-level thread libraries, not the kernel.</td>
                <td>The kernel schedules each thread independently, allowing true multitasking.</td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>Faster context switching due to absence of kernel involvement.</td>
                <td>Slower context switching due to kernel involvement, but better multitasking.</td>
              </tr>
              <tr>
                <td>Multicore Usage</td>
                <td>Cannot efficiently utilize multiple cores; only one thread per process can run at a time.</td>
                <td>Can utilize multiple cores for parallel execution of threads within the same process.</td>
              </tr>
              <tr>
                <td>Blocking</td>
                <td>If one thread blocks (e.g., I/O), all threads in the process block.</td>
                <td>If one thread blocks, other threads in the same process can continue execution.</td>
              </tr>
              <tr>
                <td>Creation Overhead</td>
                <td>Low overhead for creating threads.</td>
                <td>Higher overhead due to kernel involvement in thread creation.</td>
              </tr>
              <tr>
                <td>Example</td>
                <td>Modern implementations of user-space threading libraries (e.g., POSIX threads).</td>
                <td>Implemented in modern operating systems like Linux with native threads.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Advantages and Disadvantages</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">Advantages of User-Level Threads</h3>
              <ul className="os-example">
                <li>Low overhead for creating and switching between threads.</li>
                <li>Better for simpler applications where process management is easy.</li>
                <li>Faster context switching due to no kernel involvement.</li>
              </ul>
            </div>
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">Disadvantages of User-Level Threads</h3>
              <ul className="os-example">
                <li>Cannot utilize multiple cores efficiently.</li>
                <li>If one thread blocks, all threads in the process are blocked.</li>
                <li>Limited in terms of true concurrency due to kernel not recognizing threads.</li>
              </ul>
            </div>
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">Advantages of Kernel-Level Threads</h3>
              <ul className="os-example">
                <li>Kernel can manage threads independently, allowing true multitasking.</li>
                <li>Can take full advantage of multiple processors/cores.</li>
                <li>Non-blocking threads allow efficient execution of concurrent tasks.</li>
              </ul>
            </div>
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">Disadvantages of Kernel-Level Threads</h3>
              <ul className="os-example">
                <li>Higher overhead in thread management and context switching.</li>
                <li>Slower thread creation and destruction due to kernel involvement.</li>
                <li>Complexity in scheduling and management.</li>
              </ul>
            </div>
          </div>
        </div>

        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/user-vs-kernel-level-thread/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default UserVsKernelLevelThreads;
