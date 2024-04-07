import './App.css';
import MobileDivider from './assets/pattern-divider-mobile.svg';
import DesktopDivider from './assets/pattern-divider-desktop.svg';
import DiceIcon from './assets/icon-dice.svg';
import { useState, useEffect } from 'react';
import { fetchAdvice } from './utils/api';
import Footer from './components/Footer';

function App() {
  const [adviceData, setAdviceData] = useState(null);

  // Function to fetch new advice from the API
  const getNewAdvice = async () => {
    const advice = await fetchAdvice();
    setAdviceData(advice);
  };

  // Fetch initial advice when the component mounts
  useEffect(() => {
    getNewAdvice();
  }, []);

  return (
    <>
      <div className="container">
        {adviceData && (
          <div className="advice">
            <p className="advice-number">ADVICE #{adviceData.id}</p>
            <h1 className="advice-text">{adviceData.advice}</h1>
            <img
              src={MobileDivider}
              alt="image of a divider"
              className="mobile-divider"
            />
            <img
              src={DesktopDivider}
              alt="image of a divider"
              className="desktop-divider"
            />
          </div>
        )}
        <button className="dice-button" onClick={getNewAdvice}>
          <img src={DiceIcon} alt="icon of a 6-sided dice" />
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
