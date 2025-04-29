import React from 'react'
import '../../../../CSS/CN.css'

function NetworkTypesAndModels() {
  return (
    <div className="cn-wrapper p-4">
      <div className="cn-card bg-gray-900 text-white shadow-xl rounded-2xl p-6">

        <h1 className="cn-title text-3xl font-bold mb-4">Types of Networks & TCP/IP vs OSI Model</h1>

        {/* Network Types Table */}
        <div className="cn-section mb-6">
          <h2 className="cn-subtitle text-xl font-semibold mb-2">Types of Networks</h2>
          <div className="example-table overflow-x-auto bg-gray-800 p-4 rounded-xl">
            <table className="w-full text-left text-grey-400">
              <thead>
                <tr className="border-b border-gray-900 text-green-300">
                  <th className="py-2 px-3">Type</th>
                  <th className="py-2 px-3">Full Form</th>
                  <th className="py-2 px-3">Coverage Area</th>
                  <th className="py-2 px-3">Used In</th>
                  <th className="py-2 px-3">Speed</th>
                  <th className="py-2 px-3">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">PAN</td>
                  <td className="py-2 px-3">Personal Area Network</td>
                  <td className="py-2 px-3">Within a few meters (e.g., 10m)</td>
                  <td className="py-2 px-3">Bluetooth, Smartwatch, Phone</td>
                  <td className="py-2 px-3">Low</td>
                  <td className="py-2 px-3">Low</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">LAN</td>
                  <td className="py-2 px-3">Local Area Network</td>
                  <td className="py-2 px-3">Within a building (up to 1 km)</td>
                  <td className="py-2 px-3">Office, Home, School Labs</td>
                  <td className="py-2 px-3">High</td>
                  <td className="py-2 px-3">Moderate</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">CAN</td>
                  <td className="py-2 px-3">Campus Area Network</td>
                  <td className="py-2 px-3">Across a campus (up to 10 km)</td>
                  <td className="py-2 px-3">University, Military Bases</td>
                  <td className="py-2 px-3">High</td>
                  <td className="py-2 px-3">Moderate</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">MAN</td>
                  <td className="py-2 px-3">Metropolitan Area Network</td>
                  <td className="py-2 px-3">City-wide (up to 100 km)</td>
                  <td className="py-2 px-3">Cable TV, ISPs in cities</td>
                  <td className="py-2 px-3">Moderate</td>
                  <td className="py-2 px-3">High</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">WAN</td>
                  <td className="py-2 px-3">Wide Area Network</td>
                  <td className="py-2 px-3">Global scale</td>
                  <td className="py-2 px-3">Internet</td>
                  <td className="py-2 px-3">Varies</td>
                  <td className="py-2 px-3">Very High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* TCP/IP vs OSI Comparison */}
        <div className="cn-section mb-6">
          <h2 className="cn-subtitle text-xl font-semibold mb-2">TCP/IP vs OSI Model</h2>
          <div className="example-table overflow-x-auto bg-gray-800 p-4 rounded-xl mb-3">
            <table className="w-full text-left text-grey-400">
              <thead>
                <tr className="border-b border-gray-600 text-green-300">
                  <th className="py-2 px-3">Aspect</th>
                  <th className="py-2 px-3">OSI Model</th>
                  <th className="py-2 px-3">TCP/IP Model</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">Full Form</td>
                  <td className="py-2 px-3">Open Systems Interconnection</td>
                  <td className="py-2 px-3">Transmission Control Protocol/Internet Protocol</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">Layers</td>
                  <td className="py-2 px-3">7 Layers</td>
                  <td className="py-2 px-3">4 Layers</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">Usage</td>
                  <td className="py-2 px-3">Theoretical reference model</td>
                  <td className="py-2 px-3">Practical implementation standard</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">Development</td>
                  <td className="py-2 px-3">By ISO</td>
                  <td className="py-2 px-3">By DARPA</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Disadvantages</td>
                  <td className="py-2 px-3">Too complex and not used directly in real networks</td>
                  <td className="py-2 px-3">Vague separation of layers</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="cn-example text-grey-400">
            Both models help understand the communication process in a layered fashion. While OSI is used for teaching and design, TCP/IP is used for real-world implementation like the Internet.
          </p>
        </div>

        {/* Data Unit by Layer */}
        <div className="cn-section mb-6">
          <h2 className="cn-subtitle text-xl font-semibold mb-2">Data Units Used at Each OSI Layer</h2>
          <div className="example-table overflow-x-auto bg-gray-800 p-4 rounded-xl">
            <table className="w-full text-left text-grey-400">
              <thead>
                <tr className="border-b border-gray-600 text-green-300">
                  <th className="py-2 px-3">OSI Layer</th>
                  <th className="py-2 px-3">Data Unit</th>
                  <th className="py-2 px-3">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">Application</td>
                  <td className="py-2 px-3">Message</td>
                  <td className="py-2 px-3">Data meant for user interaction</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">Presentation</td>
                  <td className="py-2 px-3">Message</td>
                  <td className="py-2 px-3">Data translation, encryption, compression</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">Session</td>
                  <td className="py-2 px-3">Message</td>
                  <td className="py-2 px-3">Session management and synchronization</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">Transport</td>
                  <td className="py-2 px-3">Segment</td>
                  <td className="py-2 px-3">End-to-end communication and flow control</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">Network</td>
                  <td className="py-2 px-3">Packet</td>
                  <td className="py-2 px-3">Routing and logical addressing</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-3">Data Link</td>
                  <td className="py-2 px-3">Frame</td>
                  <td className="py-2 px-3">Node-to-node transfer and error handling</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Physical</td>
                  <td className="py-2 px-3">Bits/Signals</td>
                  <td className="py-2 px-3">Raw transmission over the medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20250127181414133276/31.webp" alt="" />
      </div>
    </div>
  )
}

export default NetworkTypesAndModels
