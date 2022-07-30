import React, { useEffect, useState } from "react";
import localStyles from "./Projects.module.css";
import sharedStyles from "../../sharedStyles.module.css";
type Props = {
  headerText: String;
  bodyText: String;
};
export default function ProjectCard({ headerText, bodyText }: Props) {
  return (
    <div className={localStyles.card}>
      <div>Img Placeholder</div>
      <h3 className={localStyles.cardHead}>{headerText}</h3>
      <p>{bodyText} </p>
    </div>
  );
}
