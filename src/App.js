import './App.css';
import Counter from './Components/Counter';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Imgdata from './Components/Imgdata';
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
      
    </>
  );
}

export default App;
