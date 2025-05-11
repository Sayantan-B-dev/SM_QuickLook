import React, { useState } from "react";
import "../../../../CSS/SE.css";
import { title } from "framer-motion/client";

function DiplomaSE() {
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
      title: "UNIT 1 : Introduction to Software Engineering",
      topics: [
        {
          title: "Software intro",
          links: [
            {
              title: "The evolving Role of software",
              url: "https://www.geeksforgeeks.org/software-engineering-software-evolution/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20190502020413/Untitled-Diagram23.jpg",
            },
            {
              title: "Changing nature of software",
              url: "https://www.geeksforgeeks.org/software-engineering-changing-nature-of-software/",
              img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyIkiR69Uz3H-W63ZgbpGvphQoyQpkdbuc8YnzvgPM0xEswKhKhVU3AyzE7xACWizEIQLve8pNGx94fKWmO0Z2-bS9xDUuxq2HPLZPCJpmNEFClAorDbKaGez55qUc57_gtO3-6WKtvgK5/s1600/software-nature.jpg",
            },
          ],
        },
        {
          title: "Software Engineering",
          links: [
            {
              title: "A layered Technology approach",
              url: "https://www.geeksforgeeks.org/layered-technology-in-software-engineering/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20210901231425/Screenshot20210901231331.png",
            },
            {
              title: "A process framework",
              url: "https://www.geeksforgeeks.org/software-engineering-software-process-framework/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240619123000/Software-Process.webp",
            },
            {
              title: "Software project tracking & control",
              url: "https://www.geeksforgeeks.org/what-is-monitoring-and-control-in-project-management/",
              img: "https://www.researchgate.net/publication/286447123/figure/fig5/AS:305834107129857@1449927941038/Project-management-Process-diagram-for-software-ISO-2011b.png",
            },
            {
              title:
                "Capability Maturity Model",
              url: "https://www.geeksforgeeks.org/software-engineering-capability-maturity-model-cmm/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20230919160557/cmm.jpg",
            },
          ],
        },
        {
          title: "Process",
          links: [
            {
              title: "Process patterns",
              url: "https://www.geeksforgeeks.org/process-patterns-in-software-engineering/",
              img: "https://www.researchgate.net/publication/267231212/figure/fig3/AS:669396750053382@1536608030776/Example-of-Business-Process-Pattern.ppm",
            },
            {
              title: "Process Assessment",
              url: "https://www.geeksforgeeks.org/software-process-assessment/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6S9-wL1fWtPZyXnF-1rRnF8O6BqQFDx1Ag&s",
            },
            {
              title: "Personal & Team Process models",
              url: "https://www.geeksforgeeks.org/difference-between-psp-and-tsp/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240521181621/eret1-1.png",
            },
            {
              title: "Process Technology Theories",
              url: "https://www.geeksforgeeks.org/software-processes-in-software-engineering/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20231106101514/Software-development-process.jpeg",
            },
          ],
        },
        {
          title: "Process Models",
          links: [
            {
              title: "Waterfall",
              url: "https://www.geeksforgeeks.org/waterfall-model/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240312115941/waterfall-model.gif",
            },
            {
              title: "Incremental",
              url: "https://www.scaler.com/topics/incremental-model-in-software-engineering/",
              img: "https://www.scaler.com/topics/images/phases-of-incremental-model.webp",
            },
            {
              title: "RAD",
              url: "https://nix-united.com/blog/the-ultimate-guide-to-rapid-application-development/",
              img: "https://nix-united.com/wp-content/uploads/2021/01/RAD_graphics_01-1024x470.jpg",
            },
            {
              title: "Prototype",
              url: "https://www.geeksforgeeks.org/software-engineering-phases-prototyping-model-set-2/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/Prototyping-model.png",
            },
            {
              title: "Spiral",
              url: "https://www.geeksforgeeks.org/software-engineering-spiral-model/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20230728095557/Spiral-Model-SDLC.webp",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 2 : Software Development Activities",
      topics: [
        {
          title: "Software Engineering core",
          links: [
            {
              title: "Software Engineering core principles",
              url: "https://www.geeksforgeeks.org/basic-principles-of-good-software-engineering-approach/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200613135536/Untitled269.png",
            },
            {
              title: "Communication",
              url: "https://ayoub3bidi.medium.com/the-role-of-communication-in-software-development-2dbeb6cbe38c",
              img: "https://sparxsystems.com/enterprise_architect_user_guide/17.0/images/exampleofacommunicationdiagram.png",
            },
            {
              title: "Planning",
              url: "https://www.geeksforgeeks.org/project-plan/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20190501143924/Untitled-Diagram-110.jpg",
            },
            {
              title: "Modelling",
              url: "https://www.geeksforgeeks.org/top-8-software-development-models-used-in-industry/",
              img: "https://strapi-data-us-west-2.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/04/Software-development-models.jpg",
            },
            {
              title: "Construction principles",
              url: "https://www.csun.edu/~twang/595WEB/Slides/Week11.pdf",
              img: "https://slideplayer.com/slide/4202126/14/images/15/Construction+Principles.jpg",
            },
            {
              title: "Deployment principles",
              url: "https://www.csun.edu/~twang/595WEB/Slides/Week11.pdf",
              img: "https://slideplayer.com/slide/15986127/88/images/14/Deployment+Principles.jpg",
            },
          ],
        },
        {
          title: "Requirements Engineering",
          links: [
            {
              title: "Requirements Engineering Tasks",
              url: "https://www.geeksforgeeks.org/software-engineering-software-requirement-tasks/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20210502235705/Screenshot230.png",
            },
            {
              title: "Initiating the requirement process",
              url: "https://www.geeksforgeeks.org/software-engineering-requirements-engineering-process/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240315131742/Requirements-Engineering-Process.webp",
            },
          ],
        },
        {
          title: "Analysis approaches",
          links: [
            {
              title: "Analysis approaches of software",
              url: "https://www.geeksforgeeks.org/analysis-modelling-in-software-engineering/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200317175143/Capture406.png",
            },
            {
              title:
                "Preparation of Analysis model using Data Modelling Concepts",
              url: "https://www.geeksforgeeks.org/data-modeling-a-comprehensive-guide-for-analysts/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240215113046/modeling.webp",
            },
            {
              title: "Object oriented Analysis",
              url: "https://www.geeksforgeeks.org/object-oriented-analysis-and-design/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240125113256/The-Object-Oriented-Design-Pyramid-(1).webp",
            },
            {
              title: "Data Flow Diagram (DFD)",
              url: "https://www.geeksforgeeks.org/what-is-dfddata-flow-diagram/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240514120447/Data-Flow-Diagram-Methods-&-Symbols.webp",
            },
            {
              title: "Class-Based model",
              url: "https://www.geeksforgeeks.org/unified-modeling-language-uml-class-diagrams/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240308165524/Class-Diagram-example.webp",
            },
            {
              title: "Behavioural Model",
              url: "https://www.geeksforgeeks.org/short-note-on-behavioral-model/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200611003409/Untitled231.png",
            },
          ],
        },
        {
          title: "Design approaches",
          links: [
            {
              title: "Design approaches of software",
              url: "https://www.scaler.com/topics/software-engineering/design-strategies-in-software-engineering/",
              img: "https://www.scaler.com/topics/images/object-oriented-designs.webp",
            },
            {
              title: "preparation of design model using Design concepts",
              url: "https://www.geeksforgeeks.org/introduction-of-software-design-process-set-2/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240116110530/software-design-concepts.webp",
            },
            {
              title: "Design model",
              url: "https://www.geeksforgeeks.org/software-engineering-software-design-process/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250424113202854644/Software--Design-Phases.webp",
            },
            {
              title: "Pattern based design",
              url: "https://www.geeksforgeeks.org/software-design-patterns/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240415164341/Creational-Design-Patterns.webp",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 3 : Software Testing Basics",
      topics: [
        {
          title: "Software Testing Fundamentals",
          links: [
            {
              title: "Introduction to Software Testing",
              url: "https://www.geeksforgeeks.org/software-testing-basics/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20230808151753/Software-Testing-Types.png",
            },
            {
              title: "Software Testing Tutorial - Guru99",
              url: "https://www.guru99.com/software-testing.html",
              img: "https://www.guru99.com/images/typesofmanualtesting.png",
            },
            {
              title: "Types of Software Testing",
              url: "https://www.geeksforgeeks.org/types-software-testing/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240730150406/Software-Testing-768-copy.webp",
            },
          ],
        },
        {
          title: "A Strategic approach to software testing",
          links: [
            {
              title: "Test Strategy vs Test Plan",
              url: "https://www.browserstack.com/guide/test-plan-vs-test-strategy#:~:text=A%20test%20strategy%20is%20a,specific%20project%20or%20testing%20activity.",
              img: "https://i.sstatic.net/8wmIM.png",
            },
            {
              title: "Levels of Software Testing",
              url: "https://www.geeksforgeeks.org/levels-of-software-testing/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250412091336783320/levels_of_testing.webp",
            },
            {
              title: "Test Process and Life Cycle",
              url: "https://www.geeksforgeeks.org/software-testing-life-cycle-stlc/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20190510015920/software-testing-life-cycle-1024x566.png",
            },
          ],
        },
        {
          title: "Test Strategies",
          links: [
            {
              title: "Test Strategies for conventional software",
              url: "https://www.geeksforgeeks.org/software-testing-strategies/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200605230034/Untitled226-1-297x300.png",
            },
            {
              title: "Unit Testing",
              url: "https://www.geeksforgeeks.org/unit-testing-software-testing/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20241022151338496651/unit-test.webp",
            },
            {
              title: "Integration Testing",
              url: "https://www.geeksforgeeks.org/software-engineering-integration-testing/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240611173741/Integration-Testing.webp",
            },
            {
              title: "Regression testing",
              url: "https://www.geeksforgeeks.org/software-engineering-regression-testing/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250225102752793349/What-is-Regression-Testing_.webp",
            },
            {
              title: "Smoke testing",
              url: "https://www.geeksforgeeks.org/smoke-testing-software-testing/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20231110131830/Function-testing.png",
            },
            {
              title: "Validation testing using Alpha & beta testing",
              url: "https://www.geeksforgeeks.org/difference-between-alpha-and-beta-testing/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANmte2ZMUGYWwqu6PeHd-ygeKzfV2yffVjg&s",
            },
            {
              title: "System testing using recovery",
              url: "https://www.geeksforgeeks.org/recovery-testing-in-software-testing/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240612130041/Steps-to-be-performed-before-executing-a-Recovery-Test-.webp",
            },
            {
              title: "Security",
              url: "https://www.geeksforgeeks.org/security-testing/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250228151937066327/Types-of-Security-Testing.webp",
            },
            {
              title: "Stress & performance testing",
              url: "https://www.geeksforgeeks.org/difference-between-performance-and-stress-testing/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240528113224/Types-of-Performance-testing.webp",
            },
            {
              title: "Stress & performance testing",
              url: "https://www.geeksforgeeks.org/difference-between-performance-and-stress-testing/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240617145157/Types-of-Stress-Testing.webp",
            },
            {
              title: "Black Box & White Box Testing",
              url: "https://www.geeksforgeeks.org/differences-between-black-box-testing-vs-white-box-testing/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20241017152818969622/black-box-testing.webp",
            },
            {
              title: "Black Box & White Box Testing",
              url: "https://www.geeksforgeeks.org/differences-between-black-box-testing-vs-white-box-testing/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240610152759/White-Box-Testing.webp",
            },
          ],
        },
        {
          title: "Debugging process strategies",
          links: [
            {
              title: "Understanding Debugging",
              url: "https://www.geeksforgeeks.org/software-engineering-debugging/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240612131318/Process-of-Debugging-.webp",
            },
            {
              title: "Common Debugging Techniques",
              url: "https://www.geeksforgeeks.org/software-engineering-debugging-approaches/",
              img: "https://www.scientecheasy.com/wp-content/uploads/2024/01/debugging-techniques.png",
            },
            {
              title: "Using Debugging Tools Effectively",
              url: "https://www.geeksforgeeks.org/software-engineering-debugging/#debugging-tools",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240612131423/Debugging-Tools.webp",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 4 : Project Management",
      topics: [
        {
          title: "The management spectrum",
          links: [
            {
              title: "The people",
              url: "https://www.geeksforgeeks.org/4-ps-in-software-project-planning/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20210406130648/spp.PNG",
            },
            {
              title: "The product",
              url: "https://www.geeksforgeeks.org/4-ps-in-software-project-planning/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMcIcnNPLp1fcTzkZMfcUxKLtWj7xYsRyISQ&s",
            },
            {
              title: "The process",
              url: "https://www.geeksforgeeks.org/4-ps-in-software-project-planning/",
              img: "https://cdn.slidesharecdn.com/ss_thumbnails/56134023428304274682-220731091332-6c0fd262-thumbnail.jpg?width=640&height=640&fit=bounds",
            },
            {
              title: "The project",
              url: "https://www.geeksforgeeks.org/4-ps-in-software-project-planning/",
              img: "https://image5.slideserve.com/9607561/the-management-spectrum-l.jpg",
            },
          ],
        },
        {
          title: "Project scheduling",
          links: [
            {
              title: "Basic concepts",
              url: "https://www.geeksforgeeks.org/short-note-on-project-scheduling/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200623160615/Untitled-Diagram-153-1.png",
            },
            {
              title: "Relationship between people & effort",
              url: "https://www.brainkart.com/article/Relationship-between-people-and-effort,-Task-Set---Network,-Scheduling,-EVA_9100/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVdfRd4kISoVONoHrn4vtyGLUp_DVGlO31Q&s",
            },
            {
              title: "Effort distribution",
              url: "https://www.geeksforgeeks.org/software-development-effort-estimation/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRvBIpSAf5LhB3HhaYKaget0KS1fEu_sr6A&s",
            },
            {
              title: "Defining a task for the software project",
              url: "https://www.studocu.com/in/document/apj-abdul-kalam-technological-university/software-engineering-and-project-management/defining-task-set-for-the-software-project/27149991",
              img: "https://slideplayer.com/slide/5370018/17/images/18/Defining+a+Task+Set+for+the+Software+Project.jpg",
            },
            {
              title: "Defining a task network & scheduling of project",
              url: "https://www.1000sourcecodes.com/2012/05/software-enginering-defining-task.html",
              img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjH30RW1ZbKFsLVIyCtqh26MwZMHy9zyCKAWvkimefR-LxoueiZs4gKxYBuoSSEwsRLvV_DUxr2r6cVMBoe4UtC4rDjgM7h6zHkThiaR2Up9w7JVoIdKJ0QKNzbCL3e_jdejGnFdxW1Fwl4/s1600/Capture.PNG",
            },
          ],
        },
        {
          title: "Risk Management",
          links: [
            {
              title: "Reactive Vs Proactive risk strategies",
              url: "https://www.naukri.com/code360/library/reactive-and-proactive-software-risk-management",
              img: "https://bcanotes4u171863936.wordpress.com/wp-content/uploads/2020/11/13.png",
            },
            {
              title: "Software Risks",
              url: "https://www.geeksforgeeks.org/different-types-of-risks-in-software-project-development/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240603110019/Various-Kinds-of-Risks-in-software.webp",
            },
            {
              title: "Risk Identification",
              url: "https://www.geeksforgeeks.org/methods-for-identifying-risks/",
              img: "https://unichrone.com/blog/wp-content/uploads/6-stages-of-risk-identification.jpg",
            },
            {
              title: "Risk Projection",
              url: "https://www.studocu.com/in/document/rise-krishna-sai-prakasam-group-of-institutions/software-engineering/5unit-risk-projection-in-software-engineering/113155164",
              img: "https://www.slideteam.net/media/catalog/product/cache/1280x720/r/i/risk_projection_software_engineering_in_powerpoint_and_google_slides_cpb_slide01.jpg",
            },
            {
              title: "Risk refinement",
              url: "https://www.geeksforgeeks.org/risk-management-steps-software-engineering/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ANR63ANxy2N0Pk-6XZQEjJeIUlbqZdphUw&s",
            },
            {
              title: "Monitoring & management",
              url: "https://www.geeksforgeeks.org/what-is-monitoring-and-control-in-project-management/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbgZEUxArKySTmA8zYPboYKJgSb0th8Jnbw&s",
            },
          ],
        },
        {
          title: "Change Management",
          links: [
            {
              title: "SCM scenario",
              url: "https://www.geeksforgeeks.org/software-engineering-system-configuration-management/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/1final.png",
            },
            {
              title: "SCM repository & process",
              url: "https://www.geeksforgeeks.org/software-engineering-system-configuration-management/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/2final.-1.jpg",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 5 : Software Quality",
      topics: [
        {
          title: "Software Quality Management& Estimation",
          links: [
            {
              title: "Basic Quality Concepts",
              url: "https://www.geeksforgeeks.org/software-engineering-software-quality/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240322145820/Factors-of-Software-Quality.webp",
            },
            {
              title: "Software Quality Assurance",
              url: "https://www.geeksforgeeks.org/software-engineering-software-quality-assurance/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240611145234/What-is-quality.webp",
            },
            {
              title: "Statistical Software Quality Assurance",
              url: "https://www.slideshare.net/slideshow/statistical-software-quality-assurancepptx/253058526",
              img: "https://image1.slideserve.com/3427832/statistical-software-quality-assurance-l.jpg",
            },
            {
              title: "Six Sigma Strategy",
              url: "https://www.geeksforgeeks.org/six-sigma-in-software-engineering/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20190830032706/p61.png",
            },
            {
              title: "Software Reliability",
              url: "https://www.sciencedirect.com/topics/computer-science/software-reliability",
              img: "https://ars.els-cdn.com/content/image/3-s2.0-B0122274105008589-gr11.gif",
            },
            {
              title: "The ISO 9000 Quality Standards",
              url: "https://www.geeksforgeeks.org/iso-9000-certification-in-software-engineering/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200927083131/ISO1.png",
            },
            {
              title: "McCall's Quality Factors",
              url: "https://www.geeksforgeeks.org/mccalls-quality-model/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240920150624/Mccall.webp",
            },
            {
              title: "Observations on Estimation",
              url: "https://www.geeksforgeeks.org/software-engineering-project-size-estimation-techniques/",
              img: "https://slideplayer.com/slide/3836998/13/images/3/Observations+on+Estimation.jpg",
            },
            {
              title: "The Project Planning Process",
              url: "https://www.geeksforgeeks.org/phases-project-management-processes/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20231207105418/phases-of-project-management-working.png",
            },
            {
              title: "Software Scope & Feasibility",
              url: "https://www.geeksforgeeks.org/types-of-feasibility-study-in-software-project-development/",
              img: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_11_MicrosoftTeams-image-1.jpg",
            },
            {
              title: "Resources",
              url: "https://www.geeksforgeeks.org/types-of-resources-used-in-project-development/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200623001411/Untitled-Diagram-340.png",
            },
            {
              title: "Decomposition Techniques",
              url: "https://medium.com/@khdevnet/breaking-it-down-decomposition-techniques-for-better-software-development-43d8d1048793",
              img: "https://miro.medium.com/v2/resize:fit:1358/1*jSoJ1MW0ep0ZrImCo0Bh6g.png",
            },
            {
              title: "COCOMO II Model",
              url: "https://www.geeksforgeeks.org/software-engineering-cocomo-ii-model/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20190309143716/Untitled-document-21.jpg",
            },
            {
              title: "Make/Buy Design",
              url: "https://www.tutorialspoint.com/management_concepts/the_make_or_buy_decision.htm",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rOVITJ5ePqpJxr6SlapCe7Da21bRNp49eQ&s",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="se-wrapper">
      <div className="se-card">
        <div className="se-title">Diploma - Software Engineering</div>

        {units.map((unit, uIndex) => (
          <div key={uIndex} className="se-section cursor-pointer">
            <h2 className="se-subtitle" onClick={() => toggleUnit(uIndex)}>
              {unit.title}
            </h2>
            {openUnits[uIndex] && (
              <div className="se-grid">
                {unit.topics.map((topic, tIndex) => {
                  const topicKey = `${uIndex}-${tIndex}`;
                  return (
                    <div className="se-grid-item structured" key={topicKey}>
                      <h3 onClick={() => toggleTopic(topicKey)}>
                        ➤ {topic.title}
                      </h3>
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
                                className="se-imgLink2"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                🔗{link.title}
                              </a>

                              <img
                                className="tinyImg2"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsJFCUAt1RL4xGDklC-BnA0ChfuP05ALvHw&s"
                                alt="thumbnail"
                                onClick={() => openModal(link.img)}
                              />
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

      {openImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={closeModal}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img className="modal-image" src={openImage} alt="Full view" />
          </div>
        </div>
      )}
    </div>
  );
}

export default DiplomaSE;
