import React from "react";

import { Button, Input } from "../components";

export const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <h1>Добро пожаловать в квиз от лучшего учебного центра</h1>
          <form className="welcome__form">
            <Input
              label="Имя"
              id="username"
              placeholder="Иван Иванов"
              errorMessage="Поле имени не может быть пустым" />

            <Input
              label="Номер телефона"
              id="phone"
              type="tel"
              placeholder="+998 99 888 77 55"
              errorMessage="Введите номер в правильном формате" 
              pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              />
            <Button text="Далее" type="submit" id="next-btn" disabled />
          </form>
        </div>
      </div>
    </div>
  );
};
