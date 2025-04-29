import React from 'react'

function SectionHead({text}) {
  return (
    <div className="dbms-wrapper">
    <div className="dbms-card" style={{ width:"100%",backgroundColor: "#123252",padding:"5px"}}>
      <h1 style={{ textAlign: "center", fontSize: "20px" }}>
        --------------------: {text} :---------------------
      </h1>
    </div>
  </div>
  )
}

export default SectionHead
