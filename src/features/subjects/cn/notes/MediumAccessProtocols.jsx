import React, { useState } from 'react';
import '../../../../CSS/CN.css';

function MediumAccessProtocols() {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Medium Access Control Protocols</h1>
        
        <div className="cn-section">
          <h2 className="cn-subtitle">Overview</h2>
          <p className="cn-example">
            Medium Access Control (MAC) protocols govern how multiple devices access the shared communication medium in a network. These protocols are divided into three categories:
            <ul className="list-disc pl-5">
              <li>Random Access Protocols</li>
              <li>Control Access Protocols</li>
              <li>Channelization Protocols</li>
            </ul>
          </p>
        </div>

        {/* Folder Structure */}
        <div className="cn-grid">
          <div className="cn-grid-item structured">
            <h3 className="cn-subtitle">1. Random Access Protocols</h3>
            <div>
              <div className="cn-sub cursor-pointer" onClick={() => toggleAccordion(0)}>
                Aloha (Pure & Slotted)
              </div>
              {open === 0 && (
                <div className="text-grey-400">
                  <p>Aloha is a simple communication protocol where devices transmit whenever they have data to send. If there is a collision, they wait a random amount of time before retransmitting.</p>
                  <ul>
                    <li><strong>Pure Aloha:</strong> Transmits without any synchronization.</li>
                    <li><strong>Slotted Aloha:</strong> Divides time into slots and transmits at the beginning of each slot.</li>
                  </ul>
                  <br />
                  <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/differences-between-pure-and-slotted-aloha/")}>
                    Know more
                  </button>
                </div>
              )}

              <div className="cn-sub  cursor-pointer" onClick={() => toggleAccordion(1)}>
                CSMA (Carrier Sense Multiple Access)
              </div>
              {open === 1 && (
                <div className="text-grey-400">
                  <p>CSMA listens to the channel before transmitting. It waits for the channel to be idle and then transmits. If there’s a collision, it retries.</p>
                  <ul>
                    <li><strong>CSMA/CD (Collision Detection):</strong> Detects and handles collisions after transmission.</li>
                    <li><strong>CSMA/CA (Collision Avoidance):</strong> Avoids collisions by using backoff mechanisms.</li>
                  </ul>
                  <br />
                  <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/carrier-sense-multiple-access-csma/")}>
                    Know more
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="cn-grid-item structured">
            <h3 className="cn-subtitle">2. Control Access Protocols</h3>
            <div>
              <div className="cn-sub cursor-pointer" onClick={() => toggleAccordion(2)}>
                Polling
              </div>
              {open === 2 && (
                <div className="text-grey-400">
                  <p>Polling involves a central controller polling each device to see if it needs to transmit. The controller allows devices to transmit only when polled.</p>
                  <br />
                  <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/controlled-access-protocols-in-computer-network/")}>
                    Know more
                  </button>
                </div>
              )}

              <div className="cn-sub cursor-pointer" onClick={() => toggleAccordion(3)}>
                Token Passing
              </div>
              {open === 3 && (
                <div className="text-grey-400">
                  <p>Token Passing is a method where a special token circulates among devices. Only the device holding the token can transmit, ensuring that only one device transmits at a time.</p>
                  <br />
                  <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/controlled-access-protocols-in-computer-network/")}>
                    Know more
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="cn-grid-item structured">
            <h3 className="cn-subtitle">3. Channelization Protocols</h3>
            <div>
              <div className="cn-sub cursor-pointer" onClick={() => toggleAccordion(4)}>
                FDMA (Frequency Division Multiple Access)
              </div>
              {open === 4 && (
                <div className="text-grey-400">
                  <p>FDMA assigns each device a unique frequency band for transmission. Each device operates on a separate frequency channel, allowing multiple devices to transmit simultaneously.</p>
                  <br />
                  <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/difference-between-fdma-tdma-and-cdma/")}>
                    Know more
                  </button>
                </div>
              )}

              <div className="cn-sub cursor-pointer" onClick={() => toggleAccordion(5)}>
                TDMA (Time Division Multiple Access)
              </div>
              {open === 5 && (
                <div className="text-grey-400">
                  <p>TDMA divides the time into slots and allocates each device a time slot during which it can transmit. Multiple devices share the same frequency but transmit at different times.</p>
                  <br />
                  <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/difference-between-fdma-tdma-and-cdma/")}>
                    Know more
                  </button>
                </div>
              )}
              <div className="cn-sub cursor-pointer" onClick={() => toggleAccordion(6)}>
                CDMA (Code Division Multiple Access)
              </div>
              <br />
              {open === 6 && (
                <div className="text-grey-400">
                  <p>CDMA allows multiple devices to transmit simultaneously by assigning unique codes to each device. Devices use their codes to differentiate their transmissions.</p>
                  <button className="infoBtn" onClick={() => window.open("https://www.geeksforgeeks.org/difference-between-fdma-tdma-and-cdma/")}>
                    Know more
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediumAccessProtocols;
