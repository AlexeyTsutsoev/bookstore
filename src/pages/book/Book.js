import { Button, TextareaAutosize } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getOneBookFromDb } from "../../api/books";
import Header from "../../components/Header";
import { addBook } from "../../store/actionCreators/cartAction";
import { createComment, getCommentsFromDb } from "../../api/comments";
import Comments from "../../components/Comments";
import BookPageItem from "../../components/BookPageItem";

const Buttons = styled.div`
  width: 100%;
  margin: 20px;
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
  const [isFavor, setFavor] = useState(false);
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
    setBook(book.data);
  };

  const getCommentsAPI = async () => {
    const comments = await getCommentsFromDb(bookId);
    setComments(comments.data);
  };

  useEffect(() => {
    getBookAPI();
    getCommentsAPI();
  }, [comment]);

  const dispatch = useDispatch();

  const addtoCart = (book) => {
    dispatch(addBook(book));
  };

  const addToFav = (book) => {
    if (!isFavor) {
      console.log("test");
    }
  };

  const renderFavor = () => {
    return isFavor ? (
      <FavoriteIcon style={{ cursor: "pointer" }} />
    ) : (
      <FavoriteBorderIcon
        style={{ cursor: "pointer" }}
        onClick={() => addToFav(book)}
      />
    );
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await createComment(bookId, currentUser, comment);
    setComment("");
  };

  return (
    <div className='container'>
      <Header />
      <BookPageItem book={book} />
      {isAuth && (
        <Buttons>
          <Button
            variant='contained'
            color='primary'
            onClick={() => addtoCart(book)}
          >
            Добавить в корзину
          </Button>
          {renderFavor()}
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
        {comments.length ? <Comments comments={comments} /> : emptyComments}
      </CommentBlock>
    </div>
  );
};

export default Book;
