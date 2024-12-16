import './App.css';
import Footer from './common/Footer';
import Hero from './components/home/Hero';
import KeyFaq from './components/home/KeyFaq';
import KeySemanticsCard from './components/home/KeySemanticsCard';
import KeySemanticsWorkForm from './components/home/KeySemanticsWorkForm';

function App() {
  return (
    <>
    <Hero/>
    {/* <KeySemanticsCard/> */}
    <KeyFaq/>
    <KeySemanticsWorkForm/>
    <Footer/>
    </>
  );
}

export default App;
