import React, { useEffect, useState } from "react";
import localStyles from "./Talents.module.css";
import sharedStyles from "../../sharedStyles.module.css";
type Props = {
  headerText: String;
  bodyText: String;
  icon: JSX.Element;
};
export default function TalentCard({ headerText, bodyText, icon }: Props) {
  return (
    <div className={localStyles.talentCard}>
      <div className={localStyles.iconDiv}>{icon}</div>
      <h3>{headerText} </h3>
      <p>{bodyText}</p>
    </div>
  );
}
