function SQLCommands() {
    return (
      <div className="dbms-wrapper">
        <div className="dbms-card">
          <h1 className="dbms-title text-3xl font-bold text-blue-400 mb-6">📊 SQL Commands</h1>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210920153429/new.png" alt="" />
          {/* Introduction Section */}
          <div className="dbms-section mb-6">
            <h2 className="dbms-subtitle text-2xl font-semibold text-gray-300 mb-4">📚 What Are SQL Commands?</h2>
            <p className="text-lg text-gray-400">
              SQL (Structured Query Language) is the standard language used to communicate with relational databases. SQL commands are divided into different categories based on their functionality. These categories help in organizing the commands and improving clarity while performing operations on databases.
            </p>
          </div>
  
          {/* SQL Command Categories */}
          <div className="dbms-section mb-6">
            <h2 className="dbms-subtitle text-2xl font-semibold text-gray-400 mb-4">🗂️ Types of SQL Commands</h2>
            <ul className="list-disc list-inside space-y-4">
              <li className="text-lg text-gray-400">
                <strong>DDL (Data Definition Language):</strong> Defines the structure of the database, including tables and schemas.
              </li>
              <li className="text-lg text-gray-400">
                <strong>DML (Data Manipulation Language):</strong> Manipulates data in the database (insert, update, delete).
              </li>
              <li className="text-lg text-gray-400">
                <strong>DCL (Data Control Language):</strong> Controls access to the data (GRANT, REVOKE).
              </li>
              <li className="text-lg text-gray-400">
                <strong>TCL (Transaction Control Language):</strong> Manages transactions in the database (COMMIT, ROLLBACK).
              </li>
              <li className="text-lg text-gray-400">
                <strong>Constraints:</strong> Ensures data integrity by specifying rules that the data must adhere to.
              </li>
            </ul>
          </div>
  
          {/* DDL Commands */}
          <div className="dbms-section mb-6">
            <h2 className="dbms-subtitle text-2xl font-semibold text-gray-300 mb-4">📝 DDL (Data Definition Language)</h2>
            <p className="text-lg text-gray-400">
              DDL commands are used to define the database structure, such as creating, altering, or dropping tables and schemas. These commands do not manipulate data but structure it.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg text-gray-400">
                <strong>CREATE</strong>: Used to create a new table, view, or database.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(100));`}</code>
                </pre>
              </li>
              <li className="text-lg text-gray-400">
                <strong>ALTER</strong>: Used to modify the structure of an existing table.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`ALTER TABLE students ADD COLUMN age INT;`}</code>
                </pre>
              </li>
              <li className="text-lg text-gray-400">
                <strong>DROP</strong>: Used to delete a table or database.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`DROP TABLE students;`}</code>
                </pre>
              </li>
            </ul>
          </div>
  
          {/* DML Commands */}
          <div className="dbms-section mb-6">
            <h2 className="dbms-subtitle text-2xl font-semibold text-gray-300 mb-4">📝 DML (Data Manipulation Language)</h2>
            <p className="text-lg text-gray-400">
              DML commands allow you to manipulate the data within the database. These commands are used to insert, update, and delete records.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg text-gray-400">
                <strong>INSERT</strong>: Used to insert new records into a table.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`INSERT INTO students (id, name, age) VALUES (1, 'John Doe', 20);`}</code>
                </pre>
              </li>
              <li className="text-lg text-gray-400">
                <strong>UPDATE</strong>: Used to modify existing records in a table.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`UPDATE students SET age = 21 WHERE id = 1;`}</code>
                </pre>
              </li>
              <li className="text-lg text-gray-400">
                <strong>DELETE</strong>: Used to remove records from a table.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`DELETE FROM students WHERE id = 1;`}</code>
                </pre>
              </li>
            </ul>
          </div>
  
          {/* DCL Commands */}
          <div className="dbms-section mb-6">
            <h2 className="dbms-subtitle text-2xl font-semibold text-gray-300 mb-4">📝 DCL (Data Control Language)</h2>
            <p className="text-lg text-gray-400">
              DCL commands are used to control access to data in a database. These include commands for granting and revoking permissions.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg text-gray-400">
                <strong>GRANT</strong>: Gives users permission to perform certain actions on a database object.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`GRANT SELECT, INSERT ON students TO user1;`}</code>
                </pre>
              </li>
              <li className="text-lg text-gray-400">
                <strong>REVOKE</strong>: Removes permissions granted to a user.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`REVOKE SELECT ON students FROM user1;`}</code>
                </pre>
              </li>
            </ul>
          </div>
  
          {/* TCL Commands */}
          <div className="dbms-section mb-6">
            <h2 className="dbms-subtitle text-2xl font-semibold text-gray-300 mb-4">📝 TCL (Transaction Control Language)</h2>
            <p className="text-lg text-gray-400">
              TCL commands are used to manage database transactions, such as committing or rolling back changes.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg text-gray-400">
                <strong>COMMIT</strong>: Saves all changes made during the current transaction.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`COMMIT;`}</code>
                </pre>
              </li>
              <li className="text-lg text-gray-400">
                <strong>ROLLBACK</strong>: Undoes any changes made during the current transaction.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`ROLLBACK;`}</code>
                </pre>
              </li>
              <li className="text-lg text-gray-400">
                <strong>SAVEPOINT</strong>: Sets a savepoint in the transaction, which can later be rolled back to.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`SAVEPOINT savepoint1;`}</code>
                </pre>
              </li>
            </ul>
          </div>
  
          {/* Constraints */}
          <div className="dbms-section mb-6">
            <h2 className="dbms-subtitle text-2xl font-semibold text-gray-300 mb-4">⚙️ Constraints in SQL</h2>
            <p className="text-lg text-gray-400">
              Constraints are rules used to ensure data integrity in the database. These are typically defined at the time of table creation.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-lg text-gray-400">
                <strong>PRIMARY KEY</strong>: Ensures each row in the table has a unique identifier.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(100));`}</code>
                </pre>
              </li>
              <li className="text-lg text-gray-400">
                <strong>FOREIGN KEY</strong>: Ensures referential integrity between two tables.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`CREATE TABLE enrollments (student_id INT, course_id INT, FOREIGN KEY (student_id) REFERENCES students(id));`}</code>
                </pre>
              </li>
              <li className="text-lg text-gray-400">
                <strong>UNIQUE</strong>: Ensures that all values in a column are unique.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`CREATE TABLE students (id INT UNIQUE, name VARCHAR(100));`}</code>
                </pre>
              </li>
              <li className="text-lg text-gray-400">
                <strong>CHECK</strong>: Ensures that values in a column meet a specific condition.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`CREATE TABLE students (age INT CHECK (age >= 18));`}</code>
                </pre>
              </li>
              <li className="text-lg text-gray-400">
                <strong>DEFAULT</strong>: Specifies a default value for a column if no value is provided.
                <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                  <code>{`CREATE TABLE students (status VARCHAR(10) DEFAULT 'Active');`}</code>
                </pre>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default SQLCommands;
  