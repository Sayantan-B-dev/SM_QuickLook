import React from "react";
import "../../../../CSS/OS.css";

function DeadlockHandling() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Deadlock Handling Methods</h1>

        {/* Deadlock Ignorance */}
        <div className="os-section">
          <h2 className="os-subtitle">1. Deadlock Ignorance</h2>
          <p className="os-example">
            Deadlock Ignorance is also called the **"Ostrich Algorithm"**, where the operating system **assumes deadlocks are rare** and ignores them. This is commonly used in general-purpose systems where:
            <br /><br />
            ✅ Deadlocks occur very rarely<br />
            ✅ Cost of prevention is higher than the occasional deadlock<br /><br />
            <strong>Example:</strong> Many UNIX-based systems choose to ignore deadlocks.
          </p>
        </div>

        {/* Deadlock Prevention */}
        <div className="os-section">
          <h2 className="os-subtitle">2. Deadlock Prevention</h2>
          <p className="os-example">
            This technique works by **ensuring that at least one of the four necessary conditions for deadlock never holds**:
            <br /><br />
            🔹 <strong>Mutual Exclusion</strong>: Can't always be avoided (some resources must be exclusive)<br />
            🔹 <strong>Hold and Wait</strong>: Force all processes to request all resources at once (low resource utilization)<br />
            🔹 <strong>No Preemption</strong>: Allow preemption—if a process holds a resource and requests another, take the first back<br />
            🔹 <strong>Circular Wait</strong>: Impose ordering on resource requests and force all processes to request resources in order<br /><br />
            <strong>Drawback:</strong> May lead to poor resource utilization or reduced concurrency.
          </p>
        </div>

        {/* Deadlock Avoidance */}
        <div className="os-section">
          <h2 className="os-subtitle">3. Deadlock Avoidance</h2>
          <p className="os-example">
            In this method, the system takes decisions based on **current allocation and future requests**. It avoids unsafe states using algorithms like:
            <br /><br />
            ✅ <strong>Banker’s Algorithm</strong>: Ensures system remains in a "safe state" before resource allocation<br />
            ✅ <strong>Safe State:</strong> A system state where there exists at least one safe sequence to finish all processes<br /><br />
            <strong>Limitation:</strong> Requires all processes to declare their maximum resource requirements in advance.
          </p>
        </div>

        {/* Deadlock Detection and Recovery */}
        <div className="os-section">
          <h2 className="os-subtitle">4. Deadlock Detection and Recovery</h2>
          <p className="os-example">
            This approach allows deadlocks to occur, then **detects** and **recovers** from them.<br /><br />
            🔍 <strong>Detection:</strong> System runs a detection algorithm at regular intervals or on demand. Detection methods use:
            <ul>
              <li>Resource Allocation Graphs (for single instance)</li>
              <li>Wait-for Graph (for multiple instances)</li>
            </ul>
            🔁 <strong>Recovery Techniques:</strong>
            <ul>
              <li>Terminate one or more processes to break the cycle</li>
              <li>Preempt resources and rollback to a safe state</li>
            </ul>
            <strong>Limitation:</strong> May cause loss of work, inconsistency, or require checkpointing.
          </p>
        </div>

        {/* Summary Comparison */}
        <div className="os-section">
          <h2 className="os-subtitle">Summary Table: Deadlock Handling Methods</h2>
          <pre>{`
+----------------------+------------------------------------------+
| Method               | Key Idea                                |
+----------------------+------------------------------------------+
| Ignorance            | Assume deadlocks are rare, ignore them  |
| Prevention           | Prevent at least one of 4 conditions     |
| Avoidance            | Use state info to avoid unsafe states   |
| Detection & Recovery | Allow deadlock, then detect & recover   |
+----------------------+------------------------------------------+
          `}</pre>
        </div>
      </div>
    </div>
  );
}

export default DeadlockHandling;
