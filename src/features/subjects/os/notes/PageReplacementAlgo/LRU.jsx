import React from 'react'
import "../../../../../CSS/OS.css";

function LRU() {
  return (
    <div className='os-wrapper'>
        <div  className='os-card'>
        <div className="os-section">
          <h2 className="os-subtitle">
            LRU (Least Recently Used) Page Replacement Algorithm
          </h2>
          <p className="os-example">
            <strong>LRU (Least Recently Used)</strong> is a page replacement
            algorithm that removes the page which has not been used for the
            longest time in the past. It assumes that pages used recently are
            more likely to be used again soon, while pages that haven't been
            used for a while are less likely to be needed.
          </p>
          <p className="os-example">
            LRU is a **stack-based algorithm**, meaning it always performs at
            least as well as FIFO and never suffers from Belady's Anomaly. It is
            closer to the Optimal algorithm in behavior, but unlike Optimal, LRU
            is **implementable** using data structures like stacks or counters.
          </p>
          <p className="os-example">
            Let's go through an example of LRU with 3 page frames:
          </p>
          <pre>{`
Reference String: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2

Number of Page Frames = 3

Step-by-step Execution:

[7]         → Page Fault
[7,0]       → Page Fault
[7,0,1]     → Page Fault
[0,1,2]     → Page Fault (7 least recently used → replaced)
[0,1,2]     → No Fault (0 is used → most recent)
[1,2,3]     → Page Fault (0 replaced: least recently used)
[1,2,3]     → No Fault
[2,3,0]     → Page Fault (1 replaced: least recently used)
[3,0,2]     → No Fault
[0,2,3]     → No Fault
[2,3,0]     → No Fault
[2,3,0]     → No Fault
[2,3,0]     → No Fault

➡ Total Page Faults = 10
  `}</pre>
          <p className="os-example">
            🔍 <strong>Explanation:</strong> LRU checks the recent history of
            page accesses. When a page needs to be replaced, the page with the
            **oldest last use** is removed. This is based on the idea that if a
            page hasn't been used recently, it's less likely to be used soon.
          </p>
          <p className="os-example">
            ✅ <strong>Advantages:</strong>
            <ul>
              <li>Does not suffer from Belady's Anomaly</li>
              <li>Provides good performance and approximation of Optimal</li>
              <li>Can be implemented using stacks, counters, or timestamps</li>
            </ul>
            ❌ <strong>Disadvantages:</strong>
            <ul>
              <li>
                Implementation can be costly (especially maintaining order of
                recent use)
              </li>
              <li>Overhead of tracking past usage for every page reference</li>
            </ul>
          </p>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20241023184405860059/page3.jpg"
            alt=""
            style={{ margin: "20px auto", boxShadow: "5px 5px 5px black   " }}
          />
        </div>
        </div>
    </div>
  )
}

export default LRU
