import { useEffect } from "react";
import Container from "../../Shared/Container/Container";
import Banner from "../Banner/Banner";
import ShowStudySection from "../ShowStudySection/ShowStudySection";
import TutorSection from "./TutorSection/TutorSection";
import StudyFeature from "./StudyFeature/StudyFeature";
import TopTutors from "./ToTutorsSection/TopTutorsSection";
import FaqSection from "./FaqSection/FaqSection";
import HelpDesk from "./HelpDesk/HelpDesk";
import StudyServices from "./StudyServices/StudyServices";

const Home = () => {
  useEffect(() => {
    window.document.title = "Home" || "StudySphere"
  }, [])
  return (
    <div>
      <Banner></Banner>
      <Container>
        <ShowStudySection></ShowStudySection>
        <TutorSection></TutorSection>
        <StudyFeature></StudyFeature>
        <TopTutors></TopTutors>
        <FaqSection></FaqSection>
        <StudyServices></StudyServices>
        <HelpDesk></HelpDesk>
      </Container>
    </div>
  );
};

export default Home;
