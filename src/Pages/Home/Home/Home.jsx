import Container from "../../Shared/Container/Container";
import Banner from "../Banner/Banner";
import ShowStudySection from "../ShowStudySection/ShowStudySection";
import TutorSection from "./TutorSection/TutorSection";

const Home = () => {
    return (
        <Container>
           <Banner></Banner>
           <ShowStudySection></ShowStudySection>
           <TutorSection></TutorSection>
        </Container>
    );
};

export default Home;