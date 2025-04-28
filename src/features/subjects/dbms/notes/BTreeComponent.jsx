import React from "react";

function BTreeComponent() {
  return (
    <div className="dbms-wrapper">
      <div className="dbms-card">
        <h1 className="dbms-title">📚 B-Tree and Dynamic Multi-Level Indexing</h1>

        {/* Introduction */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🔍 Introduction to B-Tree</h2>
          <p>
            A <strong>B-tree</strong> is a self-balancing tree data structure that maintains sorted data and allows efficient insertion, deletion, and search operations. It is widely used in databases and file systems to store and retrieve large amounts of data quickly.
          </p>
          <p>
            A B-tree is a balanced tree in which every node contains multiple keys and has multiple children. B-trees are particularly useful for dynamic multi-level indexing in databases. They are designed to minimize disk I/O operations by keeping the tree's height small, thus speeding up the data retrieval process.
          </p>
        </div>

        {/* Dynamic Multi-Level Indexing */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">💻 Dynamic Multi-Level Indexing</h2>
          <p>
            Dynamic multi-level indexing is a technique used in databases to handle large datasets by using B-trees for indexing. Each node in the B-tree represents an index block, and the leaf nodes store the actual data references. This method ensures that the index structure can grow or shrink dynamically as records are inserted or deleted.
          </p>
          <h3>How It Works:</h3>
          <p>
            - The root of the B-tree points to an intermediate level, and each node can have multiple children, reducing the number of I/O operations.
            - The leaf nodes contain references to the actual data, which makes it easy to perform searches and other operations efficiently.
          </p>
        </div>

        {/* B-Tree Operations */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">🛠 B-Tree Operations</h2>
          
          <h3>Insertion in B-Tree</h3>
          <p>
            To insert a new key in a B-tree:
          </p>
          <ol>
            <li>Start at the root node and find the appropriate leaf node where the key should be inserted.</li>
            <li>If the node has space for the key, insert it and reorganize the node.</li>
            <li>If the node is full, split the node and push the middle key up to the parent node. This process may cause further splits, leading to the creation of new levels in the tree.</li>
          </ol>
          
          <h3>Deletion in B-Tree</h3>
          <p>
            To delete a key from a B-tree:
          </p>
          <ol>
            <li>Find the key in the B-tree.</li>
            <li>If the key is in a leaf node, simply remove it.</li>
            <li>If the key is in an internal node, replace it with its in-order predecessor or successor and delete the key from the leaf node.</li>
            <li>If the deletion causes a node to have too few keys, merge or borrow keys from adjacent nodes.</li>
          </ol>

          <h3>Updation in B-Tree</h3>
          <p>
            To update a key in a B-tree:
          </p>
          <ol>
            <li>Find the key using a search operation.</li>
            <li>Once the key is found, replace it with the new value.</li>
            <li>If the update affects the structure (such as in an ordered B-tree), perform necessary rotations or splits to maintain balance.</li>
          </ol>

          <h3>Finding the Order of a B-Tree</h3>
          <p>
            The order of a B-tree is defined as the maximum number of children any node in the tree can have. This is usually denoted as 'm'. A B-tree of order 'm' has the following properties:
          </p>
          <ul>
            <li>Each node can have at most m children.</li>
            <li>Each internal node must contain at least ⌈m/2⌉ children (except for the root, which can have fewer children).</li>
            <li>Each node can store at most m-1 keys.</li>
            <li>All leaf nodes are at the same level (balanced tree).</li>
          </ul>
          <h3>Example:</h3>
          <pre>
            {`
              If a B-tree has an order of 3, it means:
              - Each node can have up to 3 children.
              - Each node can store up to 2 keys.
              - Internal nodes must have at least 2 children (except the root).
            `}
          </pre>
        </div>

        {/* Tree vs B-Tree Comparison */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📊 Tree vs. B-Tree</h2>
          <table className="dbms-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Tree</th>
                <th>B-Tree</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Structure</td>
                <td>Unbalanced, no restrictions on the number of children per node</td>
                <td>Balanced, each node has a fixed number of children</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>Can be deep, leading to longer search times</td>
                <td>Shallow, ensuring efficient search and retrieval</td>
              </tr>
              <tr>
                <td>Insertion</td>
                <td>Can cause imbalance and require rebalancing</td>
                <td>Maintains balance automatically through splitting nodes</td>
              </tr>
              <tr>
                <td>Deletion</td>
                <td>Can cause fragmentation and require rebalancing</td>
                <td>Handles deletion efficiently with merging and borrowing keys</td>
              </tr>
              <tr>
                <td>Efficiency</td>
                <td>Less efficient for large datasets</td>
                <td>Highly efficient for large datasets with fast retrieval</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Block Pointer vs Key */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📊 Block Pointer vs. Key</h2>
          <table className="dbms-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Block Pointer</th>
                <th>Key</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Definition</td>
                <td>Refers to the physical location of data on disk or in memory</td>
                <td>A unique identifier used to search and retrieve data from an index</td>
              </tr>
              <tr>
                <td>Use in Indexing</td>
                <td>Used to point to data in the table</td>
                <td>Used as a reference in the index to locate data</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>Typically larger, as it stores memory or disk addresses</td>
                <td>Typically smaller, as it stores a simple value or key</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Located in index nodes or B-tree leaves</td>
                <td>Located in both index nodes and data rows</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Conclusion */}
        <div className="dbms-section">
          <h2 className="dbms-subtitle">📚 Conclusion</h2>
          <p>
            B-trees provide an efficient method for managing large datasets and optimizing data retrieval. They are widely used in database indexing, file systems, and other applications that require fast access to sorted data. Understanding how B-trees work and how to manipulate them is critical for competitive exams, as these topics are often tested in database management system questions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BTreeComponent;
