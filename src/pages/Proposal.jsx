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
    // Ensure the container has a relative position
    container.style.position = 'relative';

    const containerRect = container.getBoundingClientRect();
    const buttonRect = e.currentTarget.getBoundingClientRect();

    // Get the mouse position relative to the container
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    const offset = 150; // minimum distance from the mouse (in pixels)
    let randomX, randomY;
    let attempts = 0;

    // Use the center of the button for a more accurate check
    const buttonCenterOffsetX = buttonRect.width / 2;
    const buttonCenterOffsetY = buttonRect.height / 2;

    do {
      randomX = Math.random() * (containerRect.width - buttonRect.width);
      randomY = Math.random() * (containerRect.height - buttonRect.height);
      attempts++;
      if (attempts > 100) break; // avoid infinite loop
    } while (
      Math.hypot(
        randomX + buttonCenterOffsetX - mouseX,
        randomY + buttonCenterOffsetY - mouseY
      ) < offset
    );

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
              <h2>Latifa, Since the day I met you at the seven</h2>
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
                  <div className="proposal-buttons" style={{ position: 'relative', height: '200px' }}>
                    <button
                      className="yes"
                      style={{
                        fontSize: "1.8em",
                        padding: "15px 50px",
                        background: "linear-gradient(45deg, #ff3366, #ff8fab)",
                        color: "white",
                        border: "none",
                        height: "100px",
                        borderRadius: "30px",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        boxShadow: "0 5px 15px rgba(255, 91, 135, 0.3)"
                      }}
                      onMouseEnter={() => setYesButtonText("Yes, please! ❤")}
                      onMouseLeave={() => setYesButtonText("Yes, I will! 💖")}
                      onClick={acceptProposal}
                    >
                      {yesButtonText}
                    </button>
                    <button
                      className="no-button"
                      style={{
                        fontSize: "1.8em",
                        padding: "15px 50px",
                        height: "100px",
                        borderRadius: "30px",
                        cursor: "pointer",
                        transition: "all 0.3s ease"
                      }}
                      onMouseOver={moveNoButton}
                    >
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
