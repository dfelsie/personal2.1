import React, { useEffect, useState } from "react";
import localStyles from "./Projects.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import ProjectCard from "./ProjectCard";
type Props = {};
const prevProjectHeads = ["App", "App", "App", "App"];
const prevProjectDescs = [
  "Lorem Ipsum Something Something",
  "Lorem Ipsum Something Something",
  "Lorem Ipsum Something Something",
  "Lorem Ipsum Something Something",
];
export default function ProjectGrid({}: Props) {
  return (
    <div>
      {prevProjectHeads.map((val, i) => (
        <ProjectCard
          bodyText={prevProjectDescs[i]}
          headerText={val}
          key={`gridcardnum${i}`}
        />
      ))}
    </div>
  );
}
