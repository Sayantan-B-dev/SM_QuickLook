import React from 'react'

function Repeaters2() {
  return (
    <div className="cn-wrapper">
        <div className="cn-card">
    <div className="cn-section ">
    <h2 className="cn-subtitle">Repeaters: Detailed Explanation</h2>
    <p className="cn-example">
      A <strong>Repeater</strong> is a physical layer device in computer
      networking whose primary function is to regenerate and amplify
      signals. As signals propagate through transmission media such as
      copper cables or optical fibers, they degrade due to attenuation
      (loss of signal strength) and external noise. Repeaters are placed
      at intervals along the medium to ensure the signal can travel long
      distances without becoming unusable.
    </p>
    <p className="cn-example">
      Repeaters do not analyze or route packets; they simply receive the
      weakened signal, regenerate it, and transmit it onward. They work at
      the <strong>OSI Model Layer 1: Physical Layer</strong>. They do not
      interpret data—they only handle raw bits, making them fast and
      efficient but limited in functionality.
    </p>

    <h2 className="cn-subtitle">Key Functions of a Repeater</h2>
    <ul className="cn-example">
      <li>
        <strong>Amplify Signals:</strong> Boosts weakened signals back to
        acceptable levels.
      </li>
      <li>
        <strong>Extend Distance:</strong> Allows communication over longer
        distances by placing repeaters at regular intervals.
      </li>
      <li>
        <strong>Minimize Noise:</strong> Helps reduce signal distortion
        introduced by electromagnetic interference.
      </li>
      <li>
        <strong>Bit-Level Functionality:</strong> Regenerates signals at
        the binary level (0s and 1s), without inspecting or modifying
        data.
      </li>
    </ul>

    <h2 className="cn-subtitle">Types of Repeaters</h2>
    <ul className="cn-example">
      <li>
        <strong>Analog Repeaters:</strong> Amplify both signal and noise.
        Less common in modern networks.
      </li>
      <li>
        <strong>Digital Repeaters:</strong> Also known as regenerators;
        reconstruct clean digital signals from distorted ones.
      </li>
      <li>
        <strong>Optical Repeaters:</strong> Used in fiber-optic
        communications to regenerate light signals.
      </li>
      <li>
        <strong>Wireless Repeaters:</strong> Used in Wi-Fi to extend
        coverage area by retransmitting wireless signals.
      </li>
    </ul>

    <h2 className="cn-subtitle">Where Are Repeaters Used?</h2>
    <p className="cn-example">
      - **LANs** (Local Area Networks): To extend the length of Ethernet
      cables beyond the maximum limit (usually 100 meters for Cat5/Cat6).
      <br />
      - **WANs** (Wide Area Networks): For long-distance communication
      lines such as undersea cables and fiber optics.
      <br />- **Wireless Networks:** To bridge coverage gaps in homes or
      office buildings.
    </p>

    <h2 className="cn-subtitle">Working Mechanism</h2>
    <p className="cn-example">
      A repeater receives a degraded or weak signal through one of its
      ports. It analyzes the signal’s electrical or optical strength and
      reconstructs the binary pattern. It then retransmits the clean,
      regenerated signal out through its output port toward the
      destination or next network segment.
    </p>

    <h2 className="cn-subtitle">Limitations of Repeaters</h2>
    <ul className="cn-example">
      <li>
        <strong>No Filtering:</strong> Cannot filter traffic or detect
        collisions.
      </li>
      <li>
        <strong>Same Network Segment:</strong> Works only within the same
        collision domain.
      </li>
      <li>
        <strong>No Addressing:</strong> Cannot differentiate between
        destination or source addresses.
      </li>
      <li>
        <strong>Signal Noise:</strong> Analog repeaters may amplify noise
        along with signal.
      </li>
    </ul>

    <h2 className="cn-subtitle">Advantages</h2>
    <ul className="cn-example">
      <li>Cost-effective for small extensions.</li>
      <li>Easy to install and maintain.</li>
      <li>Extends physical reach of the network.</li>
      <li>Improves signal integrity in long cables.</li>
    </ul>

    <h2 className="cn-subtitle">Real-World Use Cases</h2>
    <p className="cn-example">
      - **Campus Networks** using long Ethernet cables.
      <br />
      - **Undersea Fiber Optic Cables** between continents.
      <br />- **Wi-Fi Range Extenders** in large homes or buildings.
    </p>

    <h2 className="cn-subtitle">Diagram: Repeater in Action</h2>
    <pre>{`
+-------------+      Weak Signal      +-------------+     Strong Signal
|   Sender    | --------------------> |   Repeater  | --------------------> Receiver
+-------------+                       +-------------+

Legend:
- Repeater regenerates the digital signal.
- Placed to ensure signal doesn't degrade over long distances.
`}</pre>
  </div>
        </div>
  </div>
  )
}

export default Repeaters2
