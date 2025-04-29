import React from "react";
import { useState } from "react";

import AnimateOnScroll from "../components/Animations/AnimateOnScroll";
import SectionHead from "../features/subjects/dbms/SectionHead";
import "../CSS/Dbms.css";

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
import NormalForms from "../features/subjects/dbms/notes/NormalForms";
import MinimalCover from "../features/subjects/dbms/notes/MinimalCover";
import FD_Cover_Equivalence_Decomposition from "../features/subjects/dbms/notes/FD_Cover_Equivalence_Decomposition";
import {
  JoinsIntroduction,
  NaturalJoin,
  EquiJoin,
  SelfJoin,
  ConditionalJoin,
  InnerJoin,
  LeftJoin,
  RightJoin,
  LeftOuterJoin,
  RightOuterJoin,
  FullOuterJoin,
  CrossJoin,
} from "../features/subjects/dbms/notes/joinsIntro";
import {
  RelationalAlgebra,
  TupleCalculus,
} from "../features/subjects/dbms/notes/RelationalAlgebra";
import SQLCommands from "../features/subjects/dbms/notes/SQLCommands";
import SQLCommands2 from "../features/subjects/dbms/notes/SQLCommands2";
import AggregateFunctionsAndSubqueries from "../features/subjects/dbms/notes/AggregateFunctionsAndSubqueries";
import PLsqlAndTransactions from "../features/subjects/dbms/notes/PLsqlAndTransactions";
import TransactionConcepts from "../features/subjects/dbms/notes/TransactionConcepts";
import ConcurrencyProblems from "../features/subjects/dbms/notes/ConcurrencyProblems";
import AdvancedScheduling from "../features/subjects/dbms/notes/AdvancedScheduling";
import ConcurrencyControl from "../features/subjects/dbms/notes/ConcurrencyControl";
import Indexing from "../features/subjects/dbms/notes/Indexing";
import BTreeComponent from "../features/subjects/dbms/notes/BTreeComponent";
import DatabaseModificationComponent from "../features/subjects/dbms/notes/DatabaseModificationComponent";
import SqlLikeCommand from "../features/subjects/dbms/notes/SqlLikeCommand";
import BasicPlsqlAndLoops from "../features/subjects/dbms/notes/BasicPlsqlAndLoops";
import SQLFunctions from "../features/subjects/dbms/notes/SQLFunctions";
import View_AggregateFunctionWithNull from "../features/subjects/dbms/notes/View_AggregateFunctionWithNull";
import RAIDLevels from "../features/subjects/dbms/notes/RAIDLevels";
import DBMSObjects from "../features/subjects/dbms/notes/DBMSObjects";
import DataWarehouseBigData from "../features/subjects/dbms/notes/DataWarehouseBigData";
import CoddsTwelveRules from "../features/subjects/dbms/notes/CoddsTwelveRules";
import DbmsAndSqlConcepts from "../features/subjects/dbms/notes/DbmsAndSqlConcepts";
import SequenceAndSqlQueryExecutionOrder from "../features/subjects/dbms/notes/SequenceAndSqlQueryExecutionOrder";
import {
  HadoopIntroduction,
  BigDataVsSmallData,
  ViewsComparison,
  ForeignKeyDeleteBehavior,
  ProceduresInPLSQL,
  FetchDatePLSQL,
  CursorInPLSQL,
  WeakEntityExplanation,
  RenameOperatorInRelationalAlgebra,
  NonCorrelatedSubquery,
  SqlOperators,
} from "../features/subjects/dbms/notes/AdvancedDbmsTopics";

import DataAbstractionExplained from "../features/subjects/dbms/notes/DataAbstractionExplained";

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
            <DataAbstractionExplained />,
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
            <MinimalCover />,
            <FD_Cover_Equivalence_Decomposition />,
            <JoinsIntroduction />,
            <NaturalJoin />,
            <EquiJoin />,
            <SelfJoin />,
            <ConditionalJoin />,
            <InnerJoin />,
            <LeftJoin />,
            <RightJoin />,
            <LeftOuterJoin />,
            <RightOuterJoin />,
            <FullOuterJoin />,
            <CrossJoin />,
            <RelationalAlgebra />,
            <TupleCalculus />,
            <SQLCommands />,
            <SQLCommands2 />,
            <AggregateFunctionsAndSubqueries />,
            <PLsqlAndTransactions />,
            <TransactionConcepts />,
            <ConcurrencyProblems />,
            <AdvancedScheduling />,
            <ConcurrencyControl />,
            <Indexing />,
            <BTreeComponent />,
            <DatabaseModificationComponent />,
            <SqlLikeCommand />,
            <BasicPlsqlAndLoops />,
            <SQLFunctions />,
            <View_AggregateFunctionWithNull />,
            <RAIDLevels />,
            <DBMSObjects />,
            <DataWarehouseBigData />,
            <CoddsTwelveRules />,
            <DbmsAndSqlConcepts />,
            <SequenceAndSqlQueryExecutionOrder />,
            <HadoopIntroduction />,
            <BigDataVsSmallData />,
            <ViewsComparison />,
            <ForeignKeyDeleteBehavior />,
            <ProceduresInPLSQL />,
            <FetchDatePLSQL />,
            <CursorInPLSQL />,
            <WeakEntityExplanation />,
            <RenameOperatorInRelationalAlgebra />,
            <NonCorrelatedSubquery />,
            <SqlOperators />,
          ].map((Component, index) => (
            <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
          ))}
        </div>
      )}

      {activeTab === "diploma" && (
        <div className="diplomaDbms dbmsBox">
          {[
            <SectionHead text="Database System Concepts & Architecture"/>,
            <DBMSintro />,
            <DBMSvsFile />,
            <DataAbstractionExplained />,
            <SQLCommands />,
            <SQLCommands2 />,
            <DataIndependence />,

            <SectionHead text="Database System Concepts & Architecture"/>,

          ].map((Component, index) => (
            <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
          ))}
        </div>
      )}
    </>
  );
}

export default DatabaseManagementSystem;
