import React from "react";
import "../../../../CSS/CN.css";

function CNDemo() {
  return (
    <div className="cn-wrapper">
      <div className="cn-card">
        <h1 className="cn-title"></h1>

        <div className="cn-section">
          <h2 className="cn-subtitle"></h2>
          <p className="cn-example"></p>
        </div>
        {/* <table className="cn-table"></table> if any */}

        <div className="cn-section">
          <h2 className="cn-subtitle"></h2>
          <div className="cn-grid">
            <div className="cn-grid-item structured">
              <div className="cn-grid-item unstructured"></div>
            </div>
          </div>
        </div>
        <div className="cn-section">
        <h2 className="cn-subtitle">Diagram: Data Link Layer Functions</h2>
        <img
          src=""
        />
      </div>
      <button
        className="infoBtn"
        onClick={() =>
          window.open("")
        }
      >
        Know more
      </button>
      </div>
    </div>
  );
}

export default CNDemo;
