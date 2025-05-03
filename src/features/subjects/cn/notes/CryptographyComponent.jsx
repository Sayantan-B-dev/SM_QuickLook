import React from "react";
import "../../../../CSS/CN.css";

function CryptographyComponent() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">
          Deep Dive into Cryptography: CIA Triad & Encryption
        </h1>

        {/* Cryptography and CIA Triad Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Cryptography and the CIA Triad</h2>
          <p className="cn-example">
            Cryptography is the practice of securing information by transforming
            it into an unreadable format using algorithms. The goal of
            cryptography is to ensure that only authorized parties can read and
            manipulate sensitive data. It plays a key role in protecting the
            confidentiality, integrity, and authenticity of communication, which
            is often referred to as the CIA triad.
          </p>

          <h3 className="cn-subtitle">The CIA Triad</h3>
          <p className="cn-example">
            The CIA Triad is a model used to guide the development of security
            systems. It consists of three core principles:
          </p>
          <ul className="cn-example list-disc pl-6">
            <li>
              <strong>Confidentiality:</strong> Ensures that the information is
              only accessible to those who are authorized to view it.
            </li>
            <li>
              <strong>Integrity:</strong> Ensures that the information is not
              altered by unauthorized parties during transmission.
            </li>
            <li>
              <strong>Authentication:</strong> Verifies the identity of the
              sender or receiver to ensure data authenticity.
            </li>
          </ul>
        </div>

        {/* How Cryptography Works Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">
            How Cryptography Works: Plaintext to Ciphertext
          </h2>
          <p className="cn-example">
            In cryptography, plaintext refers to readable information, while
            ciphertext refers to encrypted information. Cryptographic algorithms
            convert plaintext into ciphertext to protect its confidentiality.
            Here's a basic example of how a message is encrypted and decrypted:
          </p>

          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
            {`
Sender: "Hello, this is a secret message."

Step 1: Plaintext --> Encryption (with Key) --> Ciphertext
"Hello, this is a secret message." --> [Encrypted]

Step 2: Ciphertext --> Decryption (with Key) --> Plaintext
[Encrypted] --> "Hello, this is a secret message."
`}
          </pre>
        </div>

        {/* Types of Cryptographic Keys Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Types of Cryptographic Keys</h2>
          <p className="cn-example">
            There are two main types of cryptographic keys:{" "}
            <strong>Symmetric Key</strong> and <strong>Asymmetric Key</strong>.
          </p>

          <h3 className="cn-subtitle">Symmetric Key Cryptography</h3>
          <p className="cn-example">
            In symmetric key cryptography, the same key is used for both
            encryption and decryption. Both the sender and receiver must have
            access to this secret key in order to communicate securely.
            Symmetric encryption is fast and efficient, but the main challenge
            is securely sharing the key.
          </p>

          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
            {`
Symmetric Encryption:
Sender --> Encryption --> [Ciphertext] --> Receiver
   (Same Key)               (Same Key)
`}
          </pre>

          <h5 className="cn-subtitle">Example of Symmetric Key:</h5>
          <p className="cn-example">
            A common example of symmetric key cryptography is the{" "}
            <strong>Advanced Encryption Standard (AES)</strong>, which is widely
            used to secure sensitive data.
          </p>

          <h3 className="cn-subtitle">Asymmetric Key Cryptography</h3>
          <p className="cn-example">
            Asymmetric key cryptography uses two keys: a public key and a
            private key. The public key is used for encryption, while the
            private key is used for decryption. The public key is shared openly,
            while the private key remains secret. This allows secure
            communication without the need to exchange keys beforehand.
          </p>

          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
            {`
Asymmetric Encryption:
Sender --> Public Key Encryption --> [Ciphertext] --> Receiver
   (Public Key)                      (Private Key)
`}
          </pre>

          <h5 className="cn-subtitle">Example of Asymmetric Key:</h5>
          <p className="cn-example">
            An example of asymmetric key cryptography is{" "}
            <strong>RSA (Rivest-Shamir-Adleman)</strong>, a popular encryption
            algorithm used for secure data transmission on the internet.
          </p>
        </div>

        {/* How Public and Private Keys Work Together Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">
            How Public and Private Keys Work Together
          </h2>
          <p className="cn-example">
            In asymmetric encryption, the sender encrypts the message using the
            recipient's public key. The recipient then uses their private key to
            decrypt the message. This ensures that only the intended recipient,
            who possesses the corresponding private key, can decrypt the
            message.
          </p>

          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
            {`
Step 1: Sender uses Receiver's Public Key to Encrypt Message
Sender --> [Public Key] --> Encrypted Message

Step 2: Receiver uses Private Key to Decrypt Message
Receiver --> [Private Key] --> Decrypted Message
`}
          </pre>
        </div>

        {/* Cryptography Example Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">
            Cryptography Example: Plaintext to Ciphertext with Both Symmetric
            and Asymmetric Cryptography
          </h2>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
            {`
1. Symmetric Key Example:
   Sender: "Hello, this is a secret message."
   Sender --> [Symmetric Key] --> Encrypted Message --> Receiver --> [Symmetric Key] --> Decrypted Message

2. Asymmetric Key Example:
   Sender: "Hello, this is a secret message."
   Sender --> [Receiver's Public Key] --> Encrypted Message --> Receiver --> [Private Key] --> Decrypted Message
`}
          </pre>
        </div>

        {/* Cryptography Diagram Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Diagram: Plaintext to Ciphertext</h2>
          <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
            {`
Plaintext --> Encryption --> Ciphertext --> Transmission --> Decryption --> Plaintext
  (Sender)      (Algorithm)    (Encrypted)   (Network)      (Receiver)
`}
          </pre>
        </div>

        {/* Conclusion Section */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Conclusion</h2>
          <p className="cn-example">
            Cryptography is the backbone of data security in modern
            communication. It ensures that data remains confidential, unchanged,
            and accessible only to authorized users. Understanding the different
            types of cryptographic techniques, such as symmetric and asymmetric
            cryptography, and how they work is essential for securing digital
            communications.
          </p>
        </div>
      

          <h1 className="cn-title">
            Symmetric Key Cryptography: DES, 3DES, AFS & Asymmetric Key Overview
          </h1>

          {/* Symmetric Key Cryptography: DES, 3DES, AFS Section */}
          <div className="cn-section">
            <h2 className="cn-subtitle">Symmetric Key Cryptography</h2>
            <p className="cn-example">
              Symmetric key cryptography uses the same key for both encryption
              and decryption. The key must be kept secret and shared between the
              sender and receiver. The encryption process transforms plaintext
              into ciphertext, while the decryption process reverses the
              transformation.
            </p>
            <p className="cn-example">
              Symmetric key cryptography algorithms include DES, 3DES, and AFS.
              Let's dive into each of these algorithms:
            </p>

            {/* DES (Data Encryption Standard) */}
            <h3 className="cn-subtitle">DES (Data Encryption Standard)</h3>
            <p className="cn-example">
              DES is one of the oldest and most well-known symmetric encryption
              algorithms. It operates on blocks of 64 bits, using a 56-bit key
              to encrypt and decrypt data. DES follows a series of rounds, each
              involving substitutions and permutations.
            </p>
            <ul className="cn-example list-disc pl-6">
              <li>
                <strong>Block Size:</strong> 64 bits
              </li>
              <li>
                <strong>Key Size:</strong> 56 bits
              </li>
              <li>
                <strong>Rounds:</strong> 16 rounds of encryption
              </li>
              <li>
                <strong>Operation:</strong> The input data is divided into
                blocks of 64 bits. These blocks are processed using substitution
                and permutation operations.
              </li>
              <li>
                <strong>Weakness:</strong> Due to the small key size (56 bits),
                DES is considered insecure for modern applications. It can be
                cracked easily using brute-force attacks.
              </li>
            </ul>

            {/* 3DES (Triple DES) */}
            <h3 className="cn-subtitle">3DES (Triple DES)</h3>
            <p className="cn-example">
              3DES is a more secure version of DES that applies the DES
              algorithm three times with different keys. It effectively uses a
              168-bit key (3 * 56 bits) to encrypt data.
            </p>
            <ul className="cn-example list-disc pl-6">
              <li>
                <strong>Block Size:</strong> 64 bits
              </li>
              <li>
                <strong>Key Size:</strong> 168 bits (3 * 56 bits)
              </li>
              <li>
                <strong>Rounds:</strong> 48 rounds (16 rounds for each of the 3
                DES operations)
              </li>
              <li>
                <strong>Operation:</strong> The data is encrypted with one DES
                key, then decrypted with another DES key, and finally encrypted
                again with a third DES key.
              </li>
              <li>
                <strong>Improvement:</strong> 3DES is more secure than DES but
                still considered less efficient and secure compared to modern
                algorithms like AES.
              </li>
            </ul>

            {/* AFS (Authenticated File System) */}
            <h3 className="cn-subtitle">AFS (Authenticated File System)</h3>
            <p className="cn-example">
              AFS is a distributed file system that uses symmetric cryptography
              to authenticate file access and ensure data confidentiality. It
              uses a combination of symmetric encryption for data transmission
              and public key cryptography for authentication.
            </p>
            <ul className="cn-example list-disc pl-6">
              <li>
                <strong>Key Type:</strong> Symmetric encryption for data
                transmission
              </li>
              <li>
                <strong>Purpose:</strong> AFS provides secure file access in a
                distributed environment, ensuring that only authorized users can
                access files.
              </li>
              <li>
                <strong>Operation:</strong> AFS uses a combination of symmetric
                encryption for data and public key cryptography for
                authentication. This ensures that files are securely transmitted
                and accessed only by authenticated users.
              </li>
            </ul>
          </div>

          {/* Symmetric Key Cryptography Diagram Section */}
          <div className="cn-section">
            <h2 className="cn-subtitle">Symmetric Key Cryptography Diagram</h2>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
              {`
Plaintext --> [Symmetric Key] --> Encryption --> Ciphertext --> Transmission --> Decryption --> Plaintext
   (Sender)                      (Same Key)                  (Receiver)
`}
            </pre>
          </div>

          {/* Asymmetric Key Cryptography Section */}
          <div className="cn-section">
            <h2 className="cn-subtitle">Asymmetric Key Cryptography</h2>
            <p className="cn-example">
              Asymmetric key cryptography, also known as public-key
              cryptography, uses two keys: a public key and a private key. The
              public key is used for encryption, and the private key is used for
              decryption. Only the recipient who possesses the private key can
              decrypt the message encrypted with the public key.
            </p>
            <p className="cn-example">
              Asymmetric key cryptography solves the problem of key distribution
              in symmetric encryption by allowing public keys to be openly
              shared, while private keys remain secret.
            </p>
            <ul className="cn-example list-disc pl-6">
              <li>
                <strong>Key Pair:</strong> A public key for encryption and a
                private key for decryption
              </li>
              <li>
                <strong>Operation:</strong> The sender encrypts the message with
                the recipient's public key. The recipient uses their private key
                to decrypt the message.
              </li>
              <li>
                <strong>Use Case:</strong> Asymmetric cryptography is commonly
                used in digital signatures, secure communication protocols
                (e.g., SSL/TLS), and email encryption.
              </li>
            </ul>

            <h3 className="cn-subtitle">
              How Public and Private Keys Work Together
            </h3>
            <p className="cn-example">
              In asymmetric encryption, the sender encrypts the message with the
              recipient's public key. The recipient decrypts the message with
              their private key. This ensures that only the recipient can read
              the message.
            </p>

            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
              {`
Step 1: Sender encrypts message with Receiver's Public Key
Sender --> [Receiver's Public Key] --> Encrypted Message

Step 2: Receiver decrypts message with Private Key
Receiver --> [Private Key] --> Decrypted Message
`}
            </pre>

            <h3 className="cn-subtitle">
              Examples of Asymmetric Key Algorithms
            </h3>
            <ul className="cn-example list-disc pl-6">
              <li>
                <strong>RSA:</strong> RSA is one of the most widely used
                asymmetric key algorithms for secure data transmission. It is
                used in protocols like HTTPS and email encryption.
              </li>
              <li>
                <strong>Elliptic Curve Cryptography (ECC):</strong> ECC is a
                more efficient asymmetric key algorithm that provides strong
                encryption with smaller key sizes compared to RSA.
              </li>
            </ul>
          </div>

          {/* Asymmetric Key Cryptography Diagram Section */}
          <div className="cn-section">
            <h2 className="cn-subtitle">Asymmetric Key Cryptography Diagram</h2>
            <pre className="text-grey-400 bg-black p-4 rounded-md overflow-x-auto">
              {`
Sender --> [Receiver's Public Key] --> Encryption --> Ciphertext --> Receiver
   (Public Key)                            (Private Key) --> Decryption
`}
            </pre>
          </div>


      <img
        className="smallImg"
        src="https://media.geeksforgeeks.org/wp-content/uploads/20240408171319/crptography.jpg"
      />
      <button
        className="infoBtn"
        onClick={() =>
          window.open(
            "https://www.geeksforgeeks.org/cryptography-and-its-types/"
          )
        }
      >
        Know more
      </button>
      </div>
    </div>
  );
}

export default CryptographyComponent;
