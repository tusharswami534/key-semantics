import './App.css';
import Footer from './common/Footer';
import AnalysisApi from './components/home/AnalysisApi';
import DataSecurity from './components/home/DataSecurity';
import HeadlessSearch from './components/home/HeadlessSearch';
import Hero from './components/home/Hero';
import KeyFaq from './components/home/KeyFaq';
import KeySemanticsCard from './components/home/KeySemanticsCard';
import KeySemanticsWorkForm from './components/home/KeySemanticsWorkForm';

function App() {
  return (
    <>
    <Hero/>
    <KeySemanticsCard/>
    <AnalysisApi/>
    <KeyFaq/>
    <HeadlessSearch/>
    <DataSecurity/>
    <KeySemanticsWorkForm/>
    <Footer/>
    </>
  );
}

export default App;
