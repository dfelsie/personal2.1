import localStyles from "./Talents.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import React, { useEffect, useState } from "react";
import joinClasses from "../../utils/joinClasses";
import TalentGrid from "./TalentGrid";
import SecHeader from "../../widgets/SecHeader/SecHeader";
type Props = {};
export default function TalentsSec({}: Props) {
  return (
    <div className={joinClasses(sharedStyles.basicSec, localStyles.talentSec)}>
      <SecHeader
        headerText={"What I can do for you"}
        bodyText={"A list of the services I can provide for your organization."}
      />
      <TalentGrid />
    </div>
  );
}
