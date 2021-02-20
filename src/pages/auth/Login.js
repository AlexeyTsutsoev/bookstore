import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 25%;
  height: 25%;
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

const LoginButton = styled.button`
  width: 40%;
  height: 40px;
  padding: 12px 30px;

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setpasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "Поле email не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "Поле пароля не может быть пустым"
  );
  const [form, setForm] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setForm(false);
    } else {
      setForm(true);
    }
  }, [emailError, passwordError]);

  const submitHandler = (event) => {
    console.log(`email ${email}`);
    console.log(`password ${password}`);
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

  const blurHandler = (event) => {
    switch (event.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setpasswordDirty(true);
        break;
    }
  };

  return (
    <LoginContainer>
      <Form onSubmit={(event) => submitHandler(event)}>
        <FormContainer>
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
          <LoginButton disabled={!form} type='submit'>
            Войти
          </LoginButton>
        </FormContainer>
      </Form>
      <div>
        Нет аккаунта? <NavLink to='/registration'>Зарегестриуйтесь</NavLink>
      </div>
      <NavLink to='/'>Возврат на главную страницу</NavLink>
    </LoginContainer>
  );
};

export default Login;
