import React from "react";
import "../../../../CSS/OS.css";

function PageTableEntries() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Page Table Entries in Operating Systems</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Page Table Entry Structure</h2>
          <p className="os-example">
            Each entry in the page table contains crucial information about the
            mapping between virtual pages and physical frames. The typical Page
            Table Entry (PTE) structure consists of mandatory and optional
            fields, as well as several important control bits.
          </p>
          <img
            src="https://cdn1.byjus.com/wp-content/uploads/2022/08/page-table-entry.png"
            alt=""
          />
          <pre>{`
Page Table Entry Structure (PTE):

| Valid | Frame Number | R/W | User/Supervisor | Cached | Dirty | Accessed |
|-------|--------------|-----|-----------------|--------|-------|----------|
|   1   |     15-bit   |  1  |        1        |    1   |   1   |     1    |

Where each field represents the following:
1. Valid Bit (Valid): Indicates whether the entry in the page table is valid (1) or invalid (0).
2. Frame Number: A 15-bit field indicating the physical frame number where the page is stored in memory.
3. R/W (Read/Write): Determines if the page can be read or written to (1 for R/W, 0 for Read-Only).
4. User/Supervisor: Indicates if the page is accessible by user-mode programs (0) or supervisor (kernel) mode programs (1).
5. Cached: If set to 1, the data for this page is cached; if 0, it is not.
6. Dirty: Set to 1 if the page has been modified (dirty), meaning it needs to be written back to disk.
7. Accessed: Set to 1 if the page has been accessed recently; otherwise, it is 0.

Example of a page table entry:
|  Valid  |   Frame Number  |   R/W   |  User/Supervisor  | Cached | Dirty | Accessed |
|---------|-----------------|---------|-------------------|--------|-------|----------|
|    1    |      1024       |    1    |        1          |   1    |   0   |    1     |
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Explanation of Each Bit</h2>
          <p className="os-example">
            Each bit in the Page Table Entry (PTE) serves a specific function.
            Here’s a breakdown of each bit and its role:
          </p>
          <ul>
            <li>
              <strong>Valid Bit:</strong> This bit is mandatory. It tells
              whether the page is valid or invalid. If it’s set to 0, it means
              that the corresponding page is not loaded in memory, and the
              operating system may need to fetch it from disk.
            </li>
            <li>
              <strong>Frame Number:</strong> This is a mandatory field, usually
              15 bits, that indicates which physical frame the page resides in.
              The frame number is mapped using the page table.
            </li>
            <li>
              <strong>R/W (Read/Write):</strong> This bit indicates whether the
              page can be written to or is read-only. It’s set to 1 for a
              read-write page and 0 for a read-only page.
            </li>
            <li>
              <strong>User/Supervisor:</strong> This bit shows the access
              privilege level. If it’s set to 1, the page is only accessible by
              kernel (supervisor) mode; if it’s 0, it’s accessible in user mode.
            </li>
            <li>
              <strong>Cached:</strong> This is an optional bit. If it’s set to
              1, the page is cached; otherwise, the data is not cached.
            </li>
            <li>
              <strong>Dirty:</strong> This bit indicates whether the page has
              been modified since it was loaded into memory. If it’s set to 1,
              the page is dirty and needs to be written back to disk before
              being swapped out.
            </li>
            <li>
              <strong>Accessed:</strong> This bit is set by the hardware to 1
              when the page is accessed (either for reading or writing). It is
              used by the operating system to determine which pages have been
              used recently.
            </li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Two-Level Paging</h2>
          <p className="os-example">
            Two-level paging is used to reduce the size of the page table in
            systems with large address spaces. Instead of having a single page
            table, a two-level page table uses a hierarchical structure. The
            first level contains pointers to second-level page tables, which
            contain the actual frame number mappings.
          </p>
          <pre>{`
Two-Level Paging Example:

1st Level Table:
| Entry # | Points to 2nd Level Table |
|---------|---------------------------|
|    0    |      Address of Table 1    |
|    1    |      Address of Table 2    |

2nd Level Table:
| Page # | Frame Number |
|--------|--------------|
|   0    |     1024     |
|   1    |     2048     |

In the above structure, the 1st level table holds pointers to the actual physical addresses where the second-level page tables reside. This reduces the memory needed for page table storage in large systems.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Inverted Paging</h2>
          <p className="os-example">
            Inverted paging is an alternative approach used to manage large
            virtual address spaces in systems with many processes. In inverted
            paging, the page table entries are indexed by the physical frame
            number, not the virtual page number. Instead of having one page
            table per process, a single global page table maps all virtual
            addresses to physical memory.
          </p>
          <pre>{`
Inverted Page Table Example:

| Physical Frame # | Virtual Page # | Process ID |
|------------------|-----------------|------------|
|        0         |        5        |    101     |
|        1         |        2        |    102     |
|        2         |        3        |    101     |

Here, the inverted page table stores the mapping of each physical frame to its corresponding virtual page and the process that owns the page.
          `}</pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Advantages and Use of Inverted Paging</h2>
          <p className="os-example">
            The primary advantage of inverted paging is that it uses less memory
            compared to traditional page tables, as only one global page table
            is required for all processes, rather than one page table per
            process. Inverted page tables are particularly useful in systems
            with a large number of processes, where using a standard page table
            would require too much memory. However, the lookup process can be
            slower, as it involves searching through the global table.
          </p>
          <p className="os-example">
            Inverted paging is typically used in systems with high memory
            pressure, where memory usage must be minimized.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Two-Level Paging</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20200112230341/2-Level-Paging.png"
            alt="Two-Level Paging Diagram"
          />
          <button
            className="infoBtn"
            onClick={() =>
              window.open(
                "https://www.geeksforgeeks.org/two-level-paging-and-multi-level-paging-in-os/"
              )
            }
          >
            Know more
          </button>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Inverted Paging</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/33-6.png"
            alt="Inverted Paging Diagram"
          />
          <button
            className="infoBtn"
            onClick={() =>
              window.open(
                "https://www.geeksforgeeks.org/inverted-page-table-in-operating-system/"
              )
            }
          >
            Know more
          </button>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://byjus.com/gate/page-table-entry-notes/")
          }
        >
          Paging table
        </button>
      </div>
    </div>
  );
}

export default PageTableEntries;
