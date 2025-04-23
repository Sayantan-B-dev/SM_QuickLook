import React from "react";
import { useState } from "react";
import DBMSintro from "../features/subjects/dbms/notes/DBMSintro";
import DBMSvsFile from "../features/subjects/dbms/notes/DBMSvsFile";
import ArchitectureTiers from "../features/subjects/dbms/notes/ArchitectureTiers";
import SchemaArchitecture from "../features/subjects/dbms/notes/SchemaArchitecture";

function DatabaseManagementSystem() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className="CategoryDbms m-auto w-full justify-center flex flex-row items-end gap-2 sticky top-10 z-10">
        <button className="allDbmsBtn" onClick={() => setActiveTab("all")}>
          All
        </button>
        <button
          className="diplomaDbmsBtn"
          onClick={() => setActiveTab("diploma")}
        >
          Diploma
        </button>
      </div>

      {activeTab === "all" && (
        <div className="allDbms dbmsBox">
          <DBMSintro />
          <DBMSvsFile />
          <ArchitectureTiers />
          <SchemaArchitecture />
        </div>
      )}

      {activeTab === "diploma" && (
        <div className="diplomaDbms dbmsBox">

        </div>
      )}
    </>
  );
}

export default DatabaseManagementSystem;
