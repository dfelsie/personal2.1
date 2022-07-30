import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import localStyles from "./Background.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import React, { useEffect, useState } from "react";
import joinClasses from "../../utils/joinClasses";
import SecHeader from "../../widgets/SecHeader/SecHeader";
type Props = {};
const bgHeads = ["Education", "Work Experience"];
export default function BackgroundSec({}: Props) {
  return (
    <div
      className={joinClasses(sharedStyles.basicSec, localStyles.backgroundSec)}
    >
      <SecHeader
        bodyText={"A summary of my past experience and education."}
        headerText={"My background"}
      />
      <div className={joinClasses(localStyles.card, localStyles.eduCard)}>
        <div className={joinClasses(localStyles.cardHead)}>
          <div className={localStyles.backgroundIcon}>
            <FaGraduationCap />{" "}
          </div>
          <h3> Education</h3>
        </div>
        <ul className={joinClasses(localStyles.list, localStyles.edList)}>
          <li>B.A. in Computer Science from Macalester College (2018-2022)</li>
          <li>
            B.A. in Applied Mathematics from Macalester College (2018-2022)
          </li>
        </ul>
      </div>
      <div className={joinClasses(localStyles.card, localStyles.expCard)}>
        <div className={joinClasses(localStyles.cardHead)}>
          <div className={localStyles.backgroundIcon}>
            <MdWork />{" "}
          </div>

          <h3> Work Experience</h3>
        </div>
        <ul className={joinClasses(localStyles.list, localStyles.exList)}>
          <li>Backend Internship at Foursquare Labs (2021)</li>
          <li>Hackathon Supervisor at Code For America (2021)</li>
        </ul>
      </div>
    </div>
  );
}
