import React from "react";
import "../../../../CSS/OS.css";

function UnixInodeStructure() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">UNIX Inode Structure</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is an Inode?</h2>
          <p className="os-example">
            An inode (index node) is a data structure in UNIX that stores metadata about a file, but **not** its name or actual data. Each file has a unique inode that points to data blocks on the disk.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Attributes Stored in an Inode</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <ul className="os-example">
                <li>File type (regular, directory, etc.)</li>
                <li>Permissions (read, write, execute)</li>
                <li>Owner and group IDs</li>
                <li>File size</li>
                <li>Timestamps (created, modified, accessed)</li>
                <li>Number of hard links</li>
                <li>Pointers to data blocks (direct & indirect)</li>
              </ul>
              <div className="os-grid-item unstructured">
                <pre>{`
Inode 1024:
  File Type: Regular
  Owner: UID 1000
  Size: 12 KB
  Direct blocks: [101, 102, 103]
                `}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Block Addressing in Inodes</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <p className="os-example">
                UNIX inodes typically store:
                <br />
                - 12 direct block pointers<br />
                - 1 single indirect pointer<br />
                - 1 double indirect pointer<br />
                - 1 triple indirect pointer
                <br /><br />
                <strong>Assume:</strong> Block size = 1 KB, each pointer = 4 bytes ⇒ 1 block can hold 1024 / 4 = 256 pointers
              </p>
              <div className="os-grid-item unstructured">
                <pre>{`
Total file size addressable:
12 Direct blocks = 12 × 1KB = 12KB
1 Indirect block = 256 × 1KB = 256KB
1 Double indirect = 256 × 256 × 1KB = 64MB
1 Triple indirect = 256 × 256 × 256 × 1KB = 16GB+
                `}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Numeric Example</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <p className="os-example">
                <strong>Q:</strong> A file of size 300 KB is stored. Block size is 1 KB. How many blocks and levels of indirection are used?
                <br /><br />
                <strong>Solution:</strong><br />
                - Total blocks needed = 300 KB / 1 KB = 300 blocks<br />
                - First 12 from direct pointers<br />
                - Next 256 from single indirect (12 + 256 = 268)<br />
                - Remaining = 300 - 268 = 32 blocks<br />
                - These 32 will use 1 **double indirect** block:
                  - 1 block as pointer array + 1 extra block holding 32 actual data pointers
              </p>
              <div className="os-grid-item unstructured">
                <pre>{`
Used:
- 12 Direct
- 1 Single Indirect Block + 256 Data Blocks
- 1 Double Indirect Block + 1 Sub-index Block + 32 Data Blocks

Total = 12 + 1 + 256 + 1 + 1 + 32 = 303 blocks (with pointer blocks)
                `}</pre>
              </div>
            </div>
          </div>
        </div>

        <img
        className="smallImg2"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240111151731/inodes-660.png"
          alt="UNIX Inode Structure Diagram"
        />
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/inode-in-operating-system/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default UnixInodeStructure;
