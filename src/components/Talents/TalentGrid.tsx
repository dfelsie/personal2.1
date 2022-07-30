import React, { useEffect, useState } from "react";
import localStyles from "./Talents.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import TalentCard from "./TalentCard";
import { MdOutlineWeb, MdPhoneAndroid, MdAutoGraph } from "react-icons/md";
import { BsServer } from "react-icons/bs";
import { FaDocker, FaHandSparkles } from "react-icons/fa";
import TalentCardData from "../../typeutils/cardData";
type Props = {};
const talentHeadList: TalentCardData[] = [
  {
    headText: "Websites",
    bodyText:
      "Responsive and light websites, that look good and load quickly on all devices. Usually I build with Next.js and React.",
    icon: <MdOutlineWeb />,
  },

  {
    headText: "Design",
    bodyText:
      "Well styled websites, built with custom CSS and HTML. Mockups done in Figma and Excalidraw.",
    icon: <FaHandSparkles />,
  },
  {
    headText: "Backend",

    bodyText:
      "Secure, efficent, cleanly coded backends. I can handle authentication, databases, and enterprise logic.",
    icon: <BsServer />,
  },
  {
    headText: "Mobile",
    bodyText:
      "Aesthetic apps for iOS and Android. Made with one cross-platform codebase for ease of maintenance, without sacrificing performance.",
    icon: <MdPhoneAndroid />,
  },
  {
    headText: "Machine Learning",
    bodyText:
      "Statistical solutions. Both the design of algorithms and their implementation.",
    icon: <MdAutoGraph />,
  },
  {
    headText: "Devops",
    bodyText:
      "Orchestrating your programs at scale, with Docker and Kubernetes.",
    icon: <FaDocker />,
  },
];
export default function TalentGrid({}: Props) {
  return (
    <div className={localStyles.talentGrid}>
      {" "}
      {talentHeadList.map((val, i) => (
        <TalentCard
          headerText={val.headText}
          bodyText={val.bodyText}
          icon={val.icon}
          key={`talentGridCardNum${i}`}
        />
      ))}{" "}
    </div>
  );
}
