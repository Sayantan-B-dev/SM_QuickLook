import React from "react";
import "../../../../CSS/OS.css";

/*
  Component: OSTypesOverview
  Purpose: Detailed documentation and visual breakdown of different types of operating systems,
           including pros, cons, diagrams, examples, and use cases.
*/

function OSTypesOverview() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">🖥️ Types of Operating Systems</h1>

        {/* 1. Batch Operating System */}
        <div className="os-section">
          <h2 className="os-subtitle">📦 1. Batch Operating System</h2>
          <p className="os-example">
            In a Batch OS, similar tasks are grouped together into batches, and each batch is processed sequentially without user interaction. 
            Common in early mainframe systems.
          </p>
          <pre className="os-example">
{`
+-------------+     +-------------+     +-------------+
| Job 1       | --> | Job 2       | --> | Job 3       |
+-------------+     +-------------+     +-------------+
     |                   |                   |
     V                   V                   V
 Processed Sequentially by the Batch OS (No User Interaction)
`}
          </pre>
          <p className="os-example"><strong>✅ Advantages:</strong> Simple, efficient for repetitive jobs.<br />
            <strong>❌ Disadvantages:</strong> No real-time interaction, slow turnaround.<br />
            <strong>🛠️ Use Case:</strong> Payroll processing, bank statement generation.<br />
            <strong>💡 Example:</strong> IBM OS/360
          </p>
        </div>

        {/* 2. Multiprogramming OS */}
        <div className="os-section">
          <h2 className="os-subtitle">🔄 2. Multiprogramming Operating System</h2>
          <p className="os-example">
            Multiprogramming allows multiple programs to be loaded into memory at once. The OS switches the CPU to another program when one is waiting for I/O.
          </p>
          <pre className="os-example">
{`
+--------+     +--------+     +--------+
| Prog A | --> | Prog B | --> | Prog C |
+--------+     +--------+     +--------+
     ^               ^               ^
 CPU switches based on I/O wait or availability
`}
          </pre>
          <p className="os-example"><strong>✅ Advantages:</strong> Maximizes CPU utilization.<br />
            <strong>❌ Disadvantages:</strong> Complexity in job scheduling.<br />
            <strong>🛠️ Use Case:</strong> Scientific simulations.<br />
            <strong>💡 Example:</strong> UNIX
          </p>
        </div>

        {/* 3. Multitasking OS */}
        <div className="os-section">
          <h2 className="os-subtitle">🧠 3. Multitasking Operating System</h2>
          <p className="os-example">
            In multitasking OS, the CPU executes multiple tasks seemingly at the same time via time-sharing, offering interactivity to users.
          </p>
          <pre className="os-example">
{`
User Task: Typing a Doc   ⟶⟶⟶  CPU Executes Task A
User Task: Listening Music ⟶⟶⟶  CPU Executes Task B
Switches Rapidly (Time Slice = 10ms)
`}
          </pre>
          <p className="os-example"><strong>✅ Advantages:</strong> Real-time user interaction.<br />
            <strong>❌ Disadvantages:</strong> Context switching overhead.<br />
            <strong>🛠️ Use Case:</strong> Everyday computing, desktops, laptops.<br />
            <strong>💡 Example:</strong> Windows, macOS
          </p>
        </div>

        {/* 4. Real-Time OS */}
        <div className="os-section">
          <h2 className="os-subtitle">⏱️ 4. Real-Time Operating System (RTOS)</h2>
          <p className="os-example">
            RTOS processes input and produces output within a strict time deadline. Used in mission-critical systems like space and medical devices.
          </p>
          <pre className="os-example">
{`
Sensor Input ➝ [RTOS] ➝ Immediate Action (e.g., Airbag Deploy)

Hard RTOS: No delay allowed
Soft RTOS: Minor delays tolerable
`}
          </pre>
          <p className="os-example"><strong>✅ Advantages:</strong> Predictable and deterministic.<br />
            <strong>❌ Disadvantages:</strong> Limited multitasking, expensive.<br />
            <strong>🛠️ Use Case:</strong> Industrial control, aerospace, robotics.<br />
            <strong>💡 Example:</strong> VxWorks, FreeRTOS
          </p>
        </div>

        {/* 5. Distributed OS */}
        <div className="os-section">
          <h2 className="os-subtitle">🌐 5. Distributed Operating System</h2>
          <p className="os-example">
            In a distributed OS, multiple independent systems (nodes) are connected via a network and appear as a single cohesive system to the user.
          </p>
          <pre className="os-example">
{`
[Node A] --\            /--> [File Service]
[Node B] --- NETWORK --\--> [Database Service]
[Node C] --/            \--> [Print Service]
(Act as one system)
`}
          </pre>
          <p className="os-example"><strong>✅ Advantages:</strong> Resource sharing, scalability.<br />
            <strong>❌ Disadvantages:</strong> Complexity in coordination.<br />
            <strong>🛠️ Use Case:</strong> Cloud computing, cluster computing.<br />
            <strong>💡 Example:</strong> Amoeba, Plan 9
          </p>
        </div>

        {/* 6. Clustered OS */}
        <div className="os-section">
          <h2 className="os-subtitle">🖧 6. Clustered Operating System</h2>
          <p className="os-example">
            Clustered OS manages a group of linked computers (cluster) that work together as a single system. It improves availability and load balancing.
          </p>
          <pre className="os-example">
{`
+--------+     +--------+     +--------+
| Node 1 | <-> | Node 2 | <-> | Node 3 |
+--------+     +--------+     +--------+
     | Clustered for Fault Tolerance & Load Balancing
`}
          </pre>
          <p className="os-example"><strong>✅ Advantages:</strong> High availability, redundancy.<br />
            <strong>❌ Disadvantages:</strong> Expensive, complex setup.<br />
            <strong>🛠️ Use Case:</strong> Web servers, scientific computation.<br />
            <strong>💡 Example:</strong> Windows Server Failover Clustering
          </p>
        </div>

        {/* 7. Embedded OS */}
        <div className="os-section">
          <h2 className="os-subtitle">🔧 7. Embedded Operating System</h2>
          <p className="os-example">
            Embedded OS is designed to run on small machines like microcontrollers with limited resources. They are task-specific and very lightweight.
          </p>
          <pre className="os-example">
{`
[Hardware Chip]
     |
 [Embedded OS]
     |
[Fixed Application]
(e.g., Washing Machine Logic)
`}
          </pre>
          <p className="os-example"><strong>✅ Advantages:</strong> Lightweight, real-time performance.<br />
            <strong>❌ Disadvantages:</strong> Limited user interface, not flexible.<br />
            <strong>🛠️ Use Case:</strong> IoT devices, appliances, cars.<br />
            <strong>💡 Example:</strong> TinyOS, Embedded Linux, RTEMS
          </p>
        </div>

        {/* Know More Button */}
        <button
          className="infoBtn"
          onClick={() =>
            window.open("http://geeksforgeeks.org/types-of-operating-systems/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default OSTypesOverview;
