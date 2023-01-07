import './App.css';
import Counter from './Components/Counter';
import FormPractice from './Components/FormPractice';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Imgdata from './Components/Imgdata';
import Signup from './Components/Signup';
import Timepass from './Components/Timepass';

function App() {
  const cardimg=Imgdata.map((item)=>{
    return (
    <Timepass 
      srcurl={item.url}
      />
      )
  })
  return (
    <>
      <Header/>
      <Hero/>
      {/* <Counter/> */}
      {cardimg}
      <FormPractice/>
      <Signup/>
      
    </>
  );
}

export default App;
