import { useState } from 'react';
import confetti from 'canvas-confetti';

function Proposal() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [proposalAccepted, setProposalAccepted] = useState(false);
  const [yesButtonText, setYesButtonText] = useState("Yes, I will! 💖");

  const nextSlide = () => {
    if (currentSlide < 4) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const acceptProposal = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setProposalAccepted(true);
    }, 1000);
  };

  const moveNoButton = (e) => {
    const container = e.currentTarget.parentElement;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = e.currentTarget.getBoundingClientRect();
    const randomX = Math.random() * (containerRect.width - buttonRect.width);
    const randomY = Math.random() * (containerRect.height - buttonRect.height);
    e.currentTarget.style.position = 'absolute';
    e.currentTarget.style.left = `${randomX}px`;
    e.currentTarget.style.top = `${randomY}px`;
  };

  return (
    <div className="proposal-page">
      <div className="proposal-container">
        <div className="proposal-slides">
          {currentSlide === 1 && (
            <div className="slide active" id="slide1">
              <h2>Latifa , Since the day I met you at the seven </h2>
              <button onClick={nextSlide} className="next-button">
                Continue ❤️
              </button>
            </div>
          )}
          {currentSlide === 2 && (
            <div className="slide active" id="slide2">
              <h2>Every moment has been magical...</h2>
              <button onClick={nextSlide} className="next-button">
                Continue ❤️
              </button>
            </div>
          )}
          {currentSlide === 3 && (
            <div className="slide active" id="slide3">
              <h2>And I knew you were the one...</h2>
              <button onClick={nextSlide} className="next-button">
                Continue ❤️
              </button>
            </div>
          )}
          
          {currentSlide === 4 && (
            <div className="slide active" id="slide4">
              {!proposalAccepted ? (
                <>
                  <h1 className="proposal-title">Will You Be My Valentine?</h1>
                  <div className="proposal-buttons">
                    <button
                      className="yes-button"
                      onMouseEnter={() => setYesButtonText("Yes, please! ❤")}
                      onMouseLeave={() => setYesButtonText("Yes, I will! 💖")}
                      onClick={acceptProposal}
                    >
                      {yesButtonText}
                    </button>
                    <button className="no-button" onMouseOver={moveNoButton}>
                      No
                    </button>
                  </div>
                </>
              ) : (
                <h2 style={{ color: 'var(--primary-color)' }}>
                  Thank you for making me the happiest person! ❤️
                </h2>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Proposal;
