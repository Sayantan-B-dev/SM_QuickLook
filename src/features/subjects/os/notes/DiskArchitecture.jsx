import React from "react";
import "../../../../CSS/OS.css";

function DiskArchitecture() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Disk Architecture</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Basic Structure</h2>
          <p className="os-example">
            A disk drive consists of one or more **platters** mounted on a common spindle. 
            Each platter has two **surfaces** (upper and lower) that store data magnetically. 
            Each surface is divided into **tracks**, and each track is further divided into **sectors**—typically 512 bytes or 4KB each.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Key Components Explained</h2>
          <ul className="os-example">
            <li><strong>Platters:</strong> Circular magnetic disks used to store data. Multiple platters increase capacity.</li>
            <li><strong>Upper/Lower Surface:</strong> Both sides of a platter used for storing data. Each side has its own read/write head.</li>
            <li><strong>Tracks:</strong> Concentric circles on a surface where data is magnetically recorded.</li>
            <li><strong>Sectors:</strong> Subdivisions of tracks, each storing a fixed amount of data.</li>
            <li><strong>Actuator Arm:</strong> Moves the read/write heads across the platter surfaces.</li>
            <li><strong>Read/Write Head:</strong> Positioned by the actuator arm to read or write data from/to sectors.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">How 1TB is Structured</h2>
          <p className="os-example">
            Suppose each sector is 4KB in size. To achieve 1TB (1,000,000,000,000 bytes):<br /><br />
            <strong>Total Sectors = 1,000,000,000,000 / 4,096 ≈ 244,140,625 sectors</strong><br />
            If each track holds 500 sectors and each surface contains 2,000 tracks:<br />
            <strong>Tracks per surface = 2,000<br />
            Sectors per track = 500<br />
            So, sectors per surface = 2,000 × 500 = 1,000,000</strong><br />
            To store all 244 million sectors, you'd need about 245 surfaces (≈123 platters assuming 2 surfaces per platter).<br /><br />
            This is a simplified model; real drives also account for redundancy, error correction, and firmware.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Hard Disk Internal Structure</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250317112441319690/HDD-vs-SDD.webp"
            alt="Hard Disk Architecture Diagram"
          />
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20250317112441574966/What-is-HDD_.webp" alt="" />
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20250317112414238512/HDD-work_.webp" alt="" />
        </div>
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/hard-disk-drive-hdd-secondary-memory/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default DiskArchitecture;
