import React from "react";
import "../../../../CSS/OS.css";

function FileSystemDataOperationsAttributes() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">File System in Operating System</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is a File System?</h2>
          <p className="os-example">
            A file system is a method and data structure that an operating system uses to manage files on storage devices. It defines how data is stored, organized, named, accessed, and protected. Examples include FAT32, NTFS, ext4, etc.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">How Data is Stored and Fetched</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <p className="os-example">
                - **Storage**: Data is stored in blocks on secondary storage like HDD/SSD. Files are split into chunks (blocks) and mapped via metadata (index nodes or FAT tables).<br />
                - **Fetching**: When a file is accessed, the OS reads its metadata to locate the data blocks and loads them into memory via buffering and caching mechanisms.
              </p>
              <div className="os-grid-item unstructured">
                <pre>{`
Storage Flow:
User -> OS File API -> File System -> Disk Blocks
                `}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">File Operations and Their Explanation</h2>
          <p className="os-example">
            The OS provides various file operations:
            <br /><br />
            <strong>1. Create:</strong> Allocate space and add metadata.<br />
            <strong>2. Open:</strong> Prepares file for reading/writing.<br />
            <strong>3. Read:</strong> Retrieves data from file to memory.<br />
            <strong>4. Write:</strong> Saves data from memory to file.<br />
            <strong>5. Reposition (Seek):</strong> Moves read/write pointer.<br />
            <strong>6. Delete:</strong> Removes file from directory and releases space.<br />
            <strong>7. Truncate:</strong> Empties file contents without deleting the file.<br />
            <strong>8. Append:</strong> Adds data to the end of the file.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">File Attributes Explained</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <p className="os-example">
                File attributes are metadata stored by the OS to manage files:
              </p>
              <div className="os-grid-item unstructured">
                <pre>{`
1. Name       - Human-readable file identifier
2. Type       - File type (text, binary, etc.)
3. Location   - Address on the storage device
4. Size       - File size in bytes
5. Protection - Permissions (read, write, execute)
6. Time, date - Creation, modification, access times
7. Owner      - User who created/owns the file
                `}</pre>
              </div>
            </div>
          </div>
        </div>

        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20250114144353462409/file1.webp" alt="File System Diagram" />
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/file-systems-in-operating-system/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default FileSystemDataOperationsAttributes;
