import Header from './components/header'
import Certifcations from './components/certifications'
import Experiences from './components/experiences'
import Summary from './components/professionalSummary'
import Skills from './components/technicalSkills'

export default function App() {
  return (
    <div className='App'>
      <Header/>
      <Experiences/>
      <Summary/>
      <Skills/>
      <Certifcations/>
    </div>
  );
};