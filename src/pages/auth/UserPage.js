import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "../../store/actionCreators/userAction";
import { Button } from "@material-ui/core";
import { uploadAvatar } from "../../api/user";

const PageContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const PageContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
`;

const Photo = styled.div`
  margin-right: 20px;
  display: grid;
  img {
    width: 100%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoItem = styled.div`
  border-bottom: 1px solid black;
`;

const UploadPhoto = styled.form`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UserPage = () => {
  const [avatar, setAvatar] = useState("");
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const outHandler = () => {
    dispatch(signOut());
  };

  const changeHandler = (event) => {
    setAvatar(event.target.files[0]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("avatar", avatar);
    console.log(avatar);
    console.log(data);
    uploadAvatar(data);
  };

  return (
    <PageContainer>
      <PageContent>
        <Photo>
          {user.avatar ? (
            <img src={user.avatar} />
          ) : (
            <img src={"https://place-hold.it/200x200"} />
          )}
          <UploadPhoto onSubmit={submitHandler}>
            <input onChange={changeHandler} type='file' name='avatar' />
            <Button fullWidth type='submit' color='primary' variant='contained'>
              Отправить фото
            </Button>
          </UploadPhoto>
        </Photo>
        <UserInfo>
          <InfoItem>id: {user.id} </InfoItem>
          <InfoItem>name: {user.name} </InfoItem>
          <InfoItem>email: {user.email} </InfoItem>
          <NavLink to='/favor'>Ваши избранные книги </NavLink>
          {user.role === "admin" ? (
            <NavLink to='/createBook'>Добавить книгу в магазин</NavLink>
          ) : (
            ""
          )}
          <button onClick={outHandler}>Выход</button>
        </UserInfo>
      </PageContent>
      <div>
        <NavLink to='/'>на главную </NavLink>
      </div>
    </PageContainer>
  );
};

export default UserPage;
