import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function LoveLetter() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Start animations after a short delay
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Variants for each paragraph to create a staggered fade-in & slide-up effect
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.8,
      },
    }),
  };

  const paragraphs = [
    "Every moment with you feels like a dream come true. Your presence in my life has transformed it into a tapestry of joy, laughter, and endless possibilities.",
    "Your smile lights up my world in ways I never thought possible. It’s not just a facial expression; it’s a beacon of happiness that guides me through even the darkest days. You have the power to turn ordinary moments into extraordinary ones, and I am constantly amazed by the magic you bring into my life.",
    "You make every day feel like Valentine's Day. Your love, kindness, and unwavering support have become the foundation upon which I build my life. Being with you is a privilege, and I cherish every second we spend together.",
    "As I write this letter, my heart is overflowing with gratitude and love. I want to promise you that I will always be there for you, just as you are for me. Together, we can create a future filled with love, laughter, and endless adventures.",
    "Would you be my Valentine, my partner, and my best friend for life?"
  ];

  return (
    <>
      <div className="letter-container">
        <div className="envelope">
          <motion.h1
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: showText ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            To My Dearest Alma
          </motion.h1>
          <div className="letter">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                custom={index}
                variants={paragraphVariants}
                initial="hidden"
                animate={showText ? 'visible' : 'hidden'}
              >
                {text}
              </motion.p>
            ))}
            <motion.div
              className="signature"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: showText ? 1 : 0, x: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <p>Forever Yours,</p>
              <p>Your Oussama 💝</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`

        
        .envelope {

          background: url('https://www.template.net/editable/128196/love-letter-background') no-repeat center center;
          background-size: cover;
          border: 1px solid #e0c097;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          width: 100%;
        }
        
        .title {
          font-family: 'Dancing Script', cursive;
          font-size: 48px;
          color: #d32f2f;
          text-align: center;
          margin-bottom: 20px;
        }
        
        .letter {
          font-family: 'Dancing Script', cursive;
          font-size: 24px;
          line-height: 1.6;
          color: #333;
        }
        
        .signature {
          margin-top: 20px;
          text-align: right;
          font-style: italic;
        }
      `}</style>
    </>
  );
}

export default LoveLetter;
