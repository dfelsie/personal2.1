import React, { useEffect, useState } from "react";
import localStyles from "./indexComp.module.css";
import sharedStyles from "../../sharedStyles.module.css";
type Props = {
  children?: React.ReactNode;
};
export default function IndexComp({ children }: Props) {
  return <div className={localStyles.index}>{children} </div>;
}
