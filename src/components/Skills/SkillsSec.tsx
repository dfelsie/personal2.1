import React, { useEffect, useState } from "react";
import localStyles from "./Skills.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import joinClasses from "../../utils/joinClasses";
import SecHeader from "../../widgets/SecHeader/SecHeader";
type Props = {};
const skills = {
  frontend: ["HTML5", "CSS3", "Javascript/Typescript", "React", "Next.js"],
  backend: ["Node.js/Express", "Spring/Java", ".NET/C#", "Python/Flask", "C++"],
  mobile: ["Dart", "Flutter", "Kotlin"],
  "machine learning": [
    "Tensorflow",
    "R",
    "Applied Mathematics/Statistics",
    "Pandas",
  ],
  devops: ["Docker", "Kubernetes", "Digital Ocean"],
  "soft skills": ["Team Work", "Communication", "Design", "Drive"],
  "best practices": ["Testing", "Jira", "Git Workflows", "Excalidraw"],
  other: [
    "Redis",
    "Firebase",
    "MongoDB",
    "Authentication",
    "SQL/Postgres",
    "ElasticSearch",
  ],
};
const skillGroups = Object.keys(skills);
export default function SkillsSec({}: Props) {
  return (
    <div className={joinClasses(sharedStyles.basicSec, localStyles.skillSec)}>
      <SecHeader
        bodyText={
          "I have experience with both fullstack development and machine learning."
        }
        headerText={"Tools I use"}
      />
      <div className={localStyles.skillGroupBig}>
        {skillGroups.map((val, i) => (
          <div
            className={localStyles.skillGroupCont}
            key={`Skillgroupdivnum${i}`}
          >
            <div className={localStyles.skillGroup} key={`Skillgroupnum${i}`}>
              {val}
            </div>
            <div key={`Skillsentencenum${i}`}>
              <p className={localStyles.skillList}>{skills[val].join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
