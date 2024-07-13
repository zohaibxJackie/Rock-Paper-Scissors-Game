import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/header";
import PhaseOne from "./components/Phase_1";
import PhaseTwo from "./components/Phase_2";
import Rulesbtn from "./components/Rulesbtn";
import Rules from "./components/Rules";
import { useState } from "react";
import {ScoreProvider} from "./components/scoreContext";

function App() {
  const navigate = useNavigate();
  const [isRulesVisible, setisRulesVisible] = useState(false);
  const [userChoice, setuserChoice] = useState(null);

  const handleRulesClick = () => {
    setisRulesVisible(!isRulesVisible);
  }

  const handleClose = () => {
      setisRulesVisible(false);
  }

  const handleButtonClick = (number) => {
    setuserChoice(number);
    navigate('/selection-results');
  }

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-b from-background-radialGradientStart to-background-radialGradientEnd font-barlowSemiCondensed">
      <div className="max-w-[1400px] pt-[2.5rem] mx-auto">
        <Header />
        {isRulesVisible && <Rules onClick={handleClose} />}
        <ScoreProvider>
          <Routes>
            <Route path="/" element={<PhaseOne onButtonClick={handleButtonClick} />} />
            <Route path="/selection-results" element={<PhaseTwo userChoice={userChoice} />} />
          </Routes>
        </ScoreProvider>
        <Rulesbtn onClick={handleRulesClick} />
      </div>
    </div>
  )
}

export default App;
