import React from "react";
import FullStackBanner from "./FullStackBanner";
import Companies from "../../Companies";
import Market from "./Market";
import TechProfessionals from "./TechProfessionals";
import SolidEngineer from "./SolidEngineer";
import TechCareer from "./TechCareer";
import Questions from "../../Questions";
import SolidEngineerSmoll from "./SolidEngineerSmoll";

export default function FullStackDev() {
  return (
    <>
      <FullStackBanner />
      <div style={{marginBottom : "80px", marginTop: "50px"}}>
      <Companies/>
      </div>
      <SolidEngineer/>
      <SolidEngineerSmoll/>
      <TechProfessionals/>
      <Market/>
      <TechCareer/>
      <Questions/>
      
    </>
  );
}
