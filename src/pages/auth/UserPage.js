import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actionCreators/userAction";

const UserPage = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const outHandler = () => {
    dispatch(signOut());
  };
  return (
    <div>
      <div>id: {user.id} </div>
      <div>name: {user.name} </div>
      <div>email: {user.email} </div>
      <div>avatar: {user.avatar ? <img src={user.avatar} /> : "no photo"} </div>
      <div>
        <NavLink to='/'>на главную </NavLink>
      </div>
      <button onClick={outHandler}>Выход</button>
    </div>
  );
};

export default UserPage;
