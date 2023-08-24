import React from 'react';
import { useEffect } from 'react';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';

function IncorrectAnswer({ correctAnswer }) {
  const { playAudio, isPlaying } = useAudioPlayer();
  useEffect(() => {
    if (!isPlaying) {
      playAudio('/oohh.mp3');
    }
  }, []);
  return (
    <div>
      Incorrect. The correct answer is {correctAnswer}
      <img src="/oohno.gif" />
    </div>
  );
}

export default IncorrectAnswer;
