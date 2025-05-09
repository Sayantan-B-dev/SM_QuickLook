import React from 'react'
import "../../../../../CSS/OS.css";

function Optimal() {
  return (
    <div className='os-wrapper'>
        <div  className='os-card'>
        <div className="os-section">
          <h2 className="os-subtitle">Optimal Page Replacement Algorithm</h2>
          <p className="os-example">
            The <strong>Optimal Page Replacement</strong> algorithm replaces the
            page that will not be used for the longest time in the future. It
            provides the **lowest possible number of page faults** for a given
            reference string and number of frames. However, it is **not
            practically implementable** in general-purpose operating systems
            because it requires **future knowledge** of memory accesses.
          </p>
          <p className="os-example">
            It is mainly used as a theoretical benchmark to compare other
            algorithms like FIFO and LRU. When implementing or analyzing paging
            behavior, the Optimal algorithm serves as the ideal baseline.
          </p>
          <p className="os-example">
            Let's understand Optimal Page Replacement with an example:
          </p>
          <pre>{`
Reference String: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2

Number of Page Frames = 3

Step-by-step:

[7]         → Page Fault
[7,0]       → Page Fault
[7,0,1]     → Page Fault
[0,1,2]     → Page Fault (7 replaced: not used again)
[0,1,2]     → No Fault
[1,2,3]     → Page Fault (0 replaced: used furthest in future)
[1,2,3]     → No Fault
[2,3,4]     → Page Fault (1 replaced: not used again)
[3,4,2]     → No Fault (2 in frame)
[4,2,3]     → No Fault (3 in frame)
[2,3,0]     → Page Fault (4 replaced: not used again)
[2,3,0]     → No Fault
[2,3,0]     → No Fault

➡ Total Page Faults = 9
  `}</pre>
          <p className="os-example">
            🔍 <strong>How Replacement Was Decided:</strong> Whenever a new page
            needed to be loaded and no empty frame was available, the algorithm
            looked ahead into the future of the reference string and chose the
            page whose next use was **farthest away** or **never used again**.
            This minimizes page faults.
          </p>
          <p className="os-example">
            ✅ <strong>Advantage:</strong> Minimum page faults, ideal baseline.
            ❌ <strong>Disadvantage:</strong> Requires future knowledge, so it
            cannot be implemented in real systems.
          </p>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20241023184349191529/page2.jpg"
            alt=""
            style={{ margin: "20px auto", boxShadow: "5px 5px 5px black   " }}
          />
        </div>
        </div>
    </div>
  )
}

export default Optimal
