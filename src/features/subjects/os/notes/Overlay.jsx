import React from "react";
import "../../../../CSS/OS.css";

function Overlay() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Overlay in Memory Management</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is Overlay?</h2>
          <p className="os-example">
            **Overlay** is a memory management technique used when a program's size exceeds the available physical memory. Instead of loading the entire program into memory, only essential parts of the program are loaded, while other parts (called "overlays") are loaded as needed during execution. This technique helps in utilizing memory efficiently and running large programs in limited memory environments.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Why Overlay is Needed?</h2>
          <p className="os-example">
            Overlays are particularly useful when:
          </p>
          <ul>
            <li>Programs are too large to fit into the available physical memory.</li>
            <li>Memory is limited, and the system cannot accommodate the entire program at once.</li>
            <li>We need to run programs that require a large amount of memory but are not actively using all parts of the program at the same time.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">How Overlay Works</h2>
          <p className="os-example">
            In an overlay system, the program is divided into several parts (or "overlays"). Only one overlay is loaded into memory at a time. When the execution reaches a part of the program that isn't currently loaded, the system swaps out the current overlay and loads the required one. The operating system controls this process to ensure that only one overlay is in memory at any given time.
          </p>
          <pre>{`
Example:

Consider a large program that is divided into three overlays:

| Overlay        | Size   |
|----------------|--------|
| Overlay 1      | 300 KB |
| Overlay 2      | 400 KB |
| Overlay 3      | 350 KB |

The total program size is 1050 KB, but the physical memory is only 500 KB.

Only one overlay can be in memory at a time, so the program will load the required overlay and swap it when needed.

If the program execution reaches Overlay 2, Overlay 1 will be swapped out to make room for Overlay 2.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Overlay Management</h2>
          <p className="os-example">
            The program is typically divided into **critical code** and **non-critical code**. Critical code is the part that must always be in memory, while non-critical code (overlays) can be loaded and unloaded as required. The operating system manages the overlays to ensure that the correct one is loaded during execution.
          </p>
          <p className="os-example">
            The system uses **overlay management techniques** to track which overlays are loaded in memory. This helps in controlling the swapping of overlays and ensures that the program runs without errors.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Advantages of Overlays</h2>
          <ul>
            <li>**Efficient Memory Usage**: Overlays allow a program to run even if it exceeds the available physical memory, making it possible to run large programs on systems with limited memory.</li>
            <li>**Reduces Memory Footprint**: By only loading essential parts of the program into memory, overlays reduce the overall memory usage at any given time.</li>
            <li>**Allows Larger Programs**: Overlays make it possible to run programs that would otherwise be too large to fit into memory.</li>
            <li>**No Need for Memory Partitioning**: Overlays eliminate the need for partitioning memory, as only one overlay is in memory at a time, simplifying memory management.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Disadvantages of Overlays</h2>
          <ul>
            <li>**Increased Overhead**: The process of swapping overlays in and out of memory adds overhead to the system, which can slow down program execution.</li>
            <li>**Complexity in Programming**: Writing programs that use overlays requires careful design to ensure that each overlay is independent and can function correctly when loaded into memory.</li>
            <li>**Inefficient for Small Programs**: For smaller programs that fit entirely into memory, overlays are unnecessary and can introduce unnecessary complexity.</li>
            <li>**Fragmentation**: Although overlays reduce memory usage, they still rely on memory management systems to keep track of which parts of the program are in memory, which can result in fragmentation and inefficient memory utilization in certain cases.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Overlay Example</h2>
          <pre>{`
Consider a program with two parts:

- Part 1: Basic operations (always in memory)
- Part 2: Advanced operations (overlaid)

| Part      | Size   | Loaded in Memory |
|-----------|--------|------------------|
| Part 1    | 200 KB | Yes              |
| Part 2    | 500 KB | Yes (when needed) |

Memory is limited to 400 KB. So, Part 1 is always in memory. Part 2 is loaded only when required.

If Part 2 is needed, Part 1 is swapped out, making room for Part 2.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Overlay Concept</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250428144803628430/overlays.webp"
            alt="Overlay Diagram"
          />
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/overlays-in-memory-management/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default Overlay;
