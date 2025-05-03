import React from "react";
import "../../../../CSS/CN.css";

function PeriodicAnalogSignals() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">Periodic Analog Signals</h1>

        {/* Section: Introduction to Periodic Analog Signals */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Introduction</h2>
          <p className="cn-example">
            Periodic analog signals are continuous signals that repeat at regular intervals over time. These signals are commonly used in communication systems and electronic devices. A typical example is the sine wave, which has a constant frequency and amplitude, repeating indefinitely.
          </p>
        </div>

        {/* Section: Sine Wave */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Sine Wave</h2>
          <p className="cn-example">
            A sine wave is the most fundamental periodic analog signal, described by the mathematical function:
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
y(t) = A * sin(2πft + φ)
Where:
  y(t) is the value of the signal at time t
  A is the amplitude (peak value)
  f is the frequency (number of cycles per second)
  φ is the phase shift (the initial angle of the wave)
`}
          </pre>
          <p className="cn-example">
            A sine wave has several important properties:
            <ul className="list-disc pl-6">
              <li><strong>Amplitude:</strong> The maximum value of the signal, representing the strength or intensity.</li>
              <li><strong>Frequency:</strong> The number of cycles the signal completes in one second, measured in Hertz (Hz).</li>
              <li><strong>Period:</strong> The time it takes for the signal to complete one cycle.</li>
            </ul>
          </p>
        </div>

        {/* Section: Phase */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Phase</h2>
          <p className="cn-example">
            The phase of a periodic signal refers to the relative position of the waveform in time. It determines the starting point of the signal in its cycle and can shift the signal forward or backward in time.
          </p>
          <p className="cn-example">
            The phase shift is represented by the term <strong>φ</strong> in the sine wave equation. A positive phase shift moves the signal to the right, while a negative phase shift moves it to the left.
          </p>
        </div>

        {/* Section: Wavelength */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Wavelength</h2>
          <p className="cn-example">
            Wavelength is the physical length of one cycle of the wave. It is related to the signal’s frequency by the equation:
          </p>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
λ = v / f
Where:
  λ (lambda) is the wavelength (distance between two successive points in a wave)
  v is the velocity of the wave (speed of light in case of electromagnetic waves)
  f is the frequency of the wave
`}
          </pre>
          <p className="cn-example">
            The wavelength is inversely proportional to the frequency: as the frequency increases, the wavelength decreases.
          </p>
        </div>

        {/* Section: Time and Frequency Domains */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Time and Frequency Domains</h2>
          <p className="cn-example">
            Signals can be analyzed in two primary domains: the time domain and the frequency domain.
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Time Domain:</strong> Represents the signal with respect to time. It shows how the signal varies with time. A sine wave in the time domain appears as a continuous oscillation.</li>
            <li><strong>Frequency Domain:</strong> Represents the signal in terms of its frequency components. A sine wave in the frequency domain appears as a single spike at the signal’s frequency.</li>
          </ul>
          <p className="cn-example">
            A signal can be transformed from one domain to the other using mathematical techniques such as the Fourier Transform.
          </p>
        </div>

        {/* Section: Composite Signals */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Composite Signals</h2>
          <p className="cn-example">
            A composite signal is a combination of multiple sine waves with different frequencies, amplitudes, and phases. These signals are often used to carry information in communication systems.
          </p>
          <p className="cn-example">
            For example, a radio signal may consist of multiple sine waves with different frequencies, each carrying a different piece of information. This is done through techniques like frequency modulation (FM) or amplitude modulation (AM).
          </p>
        </div>

        {/* Section: Bandwidth */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Bandwidth</h2>
          <p className="cn-example">
            Bandwidth refers to the range of frequencies that a signal occupies. It is a critical parameter in communication systems, as it determines the amount of data that can be transmitted within a given time period.
          </p>
          <p className="cn-example">
            A broader bandwidth allows for the transmission of more data, while a narrower bandwidth limits the amount of information that can be sent. The bandwidth of a signal is the difference between its highest and lowest frequencies.
          </p>
        </div>

        {/* Conclusion Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Conclusion</h2>
          <p className="cn-example">
            Understanding periodic analog signals is fundamental to various fields, including telecommunications, audio processing, and electronics. By analyzing key properties such as frequency, phase, amplitude, and bandwidth, we can design and optimize systems that effectively transmit data over various mediums.
          </p>
        </div>

        {/* Diagram */}
        <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
{`
Sine Wave: 
  A simple representation of a sine wave looks like this:

       /\           /\           /\
      /  \   /\    /  \    /\    /  \    /\
-----/----\-/--\--/----\--/--\--/----\-/--\----- Time -->
     (A)         (B)        (C)        (D)
 
(A), (B), (C), and (D) represent the peak points in the sine wave.
`}
        </pre>
      </div>
    </div>
  );
}

export default PeriodicAnalogSignals;
