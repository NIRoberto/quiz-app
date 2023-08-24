import React from 'react';
import { useEffect } from 'react';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';

function CorrectAnswer() {
  const { playAudio, isPlaying } = useAudioPlayer();
  useEffect(() => {
    if (!isPlaying) {
      playAudio('/correct.mp3');
    }
  }, []);
  return (
    <div>
      Correct! <img src="/correct.gif" />
    </div>
  );
}

export default CorrectAnswer;
