import React,{useState} from "react";
import "../../../../CSS/Dbms.css";

function SQLFunctions() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - e.target.offsetLeft);
    setScrollLeft(e.target.scrollLeft);
    e.target.style.cursor = "grabbing"; 
  };

  const handleMouseLeave = (e) => {
    setIsMouseDown(false);
    e.target.style.cursor = "grab"; 
  };

  const handleMouseUp = (e) => {
    setIsMouseDown(false);
    e.target.style.cursor = "grab"; 
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return; 
    e.preventDefault(); 
    const x = e.pageX - e.target.offsetLeft;
    const walk = (x - startX) * 2; 
    e.target.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">

        <h1 className="dbms-title">SQL Functions</h1>
        <div className="sqlfunctions-grid">
          <pre
            className="sqlfunctions-content"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {`SQL Functions
  ├── Simple Row Functions
  │     ├── Number Functions
  │     │     ├── ABS()             // Returns the absolute value of a number, e.g., ABS(-10) returns 10
  │     │     ├── ROUND()           // Rounds a number to a specified number of decimal places, e.g., ROUND(5.678, 2) returns 5.68
  │     │     ├── CEIL()            // Rounds a number up to the nearest integer, e.g., CEIL(5.3) returns 6
  │     │     ├── FLOOR()           // Returns the largest integer less than or equal to a number, e.g., FLOOR(5.7) returns 5
  │     │     ├── MOD()             // Returns the remainder of a number divided by another number, e.g., MOD(10, 3) returns 1
  │     │     ├── SIGN()            // Returns the sign of a number, e.g., SIGN(-5) returns -1
  │     │     ├── POWER()           // Returns the value of a number raised to the power of another number, e.g., POWER(2, 3) returns 8
  │     │     └── SQRT()            // Returns the square root of a number, e.g., SQRT(16) returns 4
  │     ├── Character Functions
  │     │     ├── LENGTH()          // Returns the length of a string, e.g., LENGTH('Hello') returns 5
  │     │     ├── CONCAT()          // Concatenates two or more strings together, e.g., CONCAT('Hello', ' ', 'World') returns 'Hello World'
  │     │     ├── TRIM()            // Removes leading and trailing spaces from a string, e.g., TRIM('  Hello  ') returns 'Hello'
  │     │     ├── LOWER()           // Converts a string to lowercase, e.g., LOWER('HELLO') returns 'hello'
  │     │     ├── UPPER()           // Converts a string to uppercase, e.g., UPPER('hello') returns 'HELLO'
  │     │     ├── REPLACE()         // Replaces occurrences of a substring within a string, e.g., REPLACE('Hello World', 'World', 'SQL') returns 'Hello SQL'
  │     │     ├── SUBSTRING()       // Extracts a substring from a string starting at a specified position, e.g., SUBSTRING('Hello', 2, 3) returns 'ell'
  │     │     ├── LTRIM()           // Removes leading spaces from a string, e.g., LTRIM('   Hello') returns 'Hello'
  │     │     └── RTRIM()           // Removes trailing spaces from a string, e.g., RTRIM('Hello   ') returns 'Hello'
  │     ├── Case Manipulation Functions
  │     │     ├── INITCAP()         // Capitalizes the first letter of each word, e.g., INITCAP('hello world') returns 'Hello World'
  │     │     ├── ASCII()           // Returns the ASCII value of the first character of a string, e.g., ASCII('A') returns 65
  │     │     └── CHAR()            // Converts an ASCII value to a character, e.g., CHAR(65) returns 'A'
  │     ├── Date Functions
  │     │     ├── NOW()             // Returns the current date and time, e.g., NOW() returns '2025-04-29 12:30:00'
  │     │     ├── DATEADD()         // Adds a specified time interval to a date, e.g., DATEADD(DAY, 5, '2025-04-29') returns '2025-05-04'
  │     │     ├── DATEDIFF()        // Returns the difference between two dates, e.g., DATEDIFF('2025-05-04', '2025-04-29') returns 5
  │     │     ├── EXTRACT()         // Extracts parts of a date, e.g., EXTRACT(YEAR FROM '2025-04-29') returns 2025
  │     │     ├── DATE_FORMAT()     // Formats a date according to a specified format, e.g., DATE_FORMAT('2025-04-29', '%Y-%m-%d') returns '2025-04-29'
  │     │     ├── STRFTIME()        // Formats a date according to a format string, e.g., STRFTIME('%Y-%m-%d', '2025-04-29') returns '2025-04-29'
  │     │     └── TO_DATE()         // Converts a string to a date, e.g., TO_DATE('2025-04-29', 'YYYY-MM-DD') returns '2025-04-29'
  │     ├── General Functions
  │     │     ├── COALESCE()        // Returns the first non-NULL value in a list of expressions, e.g., COALESCE(NULL, 'Default', 'Value') returns 'Default'
  │     │     ├── NULLIF()          // Returns NULL if two expressions are equal, otherwise returns the first expression, e.g., NULLIF(5, 5) returns NULL
  │     │     ├── CASE WHEN()       // Performs conditional logic in SQL, e.g., CASE WHEN salary > 5000 THEN 'High' ELSE 'Low' END
  │     │     ├── GREATEST()        // Returns the largest value from a list of expressions, e.g., GREATEST(10, 20, 30) returns 30
  │     │     ├── LEAST()           // Returns the smallest value from a list of expressions, e.g., LEAST(10, 20, 30) returns 10
  │     │     ├── IFNULL()          // Returns the value of an expression if it is not NULL, otherwise returns the second expression, e.g., IFNULL(NULL, 'Default') returns 'Default'
  │     │     └── IF()              // Returns one of two values based on a condition, e.g., IF(salary > 5000, 'High', 'Low') returns 'High' or 'Low'
  │     └── Data Type Conversion Functions
  │           ├── CAST()            // Converts an expression from one data type to another, e.g., CAST('123' AS INT) returns 123
  │           ├── CONVERT()         // Converts an expression from one data type to another, e.g., CONVERT(INT, '123') returns 123
  │           ├── TO_NUMBER()       // Converts a string to a number, e.g., TO_NUMBER('123') returns 123
  │           ├── TO_CHAR()         // Converts a number to a string, e.g., TO_CHAR(123) returns '123'
  │           └── TO_TIMESTAMP()    // Converts a string to a timestamp, e.g., TO_TIMESTAMP('2025-04-29', 'YYYY-MM-DD') returns a timestamp
  └── Multi-row Functions
        └── Aggregate Functions
              ├── SUM()             // Returns the sum of all values in a column, e.g., SUM(salary) returns the total sum of all salaries
              ├── AVG()             // Returns the average of all values in a column, e.g., AVG(salary) returns the average salary
              ├── COUNT()           // Returns the number of rows that match a specified condition, e.g., COUNT(*) returns the number of rows
              ├── MAX()             // Returns the highest value in a column, e.g., MAX(salary) returns the maximum salary
              ├── MIN()             // Returns the lowest value in a column, e.g., MIN(salary) returns the minimum salary
              ├── GROUP_CONCAT()     // Concatenates values from multiple rows into a single string, e.g., GROUP_CONCAT(name) returns 'Alice, Bob'
              ├── STDDEV()           // Returns the standard deviation of a numeric column, e.g., STDDEV(salary) returns the standard deviation of salaries
              ├── VARIANCE()         // Returns the variance of a numeric column, e.g., VARIANCE(salary) returns the variance of salaries
              ├── FIRST()            // Returns the first value in a group, e.g., FIRST(salary) returns the first salary in the sorted group
              ├── LAST()             // Returns the last value in a group, e.g., LAST(salary) returns the last salary in the sorted group
              └── MEDIAN()           // Returns the median value in a column, e.g., MEDIAN(salary) returns the median salary
`}
          </pre>
        </div>
        {/* Simple Row Functions Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Simple Row Functions</h2>

          {/* Number Functions */}
          <div className="dbms-grid sqlfunctions-grid">
            <div className="dbms-grid-item">
              <h3 className="dbms-subtitle">Number Functions</h3>
              <p className="dbms-example">
                These functions operate on numeric data.
              </p>

              <ul>
                <li>
                  <strong>ABS(x)</strong>: Returns the absolute value of a
                  number.
                  <p className="dbms-example">
                    <pre>{`SELECT ABS(-5); -- Output: 5`}</pre>
                  </p>
                </li>
                <li>
                  <strong>ROUND(x, d)</strong>: Rounds a number to a specified
                  number of decimal places.
                  <p className="dbms-example">
                    <pre>{`SELECT ROUND(10.567, 2); -- Output: 10.57`}</pre>
                  </p>
                </li>
                <li>
                  <strong>CEIL(x)</strong>: Rounds a number up to the nearest
                  integer.
                  <p className="dbms-example">
                    <pre>{`SELECT CEIL(10.2); -- Output: 11`}</pre>
                  </p>
                </li>
              </ul>
            </div>

            {/* Character Functions */}
            <div className="dbms-grid-item">
              <h3 className="dbms-subtitle">Character Functions</h3>
              <p className="dbms-example">
                These functions manipulate string data.
              </p>

              <ul>
                <li>
                  <strong>LENGTH(str)</strong>: Returns the length of a string.
                  <p className="dbms-example">
                    <pre>{`SELECT LENGTH('Hello'); -- Output: 5`}</pre>
                  </p>
                </li>
                <li>
                  <strong>CONCAT(str1, str2, ...)</strong>: Concatenates two or
                  more strings.
                  <p className="dbms-example">
                    <pre>
                      {`SELECT CONCAT('Hello', ' ', 'World'); -- Output: 'Hello World'`}
                    </pre>
                  </p>
                </li>
                <li>
                  <strong>TRIM(str)</strong>: Removes spaces from the beginning
                  and end of a string.
                  <p className="dbms-example">
                    <pre>
                      {`SELECT TRIM('   Hello World   '); -- Output: 'Hello World'`}
                    </pre>
                  </p>
                </li>
              </ul>
            </div>

            {/* Case Manipulation Functions */}
            <div className="dbms-grid-item">
              <h3 className="dbms-subtitle">Case Manipulation Functions</h3>
              <p className="dbms-example">
                These functions manipulate the case of text.
              </p>

              <ul>
                <li>
                  <strong>UPPER(str)</strong>: Converts a string to uppercase.
                  <p className="dbms-example">
                    <pre>{`SELECT UPPER('hello'); -- Output: 'HELLO'`}</pre>
                  </p>
                </li>
                <li>
                  <strong>LOWER(str)</strong>: Converts a string to lowercase.
                  <p className="dbms-example">
                    <pre>{`SELECT LOWER('HELLO'); -- Output: 'hello'`}</pre>
                  </p>
                </li>
              </ul>
            </div>

            {/* Character Manipulation Functions */}
            <div className="dbms-grid-item">
              <h3 className="dbms-subtitle">
                Character Manipulation Functions
              </h3>
              <p className="dbms-example">
                These functions modify and analyze string values.
              </p>

              <ul>
                <li>
                  <strong>SUBSTRING(str, start, length)</strong>: Extracts a
                  substring from a string.
                  <p className="dbms-example">
                    <pre>
                      {`SELECT SUBSTRING('Hello World', 1, 5); -- Output: 'Hello'`}
                    </pre>
                  </p>
                </li>
                <li>
                  <strong>REPLACE(str, old, new)</strong>: Replaces occurrences
                  of a substring within a string.
                  <p className="dbms-example">
                    <pre>
                      {`SELECT REPLACE('Hello World', 'World', 'SQL'); -- Output: 'Hello SQL'`}
                    </pre>
                  </p>
                </li>
                <li>
                  <strong>CONCAT_WS(separator, str1, str2, ...)</strong>:
                  Concatenates strings with a separator.
                  <p className="dbms-example">
                    <pre>
                      {`SELECT CONCAT_WS('-', '2025', '04', '29'); -- Output: '2025-04-29'`}
                    </pre>
                  </p>
                </li>
              </ul>
            </div>

            {/* Date Functions */}
            <div className="dbms-grid-item">
              <h3 className="dbms-subtitle">Date Functions</h3>
              <p className="dbms-example">
                These functions manipulate date and time data.
              </p>

              <ul>
                <li>
                  <strong>NOW()</strong>: Returns the current date and time.
                  <p className="dbms-example">
                    <pre>
                      {`SELECT NOW(); -- Output: '2025-04-29 14:30:00'`}
                    </pre>
                  </p>
                </li>
                <li>
                  <strong>DATEADD(unit, value, date)</strong>: Adds a specified
                  value to a date.
                  <p className="dbms-example">
                    <pre>
                      {`SELECT DATEADD(DAY, 5, '2025-04-29'); -- Output: '2025-05-04'`}
                    </pre>
                  </p>
                </li>
              </ul>
            </div>

            {/* General Functions */}
            <div className="dbms-grid-item">
              <h3 className="dbms-subtitle">General Functions</h3>
              <p className="dbms-example">
                Functions that don't fit neatly into the other categories.
              </p>

              <ul>
                <li>
                  <strong>COALESCE(x1, x2, ...)</strong>: Returns the first
                  non-NULL expression.
                  <p className="dbms-example">
                    <pre>
                      {`SELECT COALESCE(NULL, NULL, 'Hello'); -- Output: 'Hello'`}
                    </pre>
                  </p>
                </li>
                <li>
                  <strong>NULLIF(x, y)</strong>: Returns NULL if x = y,
                  otherwise returns x.
                  <p className="dbms-example">
                    <pre>{`SELECT NULLIF(5, 5); -- Output: NULL`}</pre>
                  </p>
                </li>
              </ul>
            </div>

            {/* Data Type Conversion Functions */}
            <div className="dbms-grid-item">
              <h3 className="dbms-subtitle">Data Type Conversion Functions</h3>
              <p className="dbms-example">
                Functions to convert between different data types.
              </p>

              <ul>
                <li>
                  <strong>CAST(x AS type)</strong>: Converts a value to a
                  specified data type.
                  <p className="dbms-example">
                    <pre>
                      {`SELECT CAST('2025-04-29' AS DATE); -- Output: '2025-04-29'`}
                    </pre>
                  </p>
                </li>
                <li>
                  <strong>CONVERT(x, type)</strong>: Converts a value to a
                  specified data type (SQL Server-specific).
                  <p className="dbms-example">
                    <pre>
                      {`SELECT CONVERT(DATE, '2025-04-29'); -- Output: '2025-04-29'`}
                    </pre>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Multi-row Functions Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">Multi-row Functions</h2>

          {/* Aggregate Functions */}
          <div className="dbms-grid">
            <div className="dbms-grid-item">
              <h3 className="dbms-subtitle">Aggregate Functions</h3>
              <p className="dbms-example">
                These functions operate on groups of rows and return a single
                result.
              </p>

              <ul>
                <li>
                  <strong>SUM(x)</strong>: Returns the sum of values in a
                  numeric column.
                  <p className="dbms-example">
                    <pre>{`SELECT SUM(salary) FROM employees;`}</pre>
                  </p>
                </li>
                <li>
                  <strong>AVG(x)</strong>: Returns the average of values in a
                  numeric column.
                  <p className="dbms-example">
                    <pre>{`SELECT AVG(salary) FROM employees;`}</pre>
                  </p>
                </li>
                <li>
                  <strong>COUNT(x)</strong>: Returns the count of rows in a
                  group.
                  <p className="dbms-example">
                    <pre>{`SELECT COUNT(*) FROM employees;`}</pre>
                  </p>
                </li>
                <li>
                  <strong>MAX(x)</strong>: Returns the maximum value in a group.
                  <p className="dbms-example">
                    <pre>{`SELECT MAX(salary) FROM employees;`}</pre>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SQLFunctions;
