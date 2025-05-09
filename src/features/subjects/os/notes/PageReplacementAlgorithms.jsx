import React from "react";
import "../../../../CSS/OS.css";

function PageReplacementAlgorithms() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Page Replacement Algorithms</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What are Page Replacement Algorithms?</h2>
          <p className="os-example">
            When a page fault occurs and memory is full, the operating system must
            replace one of the existing pages with the required one. Page replacement
            algorithms help decide which page to replace to reduce the number of faults.
          </p>
        </div>

<div className="os-section">
  <h2 className="os-subtitle">Belady's Anomaly in FIFO Page Replacement</h2>
  <p className="os-example">
    <strong>Belady’s Anomaly</strong> refers to a counterintuitive situation where increasing the number of page frames
    results in **more page faults**, instead of fewer. This behavior is observed in the FIFO (First-In, First-Out)
    page replacement algorithm and is considered a flaw because ideally, more memory should reduce faults.
  </p>
  <p className="os-example">
    This anomaly proves that FIFO is **not a stack-based algorithm** (unlike LRU or Optimal), where a larger memory
    would always be a superset of a smaller one.
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
    🔍 <strong>Conclusion:</strong> Belady’s Anomaly can lead to worse performance in FIFO if memory size increases,
    which is why modern systems prefer algorithms like LRU or Optimal that don’t suffer from this issue.
  </p>
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241023184328270600/page1.jpg" alt="" style={{margin:"20px auto",boxShadow:"5px 5px 5px black   "}}/>
</div>
<div className="os-section">
  <h2 className="os-subtitle">Optimal Page Replacement Algorithm</h2>
  <p className="os-example">
    The <strong>Optimal Page Replacement</strong> algorithm replaces the page that will not be used for the longest time
    in the future. It provides the **lowest possible number of page faults** for a given reference string and number of
    frames. However, it is **not practically implementable** in general-purpose operating systems because it requires
    **future knowledge** of memory accesses.
  </p>
  <p className="os-example">
    It is mainly used as a theoretical benchmark to compare other algorithms like FIFO and LRU. When implementing or
    analyzing paging behavior, the Optimal algorithm serves as the ideal baseline.
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
    🔍 <strong>How Replacement Was Decided:</strong> Whenever a new page needed to be loaded and no empty frame was
    available, the algorithm looked ahead into the future of the reference string and chose the page whose next use was
    **farthest away** or **never used again**. This minimizes page faults.
  </p>
  <p className="os-example">
    ✅ <strong>Advantage:</strong> Minimum page faults, ideal baseline.  
    ❌ <strong>Disadvantage:</strong> Requires future knowledge, so it cannot be implemented in real systems.
  </p>
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241023184349191529/page2.jpg" alt="" style={{margin:"20px auto",boxShadow:"5px 5px 5px black   "}}/>

</div>


        <div className="os-section">
  <h2 className="os-subtitle">LRU (Least Recently Used) Page Replacement Algorithm</h2>
  <p className="os-example">
    <strong>LRU (Least Recently Used)</strong> is a page replacement algorithm that removes the page which has not been 
    used for the longest time in the past. It assumes that pages used recently are more likely to be used again soon, 
    while pages that haven't been used for a while are less likely to be needed.
  </p>
  <p className="os-example">
    LRU is a **stack-based algorithm**, meaning it always performs at least as well as FIFO and never suffers from 
    Belady's Anomaly. It is closer to the Optimal algorithm in behavior, but unlike Optimal, LRU is **implementable** 
    using data structures like stacks or counters.
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
    🔍 <strong>Explanation:</strong> LRU checks the recent history of page accesses. When a page needs to be replaced, 
    the page with the **oldest last use** is removed. This is based on the idea that if a page hasn't been used recently, 
    it's less likely to be used soon.
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
      <li>Implementation can be costly (especially maintaining order of recent use)</li>
      <li>Overhead of tracking past usage for every page reference</li>
    </ul>
  </p>
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241023184405860059/page3.jpg" alt="" style={{margin:"20px auto",boxShadow:"5px 5px 5px black   "}}/>

</div>
<div className="os-section">
  <h2 className="os-subtitle">MRU (Most Recently Used) Page Replacement Algorithm</h2>
  <p className="os-example">
    The <strong>MRU (Most Recently Used)</strong> page replacement algorithm does the exact opposite of LRU. Instead of removing 
    the least recently used page, MRU removes the <strong>most recently used</strong> page when a page fault occurs and 
    memory is full.
  </p>
  <p className="os-example">
    MRU assumes that if a page was just used, it is less likely to be used again in the near future. This approach 
    may be beneficial in certain applications like databases or cyclic processes where recently accessed pages are not 
    reused immediately.
  </p>
  <p className="os-example">
    MRU is <strong>rarely better</strong> than LRU or Optimal for general-purpose workloads, but it may outperform others 
    under specific access patterns.
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
    🔍 <strong>Explanation:</strong> When a page needs to be replaced, MRU chooses the page that was 
    <strong>just accessed most recently</strong>. For instance, if pages in memory are [A, B, C], and the most 
    recent access was to C, MRU would replace C next if a fault occurs.
  </p>
  <p className="os-example">
    ✅ <strong>Advantages:</strong>
    <ul>
      <li>Useful in specific applications like database lookups where most recent accesses may not be reused immediately</li>
      <li>Simple to implement</li>
    </ul>
    ❌ <strong>Disadvantages:</strong>
    <ul>
      <li>Generally performs poorly on typical workloads</li>
      <li>Not optimal or commonly used in practice</li>
      <li>Heavily workload-dependent performance</li>
    </ul>
  </p>
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20241023184428687727/page4.jpg" alt="" style={{margin:"20px auto",boxShadow:"5px 5px 5px black   "}}/>

</div>


<div className="os-section">
  <h2 className="os-subtitle">Comparison Table</h2>
  <table className="os-table">
    <thead>
      <tr>
        <th>Algorithm</th>
        <th>Strategy</th>
        <th>Page Faults (Sample)</th>
        <th>Performance</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>FIFO</td>
        <td>Oldest page removed</td>
        <td>7</td>
        <td>Simple but not always optimal</td>
      </tr>
      <tr>
        <td>Optimal</td>
        <td>Future reference-based</td>
        <td>6</td>
        <td>Best possible (theoretical)</td>
      </tr>
      <tr>
        <td>LRU</td>
        <td>Least recently used page removed</td>
        <td>8</td>
        <td>Better than FIFO, close to Optimal</td>
      </tr>
      <tr>
        <td>MRU</td>
        <td>Most recently used page removed</td>
        <td>10</td>
        <td>Performs well in specific workloads</td>
      </tr>
    </tbody>
  </table>
</div>


<div className="os-section">
  <h2 className="os-subtitle">Code Snippets: Page Replacement Algorithms</h2>

  <h3 className="os-subtitle">FIFO Page Replacement</h3>
  <pre>{`
function fifoPageReplacement(pages, frameSize) {
  let frame = [];
  let pageFaults = 0;

  pages.forEach((page) => {
    if (!frame.includes(page)) {
      if (frame.length === frameSize) {
        frame.shift(); // Remove oldest
      }
      frame.push(page);
      pageFaults++;
    }
  });

  return pageFaults;
}
  `}</pre>

  <h3 className="os-subtitle">Optimal Page Replacement</h3>
  <pre>{`
function optimalPageReplacement(pages, frameSize) {
  let frame = [];
  let pageFaults = 0;

  pages.forEach((page, i) => {
    if (!frame.includes(page)) {
      if (frame.length === frameSize) {
        let farthest = -1;
        let indexToRemove = -1;

        frame.forEach((f, idx) => {
          let nextUse = pages.slice(i + 1).indexOf(f);
          if (nextUse === -1) {
            indexToRemove = idx;
            farthest = Infinity;
          } else if (nextUse > farthest) {
            farthest = nextUse;
            indexToRemove = idx;
          }
        });

        frame.splice(indexToRemove, 1);
      }
      frame.push(page);
      pageFaults++;
    }
  });

  return pageFaults;
}
  `}</pre>

  <h3 className="os-subtitle">LRU Page Replacement</h3>
  <pre>{`
function lruPageReplacement(pages, frameSize) {
  let frame = [];
  let pageFaults = 0;

  pages.forEach((page) => {
    let index = frame.indexOf(page);
    if (index === -1) {
      if (frame.length === frameSize) {
        frame.shift(); // Remove least recently used
      }
      frame.push(page);
      pageFaults++;
    } else {
      frame.splice(index, 1);
      frame.push(page); // Move to most recent
    }
  });

  return pageFaults;
}
  `}</pre>

  <h3 className="os-subtitle">MRU Page Replacement</h3>
  <pre>{`
function mruPageReplacement(pages, frameSize) {
  let frame = [];
  let pageFaults = 0;
  let lastUsed = null;

  pages.forEach((page) => {
    if (!frame.includes(page)) {
      if (frame.length === frameSize) {
        let idx = frame.indexOf(lastUsed);
        if (idx !== -1) {
          frame.splice(idx, 1); // Remove most recently used
        } else {
          frame.pop(); // fallback
        }
      }
      frame.push(page);
      pageFaults++;
    }
    lastUsed = page;
  });

  return pageFaults;
}
  `}</pre>
</div>


<div className="os-section">
  <h2 className="os-subtitle">Visual Representation</h2>
  <div className="os-grid">
    <div className="os-grid-item structured">
      <div className="os-grid-item unstructured">
        <p><strong>FIFO:</strong> Queue-based memory structure</p>
        <p><strong>Optimal:</strong> Needs entire future reference string</p>
        <p><strong>LRU:</strong> Uses timestamps or stack to track recent usage</p>
        <p><strong>MRU:</strong> Assumes recently used pages are less likely needed again soon</p>
      </div>
    </div>
  </div>
</div>


        <button
          className="infoBtn"
          onClick={() =>
            window.open(
              "https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/"
            )
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default PageReplacementAlgorithms;
