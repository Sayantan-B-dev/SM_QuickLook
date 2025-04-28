import React from "react";
import "../../../../CSS/Dbms.css";

function RelationalAlgebra() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">🔗 Relational Algebra</h1>

        {/* Introduction Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 What is Relational Algebra?</h2>
          <p>
            Relational Algebra is a procedural query language used to query
            relational databases. It is a theoretical foundation for SQL, and it
            operates on relations (tables) to produce new relations as outputs. 
            The operations in Relational Algebra manipulate the data in tables and 
            help perform complex queries efficiently.
          </p>
          <p>
            Understanding Relational Algebra is important as it provides a clear and 
            concise way to work with relational databases and optimize queries. It is 
            essential for understanding SQL and how database systems work at a fundamental level.
          </p>
        </div>

        {/* Basic Operations Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Basic Operations</h2>

          {/* Projection */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">1️⃣ Projection (π)</h3>
            <p>
              <strong>Projection</strong> selects specific columns from a relation. It eliminates duplicates 
              and keeps only the desired attributes.
            </p>
            <p><strong>Symbol:</strong> π(attribute1, attribute2, ...)(Relation)</p>
            <p><strong>Example:</strong></p>
            <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg">
              <code>
{`// Query: π(Name, Age)(Students)
Students Table:
| Student_ID | Name   | Age | Major |
|------------|--------|-----|-------|
| 1          | Alice  | 21  | CS    |
| 2          | Bob    | 22  | Math  |
| 3          | Carol  | 23  | CS    |

Result: 
| Name   | Age |
|--------|-----|
| Alice  | 21  |
| Bob    | 22  |
| Carol  | 23  |`}
              </code>
            </pre>
          </div>

          {/* Selection */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">2️⃣ Selection (σ)</h3>
            <p>
              <strong>Selection</strong> filters rows based on a condition. It selects the rows where the condition is true.
            </p>
            <p><strong>Symbol:</strong> σ(condition)(Relation)</p>
            <p><strong>Example:</strong></p>
            <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg">
              <code>
{`// Query: σ(Age > 21)(Students)
Students Table:
| Student_ID | Name   | Age | Major |
|------------|--------|-----|-------|
| 1          | Alice  | 21  | CS    |
| 2          | Bob    | 22  | Math  |
| 3          | Carol  | 23  | CS    |

Result: 
| Student_ID | Name   | Age | Major |
|------------|--------|-----|-------|
| 2          | Bob    | 22  | Math  |
| 3          | Carol  | 23  | CS    |`}
              </code>
            </pre>
          </div>

          {/* Cross Product */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">3️⃣ Cross Product (×)</h3>
            <p>
              <strong>Cross Product</strong> (or Cartesian Product) combines every row from one table with every row from another.
            </p>
            <p><strong>Symbol:</strong> Relation1 × Relation2</p>
            <p><strong>Example:</strong></p>
            <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg">
              <code>
{`// Query: Students × Courses
Students Table:
| Student_ID | Name   |
|------------|--------|
| 1          | Alice  |
| 2          | Bob    |

Courses Table:
| Course_ID | Course_Name |
|-----------|-------------|
| C1        | CS101       |
| C2        | Math101     |

Result: 
| Student_ID | Name   | Course_ID | Course_Name |
|------------|--------|-----------|-------------|
| 1          | Alice  | C1        | CS101       |
| 1          | Alice  | C2        | Math101     |
| 2          | Bob    | C1        | CS101       |
| 2          | Bob    | C2        | Math101     |`}
              </code>
            </pre>
          </div>

          {/* Union */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">4️⃣ Union (∪)</h3>
            <p>
              <strong>Union</strong> combines the results of two tables into one, eliminating duplicates.
            </p>
            <p><strong>Symbol:</strong> Relation1 ∪ Relation2</p>
            <p><strong>Example:</strong></p>
            <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg">
              <code>
{`// Query: Students ∪ Staff
Students Table:
| ID  | Name   | Major |
|-----|--------|-------|
| 1   | Alice  | CS    |
| 2   | Bob    | Math  |

Staff Table:
| ID  | Name   | Department |
|-----|--------|------------|
| 3   | Carol  | CS         |
| 4   | Dave   | Math       |

Result:
| ID  | Name   | Department |
|-----|--------|------------|
| 1   | Alice  | CS         |
| 2   | Bob    | Math       |
| 3   | Carol  | CS         |
| 4   | Dave   | Math       |`}
              </code>
            </pre>
          </div>

          {/* Rename */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">5️⃣ Rename (ρ)</h3>
            <p>
              <strong>Rename</strong> changes the name of a relation or its attributes.
            </p>
            <p><strong>Symbol:</strong> ρ(new_relation_name)(Relation)</p>
            <p><strong>Example:</strong></p>
            <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg">
              <code>
{`// Query: ρ(S_New)(Students)
Students Table:
| ID  | Name   | Major |
|-----|--------|-------|
| 1   | Alice  | CS    |
| 2   | Bob    | Math  |

Renamed Relation:
| ID  | Name   | Major |
|-----|--------|-------|
| 1   | Alice  | CS    |
| 2   | Bob    | Math  |`}
              </code>
            </pre>
          </div>

          {/* Self Difference */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">6️⃣ Self Difference (−)</h3>
            <p>
              <strong>Self Difference</strong> finds the rows that appear in one relation but not in another.
            </p>
            <p><strong>Symbol:</strong> Relation1 − Relation2</p>
            <p><strong>Example:</strong></p>
            <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg">
              <code>
{`// Query: Students − Staff
Students Table:
| ID  | Name   | Major |
|-----|--------|-------|
| 1   | Alice  | CS    |
| 2   | Bob    | Math  |

Staff Table:
| ID  | Name   | Department |
|-----|--------|------------|
| 3   | Carol  | CS         |
| 4   | Dave   | Math       |

Result:
| ID  | Name   | Major |
|-----|--------|-------|
| 1   | Alice  | CS    |
| 2   | Bob    | Math  |`}
              </code>
            </pre>
          </div>
        </div>

        {/* Derived Operations Section */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📌 Derived Operations</h2>

          {/* Intersection */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">1️⃣ Intersection (∩)</h3>
            <p>
              <strong>Intersection</strong> returns the common rows between two relations.
            </p>
            <p><strong>Symbol:</strong> Relation1 ∩ Relation2</p>
            <p><strong>Example:</strong></p>
            <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg">
              <code>
{`// Query: Students ∩ Staff
Students Table:
| ID  | Name   | Major |
|-----|--------|-------|
| 1   | Alice  | CS    |
| 2   | Bob    | Math  |

Staff Table:
| ID  | Name   | Department |
|-----|--------|------------|
| 2   | Bob    | Math       |
| 3   | Carol  | CS         |

Result:
| ID  | Name   | Major |
|-----|--------|-------|
| 2   | Bob    | Math  |`}
              </code>
            </pre>
          </div>

          {/* Division */}
          <div className="dbms-section">
            <h3 className="dbms-subtitle">2️⃣ Division (÷)</h3>
            <p>
              <strong>Division</strong> is used to divide one relation by another. It finds rows in one relation 
              that match all rows in another.
            </p>
            <p><strong>Symbol:</strong> Relation1 ÷ Relation2</p>
            <p><strong>Example:</strong></p>
            <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg">
              <code>
{`// Query: Courses ÷ Students
Courses Table:
| Course_ID | Course_Name |
|-----------|-------------|
| C1        | CS101       |
| C2        | Math101     |

Students Table:
| Student_ID | Course_ID |
|------------|-----------|
| 1          | C1        |
| 1          | C2        |
| 2          | C1        |

Result:
| Student_ID |
|------------|
| 1          |`}
              </code>
            </pre>
          </div>
        </div>
        

                {/* Query Explanations Section */}
                <div className="dbms-section mt-8">
          <h2 className="dbms-subtitle text-2xl font-semibold text-gray-800 mb-4">📌 Query Rewrite and Explanation</h2>
          <div className="dbms-query space-y-8">
            <div className="query-item  p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">1️⃣ Projection (π)</h3>
              <p className="font-medium">Rewritten Query:</p>
              <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg mt-2">
                <code>
                  π<sub>Name, Age</sub>(Students)
                </code>
              </pre>
              <p className="mt-2 text-green-300" style={{marginBottom:"20px"}}>
                This represents the <strong>Projection (π)</strong> operation in relational algebra. It selects the <strong>Name</strong> and <strong>Age</strong> attributes from the <strong>Students</strong> relation.
              </p>
            </div>

            <div className="query-item  p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">2️⃣ Selection (σ)</h3>
              <p className="font-medium">Rewritten Query:</p>
              <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg mt-2">
                <code>
                  σ<sub>Age > 21</sub>(Students)
                </code>
              </pre>
              <p className="mt-2 text-green-300" style={{marginBottom:"20px"}}>
                This represents the <strong>Selection (σ)</strong> operation in relational algebra. It filters the rows from the <strong>Students</strong> relation where the <strong>Age</strong> is greater than 21.
              </p>
            </div>

            <div className="query-item  p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">3️⃣ Cross Product (×)</h3>
              <p className="font-medium">Rewritten Query:</p>
              <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg mt-2">
                <code>
                  Students × Courses
                </code>
              </pre>
              <p className="mt-2 text-green-300" style={{marginBottom:"20px"}}>
                This represents the <strong>Cross Product (×)</strong> operation in relational algebra. It combines every row from the <strong>Students</strong> relation with every row from the <strong>Courses</strong> relation, producing a Cartesian Product.
              </p>
            </div>

            <div className="query-item  p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">4️⃣ Union (∪)</h3>
              <p className="font-medium">Rewritten Query:</p>
              <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg mt-2">
                <code>
                  Students ∪ Staff
                </code>
              </pre>
              <p className="mt-2 text-green-300" style={{marginBottom:"20px"}}>
                This represents the <strong>Union (∪)</strong> operation in relational algebra. It combines the rows from both the <strong>Students</strong> and <strong>Staff</strong> relations, excluding any duplicate rows.
              </p>
            </div>

            <div className="query-item  p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">5️⃣ Rename (ρ)</h3>
              <p className="font-medium">Rewritten Query:</p>
              <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg mt-2">
                <code>
                  ρ<sub>S_New</sub>(Students)
                </code>
              </pre>
              <p className="mt-2 text-green-300" style={{marginBottom:"20px"}}>
                This represents the <strong>Rename (ρ)</strong> operation in relational algebra. It renames the <strong>Students</strong> relation to <strong>S_New</strong>.
              </p>
            </div>

            <div className="query-item  p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">6️⃣ Self Difference (−)</h3>
              <p className="font-medium">Rewritten Query:</p>
              <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg mt-2">
                <code>
                  Students − Staff
                </code>
              </pre>
              <p className="mt-2 text-green-300" style={{marginBottom:"20px"}}>
                This represents the <strong>Self Difference (−)</strong> operation in relational algebra. It returns all the rows from the <strong>Students</strong> relation that are not present in the <strong>Staff</strong> relation.
              </p>
            </div>

            <div className="query-item  p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">7️⃣ Intersection (∩)</h3>
              <p className="font-medium">Rewritten Query:</p>
              <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg mt-2">
                <code>
                  Students ∩ Staff
                </code>
              </pre>
              <p className="mt-2 text-green-300" style={{marginBottom:"20px"}}>
                This represents the <strong>Intersection (∩)</strong> operation in relational algebra. It returns the common rows between the <strong>Students</strong> and <strong>Staff</strong> relations.
              </p>
            </div>

            <div className="query-item  p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">8️⃣ Division (÷)</h3>
              <p className="font-medium">Rewritten Query:</p>
              <pre className="whitespace-pre-wrap break-words p-4  text-white rounded-lg mt-2">
                <code>
                  Students ÷ Courses
                </code>
              </pre>
              <p className="mt-2 text-green-300" style={{marginBottom:"20px"}}>
                This represents the <strong>Division (÷)</strong> operation in relational algebra. It retrieves all <strong>Student_ID</strong> values from the <strong>Students</strong> relation that are associated with every <strong>Course_ID</strong> present in the <strong>Courses</strong> relation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function TupleCalculus() {
    return (
      <div className="dbms-wrapper">
        <div className="dbms-card">
          <h1 className="dbms-title text-3xl font-bold text-blue-700 mb-6">🔎 Tuple Calculus</h1>
  
          {/* Introduction Section */}
          <div className="dbms-section mb-6">
            <h2 className="dbms-subtitle text-2xl font-semibold text-gray-800 mb-4">📚 What is Tuple Calculus?</h2>
            <p className="text-lg text-gray-300">
              <strong>Tuple Calculus</strong> is a formal query language used to retrieve data from a relational database. It allows us to express queries using variables that range over tuples (rows) of a relation (table). Tuple calculus is a non-procedural language, meaning it focuses on what data is needed rather than how to retrieve it.
            </p>
          </div>
  
          {/* Basic Components */}
          <div className="dbms-section mb-6">
            <h2 className="dbms-subtitle text-2xl font-semibold text-gray-800 mb-4">🔑 Key Concepts of Tuple Calculus</h2>
            <ul className="list-disc list-inside space-y-4">
              <li className="text-lg text-gray-300">
                A <strong>tuple variable</strong> represents a row in a relation.
              </li>
              <li className="text-lg text-gray-300">
                Queries are written as <strong>predicates</strong> over tuple variables.
              </li>
              <li className="text-lg text-gray-300">
                Tuple calculus uses logical operators such as <strong>AND</strong>, <strong>OR</strong>, and <strong>NOT</strong> to combine conditions.
              </li>
            </ul>
          </div>
  
          {/* Tuple Calculus Syntax */}
          <div className="dbms-section mb-6">
            <h2 className="dbms-subtitle text-2xl font-semibold text-gray-800 mb-4">📝 Syntax of Tuple Calculus</h2>
            <p className="text-lg text-gray-300">
              A Tuple Calculus query is expressed as follows:
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
              <code>
                {`{ t | P(t) }`}
              </code>
            </pre>
            <p className="text-lg text-gray-300 mt-2">
              Where:
              <ul className="list-disc list-inside space-y-2">
                <li><strong>t</strong> is a tuple variable.</li>
                <li><strong>P(t)</strong> is a predicate (condition) that the tuple must satisfy.</li>
              </ul>
            </p>
          </div>
  
          {/* Tuple Calculus Example */}
          <div className="dbms-section mb-6">
            <h2 className="dbms-subtitle text-2xl font-semibold text-gray-800 mb-4">💡 Example of Tuple Calculus Query</h2>
            <p className="text-lg text-gray-300">
              Consider the following query to find the names of all students who are enrolled in the "Database" course:
            </p>
            <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
              <code>
                {`{ t.Name | ∃c ( Enrolls(t, c) ∧ c.CourseName = "Database") }`}
              </code>
            </pre>
            <p className="text-lg text-gray-300 mt-2">
              In this query:
              <ul className="list-disc list-inside space-y-2">
                <li><strong>t</strong> is the tuple representing a student.</li>
                <li><strong>Enrolls(t, c)</strong> is the predicate that checks if the student is enrolled in a course <strong>c</strong>.</li>
                <li><strong>c.CourseName = "Database"</strong> ensures the course is "Database".</li>
              </ul>
            </p>
          </div>
  
          {/* Query Explanation Section */}
          <div className="dbms-section mt-6">
            <h2 className="dbms-subtitle text-2xl font-semibold text-gray-800 mb-4">📌 Query Explanation</h2>
            <div className="query-item  p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Rewritten Query:</h3>
              <pre className="whitespace-pre-wrap break-words p-4 bg-gray-800 text-white rounded-lg mt-2">
                <code>
                  {`{ t.Name | ∃c ( Enrolls(t, c) ∧ c.CourseName = "Database") }`}
                </code>
              </pre>
              <p className="mt-2 text-gray-300">
                This query retrieves the names of all students who are enrolled in a course named "Database". The existential quantifier (∃) is used to express that there exists a tuple <strong>c</strong> such that the student <strong>t</strong> is enrolled in that course.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export {RelationalAlgebra,TupleCalculus};
