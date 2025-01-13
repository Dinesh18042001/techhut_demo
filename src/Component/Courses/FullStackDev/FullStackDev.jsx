import React from "react";
import FullStackBanner from "./FullStackBanner";
import Companies from "../../Companies";
import Market from "./Market";
import TechProfessionals from "./TechProfessionals";
import SolidEngineer from "./SolidEngineer";
import TechCareer from "./TechCareer";
import Questions from "../../Questions";
import SolidEngineerSmoll from "./SolidEngineerSmoll";
import { Helmet } from 'react-helmet-async';

export default function FullStackDev() {
  return (
    <>
      <Helmet>
        <title>Full Stack Web Development Courses | Learn Online</title>
        <meta name="description" content="Join a full-stack web development course on TechHut Academy and learn the most in-demand coding skills with the help of real-world experts." />
      </Helmet>
      <FullStackBanner />
      <div style={{ marginBottom: "80px", marginTop: "50px" }}>
        <Companies />
      </div>
      <SolidEngineer />
      <SolidEngineerSmoll />
      <TechProfessionals />
      <Market />
      <TechCareer />
      <Questions />

    </>
  );
}
