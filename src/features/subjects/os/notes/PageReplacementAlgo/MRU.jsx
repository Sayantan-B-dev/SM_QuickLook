import React from 'react'
import "../../../../../CSS/OS.css";

function MRU() {
  return (
    <div className='os-wrapper'>
        <div  className='os-card'>

        <div className="os-section">
          <h2 className="os-subtitle">
            MRU (Most Recently Used) Page Replacement Algorithm
          </h2>
          <p className="os-example">
            The <strong>MRU (Most Recently Used)</strong> page replacement
            algorithm does the exact opposite of LRU. Instead of removing the
            least recently used page, MRU removes the{" "}
            <strong>most recently used</strong> page when a page fault occurs
            and memory is full.
          </p>
          <p className="os-example">
            MRU assumes that if a page was just used, it is less likely to be
            used again in the near future. This approach may be beneficial in
            certain applications like databases or cyclic processes where
            recently accessed pages are not reused immediately.
          </p>
          <p className="os-example">
            MRU is <strong>rarely better</strong> than LRU or Optimal for
            general-purpose workloads, but it may outperform others under
            specific access patterns.
          </p>
          <p className="os-example">
            Here's a working example of MRU using 3 page frames:
          </p>
          <pre>{`
Reference String: 1, 2, 3, 4, 2, 1, 5, 1, 2, 3, 4, 5

Number of Page Frames = 3

Step-by-step Execution:

[1]         → Page Fault
[1,2]       → Page Fault
[1,2,3]     → Page Fault
[2,3,4]     → Page Fault (1 was most recently used → replaced)
[2,3,4]     → No Fault
[3,4,1]     → Page Fault (2 was most recently used → replaced)
[4,1,5]     → Page Fault (3 replaced)
[1,5,2]     → Page Fault (4 replaced)
[5,2,1]     → No Fault
[2,1,3]     → Page Fault (5 replaced)
[1,3,4]     → Page Fault (2 replaced)
[3,4,5]     → Page Fault (1 replaced)

➡ Total Page Faults = 10
  `}</pre>
          <p className="os-example">
            🔍 <strong>Explanation:</strong> When a page needs to be replaced,
            MRU chooses the page that was
            <strong>just accessed most recently</strong>. For instance, if pages
            in memory are [A, B, C], and the most recent access was to C, MRU
            would replace C next if a fault occurs.
          </p>
          <p className="os-example">
            ✅ <strong>Advantages:</strong>
            <ul>
              <li>
                Useful in specific applications like database lookups where most
                recent accesses may not be reused immediately
              </li>
              <li>Simple to implement</li>
            </ul>
            ❌ <strong>Disadvantages:</strong>
            <ul>
              <li>Generally performs poorly on typical workloads</li>
              <li>Not optimal or commonly used in practice</li>
              <li>Heavily workload-dependent performance</li>
            </ul>
          </p>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20241023184428687727/page4.jpg"
            alt=""
            style={{ margin: "20px auto", boxShadow: "5px 5px 5px black   " }}
          />
        </div>
        </div>
    </div>
  )
}

export default MRU
