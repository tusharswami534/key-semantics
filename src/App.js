import './App.css';
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
    </>
  );
}

export default App;
