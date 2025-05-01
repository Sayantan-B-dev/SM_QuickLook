function FramingAndErrorControl() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">
          Framing and Error Control in Data Link Layer
        </h1>

        {/* Framing */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Framing</h2>
          <p className="text-grey-400">
            Framing is the process of breaking data into frames for transmission
            in the Data Link Layer. It ensures proper synchronization and
            prevents data from getting mixed during transmission.
          </p>

          <h3 className="cn-subtitle">Techniques of Framing:</h3>
          <ul className="text-grey-400 list-disc list-inside">
            <li>
              <strong>Character Count:</strong> Uses the first byte to indicate
              the frame length. May fail if count field is corrupted.
            </li>
            <li>
              <strong>Byte Stuffing:</strong> Special characters (e.g., FLAG)
              mark frame boundaries. FLAG inside data is escaped.
            </li>
            <li>
              <strong>Bit Stuffing:</strong> Adds a 0 after every 5 consecutive
              1s in data to avoid confusion with end flag.
            </li>
            <li>
              <strong>Physical Layer Coding Violations:</strong> Uses a signal
              pattern not used for data to mark boundaries.
            </li>
          </ul>
        </div>

        {/* Error Types */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Types of Errors</h2>
          <p className="text-grey-400">
            Errors can occur during transmission due to noise or interference.
          </p>
          <ul className="text-grey-400 list-disc list-inside">
            <li>
              <strong>Single Bit Error:</strong> Only one bit of the data unit
              is changed. Rare in noisy media.
            </li>
            <li>
              <strong>Burst Error:</strong> Two or more bits in the data unit
              have changed. More common in real-world systems.
            </li>
          </ul>
        </div>

        {/* Error Detection */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Error Detection Techniques</h2>
          <p className="text-grey-400">
            Used to identify the presence of errors in transmitted data.
          </p>
          <ul className="text-grey-400 list-disc list-inside">
            <li>
              <strong>Parity Check:</strong> Adds a parity bit to make the
              number of 1s either even (even parity) or odd (odd parity).
            </li>
            <li>
              <strong>Longitudinal Redundancy Check (LRC):</strong> Applies
              parity checks to multiple rows.
            </li>
            <li>
              <strong>Cyclic Redundancy Check (CRC):</strong> Treats data as
              polynomial and divides it by a generator polynomial.
            </li>
            <li>
              <strong>Checksum:</strong> Adds all segments of data and sends sum
              as checksum.
            </li>
          </ul>
        </div>

        {/* Error Correction */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Error Correction</h2>
          <p className="text-grey-400">
            Allows receiver to identify and correct errors without
            retransmission. Error correction is essential when retransmission is
            costly or impossible (e.g., in real-time systems or satellite
            communication).
          </p>

          <h3 className="cn-subtitle">1. Hamming Code</h3>
          <p className="text-grey-400">
            Hamming Code is an error-correcting code that adds redundancy bits
            (parity bits) at positions that are powers of 2 (1, 2, 4, 8, etc.).
            It is capable of detecting and correcting single-bit errors.
          </p>
          <p className="text-grey-400">Example (4-bit data: 1011):</p>
          <pre className="text-grey-400">
            {`Step 1: Position bits with placeholders for parity:
Position: 1 2 3 4 5 6 7
Bits:     P1 P2 D1 P4 D2 D3 D4
Data:     _  _  1  _  0  1  1

Step 2: Calculate parity bits:
P1 covers bits 1,3,5,7 → P1 = parity(1,0,1) = 0
P2 covers bits 2,3,6,7 → P2 = parity(1,1,1) = 1
P4 covers bits 4,5,6,7 → P4 = parity(0,1,1) = 0

Final Hamming Code: 0 1 1 0 0 1 1
                    ↑ ↑ ↑   ↑ ↑ ↑
                    P1 P2 D1 P4 D2 D3 D4
`}
          </pre>

          <h3 className="cn-subtitle">2. Hamming Distance</h3>
          <p className="text-grey-400">
            Hamming distance is the number of differing bits between two
            codewords. It's a measure of error-detection and correction
            capability.
          </p>
          <pre className="text-grey-400">
            {`Example:
Codeword A: 1010101
Codeword B: 1001101
Hamming Distance = 2 (bits at positions 2 and 4 differ)

To detect up to d errors → Minimum distance ≥ d + 1
To correct up to t errors → Minimum distance ≥ 2t + 1
`}
          </pre>
        </div>

        {/* Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Framing and Error Control</h2>
          <div className="flex gap-2">
            <img
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/1-30.png"
              alt="Framing and Error Control Diagram"
            />
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20200722235856/cvf1.png"
              alt="Framing and Error Control Diagram"
            />
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <button
            className="infoBtn"
            onClick={() =>
              window.open(
                "https://www.geeksforgeeks.org/framing-in-data-link-layer/"
              )
            }
          >
            Framing
          </button>{" "}
          <button
            className="infoBtn"
            onClick={() =>
              window.open(
                "https://www.geeksforgeeks.org/error-control-in-data-link-layer/"
              )
            }
          >
            Error-control
          </button>
        </div>
      </div>
    </div>
  );
}

export default FramingAndErrorControl;
