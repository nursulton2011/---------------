import React from "react";
import { Button } from "../components";

export const StepTwo = () => {

  const answers = [
    {
      id: '8f5ced48-da99-477f-aa62-889eca67ce57',
      answer: 'Ваш ответ'
    },
    {
      id: '4639c91d-0dc1-4b31-a7a4-b5b66d7584d3',
      answer: 'Ваш ответ'
    },
    {
      id: 'bdc14d39-df17-402c-a332-5037ee1c7e35',
      answer: 'Ваш ответ'
    },
    {
      id: '4c40902d-bc82-479c-a690-0386c8811ad8',
      answer: 'Ваш ответ'
    }
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <ul className="variants">
            {/* TODO: Вынести li в отдельный компонент */}
              {answers.map(({ id, answer }) => (
                <li className="variant-wrapper" key={id}>
                  <input required type="radio" name={`variant-${id}`} id={`variant-${id}`} />
                  <label htmlFor={`variant-${id}`}>{answer}</label>
                </li>
            ))}
            {/* Тут есть на что обратить внимание */}
            {/* {answers.map(({ id, answer}) => (
              <Option id={id} answer={answer} />  
            ))} */}
            </ul>
            <Button text="Далее" disabled id="next-btn"/>
          </div>
        </div>
      </div>
    </div>
  );
};
