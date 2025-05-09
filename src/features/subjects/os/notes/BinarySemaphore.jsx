import React from "react";
import "../../../../CSS/OS.css";

function BinarySemaphore() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Binary Semaphore in Operating Systems</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is a Binary Semaphore?</h2>
          <p className="os-example">
            A binary semaphore, also known as a mutex, is a synchronization primitive
            that can have only two values: 0 and 1. It is used to control access to a
            shared resource by multiple processes in a concurrent system.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Binary Semaphore Operations</h2>
          <p className="os-example">
            There are two main operations that can be performed on a binary semaphore:
            <ul>
              <li><strong>Wait (P or Down):</strong> Decrements the semaphore value. If the semaphore is 0, the process is blocked until the value becomes 1.</li>
              <li><strong>Signal (V or Up):</strong> Increments the semaphore value. If there are any processes waiting, one of them is allowed to continue.</li>
            </ul>
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Code Example</h2>
          <pre>
            {`
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>

sem_t binarySemaphore;

void* task1(void* arg) {
    printf("Task 1: Waiting for semaphore\n");
    sem_wait(&binarySemaphore); // Wait operation
    printf("Task 1: Acquired semaphore, performing task\n");
    sem_post(&binarySemaphore); // Signal operation
    return NULL;
}

void* task2(void* arg) {
    printf("Task 2: Waiting for semaphore\n");
    sem_wait(&binarySemaphore); // Wait operation
    printf("Task 2: Acquired semaphore, performing task\n");
    sem_post(&binarySemaphore); // Signal operation
    return NULL;
}

int main() {
    pthread_t t1, t2;

    // Initialize the binary semaphore with value 1
    sem_init(&binarySemaphore, 0, 1);

    // Create two threads
    pthread_create(&t1, NULL, task1, NULL);
    pthread_create(&t2, NULL, task2, NULL);

    // Wait for threads to complete
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);

    // Destroy the semaphore
    sem_destroy(&binarySemaphore);

    return 0;
}
            `}
          </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Output</h2>
          <pre>
            {`
Task 1: Waiting for semaphore
Task 1: Acquired semaphore, performing task
Task 2: Waiting for semaphore
Task 2: Acquired semaphore, performing task
            `}
          </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Binary Semaphore</h2>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230222155850/Binary.jpg"
            alt="Binary Semaphore Diagram"
          />
        </div>
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/binary-semaphore-in-operating-system/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default BinarySemaphore;
