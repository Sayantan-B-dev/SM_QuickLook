import React from "react";
import "../../../../CSS/OS.css";

export function ProducerConsumer() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Producer-Consumer Problem</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Explanation</h2>
          <p className="os-example">
            In this problem, we have two entities: the producer, which adds items to a buffer, and the consumer, which removes items from the buffer. The challenge is to synchronize access to the buffer such that:
            <ul>
              <li>The producer does not add data when the buffer is full.</li>
              <li>The consumer does not try to consume data when the buffer is empty.</li>
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
#include <stdlib.h>
#include <unistd.h>

#define MAX 10
int buffer[MAX];
int count = 0;

sem_t empty, full;
pthread_mutex_t mutex;

void* producer(void* arg) {
    while (1) {
        sem_wait(&empty);
        pthread_mutex_lock(&mutex);

        buffer[count] = rand() % 100;
        printf("Produced: %d\n", buffer[count]);
        count++;

        pthread_mutex_unlock(&mutex);
        sem_post(&full);
        sleep(1);
    }
    return NULL;
}

void* consumer(void* arg) {
    while (1) {
        sem_wait(&full);
        pthread_mutex_lock(&mutex);

        count--;
        printf("Consumed: %d\n", buffer[count]);

        pthread_mutex_unlock(&mutex);
        sem_post(&empty);
        sleep(2);
    }
    return NULL;
}

int main() {
    pthread_t prod, cons;

    sem_init(&empty, 0, MAX);
    sem_init(&full, 0, 0);
    pthread_mutex_init(&mutex, NULL);

    pthread_create(&prod, NULL, producer, NULL);
    pthread_create(&cons, NULL, consumer, NULL);

    pthread_join(prod, NULL);
    pthread_join(cons, NULL);

    sem_destroy(&empty);
    sem_destroy(&full);
    pthread_mutex_destroy(&mutex);

    return 0;
}
            `}
          </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Output</h2>
          <pre>
            {`
Produced: 73
Consumed: 73
Produced: 25
Consumed: 25
Produced: 56
Consumed: 56
            `}
          </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Producer-Consumer</h2>
          <pre>
            {`
  Producer                  Consumer
      |                           |
      V                           V
   [Insert Item]         [Consume Item]
      |                           |
      V                           V
     Buffer  ------------------->  Buffer
      |                           |
      V                           V
  (Mutex Lock)           (Mutex Lock)
            `}
          </pre>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/producer-consumer-problem-in-c/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}



export function ReaderWriter() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Reader-Writer Problem</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Explanation</h2>
          <p className="os-example">
            In the Reader-Writer problem, multiple readers can read from a shared resource at the same time, but only one writer can write to the resource at a time. We need to ensure:
            <ul>
              <li>Readers can access the resource concurrently.</li>
              <li>Only one writer can access the resource at a time, with no readers allowed.</li>
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
#include <unistd.h>

sem_t mutex, rw_mutex;
int read_count = 0;

void* reader(void* arg) {
    while (1) {
        sem_wait(&mutex);
        read_count++;
        if (read_count == 1) {
            sem_wait(&rw_mutex);
        }
        sem_post(&mutex);

        printf("Reading resource\n");

        sem_wait(&mutex);
        read_count--;
        if (read_count == 0) {
            sem_post(&rw_mutex);
        }
        sem_post(&mutex);

        sleep(1);
    }
    return NULL;
}

void* writer(void* arg) {
    while (1) {
        sem_wait(&rw_mutex);

        printf("Writing to resource\n");

        sem_post(&rw_mutex);
        sleep(2);
    }
    return NULL;
}

int main() {
    pthread_t r1, r2, w1;

    sem_init(&mutex, 0, 1);
    sem_init(&rw_mutex, 0, 1);

    pthread_create(&r1, NULL, reader, NULL);
    pthread_create(&r2, NULL, reader, NULL);
    pthread_create(&w1, NULL, writer, NULL);

    pthread_join(r1, NULL);
    pthread_join(r2, NULL);
    pthread_join(w1, NULL);

    sem_destroy(&mutex);
    sem_destroy(&rw_mutex);

    return 0;
}
            `}
          </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Output</h2>
          <pre>
            {`
Reading resource
Reading resource
Writing to resource
Reading resource
            `}
          </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Reader-Writer Problem</h2>
          <pre>
            {`
Reader 1 ---> (Mutex Lock) ---> Read Resource
Reader 2 ---> (Mutex Lock) ---> Read Resource
Writer ---> (Rw Mutex Lock) ---> Write Resource
            `}
          </pre>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/readers-writers-problem-set-1-introduction-and-readers-preference-solution/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export function DiningPhilosophers() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Dining Philosophers Problem</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Explanation</h2>
          <p className="os-example">
            The Dining Philosophers Problem involves a set of philosophers who need two forks to eat. The challenge is to:
            <ul>
              <li>Avoid deadlock where no philosopher can eat.</li>
              <li>Prevent starvation where a philosopher never gets both forks.</li>
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

sem_t forks[5];
pthread_mutex_t mutex;

void* philosopher(void* arg) {
    int i = *((int*)arg);
    while (1) {
        printf("Philosopher %d is thinking\n", i);

        // Pick up forks
        sem_wait(&forks[i]);
        sem_wait(&forks[(i + 1) % 5]);

        printf("Philosopher %d is eating\n", i);

        // Put down forks
        sem_post(&forks[i]);
        sem_post(&forks[(i + 1) % 5]);

        sleep(1);
    }
    return NULL;
}

int main() {
    pthread_t philosophers[5];
    int ids[5];

    for (int i = 0; i < 5; i++) {
        sem_init(&forks[i], 0, 1);
        ids[i] = i;
    }

    for (int i = 0; i < 5; i++) {
        pthread_create(&philosophers[i], NULL, philosopher, &ids[i]);
    }

    for (int i = 0; i < 5; i++) {
        pthread_join(philosophers[i], NULL);
    }

    for (int i = 0; i < 5; i++) {
        sem_destroy(&forks[i]);
    }

    return 0;
}
            `}
          </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Output</h2>
          <pre>
            {`
Philosopher 0 is thinking
Philosopher 1 is thinking
Philosopher 2 is thinking
Philosopher 3 is thinking
Philosopher 4 is thinking
Philosopher 0 is eating
Philosopher 1 is eating
            `}
          </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Dining Philosophers</h2>
          <pre>
            {`
    Philosopher 0 <--> Fork 1 <--> Philosopher 1 <--> Fork 2
           ^                              |
           |                              v
    Philosopher 4 <--> Fork 5 <--> Philosopher 3 <--> Fork 4
           |
    Philosopher 2
            `}
          </pre>
        </div>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231107114729/dining_philosopher_problem.png" alt="" />
        <button
          className="infoBtn"
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/dining-philosopher-problem-using-semaphores/")
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

