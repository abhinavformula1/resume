import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Certifcations from "./components/certifications";
import Experiences from "./components/experiences";
import Summary from "./components/professionalSummary";
import Skills from "./components/technicalSkills";
import ProjectsSummary from "./components/projectsSummary";
import Responsibilities from "./components/responsibilities";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Experiences />
        <Summary />
        <Skills />
        <ProjectsSummary />
        <Responsibilities />
        <Certifcations />
      </Container>
    </div>
  );
}
