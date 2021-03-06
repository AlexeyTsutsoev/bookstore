import { TextField, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../../store/actionCreators/userAction";
import { Form, LoginContainer } from "./styles/Login.style";

const delimeter = {
  marginBottom: "20px",
  width: "80%",
};

const Login = (props) => {
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

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(email, password))
      .then(() => props.history.push("/"))
      .catch(() => {
        alert("whats do wrong");
        setPassword("");
      });
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
            Войти
          </Button>
        </div>
      </Form>
      <div>
        Нет аккаунта? <NavLink to='/registration'>Зарегестриуйтесь</NavLink>
      </div>
      <NavLink to='/'>Возврат на главную страницу</NavLink>
    </LoginContainer>
  );
};

export default Login;
