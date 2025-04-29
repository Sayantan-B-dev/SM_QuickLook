import React from 'react';
import '../../../../CSS/Dbms.css';

function SecurityAndAuthorization() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">

        <h1 className="dbms-title">Security and Authorization in DBMS</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <p className="text-grey-400">
            <strong>Database Security</strong> involves protecting the database against unauthorized access, misuse, or corruption. It ensures that only authorized users can access and manipulate data according to defined policies.
          </p>
        </div>

        {/* Key Aspects */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">Key Aspects of Database Security</h2>

          <ul className="list-disc text-grey-400 pl-5 mt-2">
            <li><strong>Secrecy</strong></li>
            <li><strong>Integrity</strong></li>
            <li><strong>Availability</strong></li>
          </ul>
        </div>

        {/* Secrecy */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">1. Secrecy</h2>

          <p className="text-grey-400 mt-2">
            <strong>Secrecy</strong> ensures that sensitive information is not disclosed to unauthorized users. 
          </p>

          <p className="text-grey-400 mt-4">
            Mechanisms used for secrecy:
          </p>
          <ul className="list-disc text-grey-400 pl-5">
            <li>Authentication (username/password)</li>
            <li>Authorization (roles and permissions)</li>
            <li>Encryption of sensitive data (both at rest and in transit)</li>
          </ul>

          <p className="text-grey-400 mt-4">
            <strong>Example:</strong> A manager can view employee salaries but a regular employee cannot.
          </p>
        </div>

        {/* Integrity */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">2. Integrity</h2>

          <p className="text-grey-400 mt-2">
            <strong>Integrity</strong> ensures that data remains accurate, consistent, and reliable over its entire lifecycle.
          </p>

          <p className="text-grey-400 mt-4">
            Techniques include:
          </p>
          <ul className="list-disc text-grey-400 pl-5">
            <li>Integrity constraints (Primary key, Foreign key)</li>
            <li>Triggers and stored procedures to enforce business rules</li>
            <li>Transaction controls (ACID properties)</li>
          </ul>

          <p className="text-grey-400 mt-4">
            <strong>Example:</strong> Preventing negative account balances in a banking system.
          </p>
        </div>

        {/* Availability */}
        <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle">3. Availability</h2>

          <p className="text-grey-400 mt-2">
            <strong>Availability</strong> ensures that the database services are available to authorized users whenever needed, even under attack or hardware failure.
          </p>

          <p className="text-grey-400 mt-4">
            Strategies for availability:
          </p>
          <ul className="list-disc text-grey-400 pl-5">
            <li>Database replication</li>
            <li>Backup and disaster recovery plans</li>
            <li>Load balancing and failover techniques</li>
          </ul>

          <p className="text-grey-400 mt-4">
            <strong>Example:</strong> Cloud databases automatically rerouting traffic to backup servers during failures.
          </p>
        </div>

        {/* Summary */}
        <div className="dbms-section mt-10">
          <h2 className="dbms-subtitle">Summary</h2>
          <p className="text-grey-400 mt-4">
            Effective database security policies must balance <strong>secrecy</strong> (protect data), <strong>integrity</strong> (keep data correct), and <strong>availability</strong> (ensure access) to protect organizational information assets.
          </p>
        </div>

      </div>
    </div>
  );
}

export default SecurityAndAuthorization;
