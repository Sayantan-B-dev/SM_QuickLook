import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import AnimateOnScroll from "../components/Animations/AnimateOnScroll";
import SectionHead from "../components/SectionHead";
import "../CSS/Dbms.css";

import DBMSintro from "../features/subjects/dbms/notes/DBMSintro";
import DBMSvsFile from "../features/subjects/dbms/notes/DBMSvsFile";
import ArchitectureTiers from "../features/subjects/dbms/notes/ArchitectureTiers";
import SchemaArchitecture from "../features/subjects/dbms/notes/SchemaArchitecture";
import DataIndependence from "../features/subjects/dbms/notes/DataIndependence";
import IntegrityConstraints from "../features/subjects/dbms/notes/IntegrityConstraints";
import IntegrityConstraints2 from "../features/subjects/dbms/notes/IntegrityConstraints2";
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
import DbmsComponentsAndArchitecture from "../features/subjects/dbms/notes/DbmsComponentsAndArchitecture";
import DbaRolesAndDataDictionary from "../features/subjects/dbms/notes/DbaRolesAndDataDictionary";
import TypesOfDatabaseLanguages from "../features/subjects/dbms/notes/TypesOfDatabaseLanguages";
import DataModelsAndComparativeStudy from "../features/subjects/dbms/notes/DataModelsAndComparativeStudy";
import EnhancedERModel from "../features/subjects/dbms/notes/EnhancedERModel";
import RelationalModel from "../features/subjects/dbms/notes/RelationalModel";
import RelationalAlgebraAndCalculus from "../features/subjects/dbms/notes/RelationalAlgebraAndCalculus";
import SecurityAndAuthorization from "../features/subjects/dbms/notes/SecurityAndAuthorization";
import SqlQueriesAndFunctions from "../features/subjects/dbms/notes/SqlQueriesAndFunctions";
import NullValuesNestedComplexQueries from "../features/subjects/dbms/notes/NullValuesNestedComplexQueries";
import PlSqlIntroduction from "../features/subjects/dbms/notes/PlSqlIntroduction";
import NormalizationAndDependencies from "../features/subjects/dbms/notes/NormalizationAndDependencies";
import MultivaluedDependencies from "../features/subjects/dbms/notes/MultivaluedDependencies";
import DiplomaDBMS from "../features/subjects/dbms/notes/DiplomaDBMS";

function DatabaseManagementSystem() {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();
  function handleLink() {
    navigate('/');
  }
  return (
    <>
      <div className="parentHeader">
        <div className="Category justify-center flex flex-col gap-2 top-0 z-10">
          <button
            className="allBtn dbmsBtn"
            onClick={() => setActiveTab("all")}
          >
            All-DBMS
          </button>
          <button
            className="diplomaBtn dbmsBtn"
            onClick={() => setActiveTab("diploma")}
          >
            Diploma-DBMS
          </button>
                    <button
            className="homeBtn"
            onClick={handleLink}
          >
            Home
          </button>
        </div>
        <div className="SectionName">Database Management System</div>
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
            <DbmsComponentsAndArchitecture />,
            <DbaRolesAndDataDictionary />,
            <TypesOfDatabaseLanguages />,
            <IntegrityConstraints />,
            <DataModelsAndComparativeStudy />,
            <ERModel />,
            <ERAttributes />,
            <EnhancedERModel />,
            <RelationshipDegree />,
            <RelationalModel />,
            <DBMSKeys />,
            <CandidateKey />,
            <PrimaryKey />,
            <ForeignKey />,
            <ForeignKeyOperations />,
            <SuperKeyDetails />,
            <SecurityAndAuthorization />,
            <RelationalAlgebraAndCalculus />,
            <Normalization />,
            <FunctionalDependency />,
            <NormalForms />,
            <MultivaluedDependencies />,
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
            <SqlQueriesAndFunctions />,
            <AggregateFunctionsAndSubqueries />,
            <NormalizationAndDependencies />,
            <TransactionConcepts />,
            <ConcurrencyProblems />,
            <AdvancedScheduling />,
            <ConcurrencyControl />,
            <Indexing />,
            <BTreeComponent />,
            <DatabaseModificationComponent />,
            <SqlLikeCommand />,
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
            <PLsqlAndTransactions />,
            <BasicPlsqlAndLoops />,
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
            <SectionHead text="DATABASE MANAGEMENT SYSTEM" />,
            <DiplomaDBMS />,
            <SectionHead text="Database System Concepts & Architecture" />,
            <DBMSintro />,
            <DBMSvsFile />,
            <DataAbstractionExplained />,
            <TypesOfDatabaseLanguages />,
            <DataIndependence />,
            <DbmsComponentsAndArchitecture />,
            <DbaRolesAndDataDictionary />,

            <SectionHead text="Data Modeling Technique" />,
            <DataModelsAndComparativeStudy />,
            <ERModel />,
            <ERAttributes />,
            <EnhancedERModel />,

            <SectionHead text="Relational Data Model in Depth" />,
            <RelationalModel />,
            <DBMSKeys />,
            <CandidateKey />,
            <PrimaryKey />,
            <ForeignKey />,
            <ForeignKeyOperations />,
            <SuperKeyDetails />,
            <IntegrityConstraints2 />,
            <SecurityAndAuthorization />,
            <RelationalAlgebraAndCalculus />,

            <SectionHead text="Structured Query Language" />,
            <SqlQueriesAndFunctions />,
            <SQLFunctions />,
            <SQLCommands />,
            <SQLCommands2 />,
            <NullValuesNestedComplexQueries />,
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
            <PlSqlIntroduction />,
            <PLsqlAndTransactions />,
            <BasicPlsqlAndLoops />,
            <ProceduresInPLSQL />,
            <FetchDatePLSQL />,
            <CursorInPLSQL />,

            <SectionHead text="Functional Dependencies & Normalization" />,
            <NormalizationAndDependencies />,
            <FD_Cover_Equivalence_Decomposition />,
            <RelationshipDegree />,
            <Normalization />,
            <FunctionalDependency />,
            <NormalForms />,
            <MultivaluedDependencies />,
          ].map((Component, index) => (
            <AnimateOnScroll key={index}>{Component}</AnimateOnScroll>
          ))}
        </div>
      )}
    </>
  );
}

export default DatabaseManagementSystem;
