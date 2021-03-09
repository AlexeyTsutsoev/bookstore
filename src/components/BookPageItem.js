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
  );
};

export default BookPageItem;
