import React from "react";
import "../../../../CSS/OS.css";

function MemoryManagementTechniques() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Memory Management Techniques</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Tree Diagram of Memory Management Techniques</h2>
          <pre>{`
Memory Management
├── Contiguous
│   ├── Fixed Partitioning
│   └── Variable Partitioning
└── Non-Contiguous
    ├── Paging
    │   ├── Simple Paging
    │   ├── Multilevel Paging
    │   └── Inverted Paging
    ├── Segmentation
    └── Segmented Paging
          `}</pre>
        </div>

        {/* Contiguous Memory Management */}
        <div className="os-section">
          <h2 className="os-subtitle">Contiguous Memory Management</h2>
          <p className="os-example">
            In contiguous memory management, each process is allocated a single block of memory that is contiguous in address space.
          </p>
          <h3 className="os-subtitle">1. Fixed Partitioning</h3>
          <p className="os-example">
            Memory is divided into fixed-sized partitions. Each partition holds exactly one process. Leads to internal fragmentation.
          </p>
          <h3 className="os-subtitle">2. Variable Partitioning</h3>
          <p className="os-example">
            Partitions are created dynamically based on process size. Leads to external fragmentation. Solutions include compaction.
          </p>
        </div>

        {/* Non-Contiguous Memory Management */}
        <div className="os-section">
          <h2 className="os-subtitle">Non-Contiguous Memory Management</h2>
          <p className="os-example">
            Processes are divided into parts and can be stored in different memory locations.
          </p>

          <div className="os-grid">
            <div className="os-grid-item structured">
              <h3 className="os-subtitle">1. Paging</h3>
              <p className="os-example">
                Memory is divided into fixed-size pages. Logical memory is also divided into pages of the same size. Eliminates external fragmentation.
              </p>
              <h3 className="os-subtitle">- Multilevel Paging</h3>
              <p className="os-example">
                Reduces the memory needed to store page tables by introducing a hierarchy.
              </p>
              <h3 className="os-subtitle">- Inverted Paging</h3>
              <p className="os-example">
                A single page table contains one entry for each frame of physical memory, not each page of logical memory.
              </p>
            </div>

            <div className="os-grid-item unstructured">
              <h3 className="os-subtitle">2. Segmentation</h3>
              <p className="os-example">
                Divides logical memory into variable-sized segments based on logical divisions like code, stack, data.
              </p>
              <h3 className="os-subtitle">3. Segmented Paging</h3>
              <p className="os-example">
                Combines segmentation and paging. Each segment is divided into pages and mapped to physical memory.
              </p>
            </div>
          </div>
        </div>


        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.shiksha.com/online-courses/articles/memory-management-techniques-in-operating-system/#Memory-management-techniques")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default MemoryManagementTechniques;
