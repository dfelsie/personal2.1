import React, { useEffect, useState } from "react";
import localStyles from "./Projects.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "../../typeutils/cardDataPic";
type Props = {};
const prevProjectHeads = ["App", "App", "App", "App"];
const prevProjectDescs = [
  "Lorem Ipsum Something Something",
  "Lorem Ipsum Something Something",
  "Lorem Ipsum Something Something",
  "Lorem Ipsum Something Something",
];
const prevProjs: ProjectCardData[] = [
  {
    bodyText:
      "An animated visualization of the quick sort algorithm made with React and Framer-Motion.",
    headText: "Quick Sort Visualization",
    imgLoc: "/assets/images/quicksortani.PNG",
    link: "https://framer-algo-dzgr9ro92-dfelsie.vercel.app",
  },
  {
    bodyText: "A mock up of a product site made with Next.js. Responsive.",
    headText: "Sample Product Site",
    imgLoc: "/assets/images/sampleproductsite.PNG",
    link: "https://sampleproductpage.vercel.app",
  },
  {
    bodyText: "My attempt to clone a very detailed website. ",
    headText: "Marble Site Imitation",
    imgLoc: "/assets/images/marbsite.PNG",
    link: "https://marbleclone.vercel.app",
  },
  {
    bodyText:
      "An old version of this site, made with Framer-Motion and ChakraUI.",
    headText: "Former Personal Site",
    imgLoc: "/assets/images/oldmysite.PNG",
    link: "https://profiledanfels.vercel.app",
  },
];
export default function ProjectGrid({}: Props) {
  return (
    <div className={localStyles.projGrid}>
      {prevProjs.map((val, i) => (
        <ProjectCard
          bodyText={val.bodyText}
          headerText={val.headText}
          linkText={val.link}
          imgLoc={val.imgLoc}
          key={`gridcardnum${i}`}
        />
      ))}
    </div>
  );
}
