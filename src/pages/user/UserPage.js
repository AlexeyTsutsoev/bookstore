import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actionCreators/userAction";
import { Button } from "@material-ui/core";
import { uploadAvatar } from "../../api/user";
import {
  InfoItem,
  PageContainer,
  PageContent,
  Photo,
  UploadPhoto,
  UserInfo,
} from "./styles/UserPage.style";

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

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = new FormData();
    //await?
    await data.append("avatar", avatar);
    uploadAvatar(data, user).then(() => {
      setAvatar("");
    });
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
