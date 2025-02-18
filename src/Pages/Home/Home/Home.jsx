import { useEffect } from "react";
import Container from "../../Shared/Container/Container";
import Banner from "../Banner/Banner";
import ShowStudySection from "../ShowStudySection/ShowStudySection";
import TutorSection from "./TutorSection/TutorSection";
import StudyFeature from "./StudyFeature/StudyFeature";
import TopTutors from "./ToTutorsSection/TopTutorsSection";
import FaqSection from "./FaqSection/FaqSection";

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
      </Container>
    </div>
  );
};

export default Home;
