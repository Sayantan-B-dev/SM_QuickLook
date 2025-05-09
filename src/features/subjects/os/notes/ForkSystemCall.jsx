import React from "react";
import "../../../../CSS/OS.css";

function ForkSystemCall() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Understanding fork() System Call</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is fork()?</h2>
          <p className="os-example">
            The `fork()` system call is used to create a new process by duplicating the calling process. The newly created process is called the child process, while the original process is the parent. The `fork()` system call returns a value in both processes:
          </p>
          <ul>
            <li>In the parent process, `fork()` returns the process ID (PID) of the child process.</li>
            <li>In the child process, `fork()` returns `0`.</li>
          </ul>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Basic Example of fork()</h2>
          <pre className="os-example">
{`
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main() {
    pid_t pid = fork();

    if (pid < 0) {
        // Error
        perror("Fork failed");
    } else if (pid == 0) {
        // Child Process
        printf("This is the child process. PID: %d\n", getpid());
    } else {
        // Parent Process
        printf("This is the parent process. PID: %d, Child PID: %d\n", getpid(), pid);
    }
    return 0;
}
`}
          </pre>
          <p className="os-example">
            In this example:
            <ul>
              <li>The `fork()` system call is invoked to create a child process.</li>
              <li>The `pid` variable holds the PID of the child process in the parent, and `0` in the child process.</li>
            </ul>
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Why use fork()?</h2>
          <p className="os-example">
            The `fork()` system call is used for multitasking, where a parent process creates one or more child processes. These child processes execute independently of the parent and can perform tasks concurrently.
          </p>
          <p className="os-example">
            It is used for:
            <ul>
              <li>Creating new processes in Unix-like operating systems.</li>
              <li>Implementing concurrency or parallelism by creating child processes that can run simultaneously.</li>
              <li>Spawning new tasks or subprocesses to handle different operations, such as handling multiple connections or tasks.</li>
            </ul>
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Tricky Scenarios and Behavior of fork()</h2>
          <h3 className="os-subtitle">1. `fork()` and File Descriptors</h3>
          <p className="os-example">
            After calling `fork()`, both the parent and child processes share the same file descriptors. If a process modifies a file descriptor, both processes will be affected. For example:
          </p>
          <pre className="os-example">
{`
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main() {
    pid_t pid = fork();
    FILE *file = fopen("test.txt", "w");

    if (pid == 0) {
        // Child Process writes to the file
        fprintf(file, "Child Process\n");
        fclose(file);
    } else {
        // Parent Process writes to the file
        fprintf(file, "Parent Process\n");
        fclose(file);
    }
    return 0;
}
`}
          </pre>
          <p className="os-example">
            In this example, both the parent and child processes share the same file descriptor. The result in "test.txt" will be both "Child Process" and "Parent Process" written, which could lead to unexpected behavior if not handled carefully.
          </p>

          <h3 className="os-subtitle">2. Handling Multiple `fork()` Calls</h3>
          <p className="os-example">
            You can call `fork()` multiple times, which creates a tree of processes. This behavior can be tricky as each process continues to execute the code after the `fork()`. For example:
          </p>
          <pre className="os-example">
{`
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main() {
    fork(); // First fork
    fork(); // Second fork

    printf("Process PID: %d\n", getpid());
    return 0;
}
`}
          </pre>
          <p className="os-example">
            Here, two calls to `fork()` result in four processes (2<sup>2</sup>). Each process prints its PID. Understanding how many processes will be created and how they execute can get tricky.
          </p>

          <h3 className="os-subtitle">3. `fork()` and Race Conditions</h3>
          <p className="os-example">
            When both the parent and child processes try to access shared resources, race conditions may occur. To avoid race conditions, synchronization mechanisms like semaphores or mutexes are used. Here's an example with an intentional race condition:
          </p>
          <pre className="os-example">
{`
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main() {
    pid_t pid = fork();
    int x = 0;

    if (pid == 0) {
        // Child Process
        x++;
        printf("Child: %d\n", x);
    } else {
        // Parent Process
        x++;
        printf("Parent: %d\n", x);
    }
    return 0;
}
`}
          </pre>
          <p className="os-example">
            In this example, there’s a race condition between the parent and child processes when accessing the variable `x`. Without synchronization, the output may be unpredictable.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">`fork()` with exec() Example</h2>
          <p className="os-example">
            Often, `fork()` is followed by `exec()` to replace the child process’s image with a new program. Here’s an example:
          </p>
          <pre className="os-example">
{`
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main() {
    pid_t pid = fork();

    if (pid == 0) {
        // Child Process executes a new program
        execlp("/bin/ls", "ls", "-l", NULL);
    } else {
        // Parent Process waits
        wait(NULL);
        printf("Parent process is done.\n");
    }
    return 0;
}
`}
          </pre>
          <p className="os-example">
            In this example:
            <ul>
              <li>The parent process waits for the child process to finish using `wait()`.</li>
              <li>The child process replaces its image with the `ls -l` command using `execlp()`.</li>
            </ul>
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Common Mistakes with fork()</h2>
          <p className="os-example">
            Some common pitfalls include:
            <ul>
              <li>Calling `fork()` in a loop without understanding the process tree structure.</li>
              <li>Not handling file descriptors correctly, leading to unexpected file writes.</li>
              <li>Not handling race conditions when multiple processes access shared resources.</li>
            </ul>
          </p>
        </div>

        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/fork-system-call-in-c/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default ForkSystemCall;
