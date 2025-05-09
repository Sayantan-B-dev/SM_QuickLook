import React from "react";
import "../../../../CSS/OS.css";

function Deadlock() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Deadlock in Operating Systems</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is Deadlock?</h2>
          <p className="os-example">
            Deadlock is a condition in a system where two or more processes are unable to proceed because each is waiting for the other to release a resource. This leads to a standstill where none of the processes can complete their execution.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Conditions for Deadlock</h2>
          <p className="os-example">
            For a deadlock to occur, the following four necessary conditions must be met simultaneously:
          </p>
          <ol className="os-example">
            <li>Mutual Exclusion</li>
            <li>No Preemption</li>
            <li>Hold and Wait</li>
            <li>Circular Wait</li>
          </ol>
        </div>

        {/* Mutual Exclusion Condition */}
        <div className="os-section">
          <h2 className="os-subtitle">1. Mutual Exclusion</h2>
          <p className="os-example">
            Mutual Exclusion refers to the requirement that at least one resource must be held in a non-shareable mode. If a resource is held by a process, no other process can use it until it is released. For deadlock to occur, the resources must be in such a state.
          </p>
          <pre className="os-example">
            Flowchart for Mutual Exclusion:

            [Start] --&gt; [Resource request by Process] --&gt; [Resource allocated to Process] --&gt; [End]
            </pre>
        </div>

        {/* No Preemption Condition */}
        <div className="os-section">
          <h2 className="os-subtitle">2. No Preemption</h2>
          <p className="os-example">
            The No Preemption condition implies that once a process holds a resource, it cannot be forcibly taken away from it. The resource can only be released voluntarily by the process holding it. This condition contributes to the possibility of deadlock.
          </p>
          <pre className="os-example">
            Flowchart for No Preemption:

            [Start] --&gt; [Process requests resource] --&gt; [Process holds resource] --&gt; [No Preemption occurs] --&gt; [End]
          </pre>
        </div>

        {/* Hold and Wait Condition */}
        <div className="os-section">
          <h2 className="os-subtitle">3. Hold and Wait</h2>
          <p className="os-example">
            Hold and Wait means that a process holding one resource is waiting to acquire additional resources held by other processes. This condition creates a cycle of resource contention, which can lead to deadlock.
          </p>
          <pre className="os-example">
            Flowchart for Hold and Wait:

            [Start] --&gt; [Process holding a resource] --&gt; [Process waiting for another resource] --&gt; [End]
          </pre>
        </div>

        {/* Circular Wait Condition */}
        <div className="os-section">
          <h2 className="os-subtitle">4. Circular Wait</h2>
          <p className="os-example">
            Circular Wait occurs when a set of processes {"{P1, P2, ..., Pn}"} exist, such that each process Pi is waiting for a resource held by process Pi+1, and process Pn is waiting for a resource held by process P1. This creates a circular chain of dependencies, leading to a deadlock situation.
          </p>
          <pre className="os-example">
            Flowchart for Circular Wait:
            [Start] --&gt; [Process P1 holds Resource 1] --&gt; [Process P2 waits for Resource 1] --&gt; [End]
            </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Deadlock Prevention and Solutions</h2>
          <p className="os-example">
            To avoid or resolve deadlocks, systems must implement strategies to prevent one or more of the necessary conditions for deadlock. These strategies include:
            <ul className="os-example">
              <li>Resource Allocation Strategies</li>
              <li>Timeouts</li>
              <li>Detection and Recovery</li>
            </ul>
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Deadlock Flowchart</h2>
          <pre className="os-example">
            Deadlock Conditions:
            1. Mutual Exclusion
            2. No Preemption
            3. Hold and Wait
            4. Circular Wait

            [Start] --&gt; [Process Requests Resources] --&gt; [Process Waits for Resources] --&gt; [Conditions Met] --&gt; [Deadlock]
            </pre>
        </div>

        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default Deadlock;
