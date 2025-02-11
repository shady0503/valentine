// src/components/FloatingHearts.js
import { useEffect } from 'react';

function FloatingHearts() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      const symbols = ['❤', '💖', '💝', '💕'];
      heart.innerText = symbols[Math.floor(Math.random() * symbols.length)];
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.fontSize = `${Math.random() * 20 + 10}px`;
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
      document.body.appendChild(heart);
      heart.addEventListener('animationend', () => heart.remove());
    };

    const heartInterval = setInterval(createHeart, 300);
    return () => clearInterval(heartInterval);
  }, []);

  return null; // This component does not render any visible JSX.
}

export default FloatingHearts;
