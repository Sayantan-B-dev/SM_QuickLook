import React from "react";
import "../../../../CSS/Dbms.css";

function SqlLikeCommand() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔍 SQL LIKE Command - Full Guide</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 What is the LIKE Command?</h2>
          <p className="text-grey-400">
            The <strong>LIKE</strong> operator in SQL is used for **pattern
            matching** with text-based columns. It allows you to find records
            based on partial matches, using special wildcard characters:
            <ul className="list-disc pl-6 pt-2 text-grey-400">
              <li>
                <strong>%</strong> → Matches zero or more characters.
              </li>
              <li>
                <strong>_</strong> → Matches exactly one character.
              </li>
            </ul>
          </p>
        </div>

        {/* Syntax */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📝 Basic Syntax</h2>
          <pre className="dbms-code">
            {`SELECT column_name
FROM table_name
WHERE column_name LIKE 'pattern';`}
          </pre>
        </div>

        {/* Wildcards with Examples */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🌟 Wildcard Usage Examples</h2>

          <div className="text-grey-400">
            <h3 className="font-bold pt-2">1. % Wildcard Example</h3>
            <p>Find names starting with 'A':</p>
            <pre className="dbms-code">
              {`SELECT * FROM Employees
WHERE name LIKE 'A%';`}
            </pre>
            <p>
              <strong>Meaning:</strong> Name starts with 'A'. (e.g., "Anjali",
              "Amit")
            </p>

            <h3 className="font-bold pt-4">2. _ Wildcard Example</h3>
            <p>Find 5-letter names where the second letter is 'a':</p>
            <pre className="dbms-code">
              {`SELECT * FROM Employees
WHERE name LIKE '_a___';`}
            </pre>
            <p>
              <strong>Meaning:</strong> Exactly 5 letters, second letter 'a'.
              (e.g., "Sarah", "James")
            </p>

            <h3 className="font-bold pt-4">3. Combined Wildcard</h3>
            <p>Find names that start with 'S' and end with 'h':</p>
            <pre className="dbms-code">
              {`SELECT * FROM Employees
WHERE name LIKE 'S%h';`}
            </pre>
            <p>
              <strong>Meaning:</strong> First letter 'S', last letter 'h'.
              (e.g., "Sarah", "Salah")
            </p>

            <h3 className="font-bold pt-4">4. NOT LIKE Example</h3>
            <p>Find names that do NOT start with 'M':</p>
            <pre className="dbms-code">
              {`SELECT * FROM Employees
WHERE name NOT LIKE 'M%';`}
            </pre>
          </div>
        </div>

        {/* Advanced Example */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">
            🚀 Advanced Example: Multiple Conditions
          </h2>
          <p className="text-grey-400">
            Find employees whose names start with 'A' and live in a city ending
            with 'i'.
          </p>
          <pre className="dbms-code">
            {`SELECT * FROM Employees
WHERE name LIKE 'A%' AND city LIKE '%i';`}
          </pre>
        </div>

        {/* When to use LIKE */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">❓ When Should You Use LIKE?</h2>
          <ul className="list-disc pl-6 text-grey-400">
            <li>When exact matches are not sufficient.</li>
            <li>When dealing with partial strings or unknown characters.</li>
            <li>Searching logs, addresses, emails, usernames, etc.</li>
          </ul>
        </div>

        {/* Important Note */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">⚠️ Important</h2>
          <p className="text-grey-400">
            <strong>LIKE</strong> searches are case-insensitive in some
            databases (like MySQL) and case-sensitive in others (like
            PostgreSQL) unless configured.
          </p>
        </div>

        {/* Interview Questions */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🧠 Interview-Level Questions:</h2>
          <ul className="list-decimal pl-6 text-grey-400 space-y-4">
            <li>
              <strong>
                What is the difference between % and _ in SQL LIKE operator?
              </strong>
              <p className="ml-4">
                - `%` matches **zero or more characters**. - `_` matches
                **exactly one character**. Example:
                <code>WHERE name LIKE 'A%'</code> → names starting with A.
                <code>WHERE name LIKE 'A_'</code> → names starting with A and
                exactly one more character.
              </p>
            </li>

            <li>
              <strong>How does LIKE perform in large datasets?</strong>
              <p className="ml-4">
                - `LIKE` can be **slow** on large datasets, especially if the
                pattern starts with `%`, because it prevents the database from
                using indexes effectively. - Full table scans might occur,
                leading to poor performance.
              </p>
            </li>

            <li>
              <strong>
                What are the limitations of LIKE operator compared to REGEXP?
              </strong>
              <p className="ml-4">
                - `LIKE` supports **only basic pattern matching** with `%` and
                `_`. - `REGEXP` (or `RLIKE`) supports **complex regular
                expressions** (such as character classes, quantifiers, groups,
                etc.). - `REGEXP` is much more powerful but slightly slower than
                `LIKE`.
              </p>
            </li>

            <li>
              <strong>What happens if the pattern contains wildcards?</strong>
              <p className="ml-4">
                - If wildcards (`%` or `_`) are used inside the pattern, `LIKE`
                will treat them as special characters unless escaped. - Example:
                to search for actual `%`, you would use an escape character
                like:
                <code>WHERE column_name LIKE '%\%%' ESCAPE '\'</code>
              </p>
            </li>

            <li>
              <strong>Is LIKE operator case sensitive?</strong>
              <p className="ml-4">
                - It depends on the **database collation**: - In **MySQL**,
                default collations are **case-insensitive** (e.g.,
                `utf8_general_ci`). - In **PostgreSQL**, `LIKE` is
                **case-sensitive** unless you use `ILIKE` (case-insensitive
                LIKE).
              </p>
            </li>

            <li>
              <strong>Can we use LIKE with numeric fields?</strong>
              <p className="ml-4">
                - Yes, but numbers are first **converted to strings**
                internally. - It’s not recommended for numeric fields because it
                adds **overhead** and **reduces query performance**. - Example
                (not ideal):
                <code>WHERE CAST(number_column AS CHAR) LIKE '12%'</code>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SqlLikeCommand;
