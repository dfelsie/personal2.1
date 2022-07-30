import React, { useEffect, useState } from "react";
import localStyles from "./AboutMe.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Image from "next/image";
type Props = {};
export default function IdentityBar({}: Props) {
  return (
    <div className={localStyles.identityBarDiv}>
      <div className={localStyles.identityBarAvatar}>
        <Image
          className={sharedStyles.nextImage}
          layout={"fill"}
          src="/assets/images/kobu.jpg"
        />
      </div>
      <div className={localStyles.identityBarText}>
        <h4>Daniel Felsenthal - NYC, USA</h4>
      </div>{" "}
    </div>
  );
}
