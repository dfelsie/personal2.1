import React, { useEffect, useState } from "react";
import localStyles from "./Footer.module.css";
import sharedStyles from "../sharedStyles.module.css";
import joinClasses from "../../utils/joinClasses";
type Props = {};
export default function FooterSec({}: Props) {
  return (
    <div className={joinClasses(localStyles.footerSec)}>
      <ul className={localStyles.linkList}>
        <li>
          <a href="https://www.linkedin.com/in/daniel-felsenthal-697797213/">
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/dfelsie">Github</a>
        </li>
        <li>
          <a href="mailto:dfelsenthal88@gmail.com">dfelsenthal88@gmail.com</a>
        </li>
      </ul>
      <div className={localStyles.madeBy}>Made by Daniel Felsenthal</div>
    </div>
  );
}
