import React from "react";
import "../../../../CSS/OS.css";

function UserVsKernelMode() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">User Mode vs Kernel Mode</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is User Mode?</h2>
          <p className="os-example">
            User mode is a restricted mode in which user applications run. In this mode, processes cannot directly interact with hardware or critical OS components. It provides an isolated environment to prevent user programs from causing system instability.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">What is Kernel Mode?</h2>
          <p className="os-example">
            Kernel mode is the privileged mode in which the operating system and device drivers run. In kernel mode, the process has full access to all system resources and can execute any CPU instruction, including privileged operations that could affect the system.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Key Differences Between User Mode and Kernel Mode</h2>
          <table className="os-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>User Mode</th>
                <th>Kernel Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Access Level</td>
                <td>Limited</td>
                <td>Full</td>
              </tr>
              <tr>
                <td>Running Code</td>
                <td>User applications</td>
                <td>OS kernel, device drivers</td>
              </tr>
              <tr>
                <td>Privileged Instructions</td>
                <td>Cannot execute</td>
                <td>Can execute</td>
              </tr>
              <tr>
                <td>System Calls</td>
                <td>Uses system calls</td>
                <td>No system calls required</td>
              </tr>
              <tr>
                <td>Error Impact</td>
                <td>Failure affects only user process</td>
                <td>Failure can crash the whole system</td>
              </tr>
              <tr>
                <td>CPU Instructions</td>
                <td>Limited instructions</td>
                <td>Full set of CPU instructions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">How Mode Switching Works</h2>
          <p className="os-example">
            Switching from user mode to kernel mode occurs when a system call or an exception is invoked, typically by a user application requiring OS services (e.g., reading a file, requesting I/O operations). The process switches back to user mode after the service is completed.
          </p>

          <pre className="os-example">
{`
User Program (User Mode)
    ↓
System Call (Switch to Kernel Mode)
    ↓
Kernel (Privileged Operations)
    ↓
Return to User Mode
`}
          </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: User Mode vs Kernel Mode</h2>
          <img
            src="https://i.imgur.com/CJrDHDz.png"
            alt="User Mode vs Kernel Mode Diagram"
            className="os-example"
          />
        </div>

        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/difference-between-user-mode-and-kernel-mode/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default UserVsKernelMode;
