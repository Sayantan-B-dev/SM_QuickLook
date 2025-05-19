import React, { useState } from "react";
import "../../../../CSS/OS.css";
import { title } from "framer-motion/client";
import Magnet from "../../../../components/Animations/Magnet"

function DiplomaOS() {
  const [openUnits, setOpenUnits] = useState({});
  const [openTopics, setOpenTopics] = useState({});
  const [openImage, setOpenImage] = useState(null);

  const openModal = (imgUrl) => {
    setOpenImage(imgUrl);
  };

  const closeModal = () => {
    setOpenImage(null);
  };
  function toggleUnit(index) {
    setOpenUnits((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  function toggleTopic(index) {
    setOpenTopics((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  const units = [
    {
      title: "UNIT 1 : Introduction to Operating System",
      topics: [
        {
          title: "Overview of Operating System (OS)",
          links: [
            {
              title: "Overview of Operating System (OS)",
              url: "https://www.geeksforgeeks.org/introduction-of-operating-system-set-1/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20230512132248/Introduction-of-OS-660.webp",
            },
          ],
        },
        {
          title: "OS generations",
          links: [
            {
              title: "OS generations",
              url: "https://www.tutorialspoint.com/operating-system-generations",
              img: "https://www.tutorialspoint.com/assets/questions/media/11709/Operating%20System%20Generations.PNG",
            },
          ],
        },
        {
          title: "Operating system structure",
          links: [
            {
              title: "Operating system structure",
              url: "https://www.geeksforgeeks.org/different-approaches-or-structures-of-operating-systems/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20241122132135080853/simple---------os---------structure.webp",
            },
          ],
        },
        {
          title: "OS Kernel",
          links: [
            {
              title: "OS Kernel",
              url: "https://www.geeksforgeeks.org/kernel-in-operating-system/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250124124411692602/kernel.webp",
            },
          ],
        },
        {
          title: "OS services and systems calls",
          links: [
            {
              title: "OS services and systems calls",
              url: "https://www.geeksforgeeks.org/introduction-of-system-call/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250124123632394421/introduction_to_system_call.webp",
            },
          ],
        },
        {
          title: "System programs",
          links: [
            {
              title: "System programs",
              url: "https://www.geeksforgeeks.org/system-programs-in-operating-system/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200530070640/sYSTEMPROGAMS.png",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 2 : Process Management and Concurrency Control",
      topics: [
        {
          title: "Process",
          links: [
            {
              title: "Process Concept",
              url: "https://www.geeksforgeeks.org/process-in-operating-system/",
              img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2015/06/process.png",
            },
            {
              title: "Process states",
              url: "https://www.geeksforgeeks.org/states-of-a-process-in-operating-systems/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20241017162800402546/five-state-model.png",
            },
            {
              title: "Process control table",
              url: "https://www.geeksforgeeks.org/process-table-and-process-control-block-pcb/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/process-control-block.jpg",
            },
            {
              title: "Process control block",
              url: "https://www.geeksforgeeks.org/process-table-and-process-control-block-pcb/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20241122132710403798/process---------control---------block.webp",
            },
            {
              title: "Threads",
              url: "https://www.geeksforgeeks.org/thread-in-operating-system/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240226115304/Threads.png",
            },
          ],
        },
        {
          title: "Uni-processor Scheduling",
          links: [
            {
              title: "Preemptive",
              url: "https://www.geeksforgeeks.org/preemptive-and-non-preemptive-scheduling/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/pre-2.png",
            },
            {
              title: "Non preemptive",
              url: "https://www.geeksforgeeks.org/preemptive-and-non-preemptive-scheduling/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/nonpre.png",
            },
          ],
        },
        {
          title: "Scheduling algorithms",
          links: [
            {
              title: "FCFS",
              url: "https://www.tutorialspoint.com/fcfs-scheduling",
              img: "https://www.tutorialspoint.com/assets/questions/media/123881-1680694918.png",
            },
            {
              title: "SJF",
              url: "https://www.geeksforgeeks.org/shortest-job-first-or-sjf-cpu-scheduling/",
              img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200303163658/SJF.jpg",
            },
            {
              title: "RR",
              url: "https://www.tutorialspoint.com/operating_system/os_round_robin_scheduling_algorithm.htm",
              img: "https://www.tutorialspoint.com/operating_system/images/gantt_chart_with_time_quantum_of_2ms.jpg",
            },
            {
              title: "Priority",
              url: "https://www.tutorialspoint.com/operating_system/os_priority_scheduling_algorithm.htm",
              img: "https://www.tutorialspoint.com/operating_system/images/gantt_chart_of_average_tat.jpg",
            },
            {
              title: "Thread Scheduling",
              url: "https://www.geeksforgeeks.org/thread-scheduling/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200514143819/Thread-scheduling.png",
            },
            {
              title: "Real Time Scheduling",
              url: "https://www.tutorialspoint.com/scheduling-in-real-time-systems",
              img: "https://jcsites.juniata.edu/faculty/rhodes/os/rtsched.gif",
            },
          ],
        },
        {
          title: "IPC",
          links: [
            {
              title: "Concept",
              url: "https://www.geeksforgeeks.org/inter-process-communication-ipc/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/1-76.png",
            },
            {
              title: "Shared-Memory and Message-Passing Systems",
              url: "https://www.geeksforgeeks.org/difference-between-shared-memory-model-and-message-passing-model-in-ipc/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKPe8CkFNMEOKqH-xF1fgUu76HyNRP0QVw3A&s",
            },
          ],
        },
        {
          title: "Concurrency",
          links: [
            {
              title: "Principles of Concurrency",
              url: "https://www.geeksforgeeks.org/concurrency-in-operating-system/",
              img: "https://d3kfrrhrj36vzx.cloudfront.net/images/1659858252274_jp4ddfov.jpg",
            },
          ],
        },
        {
          title: "Mutual Exclusion",
          links: [
            {
              title: "Mutual Exclusion",
              url: "https://www.tutorialspoint.com/operating_system/os_mutual_exclusion_in_synchronization.htm",
              img: "https://i.imgur.com/tbtiI1Z.png",
            },
            {
              title: "S/W approaches",
              url: "https://www.scaler.com/topics/operating-system/process-synchronization-in-os/",
              img: "https://scaler.com/topics/images/what-is-process-synchronization-in-os.webp",
            },
            {
              title: "H/W Support",
              url: "https://www.geeksforgeeks.org/hardware-synchronization-algorithms-unlock-and-lock-test-and-set-swap/",
              img: "https://i.ytimg.com/vi/SL7VSKZVIYo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCI_F2cvCEzgAFwO6Y9j_JqQVKiLw",
            },
            {
              title: "Semaphores",
              url: "https://www.geeksforgeeks.org/semaphores-in-process-synchronization/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250106165446247852/semaphores.webp",
            },
            {
              title: "pipes",
              url: "https://www.geeksforgeeks.org/pipe-system-call/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/Process.jpg",
            },
            {
              title: "Message Passing",
              url: "https://www.geeksforgeeks.org/message-passing-in-distributed-system/",
              img: "https://miro.medium.com/v2/resize:fit:676/1*FvqTZA_4630euM4jyPQezQ.png",
            },
            {
              title: "Signals",
              url: "https://www.geeksforgeeks.org/signals-c-language/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/arra3.jpg",
            },
            {
              title: "Monitors",
              url: "https://www.geeksforgeeks.org/monitors-in-process-synchronization/",
              img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2015/06/monitors-300x255.png",
            },
          ],
        },
        {
          title: "Classical Problems of Synchronization",
          links: [
            {
              title: "Readers-Writers",
              url: "http://geeksforgeeks.org/readers-writers-problem-set-1-introduction-and-readers-preference-solution/",
              img: "https://files.prepinsta.com/2023/01/reader-writer-problem-1024x640.webp",
            },
            {
              title: "Dining Philosopher problem",
              url: "https://www.geeksforgeeks.org/dining-philosopher-problem-using-semaphores/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/operating_system_din.png",
            },
          ],
        },
        {
          title: "Deadlock",
          links: [
            {
              title: "Principles of deadlock",
              url: "https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250116142222043136/d.webp",
            },
            {
              title: "Deadlock Prevention",
              url: "https://www.geeksforgeeks.org/deadlock-prevention/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnLe0d82rIEpTcxuIp4eTmL-OuyjeB6OkIg&s",
            },
            {
              title: "Deadlock Avoidance",
              url: "https://www.geeksforgeeks.org/deadlock-prevention/",
              img: "https://staging.herovired.com/wp-content/uploads/2024/07/deadlock.webp",
            },
            {
              title: "Deadlock detection",
              url: "https://www.geeksforgeeks.org/deadlock-detection-recovery/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250116142222043136/d.webp",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 3 : Memory management",
      topics: [
        {
          title: "Memory management",
          links: [
            {
              title: "Memory Management requirements",
              url: "https://www.geeksforgeeks.org/requirements-of-memory-management-system/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/aas6.png",
            },
          ],
        },
        {
          title: "Memory partitioning",
          links: [
            {
              title: "Fixed Partitioning",
              url: "https://www.geeksforgeeks.org/difference-between-fixed-partitioning-and-variable-partitioning/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200515204405/fixedpartition.png",
            },
            {
              title: "Variable Partitioning",
              url: "https://www.geeksforgeeks.org/difference-between-fixed-partitioning-and-variable-partitioning/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200515204900/variablepartitiongfg.png",
            },
          ],
        },
        {
          title: "Memory Allocation",
          links: [
            {
              title: "Allocation Strategies (First Fit)",
              url: "https://www.geeksforgeeks.org/first-fit-allocation-in-operating-systems/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250430165625886123/6_096mdsbhfjdsnj.webp",
            },
            {
              title: "Allocation Strategies (Best Fit)",
              url: "https://www.geeksforgeeks.org/best-fit-allocation-in-operating-system/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20191012233715/best.jpg",
            },
            {
              title: "Allocation Strategies (Worst Fit)",
              url: "https://www.geeksforgeeks.org/worst-fit-allocation-in-operating-systems/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250423122018397786/Worst-fit_.webp",
            },
            {
              title: "Fragmentation",
              url: "https://www.geeksforgeeks.org/what-is-fragmentation-in-operating-system/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20190924115421/Untitled-Diagram-146.png",
            },
            {
              title: "Swapping",
              url: "https://www.geeksforgeeks.org/swapping-in-operating-system/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200406111356/Untitled-Diagram66-3.jpg",
            },
            {
              title: "Paging",
              url: "https://www.geeksforgeeks.org/paging-in-operating-system/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200406111356/Untitled-Diagram66-3.jpg",
            },
            {
              title: "Segmentation",
              url: "https://www.geeksforgeeks.org/segmentation-in-operating-system/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20230703103700/ezgifcom-gif-maker-(16).webp",
            },
            {
              title: "Demand paging",
              url: "https://www.geeksforgeeks.org/what-is-demand-paging-in-operating-system/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20230908065723/page1-768.webp",
            },
          ],
        },
        {
          title: "Virtual Memory",
          links: [
            {
              title: "Concepts",
              url: "https://www.geeksforgeeks.org/virtual-memory-in-operating-system/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250115142221545470/virtual_memory.webp",
            },
            {
              title: "Management of VM",
              url: "https://www.tutorialspoint.com/operating_system/os_virtual_memory.htm",
              img: "https://www.tutorialspoint.com/operating_system/images/demand_paging.jpg",
            },
            {
              title: "Page Replacement Policies (FIFO)",
              url: "https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20241023184328270600/page1.jpg",
            },
            {
              title: "Page Replacement Policies (Optimal)",
              url: "https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20241023184349191529/page2.jpg",
            },
            {
              title: "Page Replacement Policies (LRU)",
              url: "https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20241023184405860059/page3.jpg",
            },
            {
              title: "Page Replacement Policies (MRU)",
              url: "https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20241023184428687727/page4.jpg",
            },
            {
              title: "Thrashing",
              url: "https://www.geeksforgeeks.org/techniques-to-handle-thrashing/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/2-103.png",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 4 : I/O management & Disk scheduling",
      topics: [
        {
          title: "I/O management",
          links: [
            {
              title: "I/O Devices",
              url: "https://www.geeksforgeeks.org/input-and-output-devices/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250315122640215754/Input----Output--Devices.webp",
            },
            {
              title: "Organization of I/O functions",
              url: "https://www.geeksforgeeks.org/io-interface-interrupt-dma-mode/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPdGwca2VDo335_Zv-rLPSrDBNooZqyeb1Q&s",
            },
            {
              title: "Operating System Design issues",
              url: "https://www.geeksforgeeks.org/design-issues-of-distributed-system/",
              img: "https://i.ytimg.com/vi/EKW4khUAuvI/maxresdefault.jpg",
            },
            {
              title: "I/O Buffering",
              url: "https://www.geeksforgeeks.org/i-o-buffering-and-its-various-techniques/",
              img: "https://media.wisemonkeys.info/24951720108789/posts/1000013206jpg",
            },
          ],
        },
        {
          title: "Disk scheduling",
          links: [
            {
              title: "Disk Scheduling (FCFS)",
              url: "https://www.geeksforgeeks.org/fcfs-disk-scheduling-algorithms/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20190727015526/fcfs-1.jpg",
            },
            {
              title: "Disk Scheduling (SCAN)",
              url: "https://www.geeksforgeeks.org/scan-elevator-disk-scheduling-algorithms/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20190727175932/fcfs-2.jpg",
            },
            {
              title: "Disk Scheduling (C-SCAN)",
              url: "https://www.geeksforgeeks.org/c-scan-disk-scheduling-algorithm/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20190820015715/fcfs2.png",
            },
            {
              title: "Disk Scheduling (SSTF)",
              url: "https://www.geeksforgeeks.org/program-for-sstf-disk-scheduling-algorithm/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/3333-4.png",
            },
            {
              title: "RAID",
              url: "https://www.geeksforgeeks.org/raid-redundant-arrays-of-independent-disks/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20191125021305/Data-transfer-in-Parallel.png",
            },
            {
              title: "Disk Cache",
              url: "https://www.geeksforgeeks.org/types-of-cache/#2-disk-cache",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240307134032/Disk-Cache-new-copy.webp",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 5 : OS Security",
      topics: [
        {
          title: "OS Security",
          links: [
            {
              title: "Goals of Protection",
              url: "https://www.geeksforgeeks.org/protection-in-os-domain-of-protection-association-authentication/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20210226225112/DomainofProtection.jpg",
            },
            {
              title: "Principle of protection",
              url: "https://ecestudy.wordpress.com/wp-content/uploads/2015/11/unit5_part_1.pdf",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ5MB8rQMRkygnj2xxGnbo_Wa7EmYyAQpsA&s",
            },
            {
              title: "Access matrix",
              url: "https://www.geeksforgeeks.org/access-matrix-in-operating-system/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBF1G3fbxDn2j68f8JuJxRfikB1J1QmRG3g&s",
            },
            {
              title: "Access Control",
              url: "https://www.microsoft.com/en-in/security/business/security-101/what-is-access-control",
              img: "https://i.ytimg.com/vi/1X9XUadVju8/maxresdefault.jpg",
            },
            {
              title: "Access Rights",
              url: "https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/access-rights",
              img: "https://www.cs.jhu.edu/~yairamir/cs418/os9/img013.gif",
            },
          ],
        },
        {
          title: "OS Security More",
          links: [
            {
              title: "Program Threats",
              url: "https://www.geeksforgeeks.org/system-security/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy13ZPdn6ez2ISQC8E-2TjKjhxR46SweMpbA&s",
            },
            {
              title: "Network and system threats",
              url: "https://www.geeksforgeeks.org/threats-to-information-security/",
              img: "https://www.researchgate.net/publication/224771078/figure/fig1/AS:670022124986391@1536757131801/Classification-of-network-security-threats.ppm",
            },
            {
              title: "Cryptography",
              url: "https://www.geeksforgeeks.org/cryptography-and-its-types/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240408171319/crptography.jpg",
            },
            {
              title: "Authentication",
              url: "https://www.geeksforgeeks.org/what-is-user-authentication-and-why-is-it-important/",
              img: "https://assets.omscs.io/notes/B148F4BD-E1C1-4E73-A1DD-37918E708306.png",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="os-wrapper">
      <div className="os-card">
        <div className="os-title">Diploma - Operating System</div>

        {units.map((unit, uIndex) => (
          <div key={uIndex} className="os-section cursor-pointer">
            <h2 className="os-subtitle" onClick={() => toggleUnit(uIndex)}>
              {unit.title}
            </h2>
            {openUnits[uIndex] && (
              <div className="os-grid">
                {unit.topics.map((topic, tIndex) => {
                  const topicKey = `${uIndex}-${tIndex}`;
                  return (
                    <div className="os-grid-item structured" key={topicKey}>
                      <h3 onClick={() => toggleTopic(topicKey)}>➤ {topic.title}</h3>
                      {openTopics[topicKey] && (
                        <div>
                          {topic.links.map((link, i) => (
                            <div
                              className="smallItems rounded-2xl shadow-lg flex flex-row justify-center align-center"
                              key={i}
                              style={{ position: "relative" }}
                            >
                              <a
                                href={link.url}
                                className="os-imgLink2"
                                target="_blank"
                                
                                rel="noopener noreferrer"
                              >
                                🔗{link.title}
                              </a>
                              <Magnet padding={25} disabled={false} magnetStrength={10}>

                                <img
                                  className="tinyImg"
                                  src={link.img}
                                  alt="thumbnail"
                                  onClick={() => openModal(link.img)}
                                /></Magnet>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal to show the full image */}
      {openImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={closeModal}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img className="modal-image" src={openImage} alt="Full view" />
          </div>
        </div>
      )}
    </div>
  );
}

export default DiplomaOS;
