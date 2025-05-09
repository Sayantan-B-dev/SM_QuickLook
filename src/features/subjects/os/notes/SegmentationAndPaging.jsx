import React from "react";
import "../../../../CSS/OS.css";

function SegmentationAndPaging() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Segmentation and Paging</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is Segmentation?</h2>
          <p className="os-example">
            **Segmentation** is a memory management scheme that divides a program’s memory into different segments. Each segment is a logical unit such as a function, array, or stack. Unlike paging, where the memory is divided into fixed-size blocks, segmentation divides memory into variable-size segments based on logical divisions. Each segment can be independently allocated, and the operating system uses a **segment table** to manage these segments.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Why is Segmentation Needed?</h2>
          <p className="os-example">
            Segmentation is necessary because it offers a more natural way to divide a program. Rather than forcing a program into fixed-size blocks (like paging), segmentation reflects the program’s logical structure:
          </p>
          <ul>
            <li>Programs consist of different parts like functions, data arrays, or stacks.</li>
            <li>These parts often vary in size, making fixed-size memory management inefficient for some applications.</li>
            <li>By dividing memory into logical segments, the system can allocate memory more efficiently based on the needs of each segment.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">How Segmentation Works</h2>
          <p className="os-example">
            Segmentation divides memory into segments with variable sizes. For example, a program might consist of:
          </p>
          <ul>
            <li>**Code Segment**: Contains the instructions of the program.</li>
            <li>**Data Segment**: Contains the global variables and static variables.</li>
            <li>**Stack Segment**: Contains the function call stack.</li>
            <li>**Heap Segment**: Contains dynamically allocated memory.</li>
          </ul>
          <p className="os-example">
            Each segment is treated as a contiguous block of memory. The operating system manages each segment with a **Segment Table**, which keeps track of the base address and the length of each segment. This allows the operating system to perform address translation when a program accesses memory.
          </p>
          <pre>{`
Example:

Consider the following program with segments:

| Segment      | Size   |
|--------------|--------|
| Code         | 500 KB |
| Data         | 200 KB |
| Stack        | 100 KB |
| Heap         | 150 KB |

Total memory required = 950 KB.

Each segment is allocated based on its size and can grow or shrink as needed.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Segmentation Addressing</h2>
          <p className="os-example">
            Segmentation uses **logical addressing**, where the address is expressed as a combination of the segment number and the offset within the segment. The operating system uses a **segment table** to convert the logical address into a physical address.
          </p>
          <pre>{`
Logical Address Format: (Segment Number, Offset)

For example, a logical address (2, 100) means:
- Segment 2 (Data Segment)
- Offset 100 (100th byte in Data Segment)

The segment table will provide the physical base address for Segment 2, and then the offset (100) will be added to that base address to generate the final physical address.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Advantages of Segmentation</h2>
          <ul>
            <li>**Logical View**: Segmentation provides a more logical and flexible way of managing memory compared to paging. Each segment is a natural unit, making it easier to manage in terms of program structure.</li>
            <li>**Dynamic Size**: Since segments are variable-sized, it allows the program to allocate memory efficiently. For instance, the data segment can grow as needed, unlike fixed-size paging.</li>
            <li>**Protection and Sharing**: Each segment can have its own protection mechanism (read, write, execute). Segments can be shared between processes, improving memory utilization.</li>
            <li>**Easier Debugging**: Segmentation makes debugging easier because it reflects the logical structure of a program. If a program crashes, it is easier to locate the problem within the specific segment (e.g., code or data segment).</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Disadvantages of Segmentation</h2>
          <ul>
            <li>**External Fragmentation**: Since segments can vary in size, fragmentation can occur outside the segments. Over time, memory may become fragmented, and free space may not be contiguous, leading to inefficient memory use.</li>
            <li>**Complex Address Translation**: The segment table adds overhead to memory management. The operating system must translate logical addresses to physical addresses, which can slow down the process.</li>
            <li>**Segmentation Faults**: If a process accesses memory beyond the bounds of its segment, a **segmentation fault** occurs. This is difficult to handle, and the program may crash.</li>
            <li>**Variable Size**: Managing segments of different sizes can be complex and may lead to inefficient memory use if large segments are allocated but not fully utilized.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Segmentation vs. Paging</h2>
          <p className="os-example">
            While both **Segmentation** and **Paging** aim to manage memory efficiently, they differ in their approach:
          </p>
          <ul>
            <li><strong>Segmentation</strong> divides memory based on logical structures, such as code, data, and stack. It uses variable-sized blocks, while <strong>Paging</strong> divides memory into fixed-size blocks (pages).</li>
            <li><strong>Segmentation</strong> offers a more flexible and natural way to organize memory, while <strong>Paging</strong> can lead to fragmentation (internal fragmentation).</li>
            <li>Segmentation provides a higher level of memory protection and sharing, as segments can be individually protected, whereas paging works at a finer granularity (page-level).</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Example of Segmentation</h2>
          <pre>{`
Consider a program with the following segments:

| Segment      | Base Address | Length (KB) |
|--------------|--------------|-------------|
| Code         | 1000         | 500         |
| Data         | 1500         | 200         |
| Stack        | 1700         | 100         |
| Heap         | 1800         | 150         |

To access a memory location in the Code segment:
- Logical Address: (Segment 0, Offset 100) means the 100th byte in the Code segment.
- Base address of Code = 1000.
- Physical address = 1000 + 100 = 1100.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Segmentation Memory Layout</h2>
          <img
          className="smallImg"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230703103700/ezgifcom-gif-maker-(16).webp"
            alt="Segmentation Diagram"
          />
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/segmentation-in-operating-system/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default SegmentationAndPaging;
