import Head from "next/head";
import AboutMeHeadSec from "../components/AboutMe/AboutMeSec";
import BackgroundSec from "../components/Background/BackgroundSec";
import FooterSec from "../components/Footer/FooterSec";
import PreviousProjectsSec from "../components/Projects/PreviousProjectsSec";
import SkillsSec from "../components/Skills/SkillsSec";
import TalentsSec from "../components/Talents/TalentsSec";
import IndexComp from "../widgets/indexComp/indexComp";

const Index = () => (
  <IndexComp>
    <Head>
      <title>Profile for Daniel Felsenthal</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <AboutMeHeadSec />
    <TalentsSec />
    <PreviousProjectsSec />
    <SkillsSec />
    <BackgroundSec />
    <FooterSec />
  </IndexComp>
);

export default Index;
