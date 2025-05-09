import React from "react";
import "../../../../CSS/OS.css";

function FileAllocationMethods() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">File Allocation Methods</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is File Allocation?</h2>
          <p className="os-example">
            File allocation refers to how file data is stored on disk blocks.
            The OS must allocate free blocks efficiently so that files can be
            read/written quickly and without unnecessary fragmentation. Common
            strategies include contiguous, linked, and indexed allocation.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Contiguous Allocation</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <p className="os-example">
                In contiguous allocation, each file occupies a set of continuous
                blocks on disk.
                <br />
                <br />
                <strong>Advantages:</strong>
                <br />
                - Fast access (direct and sequential)
                <br />
                - Easy to implement
                <br />
                <strong>Disadvantages:</strong>
                <br />
                - External fragmentation
                <br />- Difficulty in file growth
              </p>

              <div className="os-grid-item unstructured">
                <pre>{`
File A: Blocks 10 to 19
File B: Blocks 20 to 29
Access A[5] = Block 15 (easy math)
                `}</pre>
              </div>
              <img
                className="smallImg2"
                src="https://media.geeksforgeeks.org/wp-content/uploads/Contiguous-Allocation.jpg"
              />
            </div>
          </div>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Linked Allocation</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <p className="os-example">
                In linked allocation, each file is a linked list of disk blocks
                which may be scattered anywhere on disk. Each block contains a
                pointer to the next.
                <br />
                <br />
                <strong>Advantages:</strong>
                <br />
                - No external fragmentation
                <br />
                - File size can grow easily
                <br />
                <strong>Disadvantages:</strong>
                <br />
                - Slow direct access
                <br />
                - Extra space for pointers
                <br />- Pointer corruption risk
              </p>
              <div className="os-grid-item unstructured">
                <pre>{`
File C:
Block 5 -> Block 9 -> Block 13 -> Block 18 -> NULL
To access 3rd block: traverse from head to 3rd
                `}</pre>
              </div>
              <img
                className="smallImg2"
                src="https://media.geeksforgeeks.org/wp-content/uploads/linkedListAllocation.jpg"
              />
            </div>
          </div>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Indexed Allocation</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <p className="os-example">
                In indexed allocation, each file has an index block which
                contains all the pointers to its actual data blocks.
                <br />
                <br />
                <strong>Advantages:</strong>
                <br />
                - Supports direct access
                <br />
                - No external fragmentation
                <br />
                <strong>Disadvantages:</strong>
                <br />
                - Index block overhead
                <br />- Limited file size (unless multilevel index used)
              </p>
              <div className="os-grid-item unstructured">
                <pre>{`
Index Block for File D:
[ 7, 11, 24, 38, 41 ]

Access 3rd block: Go to Block 24 directly
                `}</pre>
              </div>
              <img
                className="smallImg2"
                src="https://media.geeksforgeeks.org/wp-content/uploads/indexedAllocation.jpg"
              />
            </div>
          </div>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open(
              "https://www.geeksforgeeks.org/file-allocation-methods/"
            )
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default FileAllocationMethods;
