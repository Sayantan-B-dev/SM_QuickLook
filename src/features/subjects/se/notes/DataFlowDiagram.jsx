import React from "react";
import "../../../../CSS/SE.css";

function DataFlowDiagram() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title">Data Flow Diagram (DFD)</h1>

        {/* Why DFD? */}
        <div className="se-section">
          <h2 className="se-subtitle">Why DFD?</h2>
          <p className="se-example">
            DFDs help in understanding the flow of data in a system. They provide a clear visual representation of how data is input, processed, stored, and output in a system. It's useful for both technical and non-technical stakeholders.
          </p>
        </div>

        {/* Symbols */}
        <div className="se-section">
          <h2 className="se-subtitle">DFD Symbols</h2>
          <ul className="se-example list-disc pl-6">
            <li><strong>Process:</strong> Circle or rounded rectangle – represents a transformation of data.</li>
            <li><strong>Data Store:</strong> Open-ended rectangle – represents a storage location.</li>
            <li><strong>Data Flow:</strong> Arrow – represents movement of data.</li>
            <li><strong>External Entity:</strong> Square – represents source or sink (outside the system).</li>
          </ul>
        </div>

        {/* Elements */}
        <div className="se-section">
          <h2 className="se-subtitle">Elements of DFD</h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <p className="se-example"><strong>Process:</strong> Transforms inputs to outputs.</p>
              <p className="se-example"><strong>Data Store:</strong> Saves data for later use.</p>
              <p className="se-example"><strong>Data Flow:</strong> Direction of data movement.</p>
              <p className="se-example"><strong>External Entity:</strong> Origin/destination of data (source/sink).</p>
            </div>
          </div>
        </div>

        {/* Rules of Data Flow */}
        <div className="se-section">
          <h2 className="se-subtitle">Rules of Data Flow</h2>
          <ul className="se-example list-disc pl-6">
            <li>Data must flow between a process and another process, data store, or external entity.</li>
            <li>Data cannot flow directly between two data stores.</li>
            <li>Data cannot flow directly between two external entities.</li>
            <li>Every data flow must be labeled clearly.</li>
            <li>Every process must have both input and output.</li>
          </ul>
        </div>

        {/* Levels of DFD */}
        <div className="se-section">
          <h2 className="se-subtitle">Levels of DFD</h2>
          <ul className="se-example list-disc pl-6">
            <li><strong>Level 0 (Context Diagram):</strong> High-level overview showing the system and external entities.</li>
            <li><strong>Level 1:</strong> Breaks down the main process into subprocesses.</li>
            <li><strong>Level 2:</strong> Further decomposition of Level 1 processes.</li>
            <li><strong>More Levels:</strong> Continue decomposition as needed.</li>
          </ul>
        </div>

        {/* Decomposition */}
        <div className="se-section">
          <h2 className="se-subtitle">Decomposition of DFD</h2>
          <p className="se-example">
            Decomposition is the process of breaking a high-level DFD into detailed levels. It helps in better understanding, managing complexity, and improving documentation clarity.
          </p>
        </div>

        {/* Logical vs Physical DFD */}
        <div className="se-section">
          <h2 className="se-subtitle">Logical vs Physical DFD</h2>
          <table className="example-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Logical DFD</th>
                <th>Physical DFD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Focus</td>
                <td>What happens in the system</td>
                <td>How it is implemented</td>
              </tr>
              <tr>
                <td>Details</td>
                <td>Processes, data flow, stores</td>
                <td>Devices, files, people involved</td>
              </tr>
              <tr>
                <td>Abstraction Level</td>
                <td>Higher</td>
                <td>Lower (implementation-specific)</td>
              </tr>
              <tr>
                <td>Used For</td>
                <td>Analysis</td>
                <td>Design</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Inbound/Outbound */}
        <div className="se-section">
          <h2 className="se-subtitle">Inbound and Outbound Data Flows</h2>
          <p className="se-example"><strong>Inbound:</strong> Data entering the system from external entities.</p>
          <p className="se-example"><strong>Outbound:</strong> Data leaving the system to external entities.</p>
        </div>
      </div>
    </div>
  );
}

export default DataFlowDiagram;
