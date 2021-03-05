import { TextField, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../../api/user";

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
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setpasswordDirty] = useState(false);
  const [nameError, setNameError] = useState("Поле Имя не может быть пустым");
  const [phoneError, setPhoneError] = useState(
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
    if (nameError || phoneError || emailError || passwordError) {
      setForm(false);
    } else {
      setForm(true);
    }
  }, [emailError, passwordError, nameError, phoneError]);

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
        setPhoneDirty(true);
        break;
    }
  };

  const nameHandler = (event) => {
    setName(event.target.value);
    if (event.target.value) {
      setNameError("");
    }
  };

  const phoneHandler = (event) => {
    setPhone(event.target.value);
    if (event.target.value) {
      setPhoneError("");
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
    event.preventDefault();
    try {
      signUp(name, email, password, phone)
        .then(() => alert("Пользователь зарегестрирован"))
        .catch(() => alert("Ошибка регистрации"));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <RegContainer>
      <Form onSubmit={(event) => submitHandler(event)}>
        <div style={delimeter}>
          <TextField
            fullWidth={true}
            error={nameDirty && Boolean(nameError)}
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
            error={phoneDirty && Boolean(phoneError)}
            type='text'
            name='number'
            onChange={(event) => phoneHandler(event)}
            value={phone}
            onBlur={(event) => blurHandler(event)}
            label={phoneDirty ? phoneError : "Ваш номер..."}
            variant='outlined'
          />
        </div>
        <div style={delimeter}>
          <TextField
            fullWidth={true}
            error={emailDirty && Boolean(emailError)}
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
            error={passwordDirty && Boolean(passwordError)}
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
