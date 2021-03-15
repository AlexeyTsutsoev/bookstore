import { Button, TextareaAutosize } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getOneBookFromDb } from "../../api/books";
import {
  createComment,
  deleteComment,
  getCommentsFromDb,
} from "../../api/comments";
import BookPageItem from "./components/BookPageItem";
import AddToCartBtn from "../../components/AddtoCartBtn";
import CommentItem from "./components/CommentItem";

const Buttons = styled.div`
  width: 100%;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 80%;
`;

const CommentBlock = styled.section`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Book = (props) => {
  const emptyComments = "Тут будут комментарии...";
  const bookId = props.match.params.id;
  const isAuth = useSelector((state) => state.user.isAuth);
  const currentUser = useSelector((state) => state.user.user.id);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  //plug for test
  const [book, setBook] = useState({
    id: 1,
    name: "Властелин Колец",
    price: 3000,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover:
      "https://img4.labirint.ru/rc/f83cb08bb81fd35fae11b71c0dd1bd1c/220x340/books4/35638/cover.jpg?1280394613",
    author: {
      id: 1,
      name: "Джон Р.Р. Толкин",
    },
    publisher: {
      id: 1,
      name: "ACT",
    },
    categories: [
      {
        id: 1,
        name: "Бестселлеры",
      },
      {
        id: 3,
        name: "Художественная литература",
      },
    ],
  });

  const getBookAPI = async () => {
    const book = await getOneBookFromDb(bookId);
    setBook(book);
  };

  const getCommentsAPI = async () => {
    const comments = await getCommentsFromDb(bookId);
    setComments(comments);
  };

  useEffect(() => {
    getBookAPI();
    getCommentsAPI();
  }, [comment]);

  const submitHandler = async (event) => {
    event.preventDefault();
    await createComment(bookId, currentUser, comment);
    setComment("");
  };
  const deleteHandler = (id) => {
    deleteComment(id);
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className='container'>
      <BookPageItem book={book} />
      {isAuth && (
        <Buttons>
          <AddToCartBtn book={book} />
        </Buttons>
      )}
      <CommentBlock>
        {isAuth && (
          <Form onSubmit={submitHandler}>
            <TextareaAutosize
              onChange={(event) => setComment(event.target.value)}
              style={{ margin: "20px", width: "100%" }}
              rowsMax={4}
              rowsMin={3}
              placeholder='Ваш комментарий'
              value={comment}
            />
            <Button type='submit' variant='contained' color='primary'>
              Отправить
            </Button>
          </Form>
        )}
        {comments.length
          ? comments.map((comment) => {
              return (
                <CommentItem
                  onDelete={deleteHandler}
                  key={comment.id}
                  comment={comment}
                />
              );
            })
          : emptyComments}
      </CommentBlock>
    </div>
  );
};

export default Book;
