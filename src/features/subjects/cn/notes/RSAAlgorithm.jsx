import React, { useState } from 'react';

const RSAAlgorithm = () => {
  const [message, setMessage] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState("");
  const [publicKey, setPublicKey] = useState({ e: null, n: null });
  const [privateKey, setPrivateKey] = useState({ d: null, n: null });

  // RSA Key Generation (Step 1: Choose primes p and q)
  const generateKeys = () => {
    const p = 61;  // Example prime
    const q = 53;  // Example prime

    const n = p * q;  // n = p * q
    const phi = (p - 1) * (q - 1); // Euler's Totient Function

    let e = 17;  // Commonly used value for e
    let d = modInverse(e, phi);  // Calculate d using modular inverse

    // Setting the public and private keys
    setPublicKey({ e, n });
    setPrivateKey({ d, n });
  };

  // Function to calculate modular inverse
  const modInverse = (a, m) => {
    for (let x = 1; x < m; x++) {
      if ((a * x) % m === 1) return x;
    }
    return -1;
  };

  // RSA Encryption
  const encryptMessage = (message) => {
    const { e, n } = publicKey;
    let cipherText = message
      .split("")
      .map((char) => {
        const m = char.charCodeAt(0); // Convert message character to ASCII code
        const encryptedChar = modPow(m, e, n); // Encrypt using RSA formula: c = m^e % n
        return encryptedChar;
      })
      .join(",");
    setCipherText(cipherText);
  };

  // RSA Decryption
  const decryptMessage = () => {
    const { d, n } = privateKey;
    const encryptedChars = cipherText.split(",");
    let decryptedMessage = encryptedChars
      .map((encryptedChar) => {
        const m = modPow(encryptedChar, d, n); // Decrypt using RSA formula: m = c^d % n
        return String.fromCharCode(m); // Convert back to character
      })
      .join("");
    setDecryptedMessage(decryptedMessage);
  };

  // Function for modular exponentiation
  const modPow = (base, exponent, modulus) => {
    let result = 1;
    base = base % modulus;
    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result = (result * base) % modulus;
      }
      exponent = Math.floor(exponent / 2);
      base = (base * base) % modulus;
    }
    return result;
  };

  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title">RSA Algorithm: Encryption & Decryption</h1>

        {/* Introduction */}
        <div className="cn-section">
          <h2 className="cn-subtitle">What is RSA?</h2>
          <p className="cn-example">
            RSA (Rivest–Shamir–Adleman) is a widely-used asymmetric encryption algorithm that uses two keys: a public key for encryption and a private key for decryption. RSA is based on the mathematical problem of factoring large prime numbers.
          </p>
        </div>

        {/* Key Generation */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Step 1: Key Generation</h2>
          <p className="cn-example">
            RSA begins with the generation of two prime numbers, p and q. These primes are used to calculate n = p * q, which is part of both the public and private keys. Euler’s totient function (φ(n)) is calculated as (p - 1) * (q - 1), which is used in generating the private key.
          </p>
          <p className="cn-example">
            The public key consists of (e, n), where e is a number coprime with φ(n). The private key consists of (d, n), where d is the modular inverse of e modulo φ(n).
          </p>
          <button className="infoBtn" onClick={generateKeys}>Generate Keys</button>
          <p className="cn-example">
            <strong>Public Key (e, n):</strong> {publicKey.e} , {publicKey.n}
          </p>
          <p className="cn-example">
            <strong>Private Key (d, n):</strong> {privateKey.d} , {privateKey.n}
          </p>
        </div>

        {/* Encryption */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Step 2: Encryption</h2>
          <p className="cn-example">
            Encryption is performed using the public key (e, n) and the RSA formula: c = m^e % n, where 'm' is the message converted to its numerical form (ASCII values), and 'c' is the resulting ciphertext.
          </p>
          <input
            type="text"
            className="cn-input"
            placeholder="Enter message to encrypt"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="cardBtn" onClick={() => encryptMessage(message)}>Encrypt Message</button>
          <p className="cn-example">
            <strong>Ciphertext:</strong> {cipherText}
          </p>
        </div>

        {/* Decryption */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Step 3: Decryption</h2>
          <p className="cn-example">
            Decryption is performed using the private key (d, n) and the RSA formula: m = c^d % n, where 'c' is the ciphertext and 'm' is the original message.
          </p>
          <button className="cardBtn" onClick={decryptMessage}>Decrypt Message</button>
          <p className="cn-example">
            <strong>Decrypted Message:</strong> {decryptedMessage}
          </p>
        </div>

        {/* RSA Explanation with Diagram */}
        <div className="cn-section">
          <h2 className="cn-subtitle">RSA Algorithm Explanation</h2>
          <p className="cn-example">
            The RSA algorithm works in three steps:
            <ol>
              <li><strong>Key Generation:</strong> Two prime numbers are selected, and the public and private keys are generated.</li>
              <li><strong>Encryption:</strong> The sender encrypts the message using the recipient's public key.</li>
              <li><strong>Decryption:</strong> The recipient decrypts the message using their private key.</li>
            </ol>
            The security of RSA relies on the fact that factoring large numbers into their prime factors is computationally difficult.
          </p>
          <div className="cn-section">
            <h2 className="cn-subtitle">Diagram: RSA Key Exchange</h2>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20250106134836175660/RSA-Encryption-and-Decryption-Example-1.webp"
              alt="RSA Algorithm Diagram"
              style={{ width: '100%', maxWidth: '600px', margin: 'auto' }}
            />
          </div>
        </div>
        
        {/* Final Notes */}
        <div className="cn-section">
          <h2 className="cn-subtitle">Important Notes</h2>
          <ul>
            <li>The RSA algorithm is considered secure when large prime numbers are used (e.g., 2048-bit or 4096-bit keys).</li>
            <li>The algorithm's security relies on the difficulty of factoring large semiprime numbers.</li>
            <li>RSA is commonly used in SSL/TLS protocols to secure data transmissions over the internet.</li>
            <li>Despite being secure, RSA is computationally expensive compared to symmetric algorithms like AES, which is why RSA is often used in conjunction with symmetric encryption for performance optimization.</li>
          </ul>
        </div>
        <button
        className="infoBtn"
        onClick={() =>
          window.open(
            "https://www.geeksforgeeks.org/rsa-algorithm-cryptography/"
          )
        }
      >
        Know more
      </button>

      </div>
    </div>
  );
};

export default RSAAlgorithm;
