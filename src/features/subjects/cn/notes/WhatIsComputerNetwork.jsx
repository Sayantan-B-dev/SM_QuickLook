import React from 'react'
import '../../../../CSS/CN.css'

function WhatIsComputerNetwork() {
  return (
    <div className="cn-wrapper p-4">
      <div className="cn-card bg-gray-900 text-white shadow-xl rounded-2xl p-6">
        <h1 className="cn-title text-3xl font-bold mb-4">What is Computer Network?</h1>

        <div className="cn-section mb-6">
          <h2 className="cn-subtitle text-xl font-semibold mb-2">Definition</h2>
          <p className="cn-example text-grey-400">
            A computer network is a system where multiple computing devices are connected together to share resources, data, and applications. These devices communicate through wired or wireless mediums, ensuring reliable and secure data transmission between endpoints.
          </p>
        </div>

        <div className="cn-section mb-6">
          <h2 className="cn-subtitle text-xl font-semibold mb-2">Proper Communication in Networking</h2>
          <p className="cn-example text-grey-400">
            For effective communication in a computer network, the following criteria must be met:
            <ul className="pl-6 mt-2">
              <li>Message delivery to the correct destination (addressing).</li>
              <li>Data integrity – no alteration during transmission.</li>
              <li>Timeliness – delivered within expected time limits.</li>
              <li>Security – protecting the data during transit.</li>
            </ul>
          </p>
        </div>

        <div className="cn-section mb-6">
          <h2 className="cn-subtitle text-xl font-semibold mb-2">Core Functionalities of a Computer Network</h2>
          <div className="cn-grid gap-4">
            <div className="cn-grid-item structured bg-gray-800 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-green-400">Mandatory Functionalities</h3>
              <ul className="pl-5 text-grey-400">
                <li><strong>Error Control:</strong> Ensures that data is received correctly by detecting and correcting errors.</li>
                <li><strong>Flow Control:</strong> Prevents the sender from overwhelming the receiver with too much data at once.</li>
                <li><strong>Demultiplexing:</strong> Directs incoming data to the appropriate application/process.</li>
              </ul>
            </div>
            <div className="cn-grid-item unstructured bg-gray-800 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Optional Functionalities</h3>
              <ul className="pl-5 text-grey-400">
                <li><strong>Encryption:</strong> Converts data into a secure format to prevent unauthorized access.</li>
                <li><strong>Decryption:</strong> Reverts the encrypted data back into its original form.</li>
                <li><strong>Checkpoints:</strong> Enables recovery from failures by storing recovery points during communication.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cn-section mb-6">
          <h2 className="cn-subtitle text-xl font-semibold mb-2">What is the OSI Model?</h2>
          <p className="cn-example text-grey-400 mb-3">
            The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven abstraction layers. It helps different systems communicate with each other effectively.
          </p>

          <div className="example-table overflow-x-auto bg-gray-800 p-4 rounded-xl">
            <table className="w-full text-left text-grey-400">
              <thead>
                <tr className="border-b border-gray-600 text-green-300">
                  <th className="py-2 px-3">Layer</th>
                  <th className="py-2 px-3">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">1. Physical</td>
                  <td className="py-2 px-3">Transmits raw bit streams over a physical medium (cables, switches).</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">2. Data Link</td>
                  <td className="py-2 px-3">Responsible for node-to-node data transfer and error detection/correction.</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">3. Network</td>
                  <td className="py-2 px-3">Handles routing and forwarding of data (IP addressing).</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">4. Transport</td>
                  <td className="py-2 px-3">Ensures complete data transfer with error recovery and flow control.</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">5. Session</td>
                  <td className="py-2 px-3">Manages sessions and controls dialog between computers.</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">6. Presentation</td>
                  <td className="py-2 px-3">Translates data between application and network format (e.g., encryption).</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">7. Application</td>
                  <td className="py-2 px-3">Provides services directly to user applications like browsers and email.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WhatIsComputerNetwork
