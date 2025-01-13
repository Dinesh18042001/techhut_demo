import React from "react";
import { Link } from "react-router-dom";
import ProgramCard from "./ProgramCard";

export default function Career() {
  return (
    <>
      <section id="arr">
        <div className="carrer-section mt-5 mb-5">
          <div className="carrer-section-tittle mb-5">
            <h2 className="text-center">
              Choose your Career path and <span>Grow Along</span>
            </h2>
            <p className="text-center">
              Learn from Industry experts and get the IT Certificate{" "}
            </p>
          </div>

          <div className="container">

            <ProgramCard />
          </div>
        </div>
      </section>
    </>
  );
}
