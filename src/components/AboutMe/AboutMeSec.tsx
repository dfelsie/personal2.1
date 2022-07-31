import React, { useEffect, useState } from "react";

type Props = {};
import localStyles from "./AboutMe.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import IdentityBar from "./IdentityBar";
import joinClasses from "../../utils/joinClasses";
export default function AboutMeHeadSec({}: Props) {
  return (
    <div className={joinClasses(localStyles.aboutMeSec, sharedStyles.triangle)}>
      <IdentityBar />{" "}
      <div className={localStyles.headText}>
        <h2>
          Are you looking for a high-quality developer to help with your
          project?
        </h2>
      </div>
      <div className={localStyles.bodyText}>
        <p>
          As a full stack developer with a wide range of tools, I'm ready and
          able to help you to deliver great results for whatever your working
          on. From frontend to backend or statistical modeling, I can help you
          accomplish a wide variety of goals.
        </p>
      </div>
      <div className={localStyles.smallHeadText}>
        <a id={localStyles.info} href="#contactInfo">
          Want to communicate? Here's my contact info:
        </a>
        <span id={localStyles.arrow}> &#8594;</span>
      </div>
    </div>
  );
}
