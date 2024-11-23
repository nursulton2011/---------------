import { useState, useEffect } from "react";

import { Welcome, StepOne, StepTwo, StepThree, StepFour, Thanks } from './pages';
import { Progress } from './components';
import "./App.css";
import "./styles/main.css";

export const App = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");

      const currentTime = `${hours}:${minutes}:${seconds}`;
      setTime(currentTime); // Обновляем состояние
      console.log("Текущее время:", currentTime); // Выводим актуальное время
    }, 1000);

    return () => {
      clearInterval(intervalId); // Очищаем интервал при размонтировании
    };
  }, []);

  return (
    <div className="App">
      <div className="time">
        {time || "Загрузка времени..."}
      </div>
    </div>
  );
};
