import React from "react";
import "../../../../CSS/OS.css";

function FilePermissionsAndChmod() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title">Linux File Permissions & chmod</h1>

        <div className="os-section">
          <h2 className="os-subtitle">Understanding File Permissions</h2>
          <p className="os-example">
            Linux and Unix-based systems use a permission system to define who can access a file or directory and in what way. These permissions are set using the <code>chmod</code> command.
          </p>

          <h2 className="os-subtitle">User Categories</h2>
          <ul className="os-example">
            <li><strong>u</strong>: User (Owner of the file)</li>
            <li><strong>g</strong>: Group (Users who are part of the file's group)</li>
            <li><strong>o</strong>: Others (All other users)</li>
            <li><strong>a</strong>: All (u + g + o)</li>
          </ul>

          <h2 className="os-subtitle">Permission Types</h2>
          <ul className="os-example">
            <li><strong>r</strong> (Read) = 4: Allows reading the contents of the file/directory listing</li>
            <li><strong>w</strong> (Write) = 2: Allows modification of the file or directory</li>
            <li><strong>x</strong> (Execute) = 1: Allows running the file as a program or accessing directory contents</li>
          </ul>

          <h2 className="os-subtitle">Numeric Representation</h2>
          <p className="os-example">
            The total permission for each category is calculated by adding the values:
          </p>
          <pre className="os-example">
{`
  r = 4, w = 2, x = 1

  Examples:
  rwx = 4 + 2 + 1 = 7
  rw- = 4 + 2 = 6
  r-- = 4
  r-x = 4 + 1 = 5
  --x = 1
`}
          </pre>

          <h2 className="os-subtitle">Common chmod Usage</h2>
          <ul className="os-example">
            <li><code>chmod 777 file</code>: rwxrwxrwx (full permissions to everyone)</li>
            <li><code>chmod 755 file</code>: rwxr-xr-x (full for user, read/execute for others)</li>
            <li><code>chmod 700 file</code>: rwx------ (only owner can read/write/execute)</li>
            <li><code>chmod 644 file</code>: rw-r--r-- (owner can read/write, others read-only)</li>
            <li><code>chmod 600 file</code>: rw------- (owner only read/write)</li>
            <li><code>chmod 000 file</code>: ---------- (no permissions for anyone)</li>
          </ul>

          <h2 className="os-subtitle">Symbolic Mode (u, g, o)</h2>
          <ul className="os-example">
            <li><code>chmod u+x file</code>: Add execute permission to user</li>
            <li><code>chmod g-w file</code>: Remove write permission from group</li>
            <li><code>chmod o=r file</code>: Set others to read-only</li>
            <li><code>chmod a+x file</code>: Add execute permission to all (user, group, others)</li>
            <li><code>chmod ug=rw file</code>: Set user and group to read/write</li>
          </ul>

          <h2 className="os-subtitle">Understanding Permission Strings</h2>
          <pre className="os-example">
{`
  Example: -rwxr-xr--
  Breakdown:
  -    : File type (- = file, d = directory)
  rwx  : User (read, write, execute)
  r-x  : Group (read, execute)
  r--  : Others (read)

  This means:
  Owner has full access
  Group can read and execute
  Others can only read
`}
          </pre>

          <h2 className="os-subtitle">Diagram: Permission Mapping</h2>
          <pre className="os-example">
{`
        chmod XYZ file

        X = User permissions
        Y = Group permissions
        Z = Others permissions

        Example:
        chmod 754 file

        7 = 4+2+1 = rwx (user)
        5 = 4+0+1 = r-x (group)
        4 = 4+0+0 = r-- (others)
`}
          </pre>
        </div>

        <button
          className="infoBtn"
          onClick={() => window.open("https://www.geeksforgeeks.org/chmod-command-linux/")}
        >
          Know more
        </button>
      </div>
    </div>
  );
}

export default FilePermissionsAndChmod;