import { TextField, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const RegContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 40%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
`;

const delimeter = {
  marginBottom: "20px",
  width: "80%",
};

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
        <div style={delimeter}>
          <TextField
            fullWidth={true}
            error={nameDirty}
            type='text'
            name='name'
            onChange={(event) => nameHandler(event)}
            value={name}
            onBlur={(event) => blurHandler(event)}
            label={nameDirty ? nameError : "Вашe имя..."}
            variant='outlined'
          />
        </div>
        <div style={delimeter}>
          <TextField
            fullWidth={true}
            error={numberDirty}
            type='text'
            name='number'
            onChange={(event) => numberHandler(event)}
            value={number}
            onBlur={(event) => blurHandler(event)}
            label={numberDirty ? numberError : "Ваш номер..."}
            variant='outlined'
          />
        </div>
        <div style={delimeter}>
          <TextField
            fullWidth={true}
            error={emailDirty}
            type='text'
            name='email'
            onChange={(event) => emailHandler(event)}
            value={email}
            onBlur={(event) => blurHandler(event)}
            label={emailDirty ? emailError : "Ваш email..."}
            variant='outlined'
          />
        </div>
        <div style={delimeter}>
          <TextField
            fullWidth={true}
            error={passwordDirty}
            type='password'
            name='password'
            onChange={(event) => passwordHandler(event)}
            value={password}
            onBlur={(event) => blurHandler(event)}
            label={passwordDirty ? passwordError : "Ваш пароль..."}
            variant='outlined'
          />
        </div>
        <div style={delimeter}>
          <Button
            fullWidth={true}
            disabled={!form}
            type='submit'
            variant='contained'
            color='primary'
          >
            Зарегестрироваться
          </Button>
        </div>
      </Form>
      <div>
        Есть аккаунт? <NavLink to='/login'>Авторизуйтесь</NavLink>
      </div>
      <NavLink to='/'>Возврат на главную страницу</NavLink>
    </RegContainer>
  );
};

export default Registration;
