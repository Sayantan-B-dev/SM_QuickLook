import React from 'react';
import '../../../../CSS/CN.css';

function ManchesterEncoding() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Manchester & Differential Manchester Encoding</h1>

        {/* Manchester Encoding Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Manchester Encoding?</h2>
          <p className="cn-example">
            Manchester encoding is a synchronous clock-based encoding technique where:
            <br />
            - Logical '1' is represented by a high-to-low transition in the middle of the bit period.
            <br />
            - Logical '0' is represented by a low-to-high transition in the middle.
            <br />
            This means each bit has a transition at the center for clock synchronization.
          </p>

          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Key Features</h3>
              <pre>
{`• Self-synchronizing (mid-bit transitions help in clock recovery)
• No DC component (ideal for certain transmission media)
• Uses double the bandwidth of NRZ (1 bit = 2 signal changes)`}
              </pre>
            </div>

            <div className="cn-grid-item unstructured">
              <h3 className="cn-subtitle">Diagram</h3>
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/ETHERNET_1.jpg" alt="Manchester Encoding Diagram" />
            </div>
          </div>
        </div>

        {/* Differential Manchester Encoding Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is Differential Manchester Encoding?</h2>
          <p className="cn-example">
            In Differential Manchester encoding, every bit has a transition at the middle for clocking:
            <br />
            - Logical '0' is represented by a transition at the beginning of the bit period.
            <br />
            - Logical '1' has no transition at the beginning.
            <br />
            The key difference is: encoding is based on transitions, not levels.
          </p>

          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <h3 className="cn-subtitle">Key Features</h3>
              <pre>
{`• More reliable than Manchester in noisy environments
• Easier to detect polarity errors
• Also requires double bandwidth due to guaranteed mid-bit transitions`}
              </pre>
            </div>

            <div className="cn-grid-item unstructured">
              <h3 className="cn-subtitle">Diagram</h3>
              <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilPxZy1U3XpkJ4h6tG5Phk_WWJ-kFuPgp_00YRvaGdzfAF1ry_y-RkTVMk0-bPHxx-A24lHf7eJfWYIIJgg9mMSPuRdchz-zGH6f1LMGMuUBXvVpnoAybOTBF5jYpdWJdq3zb_TFfRrpM-/w400-h210/DME-Manchester.PNG" alt="Differential Manchester Encoding Diagram" />
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Comparison Table</h2>
          <table className="example-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Manchester</th>
                <th>Differential Manchester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mid-bit Transition</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Start-bit Transition</td>
                <td>Based on bit value</td>
                <td>Always for '0'</td>
              </tr>
              <tr>
                <td>Synchronization</td>
                <td>Good</td>
                <td>Very Good</td>
              </tr>
              <tr>
                <td>Error Detection</td>
                <td>Basic</td>
                <td>Better (detects polarity inversion)</td>
              </tr>
              <tr>
                <td>Bandwidth Usage</td>
                <td>High</td>
                <td>High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManchesterEncoding;
