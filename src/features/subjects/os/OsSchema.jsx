import React from "react";
import "../../../../CSS/OS.css";

function OSDemo() {
  return (
    <div className="os-wrapper">
      <div className="os-card">
        <h1 className="os-title"></h1>

        <div className="os-section">
          <h2 className="os-subtitle"></h2>
          <p className="os-example"></p>
        </div>
        {/* <table className="os-table"></table> if any */}
        {/*use <pre>{``}</pre> like this */}
        <div className="os-section">
          <h2 className="os-subtitle"></h2>
          <div className="os-grid">
            <div className="os-grid-item structured">
              <div className="os-grid-item unstructured"></div>
            </div>
          </div>
        </div>
          <img src="" />
        <button className="infoBtn" onClick={() => window.open("")}>
          Know more
        </button>
      </div>
    </div>
  );
}

export default OSDemo;
