import { Button, CircularProgress, TextareaAutosize } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOneBookFromDb } from "../../api/books";
import {
  createComment,
  deleteComment,
  getCommentsFromDb,
} from "../../api/comments";
import BookPageItem from "./components/BookPageItem";
import AddToCartBtn from "../../components/AddtoCartBtn";
import CommentItem from "./components/CommentItem";
import { Buttons, CommentBlock } from "./styles/Book.style";
import { Form } from "../../components/styles/Header.style";

const Book = (props) => {
  const emptyComments = "Тут будут комментарии...";
  const bookId = props.match.params.id;
  const isAuth = useSelector((state) => state.user.isAuth);
  const currentUser = useSelector((state) => state.user.user.id);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [book, setBook] = useState(null);

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
    <div>
      {book ? <BookPageItem book={book} /> : <CircularProgress />}
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
