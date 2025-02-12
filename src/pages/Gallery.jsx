import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Refined animation variants with smoother transitions
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const loveVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { 
    scale: 2,
    opacity: [0, 1, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.5, 1],
      ease: "easeOut"
    }
  }
};

const photoItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const PasswordPrompt = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [animateLove, setAnimateLove] = useState(false);

  const handleUnlock = () => {
    if (password === 'alma') {
      setAnimateLove(true);
      setTimeout(() => {
        onUnlock();
      }, 600); // Increased to match love animation duration
    } else {
      alert('Incorrect password! Please try again.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUnlock();
    }
  };

  return (
    <motion.div 
      className="password-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ position: 'relative' }}
    >
      <div className="floating-hearts">
        <span className="heart">❤️</span>
        <span className="heart">💖</span>
        <span className="heart">💘</span>
      </div>
      <div className="password-box">
        <div className="lock-wrapper">
          <img
            src="Heart lock.png"
            alt="Lock Icon"
            className="lock-icon"
          />
        </div>
        <div className="teddy-wrapper">
          <img
            style={{ borderRadius: "50%" }}
            src="https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif"
            alt="Animated Teddy Bear"
            className="teddy-animation"
          />
        </div>
        <h2 className="password-heading">Unlock Our Gallery with Love</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter the secret love code"
          className="password-input"
        />
        <button
          onClick={handleUnlock}
          className="unlock-button"
          disabled={!password.trim()}
        >
          Unlock with a Heart Kiss!
        </button>
      </div>
      {animateLove && (
        <motion.div
          className="love-animation"
          variants={loveVariants}
          initial="hidden"
          animate="visible"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '4rem',
            pointerEvents: 'none'
          }}
        >
          ❤️
        </motion.div>
      )}
    </motion.div>
  );
};

const PhotoGrid = ({ images, onImageClick }) => {
  return (
    <motion.div 
      className="photo-grid"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {images.map((src, index) => (
        <motion.div
          className="photo-item"
          key={index}
          onClick={() => onImageClick(src)}
          role="button"
          tabIndex={0}
          variants={photoItemVariants}
          style={{ overflow: 'hidden' }}
        >
          <img
            src={'/valentine/' + src}
            alt={`Photo ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const Modal = ({ src, onClose }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleClickOutside = (e) => {
    if (e.target.className.includes("modal")) {
      onClose();
    }
  };

  return (
    <motion.div 
      className="modal" 
      onClick={handleClickOutside} 
      role="dialog" 
      aria-modal="true"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <span
        className="modal-close"
        title="Close"
        onClick={onClose}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onClose();
        }}
      >
        &times;
      </span>
      <motion.img 
        className="modal-content" 
        src={src} 
        alt="Enlarged Photo"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

function Gallery() {
  const images = [
    "images/image 1.jpeg",
    "images/image 2.jpeg",
    "images/image 3.jpeg",
    "images/image 4.jpeg",
    "images/image 5.jpeg",
    "images/image 6.jpeg",
    "images/image 7.jpeg",
    "images/image 8.jpeg",
    "images/image 9.jpeg",
  ];

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [modalSrc, setModalSrc] = useState(null);

  const openModal = (src) => setModalSrc(src);
  const closeModal = () => setModalSrc(null);

  return (
    <div className="container gallery-container">
      <h1 className="title gallery-title">Our Beautiful Moments</h1>
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <PasswordPrompt key="password" onUnlock={() => setIsUnlocked(true)} />
        ) : (
          <PhotoGrid key="gallery" images={images} onImageClick={openModal} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {modalSrc && <Modal src={modalSrc} onClose={closeModal} key="modal" />}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;