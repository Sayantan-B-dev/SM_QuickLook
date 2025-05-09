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
            When a page fault occurs and memory is full, the operating system
            must replace one of the existing pages with the required one. Page
            replacement algorithms help decide which page to replace to reduce
            the number of faults.
          </p>
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
          <h2 className="os-subtitle">
            Code Snippets: Page Replacement Algorithms
          </h2>

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
                <p>
                  <strong>FIFO:</strong> Queue-based memory structure
                </p>
                <p>
                  <strong>Optimal:</strong> Needs entire future reference string
                </p>
                <p>
                  <strong>LRU:</strong> Uses timestamps or stack to track recent
                  usage
                </p>
                <p>
                  <strong>MRU:</strong> Assumes recently used pages are less
                  likely needed again soon
                </p>
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
