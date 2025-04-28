import React from "react";
import { useState } from "react";

import AnimateOnScroll from "../components/Animations/AnimateOnScroll";

import DBMSintro from "../features/subjects/dbms/notes/DBMSintro";
import DBMSvsFile from "../features/subjects/dbms/notes/DBMSvsFile";
import ArchitectureTiers from "../features/subjects/dbms/notes/ArchitectureTiers";
import SchemaArchitecture from "../features/subjects/dbms/notes/SchemaArchitecture";
import DataIndependence from "../features/subjects/dbms/notes/DataIndependence";
import IntegrityConstraints from "../features/subjects/dbms/notes/IntegrityConstraints";
import DBMSKeys from "../features/subjects/dbms/notes/DBMSKeys";
import CandidateKey from "../features/subjects/dbms/notes/CandidateKey";
import PrimaryKey from "../features/subjects/dbms/notes/PrimaryKey";
import ForeignKey from "../features/subjects/dbms/notes/ForeignKey";
import ForeignKeyOperations from "../features/subjects/dbms/notes/ForeignKeyOperations";
import SuperKeyDetails from "../features/subjects/dbms/notes/SuperKeyDetails";
import ERModel from "../features/subjects/dbms/notes/ERModel";
import ERAttributes from "../features/subjects/dbms/notes/ERAttributes";
import RelationshipDegree from "../features/subjects/dbms/notes/RelationshipDegree";
import Normalization from "../features/subjects/dbms/notes/Normalization";
import FunctionalDependency from "../features/subjects/dbms/notes/FunctionalDependency";
import NormalForms  from "../features/subjects/dbms/notes/NormalForms";

function DatabaseManagementSystem() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className="CategoryDbms justify-center flex gap-2 sticky top-0 z-10">
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
          {[
            <DBMSintro />,
            <DBMSvsFile />,
            <ArchitectureTiers />,
            <SchemaArchitecture />,
            <DataIndependence />,
            <IntegrityConstraints />,
            <DBMSKeys />,
            <CandidateKey />,
            <PrimaryKey />,
            <ForeignKey />,
            <ForeignKeyOperations />,
            <SuperKeyDetails />,
            <ERModel />,
            <ERAttributes />,
            <RelationshipDegree />,
            <Normalization />,
            <FunctionalDependency />,
            <NormalForms />,
          ].map((Component, index) => (
            <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
          ))}
        </div>
      )}

      {activeTab === "diploma" && <div className="diplomaDbms dbmsBox"></div>}
    </>
  );
}

export default DatabaseManagementSystem;
