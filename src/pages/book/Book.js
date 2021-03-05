import { Button, TextareaAutosize, TextField } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getOneBookFromDb } from "../../api/books";
import Header from "../../components/Header";
import { addBook } from "../../store/actionCreators/cartAction";
import { addToFavorites } from "../../store/actionCreators/favoritesAction";

const Section = styled.section`
  display: flex;
  flex-direction: rows;
`;

const Item = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.div`
  border-bottom: 1px solid gray;
  font-size: 20px;
`;

const Title = styled.p`
  margin: 0;
  color: gray;
  font-size: 15px;
  opacity: 0.5;
`;

const Buttons = styled.div`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CommentBlock = styled.section`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Book = (props) => {
  const bookId = props.match.params.id;
  const isAuth = useSelector((state) => state.user.isAuth);
  const [isFavor, setFavor] = useState(false);
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

  useEffect(() => {
    getBookAPI();
  }, []);
  const dispatch = useDispatch();

  const addtoCart = (book) => {
    dispatch(addBook(book));
  };

  const addToFav = (book) => {
    if (!isFavor) {
      dispatch(addToFavorites(book));
      setFavor(!isFavor);
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

  return (
    <div className='container'>
      <Header />
      <Section>
        <Item>
          <img
            src={book.cover ? book.cover : "https://place-hold.it/300x500"}
          />
        </Item>
        <Item>
          <Info>
            <Title> Наименование: </Title>
            {book.name}
          </Info>
          <Info>
            <Title>Автор: </Title>
            {book.author.name}
          </Info>
          <Info>
            <Title>Издательство:</Title> {book.publisher.name}
          </Info>
          <Info>
            <Title>Категории:</Title>
            {book.categories.length
              ? book.categories.map((i) => {
                  return <div key={i.id}>{i.name}</div>;
                })
              : "Отсутсвуют"}
          </Info>
          <Info>
            <Title>Цена: </Title>
            {book.price}&#8381;
          </Info>
        </Item>
      </Section>
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
      <Form>
        <TextareaAutosize
          style={{ width: "60%", margin: "20px" }}
          rowsMax={4}
          rowsMin={3}
          placeholder='Ваш комментарий'
        />
        <Button type='onSubmit' variant='contained' color='primary'>
          Отправить
        </Button>
      </Form>

      <CommentBlock>Тут будут комментарии.....</CommentBlock>
    </div>
  );
};

export default Book;
