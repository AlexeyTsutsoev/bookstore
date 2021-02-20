import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const RegButton = styled.button`
  width: 40%;
  height: 40px;
  padding: 12px 0;

  cursor: pointer;

  font-weight: 700;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;

  background-color: #34547a;
  border: 0;
  border-radius: 0;

  line-height: 1.1;

  ${(props) =>
    props.disabled
      ? `
          opacity: 0.5;
        `
      : `
          opacity: 1;
        `};
`;

const Title = styled.div`
  color: rgba(0, 0, 0, 0.3);
`;

const RegContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 30%;
  height: 30%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  background-color: #fff;
  border: 1px solid #e7e7e7;

  margin-bottom: 15px;

  width: 60%;
  height: 40px;
  padding: 12px;
  line-height: 1.1;

  font-size: 15px;
  font-weight: 300;
  font-style: italic;
  color: #333;
`;

const Registration = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setpasswordDirty] = useState(false);
  const [nameError, setNameError] = useState("Поле Имя не может быть пустым");
  const [numberError, setNumberError] = useState(
    "Поле номер телефона не может быть пустым"
  );
  const [emailError, setEmailError] = useState(
    "Поле email не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "Поле пароля не может быть пустым"
  );
  const [form, setForm] = useState(false);

  useEffect(() => {
    if (nameError || numberError || emailError || passwordError) {
      setForm(false);
    } else {
      setForm(true);
    }
  }, [emailError, passwordError, nameError, numberError]);

  const blurHandler = (event) => {
    switch (event.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setpasswordDirty(true);
        break;
      case "name":
        setNameDirty(true);
        break;
      case "number":
        setNumberDirty(true);
        break;
    }
  };

  const nameHandler = (event) => {
    setName(event.target.value);
    if (event.target.value) {
      setNameError("");
    }
  };

  const numberHandler = (event) => {
    setNumber(event.target.value);
    if (event.target.value) {
      setNumberError("");
    }
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(event.target.value.toString().toLocaleLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);

    if (event.target.value.length < 8) {
      setPasswordError("Слишком короткий пароль");
      if (!event.target.value) {
        setPasswordError("Поле пароля не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const submitHandler = (event) => {
    console.log(`имя ${name}`);
    console.log(`номер ${number}`);
    console.log(`email ${email}`);
    console.log(`password ${password}`);
  };

  return (
    <RegContainer>
      <Form onSubmit={(event) => submitHandler(event)}>
        <FormContainer>
          {nameDirty && <div style={{ color: "red" }}>{nameError}</div>}
          <Input
            onChange={(event) => nameHandler(event)}
            value={name}
            onBlur={(event) => blurHandler(event)}
            name='name'
            placeholder='Ваше Имя...'
            type='text'
          />
          {numberDirty && <div style={{ color: "red" }}>{numberError}</div>}
          <Input
            onChange={(event) => numberHandler(event)}
            value={number}
            onBlur={(event) => blurHandler(event)}
            name='number'
            placeholder='Ваш номер телефона...'
            type='text'
          />
          {emailDirty && <div style={{ color: "red" }}>{emailError}</div>}
          <Input
            onChange={(event) => emailHandler(event)}
            value={email}
            onBlur={(event) => blurHandler(event)}
            name='email'
            placeholder='Ваш email...'
            type='text'
          />
          {passwordDirty && <div style={{ color: "red" }}>{passwordError}</div>}
          <Input
            onChange={(event) => {
              passwordHandler(event);
            }}
            value={password}
            onBlur={(event) => blurHandler(event)}
            name='password'
            type='password'
          />
          <RegButton disabled={!form} type='submit'>
            Зарегестрироваться
          </RegButton>
        </FormContainer>
      </Form>
      <div>
        Есть аккаунт? <NavLink to='/login'>Авторизуйтесь</NavLink>
      </div>
      <NavLink to='/'>Возврат на главную страницу</NavLink>
    </RegContainer>
  );
};

export default Registration;
