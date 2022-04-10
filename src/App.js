import Header from './components/header'
import Certifcations from './components/certifications'
import Experiences from './components/experiences'
import Summary from './components/professionalSummary'

export default function App() {
  return (
    <div className='App'>
      <Header/>
      <Experiences/>
      <Summary/>
      <Certifcations/>
    </div>
  );
};