function CrcProtocol() {
    return (
      <div className="cn-wrapper">
        <div className="cn-card">
          <h1 className="cn-title">Cyclic Redundancy Check (CRC) - Data Link Layer</h1>
  
          <div className="cn-section">
            <h2 className="cn-subtitle">Introduction</h2>
            <p className="text-grey-400">
              CRC is a popular error-detecting code used in digital networks and storage devices to detect accidental changes to raw data. It works by treating data as a polynomial and performing binary division using a predefined divisor (generator polynomial).
            </p>
          </div>
  
          <div className="cn-section">
            <h2 className="cn-subtitle">Key Concepts</h2>
            <p className="text-grey-400">
              - Data is treated as a binary number.<br />
              - A fixed divisor (generator polynomial) is used.<br />
              - Remainder after binary division is used as CRC.<br />
              - CRC is appended to the data and transmitted.<br />
              - Receiver performs same division; if remainder = 0, no error.
            </p>
          </div>
  
          <div className="cn-section">
            <h2 className="cn-subtitle">Terminology</h2>
            <p className="text-grey-400">
              - <strong>Dataword</strong>: The actual binary data to be transmitted.<br />
              - <strong>Generator (Divisor)</strong>: A fixed polynomial used for division (e.g., 1011).<br />
              - <strong>CRC</strong>: The remainder (checksum) that gets appended.<br />
              - <strong>Codeword</strong>: Dataword + CRC bits.
            </p>
          </div>
  
          <div className="cn-section">
            <h2 className="cn-subtitle">Steps to Calculate CRC</h2>
            <pre className="text-grey-400">
  {`1. Append (n-1) zeros to the dataword, where n = length of divisor.
  2. Perform binary (XOR) division between appended data and divisor.
  3. The remainder is the CRC.
  4. Append CRC to original dataword to form the codeword.
  5. Receiver performs same division and checks if remainder = 0.`}
            </pre>
          </div>
  
          <div className="cn-section">
            <h2 className="cn-subtitle">Example</h2>
            <pre className="text-grey-400">
  {`Dataword: 11010011101100
  Divisor (Generator): 1011
  
  Step 1: Append 3 zeros (length of divisor - 1):
  11010011101100000
  
  Step 2: Perform XOR division:
  1101 ÷ 1011 → XOR → 0110 → Bring next bit and continue...
  
  Final Remainder: 100
  
  Step 3: Codeword = 11010011101100 + 100 = 11010011101100100`}
            </pre>
          </div>
  
          <div className="cn-section">
            <h2 className="cn-subtitle">Mathematical Representation</h2>
            <p className="text-grey-400">
              - Let <strong>D(x)</strong> = Data polynomial<br />
              - <strong>G(x)</strong> = Generator polynomial<br />
              - <strong>R(x)</strong> = Remainder (CRC)<br />
              - Transmitted message: T(x) = D(x) * 2ⁿ + R(x)<br />
              - Receiver divides T(x) by G(x), checks if remainder = 0
            </p>
          </div>
  
          <div className="cn-section">
            <h2 className="cn-subtitle">Advantages</h2>
            <p className="text-grey-400">
              - Detects burst errors efficiently<br />
              - Minimal overhead with high detection accuracy<br />
              - Simple implementation in hardware
            </p>
          </div>
  
          <div className="cn-section">
            <h2 className="cn-subtitle">Disadvantages</h2>
            <p className="text-grey-400">
              - Cannot correct errors, only detects<br />
              - Requires predefined generator on both sides<br />
              - More complex than parity and checksum
            </p>
          </div>
  
          <div className="cn-section">
            <h2 className="cn-subtitle">Diagram: CRC Working</h2>
            <div className="flex gap-6"> 
            <img
              src="https://www.tutorialspoint.com/data_communication_computer_network/images/crc_generator_and_checker_ex1.jpg"
              alt="CRC Diagram"
            />
            <img src="https://www.tutorialspoint.com/data_communication_computer_network/images/crc_generator_and_checker_ex1.jpg" alt="" />
            </div>

          </div>
  
          <button
            className="infoBtn"
            onClick={() => window.open("https://www.tutorialspoint.com/data_communication_computer_network/computer_network_cyclic_redundancy_checks.htm")}
          >
            Know more
          </button>
        </div>
      </div>
    );
  }
  
  export default CrcProtocol;