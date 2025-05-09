import React from "react";
import "../../../../CSS/OS.css";

function Paging() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Paging in Operating Systems</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is Paging?</h2>
          <p className="os-example">
            Paging is a memory management technique that divides physical memory into fixed-size blocks called frames and divides the logical memory (process address space) into pages of the same size. Paging eliminates the need for contiguous allocation of memory and helps in avoiding fragmentation issues in memory management.
          </p>
          <pre>{`
Memory Layout (Physical Memory):

+-------------+-------------+-------------+-------------+
|   Frame 1   |   Frame 2   |   Frame 3   |   Frame 4   |
+-------------+-------------+-------------+-------------+

Memory Layout (Virtual Memory):

+-------------+-------------+-------------+-------------+
|   Page 1    |   Page 2    |   Page 3    |   Page 4    |
+-------------+-------------+-------------+-------------+
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Why Paging?</h2>
          <p className="os-example">
            The need for paging arises because traditional contiguous memory allocation leads to problems like fragmentation. When memory is allocated contiguously, free space becomes fragmented over time, which can lead to inefficient memory use. Paging breaks down the memory into smaller, manageable chunks (pages), which allows for better utilization of the available physical memory and avoids fragmentation.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Problems with Contiguous Memory Allocation</h2>
          <p className="os-example">
            In contiguous memory allocation, all the blocks of a process must be placed in a single contiguous space in the memory. This leads to external fragmentation over time, where there are small unused memory gaps between allocated blocks that cannot be used for other processes, leading to inefficient memory use.
          </p>
          <pre>{`
Memory Fragmentation Example:

Memory Blocks:
+-------------+-------------+-------------+-------------+
| Free Space  | Process P1  | Free Space  | Process P2  |
+-------------+-------------+-------------+-------------+

Result: External fragmentation occurs as the free space is scattered between the allocated processes.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">The Solution: Paging</h2>
          <p className="os-example">
            Paging resolves the problem of fragmentation by allocating fixed-size pages of virtual memory to fixed-size frames in physical memory. The system doesn't require contiguous memory allocation. Pages of a process can be scattered across physical memory, and the operating system keeps track of these scattered pages using a data structure called a **Page Table**.
          </p>
          <pre>{`
Memory Layout with Paging:

Virtual Memory:
+-------------+-------------+-------------+-------------+
|   Page 1    |   Page 2    |   Page 3    |   Page 4    |
+-------------+-------------+-------------+-------------+

Physical Memory (Frames assigned to Pages):
+-------------+-------------+-------------+-------------+
| Frame 3 (P1)| Frame 1 (P2)| Frame 4 (P3)| Frame 2 (P4)|
+-------------+-------------+-------------+-------------+

Pages can be allocated to different frames in physical memory, avoiding fragmentation.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Non-contiguous Memory Allocation</h2>
          <p className="os-example">
            In non-contiguous memory allocation, memory is allocated to processes in scattered locations, i.e., pages can be placed anywhere in the physical memory frames. This avoids the issue of fragmentation, as there is no need for consecutive memory blocks. It helps the operating system efficiently utilize memory by filling the frames wherever space is available.
          </p>
          <pre>{`
Non-contiguous Allocation Example:

+-------------+-------------+-------------+-------------+
|  Free Space |  Process P1  |  Free Space |  Process P2 |
+-------------+-------------+-------------+-------------+

In non-contiguous allocation, Process P1 and P2 are not necessarily placed next to each other.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Page Table</h2>
          <p className="os-example">
            The page table is a crucial data structure in paging systems. It maintains the mapping between the process's virtual pages and the corresponding physical frames in memory. The page table is used by the operating system to translate the virtual addresses used by processes into physical addresses in memory. Each entry in the page table contains the frame number of the corresponding page in the process's virtual address space.
          </p>
          <pre>{`
Page Table Example:

Virtual Page # | Physical Frame #
-----------------------------------
      0        |       3
      1        |       2
      2        |       1
      3        |       4

This table helps the OS map virtual addresses to physical memory frames. When the process accesses a virtual address, the OS uses the page table to find the corresponding physical address.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Page Table Structure</h2>
          <p className="os-example">
            A page table can have a simple structure where each entry corresponds to a virtual page, but more advanced systems may implement hierarchical page tables or multi-level page tables for more efficient memory management in large systems.
          </p>
          <pre>{`
Page Table Structure:

+--------------+-------------------+
| Virtual Page | Frame Number (Address) |
+--------------+-------------------+
|     0        |        3          |
|     1        |        1          |
|     2        |        4          |
|     3        |        2          |
+--------------+-------------------+

The OS uses this structure to find the correct frame number when a process accesses virtual memory.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Advantages of Paging</h2>
          <p className="os-example">
            Paging offers several advantages over traditional contiguous memory allocation:
            <ul>
              <li>Eliminates external fragmentation.</li>
              <li>Provides more efficient memory utilization by allowing non-contiguous allocation.</li>
              <li>Supports swapping of pages in and out of physical memory, allowing for better multitasking.</li>
            </ul>
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Disadvantages of Paging</h2>
          <p className="os-example">
            Despite its advantages, paging also comes with some disadvantages:
            <ul>
              <li>Internal fragmentation may occur if the last page of a process does not fill an entire frame.</li>
              <li>The page table adds overhead to the system, especially in large systems with many processes.</li>
              <li>Accessing the page table and translating virtual addresses to physical addresses introduces some overhead in performance.</li>
            </ul>
          </p>
        </div>

          <img
          className="smallImg"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250109113209275879/paging.webp"
            alt="Paging System Overview"
          />

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/paging-in-operating-system/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default Paging;
