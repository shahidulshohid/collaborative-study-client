import Container from "../../Shared/Container/Container";
import Banner from "../Banner/Banner";
import ShowStudySection from "../ShowStudySection/ShowStudySection";
import TutorSection from "./TutorSection/TutorSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Container>
        <ShowStudySection></ShowStudySection>
        <TutorSection></TutorSection>
      </Container>
    </div>
  );
};

export default Home;
