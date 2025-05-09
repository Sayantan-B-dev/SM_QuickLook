import React from "react";
import "../../../../CSS/OS.css";

function LseekExplanation() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Understanding <code>lseek()</code> in Linux</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is <code>lseek()</code>?</h2>
          <p className="os-example">
            The <code>lseek()</code> system call in Unix/Linux is used to reposition the read/write file offset of an open file descriptor. It changes the position of the file pointer, which determines where the next read() or write() will begin.
          </p>

          <h2 className="os-subtitle">Function Prototype</h2>
          <pre className="os-example">
{`#include <unistd.h>

off_t lseek(int fd, off_t offset, int whence);`}
          </pre>

          <h2 className="os-subtitle">Parameters</h2>
          <ul className="os-example">
            <li><strong>fd</strong>: File descriptor</li>
            <li><strong>offset</strong>: Number of bytes to move</li>
            <li><strong>whence</strong>: Starting point for the offset</li>
          </ul>

          <h2 className="os-subtitle">Values for <code>whence</code></h2>
          <ul className="os-example">
            <li><code>SEEK_SET</code>: Set offset from beginning of file</li>
            <li><code>SEEK_CUR</code>: Set offset from current position</li>
            <li><code>SEEK_END</code>: Set offset from end of file</li>
          </ul>

          <h2 className="os-subtitle">Return Value</h2>
          <p className="os-example">
            Returns the resulting offset from the beginning of the file, or -1 if an error occurs.
          </p>

          <h2 className="os-subtitle">Use Cases</h2>
          <ul className="os-example">
            <li>Skip over data</li>
            <li>Append data to end of file</li>
            <li>Determine size of file</li>
            <li>Random access read/write</li>
          </ul>

          <h2 className="os-subtitle">Example Code</h2>
          <pre className="os-example">
{`#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>

int main() {
    int fd = open("example.txt", O_RDONLY);
    if (fd == -1) {
        perror("open");
        return 1;
    }

    off_t size = lseek(fd, 0, SEEK_END);
    if (size == -1) {
        perror("lseek");
        return 1;
    }

    printf("File size: %ld bytes\n", size);
    close(fd);
    return 0;
}`}
          </pre>

          <h2 className="os-subtitle">Diagram: lseek() Offsets</h2>
          <pre className="os-example">
{`
   File: |----------------------------|
         ^                        ^
      SEEK_SET=0           SEEK_END=0
              ^
           SEEK_CUR
`}
          </pre>
        </div>

        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/lseek-in-c-to-read-the-alternate-nth-byte-and-write-it-in-another-file/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default LseekExplanation;
