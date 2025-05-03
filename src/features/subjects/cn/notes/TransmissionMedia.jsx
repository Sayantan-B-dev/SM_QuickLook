import React from "react";
import "../../../../CSS/CN.css";

function TransmissionMedia() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Types of Transmission Media</h1>

        {/* Guided Media */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Guided Media</h2>
          <p className="cn-example">
            **Guided media** refers to transmission media where the data signals are directed and confined to a specific path. The physical medium is used to guide the signals from the sender to the receiver. These types of transmission media use wires or cables for signal transmission.
          </p>

          {/* Twisted Pair */}
          <div className="cn-subsection">
            <h3>Twisted Pair</h3>
            <p className="cn-example">
              **Twisted Pair** cables consist of pairs of insulated copper wires twisted together. This design helps to reduce electromagnetic interference. Twisted pair cables are widely used in telecommunication systems, local area networks (LANs), and telephone systems.
            </p>
            <table className="cn-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Types</strong></td>
                  <td>Unshielded Twisted Pair (UTP), Shielded Twisted Pair (STP)</td>
                </tr>
                <tr>
                  <td><strong>Bandwidth</strong></td>
                  <td>100 Mbps to 1 Gbps</td>
                </tr>
                <tr>
                  <td><strong>Applications</strong></td>
                  <td>Telecommunication, Ethernet networks, LANs</td>
                </tr>
              </tbody>
            </table>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of Twisted Pair Cable:

    +-------------------------------+
    |        Outer Insulation        |
    |    +-----------------------+   |
    |    | Shielding (STP)        |   |
    |    +-----------------------+   |
    |   +---------------------+      |
    |   |    Insulated Wires   |      |
    |   |       Twisted Pair   |      |
    |   +---------------------+      |
    +-------------------------------+
`}
            </pre>
          </div>

          {/* Coaxial Cable */}
          <div className="cn-subsection">
            <h3>Coaxial Cable</h3>
            <p className="cn-example">
              **Coaxial cables** consist of a central conductor (usually copper), an insulating layer, a metallic shield, and an outer insulating layer. This type of cable is highly resistant to external interference and is commonly used in cable television and broadband internet connections.
            </p>
            <table className="cn-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bandwidth</strong></td>
                  <td>Up to 10 Gbps</td>
                </tr>
                <tr>
                  <td><strong>Applications</strong></td>
                  <td>Television, Broadband, LAN</td>
                </tr>
              </tbody>
            </table>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of Coaxial Cable:

    +-----------------------------+
    | Outer Insulation            |
    +-----------------------------+
    | Metal Shield                |
    +-----------------------------+
    | Insulation                  |
    +-----------------------------+
    | Copper Conductor            |
    +-----------------------------+
`}
            </pre>
          </div>

          {/* Fiber Optic */}
          <div className="cn-subsection">
            <h3>Fiber Optic Cable</h3>
            <p className="cn-example">
              **Fiber optic cables** use glass or plastic fibers to transmit data as light signals. These cables provide very high bandwidth and are immune to electromagnetic interference. Fiber optic cables are used for long-distance telecommunications, high-speed internet, and data transmission.
            </p>
            <table className="cn-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bandwidth</strong></td>
                  <td>Up to 100 Gbps</td>
                </tr>
                <tr>
                  <td><strong>Applications</strong></td>
                  <td>High-speed internet, Long-distance communication</td>
                </tr>
              </tbody>
            </table>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of Fiber Optic Cable:

    +----------------------------------------+
    | Outer Protective Layer (Jacket)       |
    +----------------------------------------+
    | Strengthening Members (Aramid)        |
    +----------------------------------------+
    | Optical Fiber Cladding                |
    +----------------------------------------+
    | Optical Fiber Core                    |
    +----------------------------------------+
`}
            </pre>
          </div>
        </div>

        {/* Un-Guided Media */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Un-Guided Media</h2>
          <p className="cn-example">
            **Un-guided media** refers to the transmission of data without the use of physical conductors. The data is transmitted via electromagnetic waves through air, space, or vacuum. Un-guided media are typically used for wireless communications.
          </p>

          {/* Electromagnetic Spectrum */}
          <div className="cn-subsection">
            <h3>Electromagnetic Spectrum</h3>
            <p className="cn-example">
              The **electromagnetic spectrum** encompasses a wide range of frequencies used for wireless communication. These frequencies are divided into different bands, including radio waves, microwaves, infrared, and visible light, each with its own characteristics and applications.
            </p>
            <table className="cn-table">
              <thead>
                <tr>
                  <th>Band</th>
                  <th>Frequency Range</th>
                  <th>Applications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Radio Waves</strong></td>
                  <td>30 Hz to 300 GHz</td>
                  <td>AM/FM radio, TV broadcasts</td>
                </tr>
                <tr>
                  <td><strong>Microwaves</strong></td>
                  <td>1 GHz to 300 GHz</td>
                  <td>Satellite communication, radar</td>
                </tr>
                <tr>
                  <td><strong>Infrared</strong></td>
                  <td>300 GHz to 400 THz</td>
                  <td>Remote controls, short-range communication</td>
                </tr>
                <tr>
                  <td><strong>Visible Light</strong></td>
                  <td>400 THz to 750 THz</td>
                  <td>Fiber optics, communication systems</td>
                </tr>
              </tbody>
            </table>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of Electromagnetic Spectrum:

    +---------------------------------------------------+
    | Radio Waves          Microwaves        Infrared    |
    +---------------------------------------------------+
    |   <-------- Visible Light -------->              |
    +---------------------------------------------------+
`}
            </pre>
          </div>

          {/* Radio Transmission */}
          <div className="cn-subsection">
            <h3>Radio Transmission</h3>
            <p className="cn-example">
              **Radio transmission** uses low-frequency electromagnetic waves to transmit data over short or long distances. This transmission method is widely used in broadcasting, communication systems, and mobile networks. Radio waves travel through the air and can penetrate obstacles.
            </p>
            <table className="cn-table">
              <thead>
                <tr>
                  <th>Frequency</th>
                  <th>Range</th>
                  <th>Applications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>VLF</strong></td>
                  <td>3 kHz to 30 kHz</td>
                  <td>Navigation, military communications</td>
                </tr>
                <tr>
                  <td><strong>LF</strong></td>
                  <td>30 kHz to 300 kHz</td>
                  <td>AM radio, maritime communication</td>
                </tr>
                <tr>
                  <td><strong>HF</strong></td>
                  <td>3 MHz to 30 MHz</td>
                  <td>Shortwave radio, aviation communication</td>
                </tr>
              </tbody>
            </table>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of Radio Transmission:

    +-------------------------------+
    | Radio Transmission (Airwaves) |
    +-------------------------------+
`}
            </pre>
          </div>

          {/* Microwave Transmission */}
          <div className="cn-subsection">
            <h3>Microwave Transmission</h3>
            <p className="cn-example">
              **Microwave transmission** uses high-frequency electromagnetic waves to transmit data between fixed locations. These signals travel in straight lines and require line-of-sight for clear communication. Microwaves are used for long-distance telephone communication, satellite links, and Wi-Fi networks.
            </p>
            <table className="cn-table">
              <thead>
                <tr>
                  <th>Frequency</th>
                  <th>Range</th>
                  <th>Applications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Super High Frequency (SHF)</strong></td>
                  <td>3 GHz to 30 GHz</td>
                  <td>Satellite communications, microwave links</td>
                </tr>
                <tr>
                  <td><strong>Extremely High Frequency (EHF)</strong></td>
                  <td>30 GHz to 300 GHz</td>
                  <td>Research, high-data-rate transmissions</td>
                </tr>
              </tbody>
            </table>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of Microwave Transmission:

    +-----------------------------------+
    | Microwave Transmission (Line of Sight) |
    +-----------------------------------+
`}
            </pre>
          </div>

          {/* Infrared Transmission */}
          <div className="cn-subsection">
            <h3>Infrared Transmission</h3>
            <p className="cn-example">
              **Infrared transmission** uses infrared light to transmit data over short distances, typically in the range of a few meters. It is commonly used in remote control devices, wireless keyboards, and communication between electronic devices.
            </p>
            <table className="cn-table">
              <thead>
                <tr>
                  <th>Frequency</th>
                  <th>Range</th>
                  <th>Applications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Frequency Range</strong></td>
                  <td>300 GHz to 400 THz</td>
                  <td>Remote controls, short-range communication</td>
                </tr>
              </tbody>
            </table>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of Infrared Transmission:

    +---------------------------+
    | Infrared Transmission     |
    +---------------------------+
`}
            </pre>
          </div>

          {/* Satellite Communication */}
          <div className="cn-subsection">
            <h3>Satellite Communication</h3>
            <p className="cn-example">
              **Satellite communication** involves using satellites orbiting Earth to transmit signals for long-distance communication. It is used for television broadcasting, weather monitoring, global positioning systems (GPS), and internet access in remote areas.
            </p>
            <table className="cn-table">
              <thead>
                <tr>
                  <th>Frequency</th>
                  <th>Applications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>L-Band</strong></td>
                  <td>GPS, mobile communications</td>
                </tr>
                <tr>
                  <td><strong>C-Band</strong></td>
                  <td>TV broadcast, weather systems</td>
                </tr>
              </tbody>
            </table>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Diagram of Satellite Communication:

    +-------------------------------+
    | Satellite Communication Link  |
    +-------------------------------+
`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransmissionMedia;
