import React, { useState, useEffect } from 'react';

const words = ["Java!", "Python!", "Web Development!", "C++!", "JavaScript!"];

function TypingEffect() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timer;
    
    if (isDeleting) {
      // Delete characters
      timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }, 100);
    } else {
      // Add characters
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText === currentWord) {
          setIsDeleting(true);
        }
      }, 150);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex]);

  return <span>{displayText}</span>;
}

export default TypingEffect;
