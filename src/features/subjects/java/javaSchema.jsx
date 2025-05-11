import React from "react";
import "../../../../CSS/SE.css";

function SEDemo() {
  return (
    <div className="java-wrapper">
      <div className="java-card">
        <h1 className="java-title"></h1>

        <div className="java-section">
          <h2 className="java-subtitle"></h2>
          <p className="java-example"></p>
        </div>
        {/* <table className="java-table"></table> if any */}
        {/*use <pre>{``}</pre> like this */}
        <div className="java-section">
          <h2 className="java-subtitle"></h2>
          <div className="java-grid">
            <div className="java-grid-item structured">
              <div className="java-grid-item unstructured"></div>
            </div>
          </div>
        </div>
        {/*<img src="" /> INSTEAD THIS IMAGE, MAKE DIAGRAM YOURSELF USING THE PRE METHOD I MENTIONED  <pre>{``}</pre>*/}
        {/*IGNORE THIS! <button className="infoBtn" onClick={() => window.open("")}>
          Know more
        </button> */}
      </div>
    </div>
  );
}

export default SEDemo;
