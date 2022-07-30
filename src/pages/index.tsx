import AboutMeHeadSec from "../components/AboutMe/AboutMeSec";
import BackgroundSec from "../components/Background/BackgroundSec";
import FooterSec from "../components/Footer/FooterSec";
import PreviousProjectsSec from "../components/Projects/PreviousProjectsSec";
import SkillsSec from "../components/Skills/SkillsSec";
import TalentsSec from "../components/Talents/TalentsSec";
import IndexComp from "../widgets/indexComp/indexComp";

const Index = () => (
  <IndexComp>
    <AboutMeHeadSec />
    <TalentsSec />
    <PreviousProjectsSec />
    <SkillsSec />
    <BackgroundSec />
    <FooterSec />
  </IndexComp>
);

export default Index;
