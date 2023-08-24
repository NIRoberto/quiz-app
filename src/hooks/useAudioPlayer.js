import React, { useState, useEffect } from 'react';

export const useAudioPlayer = () => {
  const [audio, setAudio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (audioUrl) => {
    if (isPlaying) {
      audio.pause();
    }

    const newAudio = new Audio(audioUrl);
    setAudio(newAudio);
    newAudio.play();
    setIsPlaying(true);
  };

  const stopAudio = () => {
    audio.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      audio.addEventListener('ended', stopAudio);
      return () => {
        audio.removeEventListener('ended', stopAudio);
      };
    }
  }, [isPlaying, audio]);

  return { playAudio, stopAudio, isPlaying };
};
