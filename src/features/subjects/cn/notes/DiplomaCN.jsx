import React, { useState } from "react";
import "../../../../CSS/CN.css";
import { title } from "framer-motion/client";

function DiplomaCN() {
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

  // Example content grouped per unit
  const units = [
    {
      title: "UNIT 1 : Basics of Computer Network",
      topics: [
        {
          title: "Definition & History of Networks",
          links: [
            {
              title: "Early Network Developments",
              url: "https://en.wikipedia.org/wiki/History_of_the_Internet",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/EVOLUTION-OF-NETWORK-2.png",
            },
            {
              title: "Evolution of Networking Technologies",
              url: "https://www.geeksforgeeks.org/evolution-of-networks/?ref=rp",
              img: "https://i.ytimg.com/vi/N5LjE77IHmk/maxresdefault.jpg",
            },
            {
              title: "Key Milestones in Networking History",
              url: "https://www.networkcomputing.com/network-infrastructure/6-key-milestones-in-computer-networking-history",
              img: "https://www.researchgate.net/profile/Dominik-Kaspar/publication/254007604/figure/fig1/AS:571385198149632@1513240255064/Milestones-in-the-evolution-of-the-Internet.png",
            },
          ],
        },
        {
          title: "Usage of Computer Networks",
          links: [
            {
              title: "Personal Networks",
              url: "https://en.wikipedia.org/wiki/Personal_network",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-qhMae0133aC95CBKjIwxM7_w-UYmIGKwhA&s",
            },
            {
              title: "Business Networks",
              url: "https://en.wikipedia.org/wiki/Business_network",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-T04MLG7sPMLV6UCQ2WGIQMKhiD8fSbg2A&s",
            },
            {
              title: "Internet and Social Media",
              url: "https://www.apa.org/topics/social-media-internet",
              img: "https://static.businessworld.in/Picture%203%20(88)_20241003095129_original_image_3.webp",
            },
          ],
        },
        {
          title: "Standard Organizations and Protocols",
          links: [
            {
              title: "ISO",
              url: "https://en.wikipedia.org/wiki/International_Organization_for_Standardization",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdyMDMkpwRsKUXQiI-CqJVl3_Bw2xCAaLMA&s",
            },
            {
              title: "IEEE",
              url: "https://en.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png",
            },
            {
              title: "ITU",
              url: "https://en.wikipedia.org/wiki/International_Telecommunication_Union",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-d76LiG3vjr1iSPsCsuC8RObAYh_V1Fjgzw&s",
            },
            {
              title: "IETF",
              url: "https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEh7bz4hMvu3w3kN0fLSSIGZ7XtsYJgAYeTA&s",
            },
            {
              title: "W3C",
              url: "https://en.wikipedia.org/wiki/World_Wide_Web_Consortium",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7WRmER72-ouiE0r2FUJTSyvDvqzn9XQ3dQ&s",
            },
          ],
        },
        {
          title: "Line Configuration",
          links: [
            {
              title: "Point-to-Point",
              url: "https://en.wikipedia.org/wiki/Point-to-Point_Protocol",
              img: "https://itrelease.com/wp-content/uploads/2021/10/Point-to-Point-Network-Topology-1024x593.jpg",
            },
            {
              title: "Multipoint",
              url: "https://www.geeksforgeeks.org/differences-between-point-to-point-and-multi-point-communication/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwH8NVhNUTQ9oCWJk5LkrFnFpXXbZGcHOOA&s",
            },
            {
              title: "Full-Duplex, Half-Duplex, Simplex",
              url: "https://www.geeksforgeeks.org/transmission-modes-computer-networks/",
              img: "https://www.totalphase.com/media/blog/2022/10/Half-Duplex-Full-Duplex.png",
            },
          ],
        },
        {
          title: "Network Topology",
          links: [
            {
              title: "Star Topology",
              url: "https://www.geeksforgeeks.org/advantages-and-disadvantages-of-star-topology/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20241028174732747554/Star-Topology.png",
            },
            {
              title: "Bus Topology",
              url: "https://www.geeksforgeeks.org/advantages-and-disadvantages-of-bus-topology/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/3-55.png",
            },
            {
              title: "Ring Topology",
              url: "https://www.geeksforgeeks.org/advantages-and-disadvantages-of-ring-topology/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20241028175715256679/Untitled-Diagram-153-1.jpg",
            },
            {
              title: "Mesh Topology",
              url: "https://www.geeksforgeeks.org/advantage-and-disadvantage-of-mesh-topology/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20241028174648312121/Mesh-Topology.png",
            },
            {
              title: "Hybrid Topology",
              url: "https://www.geeksforgeeks.org/what-is-hybrid-topology/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240615002149/Hybrid-Topology.png",
            },
            {
              title: "Tree Topology",
              url: "https://www.geeksforgeeks.org/advantages-and-disadvantages-of-tree-topology/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240614234036/Tree-topology.png",
            },
          ],
        },
        {
          title: "Periodic Analog Signals",
          links: [
            {
              title: "Sine Wave",
              url: "https://en.wikipedia.org/wiki/Sine_wave#:~:text=A%20sine%20wave%2C%20sinusoidal%20wave,corresponds%20to%20uniform%20circular%20motion.",
              img: "https://www.investopedia.com/thmb/vk0vPdxAzOWrAi1f4N_pvoVCOa4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dotdash_Final_Sine_Wave_Feb_2020-01-b1a62c4514c34f578c5875f4d65c15af.jpg",
            },
            {
              title: "Frequency",
              url: "https://en.wikipedia.org/wiki/Frequency",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20231013110027/oscs.png",
            },
            {
              title: "Amplitude",
              url: "https://en.wikipedia.org/wiki/Amplitude",
              img: "https://cdn1.byjus.com/wp-content/uploads/2020/09/Amplitude-Of-A-Wave-1.png",
            },
            {
              title: "Period",
              url: "https://www.geeksforgeeks.org/periodic-signals/",
              img: "https://cdn1.byjus.com/wp-content/uploads/2020/09/Amplitude-Of-A-Wave-1.png",
            },
            {
              title: "Phase",
              url: "https://www.geeksforgeeks.org/phase-modulation/",
              img: "https://dosits.org/wp-content/uploads/2021/01/Phase-1a-500.png",
            },
            {
              title: "Wavelength",
              url: "https://energyeducation.ca/encyclopedia/Wavelength",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxyv444RnF4Ke05pTk9lCyrHau7PDK7tL-Q&s",
            },
            {
              title: "Time Domain",
              url: "http://en.wikipedia.org/wiki/Time_domain",
              img: "https://www.polytechnichub.com/wp-content/uploads/2017/05/time-and-frequency1.gif",
            },
            {
              title: "Frequency Domain",
              url: "https://en.wikipedia.org/wiki/Frequency_domain",
              img: "https://www.polytechnichub.com/wp-content/uploads/2017/05/time-and-frequency1.gif",
            },
            {
              title: "Composite Signals",
              url: "https://www.uoanbar.edu.iq/eStoreImages/Bank/5667.pdf",
              img: "https://i.ytimg.com/vi/8QPk6IFhpPI/maxresdefault.jpg",
            },
            {
              title: "Bandwidth",
              url: "https://www.geeksforgeeks.org/what-is-bandwidth-definition-working-importance-uses/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20230512153551/Bandwidth-768.webp",
            },
          ],
        },
        {
          title: "Categories of Network",
          links: [
            {
              title: "PAN (Personal Area Network)",
              url: "https://www.geeksforgeeks.org/overview-of-personal-area-network-pan/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200624120206/wireless-2.png",
            },
            {
              title: "LAN (Local Area Network)",
              url: "https://www.geeksforgeeks.org/lan-full-form/",
              img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Home_LAN_local_area_network_example_diagram.png",
            },
            {
              title: "MAN (Metropolitan Area Network)",
              url: "https://www.geeksforgeeks.org/man-full-form-in-computer-networking/",
              img: "https://ars.els-cdn.com/content/image/3-s2.0-B9780128133651000023-f02-05-9780128133651.jpg",
            },
            {
              title: "WAN (Wide Area Network)",
              url: "http://geeksforgeeks.org/wan-full-form/",
              img: "https://static.vecteezy.com/system/resources/previews/047/106/648/non_2x/wide-area-network-wan-diagram-vector.jpg",
            },
            {
              title: "Circuit-Switched Network",
              url: "https://www.geeksforgeeks.org/circuit-switching-in-computer-network/",
              img: "https://www.techtarget.com/rms/onlineimages/how_circuit_switching_works-f_mobile.png",
            },
            {
              title: "Packet-Switched Network",
              url: "https://www.geeksforgeeks.org/packet-switched-network-psn-in-networking/",
              img: "https://cdn.britannica.com/04/257704-050-12721E71/Picture-demonstrating-the-difference-between-a-packet-switched-network-and-a-circuit-switched-network.jpg",
            },
          ],
        },
        {
          title: "Performance",
          links: [
            {
              title: "Bandwidth",
              url: "https://www.geeksforgeeks.org/what-is-bandwidth-definition-working-importance-uses/",
              img: "https://www.lifewire.com/thmb/BzykETJTjmPyjI-29fycKQTCxjc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-bandwidth-26258091-957d0a321cbe4b09b05b4b211b7e7e6b.png",
            },
            {
              title: "Throughput",
              url: "https://www.geeksforgeeks.org/difference-between-bandwidth-and-throughput/",
              img: "https://backblaze.com/blog/wp-content/uploads/2024/04/Bandwidth-vs-Throughput_1_Diagram.png",
            },
            {
              title: "Latency (Delay)",
              url: "https://www.geeksforgeeks.org/what-is-latency/",
              img: "https://backblaze.com/blog/wp-content/uploads/2024/04/Bandwidth-vs-Throughput_1_Diagram.png",
            },
            {
              title: "Bandwidth-Delay Product",
              url: "https://en.wikipedia.org/wiki/Bandwidth-delay_product",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgboFnR5Hyy-xEuimOkxBFlxUnxqMcUKEghQ&s",
            },
            {
              title: "Jitter",
              url: "https://www.geeksforgeeks.org/latency-vs-jitter-in-computer-networks/",
              img: "https://i.ytimg.com/vi/K44eRt852vs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEAgXihlMA8=&rs=AOn4CLDxerpFwcWizX58F1B0QmA-0fK03A",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 2 : The Reference Model for Network Communication",
      topics: [
        {
          title: "OSI Model & Function of Each Layer",
          links: [
            {
              title: "Physical Layer",
              url: "https://www.geeksforgeeks.org/physical-layer-in-osi-model/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250127181414133276/31.webp",
            },
            {
              title: "Data Link Layer",
              url: "https://www.geeksforgeeks.org/data-link-layer/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200802225857/D.png",
            },
            {
              title: "Network Layer",
              url: "https://www.geeksforgeeks.org/network-layer-in-osi-model/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20230810165711/osi.jpg",
            },
            {
              title: "Transport Layer",
              url: "https://www.geeksforgeeks.org/transport-layer-responsibilities/",
              img: "https://www.whatismyip.com/static/381e200d80132926661cb7eb0b0081c8/transport-layer.webp",
            },
            {
              title: "Session Layer",
              url: "http://geeksforgeeks.org/session-layer-in-osi-model/",
              img: "https://www.techtarget.com/rms/onlineimages/networking-osi_layers_session_mobile.png",
            },
            {
              title: "Presentation Layer",
              url: "https://www.geeksforgeeks.org/presentation-layer-in-osi-model/",
              img: "https://www.techtarget.com/rms/onlineimages/networking-osi_layers__presentation_mobile.png",
            },
            {
              title: "Application Layer",
              url: "https://www.geeksforgeeks.org/application-layer-in-osi-model/",
              img: "https://www.techtarget.com/rms/onlineimages/networking-osi_layers_application_mobile.png",
            },
          ],
        },
        {
          title: "TCP/IP Model",
          links: [
            {
              title: "Network Access Layer",
              url: "https://www.geeksforgeeks.org/tcp-ip-model/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVYwZET6FzdbBUVddNu3G96IersohkHSrjQ&s",
            },
            {
              title: "Internet Layer",
              url: "https://www.geeksforgeeks.org/tcp-ip-model/",
              img: "https://cdn2.hubspot.net/hub/70217/file-630050248-png/images/models_side_by_side.png",
            },
            {
              title: "Transport Layer",
              url: "https://www.geeksforgeeks.org/tcp-ip-model/",
              img: "https://ars.els-cdn.com/content/image/3-s2.0-B9781597495493000055-f05-01.jpg",
            },
            {
              title: "Application Layer",
              url: "https://www.geeksforgeeks.org/tcp-ip-model/",
              img: "https://ilabxp.com/wp-content/uploads/2019/07/asset-v1TUMxiLabx2T2019type@assetblock@week1-prelab-models-1024x576.jpeg",
            },
          ],
        },
        {
          title: "Connection-Oriented vs Connectionless Approach",
          links: [
            {
              title: "Connection-Oriented Protocols",
              url: "https://www.geeksforgeeks.org/connection-oriented-service/",
              img: "https://www.linktionary.com/c/connections.jpg",
            },
            {
              title: "Connectionless Protocols",
              url: "https://www.geeksforgeeks.org/connection-less-service/",
              img: "https://i.pinimg.com/736x/b7/8e/a4/b78ea4fc4697eaa3ea9b55fea89457d0.jpg",
            },
            {
              title: "Comparison of OSI & TCP/IP Models",
              url: "https://www.geeksforgeeks.org/difference-between-osi-model-and-tcp-ip-model/",
              img: "https://teleforum.ethiotelecom.et/content/uploads/photos/2023/08/tele-forum_b02dd7223cc7b41e3d1f86aa5d780624.webp",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 3 : Transmission Media",
      topics: [
        {
          title: "Types of Transmission Media",
          links: [
            {
              title: "Guided Media",
              url: "https://www.geeksforgeeks.org/types-transmission-media/",
              img: "https://avcreatians.wordpress.com/wp-content/uploads/2020/10/img_20201010_125928_907.jpg",
            },
            {
              title: "Twisted Pair",
              url: "https://www.geeksforgeeks.org/twisted-pair-cable/",
              img: "https://avcreatians.wordpress.com/wp-content/uploads/2020/10/img_20201010_125928_907.jpg",
            },
            {
              title: "Coaxial Cable",
              url: "https://www.geeksforgeeks.org/what-is-coaxial-cable/",
              img: "https://avcreatians.wordpress.com/wp-content/uploads/2020/10/img_20201010_125928_907.jpg",
            },
            {
              title: "Fiber Optic Cable",
              url: "https://www.geeksforgeeks.org/fiber-optics-and-types/",
              img: "https://avcreatians.wordpress.com/wp-content/uploads/2020/10/img_20201010_125928_907.jpg",
            },
            {
              title: "Unguided Media",
              url: "https://www.geeksforgeeks.org/unguided-media/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240607105809/Unguided-Media-New-660.png",
            },
            {
              title: "Electromagnetic Spectrum",
              url: "https://en.wikipedia.org/wiki/Electromagnetic_spectrum",
              img: "https://mynasadata.larc.nasa.gov/sites/default/files/inline-images/Electromagnetic_Spectrum_Diagram%20flipped_FINAL.png",
            },
            {
              title: "Radio Transmission",
              url: "https://www.geeksforgeeks.org/advantages-and-disadvantages-of-radio-transmission/",
              img: "https://www.sanfoundry.com/wp-content/uploads/2024/05/radio-waves-transmission.png",
            },
            {
              title: "Microwave Transmission",
              url: "https://www.geeksforgeeks.org/microwave-transmission/",
              img: "https://ethw.org/w/images/thumb/6/65/Microwave_link.jpg/300px-Microwave_link.jpg",
            },
            {
              title: "Infrared Transmission",
              url: "https://www.geeksforgeeks.org/infrared-light-for-transmission/",
              img: "https://ecomputernotes.com/images/Infrared-Transmission-system.png",
            },
            {
              title: "Satellite Communication",
              url: "https://www.geeksforgeeks.org/advantages-and-disadvantages-of-satellite-communication/",
              img: "https://cdn1.byjus.com/wp-content/uploads/2020/06/Physics-Images-Satellite-communication-6.png",
            },
          ],
        },
        {
          title: "Guided Media",
          links: [
            {
              title: "Advantages and Disadvantages",
              url: "https://www.ccbp.in/blog/articles/guided-transmission-media-in-computer-networks",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__hyi3DJF3smwXqqA-3nfPV_UcXQIHtHT7Q&s",
            },
            {
              title: "Applications of Guided Media",
              url: "https://www.ccbp.in/blog/articles/guided-transmission-media-in-computer-networks",
              img: "https://image1.slideserve.com/3263441/guided-media-l.jpg",
            },
            {
              title: "Fiber Optics in Networks",
              url: "https://corporate.enelx.com/en/question-and-answers/advantages-of-fiber-optic",
              img: "https://www.thefoa.org/tech/ref/basic/fcw.jpg",
            },
          ],
        },
        {
          title: "Un-Guided Media",
          links: [
            {
              title: "Advantages and Disadvantages",
              url: "https://www.theinfozones.com/2022/06/advantages-and-disadvantages-of.html",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsJzT9cuZeBd7JViyF7dzF16-OMN66XOMFg&s",
            },
            {
              title: "Applications of Unguided Media",
              url: "https://www.sanfoundry.com/computer-network-unguided-media/",
              img: "https://studyopedia.com/wp-content/uploads/2018/04/Guided-vs-UnGuided-Transmission-Media.png",
            },
            {
              title: "Role of Satellite Communication",
              url: "https://byjus.com/physics/satellite-communication/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvL4Ug8t-Qr0ShJT73Q8hqmZKewplocwnT8w&s",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 4 : Multiplexing and Switching",
      topics: [
        {
          title: "Multiplexing",
          links: [
            {
              title: "Frequency Division Multiplexing (FDM)",
              url: "https://www.geeksforgeeks.org/frequency-division-and-time-division-multiplexing/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmOqr-m5nskFvhqo4iIk-Q_vKb2JbX_OA4Q&s",
            },
            {
              title: "Wavelength Division Multiplexing (WDM)",
              url: "https://www.geeksforgeeks.org/difference-between-wdm-and-dwdm/",
              img: "https://www.fiberlabs.com/wp2/wp-content/uploads/2023/01/180731_WDM_schematic.png",
            },
            {
              title: "Time Division Multiplexing (TDM)",
              url: "https://www.sciencedirect.com/topics/engineering/time-division-multiplexing",
              img: "https://www.myreadingroom.co.in/images/stories/docs/dcn/timedivision%20multiplexing.JPG",
            },
          ],
        },
        {
          title: "Introduction to Switching",
          links: [
            {
              title: "Circuit Switching",
              url: "https://www.geeksforgeeks.org/circuit-switching-in-computer-network/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240906152427/Circuit-Switching.gif",
            },
            {
              title: "Packet Switching",
              url: "https://www.geeksforgeeks.org/packet-switching-and-delays-in-computer-network/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20241029165933712408/Packet-Switching.png",
            },
            {
              title: "Message Switching",
              url: "https://www.geeksforgeeks.org/message-switching-techniques/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240425133145/Message-swithcing.webp",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 5 : Data Link Layer",
      topics: [
        {
          title: "Design Issues, Example Protocols",
          links: [
            {
              title: "Ethernet",
              url: "https://www.geeksforgeeks.org/what-is-ethernet/",
              img: "https://cdn.prod.website-files.com/65f854814fd223fc3678ea53/65f854814fd223fc3678ee6b_64ecd788d761f607b3822b11_Ethernet-Cables.png",
            },
            {
              title: "WLAN",
              url: "https://www.geeksforgeeks.org/wlan-full-form/",
              img: "https://www.zenarmor.com/docs/assets/images/what-is-wlan-and-advantages-of-wlan-fb66c8e179e2e625c7a5b6fdc5b83549.png",
            },
            {
              title: "Bluetooth",
              url: "https://www.geeksforgeeks.org/bluetooth/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240228134125/bluetootharchitecture-660.jpg",
            },
          ],
        },
        {
          title: "Link-Layer Addressing",
          links: [
            {
              title: "MAC Addresses",
              url: "https://www.geeksforgeeks.org/mac-address-in-computer-network/",
              img: "https://www.pynetlabs.com/wp-content/uploads/2023/11/MAC-Address.jpeg",
            },
            {
              title: "ARP",
              url: "https://www.geeksforgeeks.org/arp-protocol/",
              img: "https://static.wixstatic.com/media/6a4a49_a2483e8dd4004c12b1105b855054cddd~mv2.png/v1/fill/w_1000,h_736,al_c,q_90,usm_0.66_1.00_0.01/6a4a49_a2483e8dd4004c12b1105b855054cddd~mv2.png",
            },
            {
              title: "IPv6 Address Resolution Protocol (NDP)",
              url: "https://www.networkacademy.io/ccna/ipv6/neighbor-discovery-protocol",
              img: "https://ipcisco.com/wp-content/uploads/ipv6-redirection.jpg",
            },
          ],
        },
        {
          title: "Error Detection and Correction",
          links: [
            {
              title: "Block Coding",
              url: "https://www.geeksforgeeks.org/block-coding-in-digital-electronics/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/Digital_Electronics_Block_Coding_1.png",
            },
            {
              title: "Cyclic Redundancy Check (CRC)",
              url: "https://www.geeksforgeeks.org/modulo-2-binary-division/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOc1HFppkpsGQSJugN-ADU5t5c1I6Aiu9iw&s",
            },
            {
              title: "Checksum",
              url: "https://www.geeksforgeeks.org/error-detection-code-checksum/",
              img: "https://www.myreadingroom.co.in/images/stories/docs/dcn/checksum.JPG",
            },
            {
              title: "Forward Error Correction",
              url: "https://www.sciencedirect.com/topics/engineering/forward-error-correction",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wZ6EhoKdKS_wnjNgEBisKxcDVh-j4zXgWg&s",
            },
          ],
        },
        {
          title: "Data Link Protocols",
          links: [
            {
              title: "Simple Protocols",
              url: "https://www.scaler.in/simplest-protocol/#:~:text=the%20sender%20immediately.-,The%20simplest%20protocol%20is%20a%20unidirectional%20protocol%20in%20which%20the,need%20for%20data%20re%2Dtransmission.",
              img: "https://www.myreadingroom.co.in/images/stories/docs/dcn/simplest%20protocol_communication.JPG",
            },
            {
              title: "Stop-and-Wait Protocol",
              url: "https://www.geeksforgeeks.org/stop-and-wait-arq/",
              img: "https://cdn1.byjus.com/wp-content/uploads/2022/09/diagram-1-3.png",
            },
            {
              title: "Piggybacking",
              url: "https://www.geeksforgeeks.org/piggybacking-in-computer-networks/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7PNIwgrvjOG196yz_nKF-Vo2QStk4cuklQ&s",
            },
          ],
        },
        {
          title: "Media Access Control",
          links: [
            {
              title: "Random Access",
              url: "https://www.geeksforgeeks.org/multiple-access-protocols-in-computer-network/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250207173303757723/Multiple-Access-Control-768.webp",
            },
            {
              title: "Controlled Access",
              url: "https://www.geeksforgeeks.org/controlled-access-protocols-in-computer-network/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250207173303757723/Multiple-Access-Control-768.webp",
            },
            {
              title: "Channelization",
              url: "https://www.baeldung.com/cs/channelization-protocols",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20250207173303757723/Multiple-Access-Control-768.webp",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 6 : Transport Layer",
      topics: [
        {
          title: "Transport Layer Services",
          links: [
            {
              title: "Data Segmentation",
              url: "https://www.geeksforgeeks.org/what-is-network-segmentation/",
              img: "https://www.zenarmor.com/docs/assets/images/network-segmentation-f73b67047d13c38d2a21593ffde4d131.png",
            },
            {
              title: "Flow Control",
              url: "https://www.geeksforgeeks.org/flow-control-in-data-link-layer/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIVt6EU1ZkRTIQvroX6jx0javu3wd0r_4jA&s",
            },
            {
              title: "Error Control",
              url: "https://www.geeksforgeeks.org/error-control-in-data-link-layer/",
              img: "https://afteracademy.com/images/what-is-error-control-in-networking-selective-repeat-arq-89d60c64104434e2.jpg",
            },
            {
              title: "Reliability",
              url: "https://www.geeksforgeeks.org/considerations-for-a-reliable-network/",
              img: "https://miro.medium.com/v2/resize:fit:910/1*FwXZ_kk0uVwSfHhsoLA1uw.png",
            },
          ],
        },
        {
          title: "Connectionless and Connection-Oriented Protocols",
          links: [
            {
              title: "UDP (User Datagram Protocol)",
              url: "https://www.geeksforgeeks.org/user-datagram-protocol-udp/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240226104348/UDP-gif.gif",
            },
            {
              title: "TCP (Transmission Control Protocol)",
              url: "https://www.geeksforgeeks.org/what-is-transmission-control-protocol-tcp/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240226095336/TCP-Gif.gif",
            },
          ],
        },
        {
          title: "Transport Layer Protocols",
          links: [
            {
              title: "Simple Protocol",
              url: "https://www.studytonight.com/computer-networks/simplest-protocol",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqX5uCV7yBMvdPRJ5ji_-6HC_euqKNFD-zw&s",
            },
            {
              title: "Stop-and-Wait Protocol",
              url: "https://www.tutorialspoint.com/data_communication_computer_network/stop_and_wait_protocol.htm",
              img: "https://data-flair.training/blogs/wp-content/uploads/sites/2/2021/12/stop-and-wait-protocol.webp",
            },
            {
              title: "Go-Back-N Protocol",
              url: "https://www.geeksforgeeks.org/sliding-window-protocol-set-2-receiver-side/",
              img: "https://binaryterms.com/wp-content/uploads/2021/07/Go-back-n-protocol-1.jpg",
            },
            {
              title: "Selective-Repeat Protocol",
              url: "https://www.geeksforgeeks.org/sliding-window-protocol-set-3-selective-repeat/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/Sliding-Window-Protocol.jpg",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 7 : Network Devices",
      topics: [
        {
          title: "Repeaters",
          links: [
            {
              title: "Signal Regeneration",
              url: "https://www.geeksforgeeks.org/repeaters-in-computer-network/",
              img: "https://reviseomatic.org/help/2-radio/Repeaters%20and%20Regenerators.gif",
            },
            {
              title: "Extending Network Distance",
              url: "https://www.tutorchase.com/answers/ib/computer-science/how-does-a-repeater-extend-a-wireless-network",
              img: "https://ipcisco.com/wp-content/uploads/2020/04/wireless-repeater.jpg",
            },
            {
              title: "Noise Elimination",
              url: "https://electronicscoach.com/difference-between-amplifier-and-repeater.html",
              img: "https://reviseomatic.org/help/2-radio/SignalAndNoise.gif",
            },
          ],
        },
        {
          title: "Hubs",
          links: [
            {
              title: "Broadcasting",
              url: "https://www.geeksforgeeks.org/what-is-network-hub-and-how-it-works/",
              img: "https://miro.medium.com/v2/resize:fit:469/0*b3EioF1G5Z1gxDX5.jpg",
            },
            {
              title: "Types of Hubs",
              url: "https://www.tutorialspoint.com/what-are-the-types-of-hubs-in-the-computer-network",
              img: "https://i.ytimg.com/vi/QIcQ68p1cVk/maxresdefault.jpg",
            },
            {
              title: "Passive vs Active Hubs",
              url: "https://www.rfwireless-world.com/terminology/networking-basics/active-vs-passive-hubs",
              img: "https://i.ytimg.com/vi/wLMaoJEvAH4/maxresdefault.jpg",
            },
          ],
        },
        {
          title: "Switches",
          links: [
            {
              title: "Switches",
              url: "https://en.wikipedia.org/wiki/Network_switch",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20230911173133/Gate-File-3.png",
            },
            {
              title: "MAC Address Learning",
              url: "https://www.geeksforgeeks.org/mac-learning-in-ccna/",
              img: "https://www.computernetworkingnotes.com/wp-content/uploads/ccna-study-guide/images/csg36-05-packet-tracer-example-of-switch-learning.png",
            },
            {
              title: "Frame Forwarding",
              url: "https://www.geeksforgeeks.org/frame-forwarding-methods-on-switches/",
              img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200817200456/1126.png",
            },
            {
              title: "Switching Table",
              url: "https://www.routeralley.com/guides/switching_tables.pdf",
              img: "https://www.computernetworkingnotes.com/wp-content/uploads/ccna-study-guide/images/csg36-04-switch-learning-process.png",
            },
            {
              title: "Store and Forward",
              url: "https://www.geeksforgeeks.org/difference-between-store%E2%80%91and%E2%80%91forward-switching-and-cut%E2%80%91through-switching/",
              img: "https://cdn.networkacademy.io/sites/default/files/2020-08/Receiving%20Data%20Switching%20Modes.png",
            },
          ],
        },
        {
          title: "Routers",
          links: [
            {
              title: "Routers",
              url: "https://www.geeksforgeeks.org/introduction-of-a-router/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20230912173936/Network_devices.jpg",
            },
            {
              title: "Routing Tables",
              url: "https://www.geeksforgeeks.org/routing-tables-in-computer-network/",
              img: "https://www.baeldung.com/wp-content/uploads/sites/4/2021/10/routingtable_entry2.drawio.svg",
            },
            {
              title: "Packet Forwarding",
              url: "https://www.geeksforgeeks.org/what-is-packet-forwarding/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20220508124726/router-660x335.png",
            },
            {
              title: "Routing Algorithms",
              url: "https://www.geeksforgeeks.org/classification-of-routing-algorithms/",
              img: "",
            },
            {
              title: "Routing Algorithms 2",
              url: "https://www.tutorialspoint.com/data_communication_computer_network/routing_algorithm.htm",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20230316100154/Types-of-Routing-Algorithm.png",
            },
            {
              title: "Inter-Network Communication",
              url: "https://www.geeksforgeeks.org/introduction-of-internetworking/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240124132751/internetwork-banner-main.webp",
            },
          ],
        },
        {
          title: "Access Points",
          links: [
            {
              title: "Access Points",
              url: "https://www.geeksforgeeks.org/what-is-a-wireless-access-point/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvDxn_MVFkJ6QQZDI-DZN3K1GZQhwbE293A&s",
            },
            {
              title: "Wireless Connectivity",
              url: "https://www.geeksforgeeks.org/modes-of-wireless-connectivity/",
              img: "https://www.tutorialspoint.com/data_communication_computer_network/images/wireless-networks.png",
            },
            {
              title: "SSID Broadcasting",
              url: "https://nordvpn.com/blog/how-to-disable-ssid-broadcast/",
              img: "https://www.electronicproducts.com/wp-content/uploads/computer-peripheral-communication-peripherals-wireless-router-disable-ssid-broadcast.png",
            },
            {
              title: "Wi-Fi Standards",
              url: "https://www.geeksforgeeks.org/wi-fi-standards-explained/",
              img: "https://images.squarespace-cdn.com/content/v1/6385e30af8cfbb2962f000b1/5b748e88-fe83-4d16-a575-3757f9aace73/IEEE+WiFi+Standards+Cheat+Sheet.jpg",
            },
          ],
        },
        {
          title: "Gateways",
          links: [
            {
              title: "Gateways",
              url: "https://www.geeksforgeeks.org/introduction-of-gateways/",
              img: "https://datasave.qsfptek.com/upload/2024-03-11/1710148821173.png",
            },
            {
              title: "Protocol Conversion",
              url: "https://nordvpn.com/cybersecurity/glossary/protocol-conversion/#:~:text=Protocol%20conversion%20refers%20to%20the,systems%20that%20use%20different%20protocols.",
              img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/ProtocolConverter.JPG/533px-ProtocolConverter.JPG",
            },
            {
              title: "Application Layer Gateways",
              url: "https://www.f5.com/glossary/application-layer-gateway",
              img: "https://www.3cx.com/wp-content/uploads/2020/12/application-layer-gateway.png",
            },
            {
              title: "Inter-Network Communication",
              url: "https://www.geeksforgeeks.org/introduction-of-internetworking/",
              img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/ArchitectureCloudLinksSameSite.png",
            },
          ],
        },
        {
          title: "Bridges",
          links: [
            {
              title: "Bridges",
              url: "https://www.geeksforgeeks.org/what-is-bridge-in-computer-network-types-uses-functions-differences/",
              img: "https://files.codingninjas.in/article_images/bridges-22136.webp",
            },
            {
              title: "LAN Segment Connection",
              url: "https://networkencyclopedia.com/lan-segment/#:~:text=Local%20Area%20Networks%20(LANs)%20form,and%20enhancing%20overall%20network%20performance.",
              img: "https://networkencyclopedia.com/wp-content/uploads/2019/08/lan-segment.jpg",
            },
            {
              title: "MAC Filtering",
              url: "https://www.geeksforgeeks.org/mac-filtering-in-computer-network/",
              img: "https://i0.wp.com/collabnix.com/wp-content/uploads/2024/09/Screenshot-2024-09-03-at-3.50.14%E2%80%AFPM.png?fit=1175%2C489&ssl=1",
            },
            {
              title: "Collision Domain Separation",
              url: "https://www.geeksforgeeks.org/collision-domain-and-broadcast-domain-in-computer-network/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/Computer-Network-Broadcast-Domain-Collision.png",
            },
          ],
        },
        {
          title: "Difference Between Layer 2 and Layer 3 Switches",
          links: [
            {
              title: "Data Link vs Network Layer",
              url: "https://www.google.com/search?q=data+link+vs+network+layer&oq=Data+Link+vs+Network+Layer&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYQDIICAIQABgWGB4yCAgDEAAYFhgeMg0IBBAAGIYDGIAEGIoFMg0IBRAAGIYDGIAEGIoFMg0IBhAAGIYDGIAEGIoFMgoIBxAAGIAEGKIE0gEHNDM4ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8",
              img: "https://slideplayer.com/6222934/20/images/slide_1.jpg",
            },
            {
              title: "MAC vs IP Forwarding",
              url: "https://www.geeksforgeeks.org/difference-between-mac-address-and-ip-address/",
              img: "https://community.cisco.com/t5/image/serverpage/image-id/88399i218C1590BCA5E5F8/image-size/large?v=v2&px=999",
            },
            {
              title: "Switching vs Routing",
              url: "https://www.geeksforgeeks.org/difference-between-router-and-switch/",
              img: "https://miro.medium.com/v2/resize:fit:1400/1*4oLUgGZp2tsyICIuzbhZsw.jpeg",
            },
          ],
        },
        {
          title: "Introduction to Network Management Software",
          links: [
            {
              title: "Network Monitoring",
              url: "https://www.geeksforgeeks.org/network-monitoring-and-packet-capture-techniques/",
              img: "https://www.extnoc.com/learn/wp-content/uploads/2022/08/Benefits-of-Network-Monitoring-System.jpg",
            },
            {
              title: "SNMP",
              url: "https://www.geeksforgeeks.org/simple-network-management-protocol-snmp/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20220907123817/snmpenumeration.jpg",
            },
            {
              title: "Configuration Management",
              url: "https://www.cisco.com/site/us/en/learn/topics/networking/what-is-configuration-management.html",
              img: "https://framerusercontent.com/images/i2EutCSaTIVGVksJ0dWkPS761o.jpg",
            },
          ],
        },
      ],
    },
    {
      title: "UNIT 8 : Application Layer",
      topics: [
        {
          title: "Principles of Network Application",
          links: [
            {
              title: "Client-Server Architecture",
              url: "https://www.geeksforgeeks.org/client-server-model/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTyPjPLTR_2A4TMXRXPFOjwFgw29fp-PWKag&s",
            },
            {
              title: "Peer-to-Peer Architecture",
              url: "https://www.geeksforgeeks.org/what-is-p2p-peer-to-peer-process/",
              img: "https://systemdesignschool.io/blog/peer-to-peer-architecture/client-server-vs-p2p.png",
            },
            {
              title: "Process Communication",
              url: "https://www.geeksforgeeks.org/inter-process-communication-ipc/",
              img: "https://pumble.com/learn/wp-content/uploads/2023/10/The-Communication-Process-min.png",
            },
          ],
        },
        {
          title: "The Web and HTTP",
          links: [
            {
              title: "HTTP Methods (GET, POST, etc.)",
              url: "https://www.geeksforgeeks.org/different-kinds-of-http-requests/",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vs2BT0HN3QChFrQlEzP2JF0haM9F_qkFVQ&s",
            },
            {
              title: "HTTP Response Codes",
              url: "https://www.geeksforgeeks.org/http-status-codes-client-error-responses/",
              img: "https://i0.wp.com/techtalkbook.com/wp-content/uploads/2023/08/http-code.png?resize=930%2C620&ssl=1",
            },
            {
              title: "HTTP Request/Response Model",
              url: "https://www.geeksforgeeks.org/state-the-core-components-of-an-http-response/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20210905091508/ImageOfHTTPRequestResponse-660x374.png",
            },
          ],
        },
        {
          title: "File Transfer: FTP",
          links: [
            {
              title: "FTP Commands and Responses",
              url: "https://www.geeksforgeeks.org/file-transfer-protocol-ftp-in-application-layer/",
              img: "https://files.codingninjas.in/article_images/ftp-file-transfer-protocol-0-1643883624.webp",
            },
            {
              title: "Active vs Passive Mode",
              url: "https://www.geeksforgeeks.org/difference-between-active-and-passive-ftp/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240423165007/Active-Active-vs-Active-Passive-Architecture.webp",
            },
            {
              title: "FTP File Operations",
              url: "https://www.tutorialspoint.com/what-are-the-ftp-operations",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240110113246/File-Transfer-Protocol-and-HTTPS-gif-2.gif",
            },
          ],
        },
        {
          title: "Electronic Mail in the Internet",
          links: [
            {
              title: "SMTP (Simple Mail Transfer Protocol)",
              url: "https://www.geeksforgeeks.org/simple-mail-transfer-protocol-smtp/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20240226095034/SMTP-Gif.gif",
            },
            {
              title: "Mail Message Format",
              url: "https://www.geeksforgeeks.org/e-mail-format/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/20200801135139/Emailformat.png",
            },
            {
              title: "SMTP vs HTTP",
              url: "https://www.geeksforgeeks.org/difference-between-smtp-and-http/",
              img: "https://www.chtips.com/wp-content/uploads/2021/08/Differences-Between-HTTP-SMTP.webp",
            },
            {
              title: "Mail Access Protocols (IMAP, POP3)",
              url: "https://www.geeksforgeeks.org/differences-between-pop3-and-imap/",
              img: "https://www.spiceworks.com/wp-content/uploads/2023/04/Untitled-3.png",
            },
          ],
        },
        {
          title: "DNS (Domain Name System)",
          links: [
            {
              title: "DNS Structure",
              url: "https://www.geeksforgeeks.org/domain-name-system-dns-in-application-layer/",
              img: "https://www.novell.com/documentation/dns_dhcp/dhcp_enu/graphics/dhc_002a.gif",
            },
            {
              title: "DNS Resolution Process",
              url: "https://www.geeksforgeeks.org/address-resolution-in-dns-domain-name-server/",
              img: "https://media.geeksforgeeks.org/wp-content/uploads/222-1.jpg",
            },
            {
              title: "DNS Records",
              url: "https://www.ibm.com/think/topics/dns-records",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQ96AXvKofcRl7S2j4TIo3cCBAVHLoJpGHg&s",
            },
            {
              title: "Types of DNS Servers",
              url: "https://www.cloudflare.com/learning/dns/dns-server-types/",
              img: "https://miro.medium.com/v2/resize:fit:1392/1*NJCQNDIY4gUgMqUhZNn1NQ.png",
            },
          ],
        },
        {
          title: "Peer-to-Peer Applications",
          links: [
            {
              title: "File Sharing Protocols",
              url: "https://www.geeksforgeeks.org/file-transfer-protocol-ftp-in-application-layer/",
              img: "https://miro.medium.com/v2/resize:fit:1400/1*aBJvvuabjV8lLr9ZNwp_nw.png",
            },
            {
              title: "BitTorrent Protocol",
              url: "https://medium.com/@abhinavcv007/bittorrent-part-1-the-engineering-behind-the-bittorrent-protocol-04e70ee01d58",
              img: "https://www.researchgate.net/publication/220080811/figure/fig9/AS:669006163890179@1536514907253/How-the-BitTorrent-Protocol-Works.jpg",
            },
            {
              title: "P2P Network Topology",
              url: "https://www.shiksha.com/online-courses/articles/what-is-point-to-point-topology-blogId-156937#:~:text=P2P%20topology%20offers%20increased%20security,to%20cause%20delays%20or%20congestion.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hk2Zjg_f9-c5oL1rDPMQnHb7FMuKrW27gw&s",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <div className="cn-title">Diploma - Computer network</div>

        {units.map((unit, uIndex) => (
          <div key={uIndex} className="cn-section cursor-pointer">
            <h2 className="cn-subtitle" onClick={() => toggleUnit(uIndex)}>
              {unit.title}
            </h2>
            {openUnits[uIndex] && (
              <div className="cn-grid">
                {unit.topics.map((topic, tIndex) => {
                  const topicKey = `${uIndex}-${tIndex}`;
                  return (
                    <div className="cn-grid-item structured" key={topicKey}>
                      <h3 onClick={() => toggleTopic(topicKey)}>
                        ➤ {topic.title}
                      </h3>
                      {openTopics[topicKey] && (
                        <div style={{width:"100%"}}>
                          {topic.links.map((link, i) => (
                            <div className="smallItems rounded-2xl shadow-lg flex flex-row justify-center align-center" key={i}>
                              <a
                                href={link.url}
                                className="cn-imgLink2"
                                target="_blank"
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

export default DiplomaCN;
