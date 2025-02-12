import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

// 1. Hook to track window size dynamically
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    // Clean up on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function Proposal() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [proposalAccepted, setProposalAccepted] = useState(false);
  const [yesButtonText, setYesButtonText] = useState("Yes, I will! 💖");

  // 2. Determine if on mobile based on width (adjust the breakpoint to fit your needs)
  const width = useWindowWidth();
  const isMobile = width < 768; // Mobile if width < 768

  // 3. Style objects that adapt to screen size
  // Outer page
  const proposalPageStyle = {
    margin: '0 auto',
    padding: '1rem',
    maxWidth: isMobile ? '100%' : '80%', // At mobile widths, fill the screen
    boxSizing: 'border-box',
  };

  // Container
  const proposalContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '60vh',
    justifyContent: 'center',
  };

  // Slides wrapper
  const proposalSlidesStyle = {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  };

  // Shared slide styling
  const slideStyle = {
    marginBottom: '2rem',
  };

  // For the final (slide 4) button container
  const proposalButtonsStyle = {
    position: 'relative',
    height: '200px',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
  };

  // Buttons
  const yesButtonStyle = {
    fontSize: isMobile ? '1.4em' : '1.8em',
    padding: isMobile ? '10px 30px' : '15px 50px',
    background: 'linear-gradient(45deg, #ff3366, #ff8fab)',
    color: 'white',
    border: 'none',
    height: isMobile ? '80px' : '100px',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 5px 15px rgba(255, 91, 135, 0.3)',
    flex: '0 0 auto',
  };

  const noButtonStyle = {
    fontSize: isMobile ? '1.4em' : '1.8em',
    padding: isMobile ? '10px 30px' : '15px 50px',
    height: isMobile ? '80px' : '100px',
    borderRadius: '30px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#eee',
    transition: 'all 0.3s ease',
    flex: '0 0 auto',
  };

  // 4. Handlers
  const nextSlide = () => {
    if (currentSlide < 4) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const acceptProposal = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      setProposalAccepted(true);
    }, 1000);
  };

  const moveNoButton = (e) => {
    const container = e.currentTarget.parentElement;
    if (!container) return;

    container.style.position = 'relative';
    const containerRect = container.getBoundingClientRect();
    const buttonRect = e.currentTarget.getBoundingClientRect();

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

  // 5. Render
  return (
    <div className="proposal-page" style={proposalPageStyle}>
      <div className="proposal-container" style={proposalContainerStyle}>
        <div className="proposal-slides" style={proposalSlidesStyle}>
          {/* Slide 1 */}
          {currentSlide === 1 && (
            <div className="slide active" id="slide1" style={slideStyle}>
              <h2>Latifa, Since the day I met you at the seven</h2>
              <button onClick={nextSlide} className="next-button">
                Continue ❤️
              </button>
            </div>
          )}
          {/* Slide 2 */}
          {currentSlide === 2 && (
            <div className="slide active" id="slide2" style={slideStyle}>
              <h2>Every moment has been magical...</h2>
              <button onClick={nextSlide} className="next-button">
                Continue ❤️
              </button>
            </div>
          )}
          {/* Slide 3 */}
          {currentSlide === 3 && (
            <div className="slide active" id="slide3" style={slideStyle}>
              <h2>And I knew you were the one...</h2>
              <button onClick={nextSlide} className="next-button">
                Continue ❤️
              </button>
            </div>
          )}
          {/* Slide 4 (Proposal) */}
          {currentSlide === 4 && (
            <div className="slide active" id="slide4" style={slideStyle}>
              {!proposalAccepted ? (
                <>
                  <h1 className="proposal-title">
                    Will You Be My Valentine?
                  </h1>
                  <div
                    className="proposal-buttons"
                    style={proposalButtonsStyle}
                  >
                    <button
                      className="yes"
                      style={yesButtonStyle}
                      onMouseEnter={() => setYesButtonText("Yes, please! ❤")}
                      onMouseLeave={() => setYesButtonText("Yes, I will! 💖")}
                      onClick={acceptProposal}
                    >
                      {yesButtonText}
                    </button>
                    <button
                      className="no-button"
                      style={noButtonStyle}
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
