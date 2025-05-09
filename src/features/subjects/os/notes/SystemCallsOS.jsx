import React from "react";
import "../../../../CSS/OS.css";

function SystemCallsOS() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">System Calls in Operating System</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What are System Calls?</h2>
          <p className="os-example">
            System calls provide the interface between a process and the operating system. When a program wants to access hardware (disk, memory, etc.) or perform low-level tasks (creating files, managing processes), it must use a system call. These are essential to allow user-level programs to interact safely with kernel-level resources.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Types of System Calls with Explanation</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">1. Process Control</h3>
              <p className="os-example">System calls like <code>fork()</code>, <code>exec()</code>, <code>exit()</code>, and <code>wait()</code> help manage the creation and termination of processes.</p>
              <p className="os-example">For example, <code>fork()</code> is used to create a new process, <code>exec()</code> is used to load a new program into a process, and <code>wait()</code> is used by the parent to wait for child termination.</p>
            </div>
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">2. File Management</h3>
              <p className="os-example">Includes calls like <code>open()</code>, <code>read()</code>, <code>write()</code>, <code>close()</code>, and <code>lseek()</code>.</p>
              <p className="os-example">They allow programs to access and manipulate files: opening, reading/writing content, seeking positions, and closing the file descriptor.</p>
            </div>
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">3. Device Management</h3>
              <p className="os-example">Examples: <code>ioctl()</code>, <code>read()</code>, <code>write()</code>.</p>
              <p className="os-example">Used to request or release devices, read/write data, or manage I/O operations on hardware devices.</p>
            </div>
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">4. Information Maintenance</h3>
              <p className="os-example">Examples: <code>getpid()</code>, <code>alarm()</code>, <code>time()</code>.</p>
              <p className="os-example">These calls gather or update system information such as process ID, time tracking, and alarms.</p>
            </div>
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">5. Communication</h3>
              <p className="os-example">Examples: <code>pipe()</code>, <code>shmget()</code>, <code>mmap()</code>, <code>msgsnd()</code>.</p>
              <p className="os-example">Support inter-process communication (IPC) by using pipes, message queues, shared memory, or memory mapping techniques.</p>
            </div>
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">6. Protection</h3>
              <p className="os-example">Examples: <code>chmod()</code>, <code>umask()</code>, <code>setuid()</code>.</p>
              <p className="os-example">Allow modification of access permissions, user IDs, and security settings for protected execution.</p>
            </div>
          </div>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">How System Calls Work with the Kernel</h2>
          <p className="os-example">
            System calls act as a controlled gateway to the kernel. When a user program needs to perform a privileged task (e.g., access hardware), it makes a system call. This switches the execution mode from user mode to kernel mode using a software interrupt or trap instruction. After the kernel finishes the requested operation, it returns control back to the user space.
          </p>

          <pre className="os-example">
{`
User Program (e.g., calling write())
    ↓
System Call Interface (Library Wrapper)
    ↓
Trap to Kernel (Mode Switch to Kernel Mode)
    ↓
Kernel executes requested service
    ↓
Control returns to User Program
`}
          </pre>
        </div>

        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/introduction-of-system-call/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default SystemCallsOS;