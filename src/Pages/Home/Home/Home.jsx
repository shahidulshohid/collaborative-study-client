import Container from "../../Shared/Container/Container";
import Banner from "../Banner/Banner";
import ShowStudySection from "../ShowStudySection/ShowStudySection";

const Home = () => {
    return (
        <Container>
           <Banner></Banner>
           <ShowStudySection></ShowStudySection>
        </Container>
    );
};

export default Home;