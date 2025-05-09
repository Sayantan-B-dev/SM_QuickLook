import React from 'react'
import "../../../../../CSS/OS.css";

function FIFO() {
  return (
    <div className='os-wrapper'>
        <div  className='os-card'>
                    <div className="os-section">
          <h2 className="os-subtitle">
            Belady's Anomaly in FIFO Page Replacement
          </h2>
          <p className="os-example">
            <strong>Belady’s Anomaly</strong> refers to a counterintuitive
            situation where increasing the number of page frames results in
            **more page faults**, instead of fewer. This behavior is observed in
            the FIFO (First-In, First-Out) page replacement algorithm and is
            considered a flaw because ideally, more memory should reduce faults.
          </p>
          <p className="os-example">
            This anomaly proves that FIFO is **not a stack-based algorithm**
            (unlike LRU or Optimal), where a larger memory would always be a
            superset of a smaller one.
          </p>
          <p className="os-example">
            Let’s demonstrate Belady’s Anomaly with an example:
          </p>
          <pre>{`
Reference String: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5

Case 1: 3 Page Frames
Step-by-step Page Replacement:
[1]       Page Fault
[1,2]     Page Fault
[1,2,3]   Page Fault
[2,3,4]   Page Fault (1 replaced)
[3,4,1]   Page Fault (2 replaced)
[4,1,2]   Page Fault (3 replaced)
[1,2,5]   Page Fault (4 replaced)
[2,5,1]   Page Fault (1 reloaded)
[5,1,2]   Page Fault (2 reloaded)
[1,2,3]   Page Fault (5 replaced)
[2,3,4]   Page Fault (1 replaced)
[3,4,5]   Page Fault (2 replaced)

➡ Total Page Faults = 12

Case 2: 4 Page Frames
Step-by-step Page Replacement:
[1]         Page Fault
[1,2]       Page Fault
[1,2,3]     Page Fault
[1,2,3,4]   Page Fault
[1,2,3,4]   No Fault
[1,2,3,4]   No Fault
[2,3,4,5]   Page Fault (1 replaced)
[3,4,5,1]   Page Fault (2 replaced)
[4,5,1,2]   Page Fault (3 replaced)
[5,1,2,3]   Page Fault (4 replaced)
[1,2,3,4]   Page Fault (5 replaced)
[2,3,4,5]   Page Fault (1 replaced)

➡ Total Page Faults = 10

⚠ Observation: Adding one more frame (from 3 to 4) caused page faults to DROP from 12 → 10 — this is expected.

Now consider another version:

Reference String: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5

With 3 Frames → Page Faults = 9  
With 4 Frames → Page Faults = 10 ← ❗ Belady's Anomaly detected here!
  `}</pre>
          <p className="os-example">
            🔍 <strong>Conclusion:</strong> Belady’s Anomaly can lead to worse
            performance in FIFO if memory size increases, which is why modern
            systems prefer algorithms like LRU or Optimal that don’t suffer from
            this issue.
          </p>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20241023184328270600/page1.jpg"
            alt=""
            style={{ margin: "20px auto", boxShadow: "5px 5px 5px black   " }}
          />
        </div>
        </div>
    </div>
  )
}

export default FIFO
