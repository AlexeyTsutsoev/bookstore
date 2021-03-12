import React, { useState } from "react";
import { Button, TextareaAutosize, TextField } from "@material-ui/core";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { deleteComment, updateComment } from "../api/comments";

const CommentContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  margin: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: start;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
`;

const AvatarContainer = styled.div`
  max-width: 100px;
  max-height: 100px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CommentItem = ({ comment }) => {
  const [value, setValue] = useState(comment.text);
  const [isInput, setInput] = useState(false);
  const currentuser = useSelector((state) => state.user.user.id);
  const commentUser = comment.user.id;
  const isAuthor = currentuser === commentUser;

  const onDelete = () => {
    deleteComment(comment.id);
  };

  const onUpdate = () => {
    updateComment(comment.id, value);
    setInput(!isInput);
  };

  const renderText = () => {
    if (isInput) {
      return (
        <form onSubmit={onUpdate}>
          <TextareaAutosize
            style={{ width: "100%" }}
            rowsMax={4}
            rowsMin={3}
            placeholder='Ваш комментарий'
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
          <Button type='submit' variant='contained' color='primary'>
            Подттвердить
          </Button>
          <Button
            onClick={() => setInput(!isInput)}
            variant='contained'
            color='secondary'
          >
            Отмена
          </Button>
        </form>
      );
    }
    return (
      <Text>
        <div> {comment.user.name}: </div>
        <div> {value} </div>
      </Text>
    );
  };

  return (
    <CommentContainer>
      <Content>
        <AvatarContainer>
          <Avatar src={comment.user.avatar} />
        </AvatarContainer>
        {renderText()}
      </Content>
      {isAuthor && !isInput && (
        <BtnContainer>
          <Button
            onClick={() => setInput(!isInput)}
            variant='contained'
            color='primary'
          >
            Изменить
          </Button>
          <Button onClick={onDelete} variant='contained' color='secondary'>
            Удалить
          </Button>
        </BtnContainer>
      )}
    </CommentContainer>
  );
};

export default CommentItem;
