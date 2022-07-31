import React, { useEffect, useState } from "react";
import Image from "next/image";
import localStyles from "./Projects.module.css";
import sharedStyles from "../../sharedStyles.module.css";
type Props = {
  headerText: string;
  bodyText: string;
  imgLoc: string;
  linkText: string;
};
export default function ProjectCard({
  headerText,
  bodyText,
  linkText,
  imgLoc,
}: Props) {
  return (
    <div className={localStyles.card}>
      <div className={localStyles.imageCont}>
        <a className={localStyles.imgLink} href={linkText}>
          <Image
            className={sharedStyles.nextImage}
            layout={"fill"}
            src={imgLoc}
          />
        </a>
      </div>
      <a className={localStyles.headLink} href={linkText}>
        <h3 className={localStyles.cardHead}>{headerText}</h3>
      </a>
      <p className={localStyles.cardBody}>{bodyText} </p>
    </div>
  );
}
