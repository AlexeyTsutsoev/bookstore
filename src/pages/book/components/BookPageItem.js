import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: rows;
`;

const Item = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 30%;
  max-height: 50%;

  img {
    width: 300px;
    height: 500px;
  }
`;

const Info = styled.div`
  border-bottom: 1px solid gray;
  font-size: 20px;
  height: auto;
`;

const Title = styled.p`
  margin: 0;
  color: gray;
  font-size: 15px;
  opacity: 0.5;
`;

const BookPageItem = ({ book }) => {
  return (
    <Section>
      <Item>
        <img src={book.cover ? book.cover : "https://place-hold.it/300x500"} />
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
          <Title>Издательство:</Title>
          {book.publisher.name}
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
          <Title>Описание:</Title>
          {book.discription}
        </Info>
        <Info>
          <Title>Цена: </Title>
          {book.price}&#8381;
        </Info>
      </Item>
    </Section>
  );
};

export default BookPageItem;
