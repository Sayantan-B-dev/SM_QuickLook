import React from "react";
import "../../../../CSS/SE.css";

function SEDemo() {
  return (
    <div className="se-wrapper">
      <div className="se-card">
        <h1 className="se-title"></h1>

        <div className="se-section">
          <h2 className="se-subtitle"></h2>
          <p className="se-example"></p>
        </div>
        {/* <table className="se-table"></table> if any */}
        {/*use <pre>{``}</pre> like this */}
        <div className="se-section">
          <h2 className="se-subtitle"></h2>
          <div className="se-grid">
            <div className="se-grid-item structured">
              <div className="se-grid-item unstructured"></div>
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

export default SEDemo;
