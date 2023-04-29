import React, { useState, useEffect } from 'react';
import moment from 'moment';

const QuizTimer = ({ duration, onTimeUp }) => {
    
    const [timerValue, setTimerValue] = useState(
      parseInt(localStorage.getItem('timerValue')) || duration
    );
    const [timer, setTimer] = useState(null);
  
    useEffect(() => {
      localStorage.setItem('timerValue', timerValue);
    }, [timerValue]);
  
    useEffect(() => {
      setTimer(setInterval(() => {
        handleTimerTick();
      }, 1000));

      return () => clearInterval(timer);
      onTimeUp();

    }, []);
  
    const handleTimerTick = () => {
      setTimerValue(prevValue => {
        if (prevValue === 0) {
          clearInterval(timer);
          onTimeUp();
          // TODO: Handle end of quiz logic
          return prevValue;
        }
        return prevValue - 1;
      });
    };
    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return (
          (hours < 10 ? "0" + hours : hours) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          ":" +
          (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds)
        );
      }
      const formattedTime=formatTime(timerValue)
    return (
      <div>
       
        <p>Timer: {formattedTime}</p>
      </div>
    );

};

export default QuizTimer;
