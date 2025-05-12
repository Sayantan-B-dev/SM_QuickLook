import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";
import Magnet from './Animations/Magnet'

export default function Home() {
  const subjects = [
    { name: "DBMS", path: "/dbms" },
    { name: "Operating Systems", path: "/os" },
    { name: "Computer Networks", path: "/cn" },
    { name: "Software Engineering", path: "/se" },
    { name: "Java", path: "/java" },
  ];

  return (
    <main className="home-container">
      <section className="header-section">
        <h1>📘QuickLook</h1>
        <p>
          This site is built solely for my personal educational use. All subject-based components (like DBMS, OS, CN, SE, Java) are organized to help me revise better. Images used are respectfully owned by their original creators/websites.
        </p>
      </section>

      <section className="subjects-grid">
        {subjects.map((subject, index) => (
          <Magnet padding={10} disabled={false} magnetStrength={20}>
            <div key={index} className="subject-card">
              <h2>{subject.name}</h2>
              <Magnet padding={10} disabled={false} magnetStrength={1}>
                <Link to={`${subject.path}`} className="infoBtn">
                  Explore
                </Link>
              </Magnet>
            </div>
          </Magnet>
        ))}
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} | Educational Purpose Only | Built by <a href="https://github.com/Sayantan-B-dev" className="linkA">Sayantan-B-Dev</a>
      </footer>
    </main>
  );
}