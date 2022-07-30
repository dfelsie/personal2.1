import React, { useEffect, useState } from "react";
import localStyles from "./SecHeader.module.css";
import sharedStyles from "../../sharedStyles.module.css";
type Props = {
  headerText: String;
  bodyText: String;
};
export default function SecHeader({ headerText, bodyText }: Props) {
  return (
    <div className={localStyles.secHeaderDiv}>
      <h2 className={localStyles.secHeaderBig}>{headerText}</h2>
      <p className={localStyles.secHeaderBody}>{bodyText}</p>
    </div>
  );
}
