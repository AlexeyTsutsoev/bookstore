import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "../../store/actionCreators/userAction";

const PageContainer = styled.main`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
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

  img {
    width: 100%;
    height: 100%;
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

const UserPage = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const outHandler = () => {
    dispatch(signOut());
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
        </Photo>
        <UserInfo>
          <InfoItem>id: {user.id} </InfoItem>
          <InfoItem>name: {user.name} </InfoItem>
          <InfoItem>email: {user.email} </InfoItem>
          <NavLink to='/favor'>Ваши избранные книги </NavLink>
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
