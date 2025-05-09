import React from "react";
import "../../../../CSS/OS.css";

function ProducerConsumerCriticalSection() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Producer-Consumer Problem & Critical Section</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is the Producer-Consumer Problem?</h2>
          <p className="os-example">
            The Producer-Consumer Problem is a classical synchronization problem in which two processes — the producer and the consumer — share a common, fixed-size buffer. The producer's job is to generate data, put it into the buffer, and start again. The consumer consumes the data from the buffer. The challenge is to ensure that the producer does not add data into a full buffer and the consumer does not remove data from an empty buffer.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">What is a Spooler?</h2>
          <p className="os-example">
            A spooler is a type of software that manages the sequence and storage of data to be printed or processed. It temporarily stores data (like print jobs) in a buffer (usually on disk) so that devices like printers or plotters can access it at their own pace.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Printer Spooler Problem</h2>
          <p className="os-example">
            The printer spooler problem is a real-world example of the producer-consumer problem. Here, multiple users (producers) send print jobs to a shared spool (buffer), and a single printer (consumer) processes those jobs. If the spooler is full, new jobs cannot be added. If the spool is empty, the printer has nothing to print.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Examples of Producer-Consumer Problem</h2>
          <p className="os-example">
            1. A web server (producer) generating logs, and a log processing system (consumer) analyzing them.<br/>
            2. OS loading files into memory (producer), and an application reading the file (consumer).<br/>
            3. Video streaming buffer where download (producer) fills data and player (consumer) reads it.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">What is a Critical Section?</h2>
          <p className="os-example">
            A critical section is a part of a program that accesses shared resources (like data structures, files, etc.) and must not be concurrently accessed by more than one process or thread. Proper synchronization must ensure mutual exclusion in this section.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Critical Section Problem</h2>
          <p className="os-example">
            The critical section problem involves designing a protocol that ensures only one process can be in the critical section at any time. It requires fulfilling three conditions:
            <br/>1. **Mutual Exclusion** – Only one process can enter the critical section at a time.
            <br/>2. **Progress** – If no one is in the critical section, a process waiting should be able to enter.
            <br/>3. **Bounded Waiting** – There exists a limit after which a process must be allowed to enter the section.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Entry, Critical & Exit Sections</h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <h3>Entry Section</h3>
              <p>Code that checks if the critical section can be entered.</p>
            </div>
            <div className="os-grid-item structured">
              <h3>Critical Section</h3>
              <p>Code where shared resources are accessed.</p>
            </div>
            <div className="os-grid-item structured">
              <h3>Exit Section</h3>
              <p>Code to release the lock or indicate exit from the critical section.</p>
            </div>
            <div className="os-grid-item structured">
              <h3>Remainder Section</h3>
              <p>All other parts of the code not dealing with critical section.</p>
            </div>
          </div>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Bounded Buffer - No Assumption Approach</h2>
          <p className="os-example">
            The bounded buffer solution makes no assumptions about the speed or number of producers/consumers. It relies on semaphores/mutexes to synchronize access. The buffer is a fixed-size array with pointers for inserting and removing. It prevents buffer overflow (if full) and underflow (if empty).
          </p>
        </div>

          <button
            className="infoBtn"
            onClick={() =>
              window.open("https://www.geeksforgeeks.org/producer-consumer-problem-using-semaphores-set-1/")
            }
          >
            Know more
          </button>
      </div>
    </div>
  );
}

export default ProducerConsumerCriticalSection;
