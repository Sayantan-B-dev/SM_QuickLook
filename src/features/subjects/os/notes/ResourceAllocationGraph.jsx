import React from "react";
import "../../../../CSS/OS.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ResourceAllocationGraph() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Resource Allocation Graph (RAG)</h1>

        <div className="os-section">
          <h2 className="os-subtitle">What is a Resource Allocation Graph?</h2>
          <p className="os-example">
            A Resource Allocation Graph (RAG) is used to model the allocation
            and request of resources by processes. It consists of two types of
            vertices:
            <ul className="os-example">
              <li>
                **Process Vertices:** Represent the processes in the system.
              </li>
              <li>
                **Resource Vertices:** Represent the resources in the system.
                They can be of two types:
                <ul>
                  <li>
                    **Single Instance Resources:** Only one instance of a
                    resource exists in the system.
                  </li>
                  <li>
                    **Multiple Instance Resources:** Multiple instances of a
                    resource exist in the system.
                  </li>
                </ul>
              </li>
            </ul>
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Edges in Resource Allocation Graph</h2>
          <p className="os-example">
            The edges in a RAG indicate relationships between processes and
            resources:
            <ul className="os-example">
              <li>
                **Request Edge:** An edge from a process to a resource indicates
                that the process is requesting that resource.
              </li>
              <li>
                **Assignment Edge:** An edge from a resource to a process
                indicates that the resource has been allocated to the process.
              </li>
            </ul>
          </p>
        </div>

        {/* RAG Diagram */}
        <div className="os-section">
          <h2 className="os-subtitle">Diagram: Resource Allocation Graph</h2>
          <pre className="os-example">
            Graph Example: Processes: P1, P2, P3 Resources: R1 (1 instance), R2
            (2 instances) Resources are represented by rectangles, processes by
            circles, and edges by arrows. P1 --&gt; Request(R1) P1 &lt;--
            Assign(R1) P2 --&gt; Request(R2) R2 --&gt; Assign(P2) P3 --&gt;
            Request(R2)
          </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Numerical Example</h2>
          <p className="os-example">
            Consider the following system with 3 processes and 2 resources. Let:
            <ul>
              <li>Process P1 holds Resource R1.</li>
              <li>
                Process P2 is requesting Resource R2, and Resource R2 is
                available with 2 instances.
              </li>
              <li>
                Process P3 requests Resource R2 but is not allocated because it
                is already requested by P2.
              </li>
            </ul>
            Let's demonstrate the RAG for this scenario:
          </p>

          <pre className="os-example">
            Initial Allocation: P1 --&gt; Request(R1) --&gt; Assign(R1) P2
            --&gt; Request(R2) --&gt; (Not assigned, waiting) P3 --&gt;
            Request(R2) --&gt; (Not assigned, waiting) Final Allocation (After
            P2 gets Resource R2): P1 --&gt; Assign(R1) P2 --&gt; Assign(R2) P3
            --&gt; Request(R2) --&gt; (Still waiting)
          </pre>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Understanding the Example</h2>
          <p className="os-example">
            In this case:
            <ul>
              <li>Process P1 has been assigned Resource R1.</li>
              <li>
                Process P2 requested Resource R2, and as two instances are
                available, it is allocated R2.
              </li>
              <li>
                Process P3 also requests Resource R2 but cannot be allocated
                because P2 holds one of the two instances of R2.
              </li>
            </ul>
            As the processes continue, the RAG can be updated accordingly, and
            eventually, P3 will get Resource R2 when P2 releases it.
          </p>
        </div>

        <div className="os-section">
          <h2 className="os-subtitle">Deadlock Detection using RAG</h2>
          <p className="os-example">
            A deadlock can occur if there is a circular wait in the Resource
            Allocation Graph. This happens if there are cycles in the graph
            where each process is waiting for a resource that is held by another
            process. If a cycle exists, deadlock is detected.
          </p>

          <pre className="os-example">
            Example of Deadlock in a RAG: P1 --&gt; Request(R1) --&gt;
            Assign(R1) P2 --&gt; Request(R2) --&gt; (Waiting for R1) P3 --&gt;
            Request(R1) --&gt; (Waiting for R2) In this scenario, a cycle
            exists, and deadlock occurs: P1 -&gt; R1 -&gt; P2 -&gt; R2 -&gt; P3
            -&gt; R1 (Cycle detected)
          </pre>
        </div>
        <div className="os-section">
          <h2 className="os-subtitle">
            Waiting vs Finite Starvation vs Infinite Starvation (Deadlock)
          </h2>
          <p className="os-example">
            <strong>1. Waiting:</strong>
            <br />A process is said to be in the <em>waiting</em> state if it is
            temporarily halted due to the unavailability of a required resource.
            However, it is guaranteed that the process will eventually proceed.
            <br />✅ <strong>Example:</strong> A process is waiting for a
            printer; once the printer is free, it will resume execution.
            <br />
            <br />
            <strong>2. Finite Starvation:</strong>
            <br />
            Starvation occurs when a process waits for a resource for an
            unusually long time because other higher-priority processes are
            constantly favored. In <em>finite starvation</em>, the process is
            delayed but eventually gets served.
            <br />✅ <strong>Example:</strong> In priority scheduling, a
            low-priority process might wait for a while but will eventually run
            if priority aging is applied.
            <br />
            <br />
            <strong>3. Infinite Starvation (Deadlock):</strong>
            <br />
            In <em>infinite starvation</em> or <strong>deadlock</strong>, a
            process waits forever because the required resources are held by
            other waiting processes — creating a circular chain of dependency.
            None of them ever proceeds.
            <br />❌ <strong>Example:</strong> P1 waits for a resource held by
            P2, and P2 waits for a resource held by P1. Neither process can ever
            finish — this is a deadlock.
          </p>
        </div>
        <div className="os-section">
          <h2 className="os-subtitle">
            Multi-Instance Resource in Operating Systems
          </h2>
          <p className="os-example">
            <strong>Definition:</strong>
            <br />A <strong>multi-instance resource</strong> is a type of
            resource in an operating system where more than one instance of the
            same resource type exists and can be allocated to different
            processes simultaneously.
            <br />
            <br />
            <strong>Examples:</strong>
            <br />
            - Printers (3 identical printers)
            <br />
            - CPU cores (8-core processor)
            <br />
            - Network sockets
            <br />
            - Disk drives
            <br />
            <br />
            <strong>Why It's Important:</strong>
            <br />
            Multi-instance resources allow parallel allocation and utilization
            of shared resources, improving throughput and reducing process wait
            times. However, they also increase the complexity of allocation
            algorithms and deadlock prevention.
            <br />
            <br />
            <strong>Key Concepts:</strong>
            <br />
            - **Request Matrix**: Number of resource instances each process may
            need
            <br />
            - **Allocation Matrix**: Number of resource instances currently
            allocated
            <br />
            - **Available Vector**: Number of free instances of each resource
            type
            <br />- **Safe State Check**: Done using Banker's Algorithm
          </p>

          <h2 className="os-subtitle">Numerical Example with Diagram</h2>
          <p className="os-example">
            Consider a system with 3 resource types: A (10 instances), B (5
            instances), C (7 instances)
            <br />5 processes: P0 to P4
          </p>

          <pre>{`
   Allocation     Max       Available
   A B C         A B C     A B C
P0 0 1 0       7 5 3     3 3 2
P1 2 0 0       3 2 2
P2 3 0 2       9 0 2
P3 2 1 1       2 2 2
P4 0 0 2       4 3 3

  Need = Max - Allocation

   Need Matrix:
P0 7 4 3
P1 1 2 2
P2 6 0 0
P3 0 1 1
P4 4 3 1

Check for Safe Sequence using Banker's Algorithm:
1. Work = Available = [3 3 2]
2. Find a process whose need ≤ Work

→ P1 needs [1 2 2] ≤ [3 3 2] → Safe
   Work = Work + Allocation of P1 = [3+2 3+0 2+0] = [5 3 2]

→ P3 needs [0 1 1] ≤ [5 3 2] → Safe
   Work = [5+2 3+1 2+1] = [7 4 3]

→ P4 needs [4 3 1] ≤ [7 4 3] → Safe
   Work = [7+0 4+0 3+2] = [7 4 5]

→ P0 needs [7 4 3] ≤ [7 4 5] → Safe
   Work = [7+0 4+1 5+0] = [7 5 5]

→ P2 needs [6 0 0] ≤ [7 5 5] → Safe

✅ Safe Sequence: P1 → P3 → P4 → P0 → P2
`}</pre>

          <p className="os-example">
            <strong>Conclusion:</strong>
            <br />
            Multi-instance resource allocation requires careful analysis using
            techniques like the Banker's Algorithm to ensure system safety. The
            goal is to avoid deadlocks while maximizing parallel resource usage.
            As the number of resource instances and processes increases, the
            state space becomes more complex, making such algorithms essential.
          </p>
        </div>

        <div
          className="w-full max-w-4xl mx-auto  p-4 bg-white rounded-lg shadow-lg border border-gray-300"
          style={{ marginBottom: "10px" }}
        >
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            dynamicHeight={true}
            interval={3000} // Time between slides (in ms)
            transitionTime={500}
          >
            <div className="flex justify-center">
              <img
                className="rounded-lg shadow-md border-2 border-gray-200"
                src="https://media.geeksforgeeks.org/wp-content/uploads/Prjjj1-1.jpg"
                alt="Slide 1"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-lg shadow-md border-2 border-gray-200"
                src="https://media.geeksforgeeks.org/wp-content/uploads/Slide6-1.jpg"
                alt="Slide 2"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-lg shadow-md border-2 border-gray-200"
                src="https://media.geeksforgeeks.org/wp-content/uploads/Slide1.jpg"
                alt="Slide 3"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-lg shadow-md border-2 border-gray-200"
                src="https://media.geeksforgeeks.org/wp-content/uploads/Presentation1-1.jpg"
                alt="Slide 4"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-lg shadow-md border-2 border-gray-200"
                src="https://media.geeksforgeeks.org/wp-content/uploads/Slide2.jpg"
                alt="Slide 5"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-lg shadow-md border-2 border-gray-200"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20250118150056151020/im.jpg"
                alt="Slide 6"
              />
            </div>
          </Carousel>
        </div>

        <button
          className="infoBtn"
          onClick={() =>
            window.open(
              "https://www.geeksforgeeks.org/resource-allocation-graph-rag-in-operating-system/"
            )
          }
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default ResourceAllocationGraph;
