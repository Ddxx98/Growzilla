import './App.css';
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Building from "./Components/building/Building"
import Case from './Components/case/Case';
import CaseStudy from './Components/caseStudy/CaseStudy';
import GrowthAcademy from './Components/growthAcademy/GrowthAcademy';
import Community from './Components/community/Community';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Building></Building>
        <CaseStudy></CaseStudy>
        <Case></Case>
        <GrowthAcademy></GrowthAcademy>
        <Community></Community>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
