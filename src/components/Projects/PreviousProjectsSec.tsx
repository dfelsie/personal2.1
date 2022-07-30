import React, { useEffect, useState } from "react";
import localStyles from "./Projects.module.css";
import sharedStyles from "../sharedStyles.module.css";
import ProjectGrid from "./ProjectGrid";
import SecHeader from "../../widgets/SecHeader/SecHeader";
type Props = {};
export default function PreviousProjectsSec({}: Props) {
  return (
    <section>
      <SecHeader
        headerText={"Previous Projects"}
        bodyText={"Some of the previous projects I've worked on."}
      />
      <ProjectGrid />{" "}
    </section>
  );
}
