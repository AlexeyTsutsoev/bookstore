import React, { useState } from "react";
import { Button, TextareaAutosize } from "@material-ui/core";
import { useSelector } from "react-redux";
import { updateComment } from "../../../api/comments";
import {
  Avatar,
  AvatarContainer,
  BtnContainer,
  CommentContainer,
  Content,
  Text,
} from "../styles/CommentItem.style";

const CommentItem = ({ onDelete, comment }) => {
  const [value, setValue] = useState(comment.text);
  const [isInput, setInput] = useState(false);
  const currentuser = useSelector((state) => state.user.user.id);
  const commentUser = comment.user.id;
  const isAuthor = currentuser === commentUser;

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
          <Button
            onClick={() => onDelete(comment.id)}
            variant='contained'
            color='secondary'
          >
            Удалить
          </Button>
        </BtnContainer>
      )}
    </CommentContainer>
  );
};

export default CommentItem;
