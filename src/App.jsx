import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/header";
import PhaseOne from "./components/Phase_1";
import PhaseTwo from "./components/Phase_2";
import Rulesbtn from "./components/Rulesbtn";
import Rules from "./components/Rules";
import { useState } from "react";
import ScoreState from "./context/score/ScoreState";

function App() {
  const navigate = useNavigate();
  const [isRulesVisible, setisRulesVisible] = useState(false);
  const [userChoice, setuserChoice] = useState(null);

  // following code is to prevent from reloading as the score will be lost
  window.addEventListener('beforeunload', function(event) {
    event.preventDefault();

    // Customize the message to display to the user
    const confirmationMessage = 'Are you sure you want to leave? Your changes may not be saved.';
    event.returnValue = confirmationMessage; // For older browsers

    // Return the message to display in a modern browser
    return confirmationMessage;
});


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
    <>
      <ScoreState>
        <div className="min-w-screen min-h-screen bg-gradient-to-b from-background-radialGradientStart to-background-radialGradientEnd font-barlowSemiCondensed">
          <div className="max-w-[1400px] pt-[2.5rem] mx-auto">
            <Header />
            {isRulesVisible && <Rules onClick={handleClose} />}
            <Routes>
              <Route path="Rock-Paper-Scissors-Game/" element={<PhaseOne onButtonClick={handleButtonClick} />} />
              <Route path="/selection-results" element={<PhaseTwo userChoice={userChoice} />} />
            </Routes>
            <Rulesbtn onClick={handleRulesClick} />
          </div>
        </div>
      </ScoreState>
    </>
  )
}

export default App;
