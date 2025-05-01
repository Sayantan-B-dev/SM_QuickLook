import React from 'react';

function HammingCode() {
  return (
    <div className="cn-card">
      <h2 className="cn-subtitle">Hamming Code for Error Detection and Correction</h2>
      <p className="text-grey-400">
        Hamming Code is a set of error-correcting codes that can be used to detect and correct single-bit errors in data transmission. It adds redundant bits to the original data to help identify and fix errors without needing to retransmit the data.
      </p>
      
      <h3 className="cn-subtitle">Concept of Hamming Code</h3>
      <p className="text-grey-400">
        Hamming Code works by adding parity bits to the original data bits. These parity bits are positioned at the powers of 2 (1, 2, 4, 8, etc.). Each parity bit checks a specific set of bits, and these checks allow the receiver to identify errors and correct them.
      </p>

      <h3 className="cn-subtitle">Steps for Hamming Code Encoding</h3>
      <p className="text-grey-400">
        1. Identify the positions of the parity bits. These are at positions 1, 2, 4, 8, etc. (i.e., powers of 2).
        <br />
        2. Insert the original data bits into the non-parity bit positions.
        <br />
        3. Calculate the value of each parity bit based on the parity check rules. The parity bit should make the number of 1’s in the checked positions even (or odd, depending on the type of Hamming Code being used).
        <br />
        4. After inserting the parity bits, the encoded message is ready for transmission.
      </p>

      <h3 className="cn-subtitle">Example of Hamming Code Encoding</h3>
      <div className="flex gap-1.5">
        <div>
          <h3 className="cn-subtitle">Original Data:</h3>
          <p className="text-grey-400">Original Data = 1011 (4 bits)</p>
          <h3 className="cn-subtitle">Step 1: Identify Parity Bit Positions</h3>
          <p className="text-grey-400">Parity bits are inserted at positions: 1, 2, and 4.</p>
          <h3 className="cn-subtitle">Step 2: Place Original Data in Non-Parity Bit Positions</h3>
          <p className="text-grey-400">Data with parity bit positions marked: _ _ 1 _ 0 1 1</p>
        </div>
        <img src="https://i.ytimg.com/vi/t4kiy4Dsx5Y/maxresdefault.jpg" alt="Hamming Encoding" />
      </div>

      <h3 className="cn-subtitle">Step 3: Calculate the Parity Bits</h3>
      <p className="text-grey-400">
        Now we calculate the parity bits as follows:
        <br />
        - <strong>Parity Bit 1 (P1)</strong> checks positions 1, 3, 5, and 7. It ensures the parity of these positions is even.
        <br />
        - <strong>Parity Bit 2 (P2)</strong> checks positions 2, 3, 6, and 7. It ensures the parity of these positions is even.
        <br />
        - <strong>Parity Bit 4 (P4)</strong> checks positions 4, 5, 6, and 7. It ensures the parity of these positions is even.
        <br />
        After calculating, we insert the correct parity bits:
        <br />
        P1 = 1, P2 = 0, P4 = 1.
      </p>
      
      <h3 className="cn-subtitle">Step 4: Final Hamming Code</h3>
      <p className="text-grey-400">
        The final Hamming Code after inserting the parity bits is:
        <br />
        1 0 1 1 0 1 1
      </p>

      <h3 className="cn-subtitle">Error Detection and Correction</h3>
      <p className="text-grey-400">
        When the data is received, the receiver checks the parity bits and identifies any errors in the received data:
        <br />
        1. The receiver checks the parity bits for errors.
        <br />
        2. If the computed parity is different from the expected parity, it indicates an error.
        <br />
        3. The error position is calculated by checking which parity bits failed and combining their positions.
        <br />
        4. The receiver can correct the single-bit error by flipping the bit at the detected error position.
      </p>
      
      <h3 className="cn-subtitle">Example of Error Correction</h3>
      <div className="flex gap-1.5">
        <div>
          <h3 className="cn-subtitle">Received Code (with error):</h3>
          <p className="text-grey-400">Received Data = 1 0 0 1 0 1 1</p>
          <h3 className="cn-subtitle">Step 1: Calculate Parity Bits</h3>
          <p className="text-grey-400">
            The receiver calculates the parity for each bit and determines that P1, P2, and P4 are incorrect, meaning there is an error in position 3.
          </p>
        </div>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200122012046/edited2.png" alt="Hamming Error Correction" />
      </div>
      
      <h3 className="cn-subtitle">Advantages of Hamming Code</h3>
      <ul className="text-grey-400">
        <li>Can detect and correct single-bit errors.</li>
        <li>Efficient error detection and correction mechanism.</li>
        <li>Improves data integrity in noisy transmission environments.</li>
      </ul>

      <h3 className="cn-subtitle">Disadvantages of Hamming Code</h3>
      <ul className="text-grey-400">
        <li>Only corrects single-bit errors. Multiple errors cannot be corrected.</li>
        <li>Increases data size due to the addition of parity bits.</li>
        <li>Can introduce a delay due to the error detection and correction process.</li>
      </ul>
      <button className='infoBtn' onClick={()=>(window.open("https://www.geeksforgeeks.org/hamming-code-in-computer-network/"))}>More info</button>
    </div>
  );
}

export default HammingCode;
